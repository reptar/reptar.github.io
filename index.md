---
title: Home
include_post_header: false
---

Spin your own yarn.

A static site generator written entirely in ES2015+ JavaScript.

<br/>

**Feature Packed**

Easily build a blog. Pagination is built-in. So are tag pages.

Yarn can exclude drafts or posts that are written in the future. If that's not enough flexibility you can write your own filters.

**Flexible**

Yarn makes no assumptions. If you're coming from a different static site generator don't worry about changing your files to match what Yarn requires, just update the `_config.yml` file to let Yarn know how it should understand your files.

**Themable**

Yarn has theme support, letting you change site themes easily.

Yarn uses [nunjucks](http://mozilla.github.io/nunjucks/) as its template engine. This gives you power to create rich and beautiful layouts.

Yarn supports [LESS](http://lesscss.org/), [SASS](http://sass-lang.com/), and [Autoprefixer](https://github.com/postcss/autoprefixer) to make your stylesheets beautiful and easy to maintain.

For your JavaScript feel at home using ES2015+ features via [Babel](http://babeljs.io/). All assets are bundled via [Browserify](http://browserify.org/) giving you flexibility in how you break up your files.

When rendering files be sure to use the built-in HTML minifier to reduce your HTML file sizes for even faster loading.

And don't worry, RSS is supported as well.

**CLI Interface**

Use the yarn CLI to easily manage your site.

You can scaffold a new Yarn site, create a new post, build your site, and start up a web server.

Yarn also has a watch mode for super fast progressive updates. Yarn will only update the file you modify lettting you write and read at the same time.


## Get Started Now

[Getting started](docs/installation/) is quick and easy!

```shell
# Install yarn-cli
npm install -g yarn-cli

# Initialize your new yarn site
mkdir mysite && cd mysite && yarn init

# Build and serve your site!
yarn build && yarn serve
```