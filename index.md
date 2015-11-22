---
title: Home
include_post_header: false
---

Spin your own yarn. (a static site generator)

Written entirely in ES2015+ JavaScript.

An emphasis on legible and extensible code, along with fast site builds.

## Features

- Custom permalink structure.
- Built-in support for Collections.
  - Supports multiple Collection types.
  - Can filter what posts are shown in a Collection.
  - Can configure if drafts should be included.
  - Can configure if future posts should be included.
- Built-in pagination support, with customizable page size.
- Built-in tag page support.
- Template renderer of all types/collections.
  - Using [nunjucks](http://mozilla.github.io/nunjucks/).
  - Support for custom tags/filters in template language.
  - Using (highlight.js)[https://highlightjs.org/] for code highlighting.
- Powerful and extensible asset management.
  - [LESS](http://lesscss.org/)/[SASS](http://sass-lang.com/) support.
  - [Autoprefixer](https://github.com/postcss/autoprefixer) used for legacy browsers.
  - JavaScript minified via uglify.
  - Support for ES2015+ via [Babel](http://babeljs.io/).
  - Bundling of all assets via [Browserify](http://browserify.org/).
  - HTML minifier.
  - Hash file names to allow for cache-busting.
- RSS feed support.
- Plugin support.
  - Support auto excerpts of posts for use in index pages
- CLI interface.
  - Scaffold new site.
  - Build site.
  - Serve your site.
  - Watch mode, for progressive updates.
    - Handle when a file changes.
    - Handle when a new file is added.
    - Handle when a file is removed.
    - Handle when theme file changes/added/removed.
