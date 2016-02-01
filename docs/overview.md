---
title: Overview
---

Yarn strives to be straightforward. Yarn was designed to be intuitive and easy to customize once you understand how Yarn works. To help understand what is going on when you use Yarn it is helpful to understand, from a high level, what Yarn is doing.

When you build your site with Yarn it performs the following actions, in order.

### Reads and loads your local `_config.yml` file.

The first thing Yarn does is load your local `_config.yml` file into memory and parse all the options. You can read about these options in depth on the [Configuration documentation](/docs/configuration).

Note that at this time Yarn creates all of your [Collections](/docs/collections/). At this point they have only been created with the options found in `_config.yml`. They do not yet contain files.

### Reads and instantiates your theme.

Yarn then loads into memory your configured theme, creating the needed components that your theme describes as being required. This primarily includes asset processor files to handle processing any CSS/LESS or JavaScript files that need processing.

### Read and load plugins

Yarn will then load all [plugins](/docs/plugins/) you have configured. It loads plugins both from your local plugins folder as well as Yarn plugins included in your `package.json` file.

### Read all files and allow every Collection to populate itself.

This is one of the major steps Yarn takes when reading your site. It will initially read all the files found within your Yarn site, excluding some paths - namely `node_modules` and all files that are described as being within a [Static Collection](/docs/collections/#static).

For every file that is found Yarn will create a [File](/docs/file/) object to represent it in memory. You can [read the source code](https://github.com/yarnjs/yarn/blob/master/lib/file.js) to find in detail what information is in a File object.

Yarn will then iterate over every Collection that has been configured, giving each Collection the entire array of File objects, allowing the Collection to decide if that File belongs in that Collection.

### Write files

After Yarn has collected all it needs to know about your site it is ready to process your files and transform them into your Yarn site.

Yarn will go through every Collection and have it write its contents to disk. Yarn places most of the responsibility of how to write files into the hands of each Collection, allowing for multiple Collection types to configure how they write their files to disk.

### Done

At this point Yarn has created your site! You're ready to preview it locally via `yarn serve` or to push it up to your webhost!
