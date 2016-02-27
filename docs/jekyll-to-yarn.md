---
title: Jekyll to Yarn
---

Looking to convert your Jekyll blog to use Yarn? Here's the place.

You can look at an example repo [jekyll-to-yarn](https://github.com/yarnjs/jekyll-to-yarn) which shows commit-by-commit how to convert a new Jekyll site to a yarn site.

Or if you'd rather just understand the steps involved this guide will show you what to do.

## 1. Convert your `_config.yml` file to be compatible with Yarn.

There's a bunch of properties that Jekyll puts at the top level that Yarn expects to be nested under the `site` property.

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

Jekyll requires you place all your blog posts in the `_posts` folder for it to find them.  Yarn makes no assumptions about where your blog posts reside. As such you're free to customize where they should exist.

To make Yarn find your posts as Jekyll would add the following to your `_config.yml` file:

```yaml
collections:
  default:
    path: ./
    template: page
  post:
    path: ./_posts
    template: post
    permalink: /:title/
    pagination: false
  tag: false
```

## 2. Add the Jekyll theme for Yarn.

Yarn provides a ready to use theme that mirrors the style of the default Jekyll theme.

Create a `package.json` file at the root of your Jekyll site that contains the following:

```json
{
  "main": "yarn",
  "dependencies": {
    "yarn-theme-jekyll": "^1.0.0"
  },
}
```

Then run `npm install`.

Then tell Yarn to use this theme when compiling your site by adding the following line to your `_config.yml` file:

```yaml
theme: jekyll
```

## 3. Update your source files to make use of Yarn features.

There are a few distinct differences between Jekyll and Yarn.

### 1. Yarn does not allow the ambiguous form of Yaml lists.

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

### 2. Yarn uses regular Markdown for rendering code:

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

### 5. Your list of all your posts is found on the `collections.post.files` variable.

From:

{% raw %}
```
{% for post in site.posts %}
{% endfor %}
```

To:

```
{% for post in collections.post.files %}
{% endfor %}
```
{% endraw %}

### 6. You must update your filters to use Yarn filters:

Usage of the `date` filter needs updating.

`date: "%b %-d, %Y"` updated to `date('MMM D, YYYY')`

Usage of prepending content needs updating.

 `prepend: site.baseurl` to `absolute_url`

## 7. Update your `feed.xml` file to use Yarn filter and tags.

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
    <generator>yarn v{{ yarn.version }}</generator>
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
