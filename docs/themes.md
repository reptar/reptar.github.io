---
title: Themes
---

Yarn supports themes.

You set what theme Yarn should use in your `_config.yml` file. You set the `theme` value to the name of the theme you want Yarn to use to compile your site.

Yarn can access themes from a locally installed npm module or from within your site's files.

### Themes via NPM

If you want to use pre-made theme via NPM you can add it to your `package.json` file and then set its name in your `_config.yml` file.

For example the default Yarn theme is named `thread`.

```shell
npm install --save yarn-theme-thread
```

Then within your `_config.yml` set your theme value to `thread`.

When you build your site via `yarn build` Yarn will find the thread theme in your NPM packages and use it.

### Themes via Local Files

You can also use theme files within your Yarn site.

You tell Yarn where your themes are found in your `_config.yml` file in the `path.themes` value.

Within the themes folder Yarn will look for files named `_theme.yml`. The `_theme.yml` file sets configuration information, such as where the theme's templates are found and where its assets are found and how to process them.

### [Read all default theme settings and what they control from the GitHub file.](https://github.com/yarnjs/yarn/blob/master/lib/theme/_theme.defaults.yml)

Also be sure to look at the [yarn theme 'thread'](https://github.com/yarnjs/yarn-theme-thread) as a complete example of what a theme looks like.