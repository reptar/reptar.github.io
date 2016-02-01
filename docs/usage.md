---
title: Usage
---

Primarily you interact with Yarn via a [command line interface](https://en.wikipedia.org/wiki/Command-line_interface), which on OS X is the Terminal.

After completing the [installation](/docs/installation/) of Yarn you can access all commands via typing `yarn` on the CLI to see all available options.

Here we'll discuss in a little more depth what options you have available.

## `yarn init`
This scaffolds a new Yarn site. It copies the [scaffold](https://github.com/yarnjs/yarn-scaffold) template into your current directory and installs all other dependencies necessary.

You typically only run this command when creating a new Yarn site.

## `yarn build`
This has Yarn actually build your site. It uses your source files, configuration, and theme to create the output. By default the output site is created in `_site` folder however that can be configured.

At this point you can a static server from your built files and you'll be seeing your production ready Yarn site!

## `yarn clean`
This cleans the built files Yarn created.

This is useful if you think some files aren't being properly updated by Yarn or you just want to remove all derived files.

## `yarn new`

Creates a new File on disk, ready for writing.

## `yarn serve`
This creates a static web server with your built folder as the root.

This is useful to quickly preview your built Yarn site locally.

## `yarn watch`
This creates a local static web server and also watches for any changes in your source files to partially rebuild your Yarn site.

This is useful when developing your site or writing new content.