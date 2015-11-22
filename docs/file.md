---
title: File
---

An individual File that exists in your Yarn site.


## Frontmatter

Every file in your Yarn site can include optional additional metadata. This metadata is placed at the beginning of the file in a block that is parsed as YAML data. All variables placed here are then accessible when rendering the file. These variables also allow you to specifically change how that file should be rendered, be it with a different URL or template.

For example if you have a file named `about.md` its contents might be:

```
---
title: About
url: /about-me/
template: about
---

About content.
```

When the file is rendered it will have the `title` field accessible from the template.

What this frontmatter also changes is what the URL of the file will be and what template will be used.

Instead of the defaults defined in `_config.yml` this file will have its url be `/about-me/` and will be rendered with the `about` template. This allows more exact control over your Yarn content.