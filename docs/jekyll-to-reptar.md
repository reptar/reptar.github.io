---
title: Jekyll to Reptar
---

Looking to convert your Jekyll blog to use Reptar? Here's the place.

You can look at an example repo [jekyll-to-reptar](https://github.com/reptar/jekyll-to-reptar) which shows commit-by-commit how to convert a new Jekyll site to a reptar site.

Or if you'd rather just understand the steps involved this guide will show you what to do.

## 1. Convert your `_config.yml` file to be compatible with Reptar.

There's a bunch of properties that Jekyll puts at the top level that Reptar expects to be nested under the `site` property.

The following properties need to be moved and nested underneath `site`, like so:

```yaml
site:
  title:
  email:
  description:
  baseurl:
  url:
  twitter_username:
  github_username:
```

Jekyll requires you place all your blog posts in the `_posts` folder for it to find them.  Reptar makes no assumptions about where your blog posts reside. As such you're free to customize where they should exist.

To make Reptar find your posts as Jekyll would add the following to your `_config.yml` file:

```yaml
file:
  defaults:
    -
      scope:
         path: ./
      values:
        template: page
    -
      scope:
         path: ./_posts
      values:
        template: post
        permalink: /:title/
```

## 2. Add the Jekyll theme for Reptar.

Reptar provides a ready to use theme that mirrors the style of the default Jekyll theme.

Create a `package.json` file at the root of your Jekyll site that contains the following:

```json
{
  "main": "reptar",
  "dependencies": {
    "reptar-theme-jekyll": "^1.0.0"
  },
}
```

Then run `npm install`.

Then tell Reptar to use this theme when compiling your site by adding the following line to your `_config.yml` file:

```yaml
theme: jekyll
```

## 3. Update your source files to make use of Reptar features.

There are a few distinct differences between Jekyll and Reptar.

### 1. Reptar does not allow the ambiguous form of Yaml lists.

This:

```yaml
categories: my categories here
```

Must be updated to:

```yaml
categories:
- my
- categories
- here
```

### 2. Reptar uses regular Markdown for rendering code:

Rather than this:

{% raw %}
```
{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}
```
{% endraw %}

Do this:

```ruby
```ruby
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
` ``
```

### 3. You control what template is used to render a source file with the `template` value. You must change all Frontmatter values from `layout` to `template`.

From:

```
---
layout: default
---

Content
```

To:

```
---
template: default
---

Content
```

### 4. You control what the URL of a post should be via `url`.

rom:

```
---
permalink: /about/
---

Content
```

To:

```
---
url: /about/
---

Content
```

### 5. Your list of all your posts is found on the `files` variable.

From:

{% raw %}
```
{% for post in site.posts %}
{% endfor %}
```

To:

```
{% for post in files %}
{% endfor %}
```
{% endraw %}

### 6. You must update your filters to use Reptar filters:

Usage of the `date` filter needs updating.

`date: "%b %-d, %Y"` updated to `date('MMM D, YYYY')`

Usage of prepending content needs updating.

 `prepend: site.baseurl` to `absolute_url`

## 7. Update your `feed.xml` file to use Reptar filter and tags.

It should look close to:

{% raw %}
```
---
template: null
---
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>{{ site.title | escape }}</title>
    <description>{{ site.description | escape }}</description>
    <link>{{ site.url }}{{ site.baseurl }}/</link>
    <atom:link href="{{ "/feed.xml" | absolute_url }}" rel="self" type="application/rss+xml"/>
    <pubDate>{{ site.time | date }}</pubDate>
    <lastBuildDate>{{ site.time | date }}</lastBuildDate>
    <generator>reptar v{{ reptar.version }}</generator>
    {% for post in collections.post.files | reverse | limit(10) %}
      <item>
        <title>{{ post.title | escape }}</title>
        <description>{{ post.content | escape }}</description>
        <pubDate>{{ post.date | date }}</pubDate>
        <link>{{ post.url | absolute_url }}</link>
        <guid isPermaLink="true">{{ post.url | absolute_url }}</guid>
        {% for tag in post.tags %}
        <category>{{ tag | escape }}</category>
        {% endfor %}
        {% for cat in post.categories %}
        <category>{{ cat | escape }}</category>
        {% endfor %}
      </item>
    {% endfor %}
  </channel>
</rss>
```
{% endraw %}
