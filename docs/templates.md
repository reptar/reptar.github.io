---
title: Templates
---

Every File that is rendered within Reptar is passed through the [nunjucks](http://mozilla.github.io/nunjucks/) template engine. Nunjucks is a full-featured template engine.

You should read the [nunjucks documentation](http://mozilla.github.io/nunjucks/templating.html) to learn how to write a template. Or you can use `reptar init` to create an initial scaffold of a working template layout.

## Configure template location

You configure the location of your nunjucks templates in your `reptar.config.js` file.

```javascript
module.exports = {
  path: {
    templates: './_templates'
  },
};
```

## Built-in filters

In addition to the filters built-in to nunjucks, Reptar ships with a few additional built-in filters to make writing templates easier.

Find the [source for built-in filters](https://github.com/reptar/reptar/blob/master/lib/renderer/template.js#L98-L148) in the GitHub repo.

### date(date, template)

This allows you to easily make use of the [momentjs](http://momentjs.com/) library within a template. It takes a date to format and then a moment template string that it passes through to `momentjs`:

```html
{% raw %}The year this site was published is: {{reptar.time | date('YYYY')}}.{% endraw %}
```

### slug(str)

Passes the string given to `Url.slug` which in turn passes the string to `node-slug`.

```html
{% raw %}<a href="{{file.url | slug}}">Find the post here.</a>{% endraw %}
```

### absolute_url(relativePath, basePath)

This is useful when constructing URLs in your template and you want to make sure a full URL is outputted.

```html
{% raw %}<a href="{{file.url | absolute_url(site.url)}}">Home</a>{% endraw %}
```
