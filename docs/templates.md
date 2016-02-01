---
title: Templates
---

Every File that is rendered within Yarn is passed through the [nunjucks](http://mozilla.github.io/nunjucks/) template engine. Nunjucks is a full-featured template engine that lets you create expressive and powerful sites.

You should read the [nunjucks documentation](http://mozilla.github.io/nunjucks/templating.html) to learn how to write a template. Or you can take a peak at the [yarn theme 'thread'](https://github.com/yarnjs/yarn-theme-thread) to see an example of a template used within a Yarn theme.

## Built-in filters

In addition to the filters built-in to nunjucks, Yarn ships with a few additional built-in filters to make writing templates easier.

Find the [source for built-in filters](http://github.com/yarnjs/yarn/blob/master/lib/render/template.js) in the GitHub repo.

### date(date, template)

This allows you to easily make use of the [momentjs](http://momentjs.com/) library within a template. It takes a date to format and then a moment template string that it passes through to `momentjs`:

```html
The year this site was published is: {{yarn.time | date('YYYY')}}.
```

### slug(str)

Passes the string given to `Url.slug` which in turn passes the string to `node-slug`.

```html
<a href="{{post.url | slug}}">Find the post here.</>
```

### absolute_url(relativePath, basePath)

This is useful when constructing URLs in your template and you want to make sure a full URL is outputted.

```html
<a href="{{file.url | absolute_url(site.url)}}">Home</a>
```