---
title: File
---

An individual File that exists in your Reptar site. There is a File object created for every file in your source directory.

If a file does not have frontmatter then Reptar will copy it directly to your destination path.

If you have a non-markdown file you can configure how Reptar parses and renders that file through asset configuration.

## Frontmatter

Every file in your Reptar site can include optional additional metadata. This metadata is placed at the beginning of the file in a block that is parsed as YAML data. All variables placed here are then accessible when rendering the file. These variables also allow you to override how that file should be rendered, be it with a different URL or template.

For example if you have a file named `about.md` its contents might be:

```
---
title: About
url: /about-me/
template: about
---

About content. My title is '{{file.title}}'.
```

When the file is rendered it will have the `title` field accessible from the template.

What this frontmatter also changes is what the URL of the file will be and what template will be used.

Instead of the defaults defined in `reptar.config.js` this file will have its url be `/about-me/` and will be rendered with the `about` template.

## Default Values

In your `reptar.config.js` file you can configure default values to apply to Files if they match the defined scope. This allows you to not explicitly add a `template: page` value to every File's frontmatter.

If a File already has a value in its own frontmatter then it retains that value. These default values are only applied if File does not define its own.

Defaults are applied with a specificity order. The value applied to a File is the result of how specific a scope is. In other words a scope path of `docs/chapter1` has higher priority than `docs/`.

For example if you want every top level File to use the `page` template, but every File in `./_posts/` to use the `post` template.

```javascript
// reptar.config.js
module.exports = {
  file: {
    defaults: [
      {
        scope: {
          // Any file in this path will have the default values applied.
          path: './',
        },
        values: {
          template: 'page',
          permalink: '/:title/',
        },
      },
      {
        scope: {
          // Any file in this path will have the default values applied.
          // Because this path is more specific it will over-write the previous
          // defaults.
          path: './_posts',
        },
        values: {
          template: 'post',
          permalink: '/:title/',
        },
      },
    ];
  },
};
```

## Filter Files

If you don't want Reptar to write some files you can easily remove them by applying a filter.

```javascript
// reptar.config.js
module.exports = {
  file: {
    // Configure an optional filter to apply when deciding if a
    // file should be written.
    filter: {
      // This corresponds to the frontmatter metadata found
      // in a file. If the value described here is found to be
      // true then the file is filtered.
      // In this case we're saying that any file
      // which says it is a draft will not be included in
      // this collection.
      metadata: {
        draft: true
      },

      // This corresponds to the frontmatter of the file as well.
      // Depending on what key is defined it checks to see if it
      // is a date object, and if it is then it sees if it is a
      // date in the future. If it is a date in the future then
      // it is filtered.
      futureDate: {
        key: 'date'
      },
    }
  },
};
```
