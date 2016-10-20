---
title: Usage
---

Primarily you interact with Reptar via a [command line interface](https://en.wikipedia.org/wiki/Command-line_interface).

After completing the [installation](/docs/installation/) of Reptar you can access all commands via typing `reptar` on the CLI to see all available options.

Here we'll discuss in a little more depth what options you have available.

## reptar init
This scaffolds a new Reptar site. It creates all you need to build a Reptar site.

You typically only run this command when creating a new Reptar site.

## reptar build
This builds your site. It uses your source files, configuration, and theme to create the output. By default the output site is created in `_site` folder however that can be configured.

## reptar clean
This cleans the built files Reptar created.

This is useful if you think some files aren't being properly updated by Reptar or you just want to remove all derived files.

## reptar new

Creates a new File on disk, ready for writing.

## reptar serve
This creates a static web server with your built folder as the root.

This is useful to quickly preview your built Reptar site locally.

## reptar watch
This creates a local web server that lazily builds your site. It makes for a great development experience as you can edit your site's source files and refresh a page to see the changes immediately reflected.

This is accomplished by only rendering the file that is being requested, always checking from disk what the latest contents are.
