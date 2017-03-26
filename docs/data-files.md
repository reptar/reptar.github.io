---
title: Data Files
---

Reptar supports data files. That is, you can create either `.json` or `.yaml` files in your defined `path.data` folder - `_data/` by default - and the values that are defined in those files will be accessible in your site.

The data will be accessible in every template on the `site.data` object, with every key being the path and file name of your data file.

For example, if your data folder is `_data/` and you have a file `_data/tv/fall.yaml` with the contents of

```yaml
- name: Grimm
  network: NBC

- name: Luke Cage
  network: Netflix

- name: Brooklyn 99
  network: NBC
```

You'll be able to show that list in a template via:

{% raw %}
```html
{% for show in site.data.tv.fall %}
  <p>Watch {{show.name}} on {{show.network}}!</p>
{% endfor %}
```
{% endraw %}


## Configure data files location

You configure the location of your data files `reptar.config.js` file.

```javascript
module.exports = {
  path: {
    data: './_data'
  },
};
```