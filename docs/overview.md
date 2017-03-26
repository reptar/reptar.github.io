---
title: Overview
---

Reptar was designed to be intuitive and easy to customize.

When you build your site with Reptar via `reptar build` the following actions are taken, in order.

### A Reptar instance is created.

This is largely an inert action. Reptar creates a new instance via `new Reptar()` and creates instances of all its dependent classes, such as the renderer and the config manager.

### Reptar updates itself.

This is performed via `reptar.update()`. The goal of this action is to read all the files within your site and parse them into objects that Reptar understands. After this action is complete Reptar has a complete view of your site and is ready to build it.

The update action is comprised of sub-actions that are important to highlight. Again, the actions taken within update, in order.

#### Reads and loads your local `reptar.config.js` file.

Reptar loads and validates your local `reptar.config.js` file. If Reptar finds anything misconfigured it'll exit with an error message showing you what is wrong. You can read about these options in depth on the [Configuration documentation](/docs/configuration).

#### Reads all files in your site

This is one of the major steps Reptar takes when reading your site.

For every file that is found Reptar will create a [File](/docs/file/) object to represent it in memory. You can [read the source code](https://github.com/reptar/reptar/blob/master/lib/file.js) to find in detail what information is in a File object. This includes Markdown files as well as static files, everything is tracked.

#### Populate Collections

Reptar will then iterate over every Collection that has been configured, giving each Collection the entire array of File objects, allowing the Collection to decide if that File belongs in that Collection, and what CollectionPage objects to create.

#### Populate Data Files

If you have any [data files](/docs/data-files/) this is when Reptar will load and parse them.

### Reptar builds your site!

After updating itself Reptar is ready to build your site!  This is performed via `reptar.build()`.

Reptar iterates over every File object that it has tracked and calls its `write` method to write that file to disk.

At this point Reptar has created your site! You're ready to preview it locally via `reptar serve` or to push it up to your webhost!
