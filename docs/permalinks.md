---
title: Permalinks
---

Permalinks set in `reptar.config.js` can access any of frontmatter set in a [file](/docs/file) as a url variable.

For example, Reptar will grab the title of each file in the `_posts` directory with the `:title` url variable and slugify it on build with this configuration:

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

If a file includes a `date` key with a value in the `YYYY-MM-DD` format, you can access the date in `values.permalink` with the `:date` url variable and format it with the [tokens in moment.format](http://momentjs.com/docs/#/displaying/format/) like so:

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

Based on this configuration, if your file's frontmatter looked like this:

``` plaintext
---
title: Reptar Crunch Cereal
date: 2017-04-01
---
```

Reptar would build a url like this: `2017/04/01/reptar-crunch-cereal`.