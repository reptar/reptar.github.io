---
title: Themes
---

Reptar supports themes.

You set what theme Reptar should use in your `_config.yml` file. You set the `theme` value to the name of the theme you want Reptar to use to compile your site.

Reptar can access themes from a locally installed npm module or from within your site's defined `_themes` folder.

### Themes via NPM

If you want to use a pre-made theme via NPM you can add it to your `package.json` file and then set its name in your `_config.yml` file.

For example the default Reptar theme is named `thread`.

```shell
npm install --save reptar-theme-thread
```

Then within your `_config.yml` set your theme value to `thread`.

When you build your site via `reptar build` Reptar will find the thread theme in your NPM packages and use it.

### Themes via Local Files

You can also use theme files within your Reptar site.

You tell Reptar where your themes are found in your `_config.yml` file in the `path.themes` value.

Within the themes folder Reptar will look for files named `_theme.yml`. The `_theme.yml` file sets configuration information, such as where the theme's templates are found and where its assets are found and how to process them.

#### [Read all default theme settings and what they control from the GitHub file.](https://github.com/reptar/reptar/blob/master/lib/theme/_theme.defaults.yml)

Also be sure to look at the [reptar theme 'thread'](https://github.com/reptar/reptar-theme-thread) as a complete example of what a theme looks like.
