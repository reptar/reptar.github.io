---
title: Overview
---

Reptar strives to be straightforward. Reptar was designed to be intuitive and easy to customize.

When you build your site with Reptar it performs the following actions, in order.

### Reads and loads your local `_config.yml` file.

The first thing Reptar does is load and validate your local `_config.yml` file. If Reptar finds anything misconfigured it'll exit with an error message showing you what is wrong. You can read about these options in depth on the [Configuration documentation](/docs/configuration).

Note that at this time Reptar creates all of your [Collections](/docs/collections/). At this point they have only been created with the options found in `_config.yml`. They do not yet contain files.

### Reads and instantiates your theme.

Reptar then loads your theme, creating the needed components that your theme describes as being required. This primarily includes asset processor files to handle processing any CSS/LESS/SASS or JavaScript files that need processing.

### Read and load plugins

Reptar will then load all [plugins](/docs/plugins/) you have configured. It loads plugins both from your local plugins folder as well as Reptar plugins included in your `package.json` file.

### Reads all files in your site

This is one of the major steps Reptar takes when reading your site.

For every file that is found Reptar will create a [File](/docs/file/) object to represent it in memory. You can [read the source code](https://github.com/yarnjs/yarn/blob/master/lib/file.js) to find in detail what information is in a File object. This includes Markdown files as well as static files, everything is tracked.

### Populate Collections

Reptar will then iterate over every Collection that has been configured, giving each Collection the entire array of File objects, allowing the Collection to decide if that File belongs in that Collection.

### Write site to disk

After Reptar has collected all it needs to know about your site it is ready to create your site!

That involves writing your theme's assets to disk, writing every processed File to disk, and writing any Collection Page's that were created.

### Done

At this point Reptar has created your site! You're ready to preview it locally via `yarn serve` or to push it up to your webhost!
