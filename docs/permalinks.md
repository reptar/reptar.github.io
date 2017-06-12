---
title: Permalinks
---

Permalinks control how Reptar write your files to disk. This ultimately dictates the layout of your site and how it will be acessible to all readers.

Permalinks can be either set directly in a [File](/docs/file)'s frontmatter via the `permalink` key, or it can be set as a default value in `reptar.config.js` (for more about [default values consult the section in the File documentation page](/docs/file)).

A permalink string can access any value set in a [File](/docs/file)'s frontmatter.

For example, if you want Reptar to write all your files to disk using the `title` value in the `_posts` directory, you can create the following default value for `permalink`.

``` javascript
// reptar.config.js
...
{
  scope: { path: './_posts' },
  values: { template: 'post', permalink: '/:title/' }
},
...
```

## Dates in Frontmatter & Permalinks

If a File's frontmatter has a `date` key with a value that can be parsed by [momentjs](http://momentjs.com/) - such as `YYYY-MM-DD` - you can pipe it through `moment` to get a pretty display of that value. Any of the [tokens in moment.format](http://momentjs.com/docs/#/displaying/format/) will work.

For example.

``` javascript
// reptar.config.js
...
{
  scope: { path: './_posts' },
  values: {
    template: 'post',
    permalink: '/:date|YYYY/:date|MM/:date|DD/:title'
  }
},
...
```

Based on this configuration, if your File's frontmatter looked like this:

``` plaintext
---
title: Reptar Crunch Cereal
date: 2017-04-01
---
```

Reptar would build a url like this: `2017/04/01/reptar-crunch-cereal`.
