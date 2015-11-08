---
title: Configuration
---

Most of Yarn's flexibility comes from its ability to be configured and changed to meet your needs.

All of the configuration for your Yarn site resides in your `_config.yml` file. This file is what Yarn uses to decide how to build your site.

Understanding the `_config.yml` file, and how to update it, is how you will make Yarn work best for you.

[All default settings are found in the repository.](https://github.com/yarnjs/yarn/blob/master/lib/config/defaults.yml)

```yaml
# This is where you can put site-wide settings. Any values placed here are globally accessible from any template context via the `site` key.
site:
  title: My Yarn Title
  description: > # this means to ignore newlines until "baseurl:"
    Your website's description goes here.

# If you have a unique layout for your site and want to change where Yarn looks for certain files you can change them here. All files are relative to where the `_config.yml` is found.
path:
  source:      ./
  destination: ./_site
  plugins:     ./_plugins
  themes:      ./_themes

# This is where you configure your collections of content. For more details refer to the [Collections documentation](collections.md).
collections:
  default:
    path: ./
    template: page
  images:
    path: ./images
    static: true

# What theme your Yarn site should use when building your site.
theme: 'default'

# If we should remove the compile destination folder before writing.
clean_destination: false

# What file extensions we should recognize as a markdown file.
markdown_extension:
  - markdown
  - md

# What markdown conversion tool we should use.
markdown:    remarkable
highlighter: highlight.js

# This lets you customize the markdown processor defined above.
remarkable:
  preset:       'commonmark'
  highlight:    true

# When running `yarn serve` what settings should be used.
port:    8080
host:    127.0.0.1

# What plugins you want enabled and what configuration settings they should have.
plugins:
  html-minifier:
    enabled: false
    options:
      collapseWhitespace: true
      collapseBooleanAttributes: true
      removeAttributeQuotes: true
  excerpt:
    enabled: true
```