---
title: Upgrade
---

## Upgrade from 2.x to 3.x

The upgrade path from 2.x to 3.x of Reptar requires a few steps.

1. Create a new file in the same directory as your `_config.yml` file named `reptar.config.js`.

2. Copy the contents of your `_config.yml` to JavaScript. Use this [online JS-YAML converter](https://nodeca.github.io/js-yaml/).

3. Copy the converted contents into the `reptar.config.js` file. Prefix the content with `module.exports =`. This exports the config object and makes it accessible to Reptar.

4. Update your config file's keys to adhere to the new required schema. Largely this means replacing any key that is in `snake_case` to use `camelCase`. The updates needed are:

  ```
  url_key -> urlKey  
  date_format -> dateFormat
  future_date -> futureDate
  page_size -> pageSize
  clean_destination -> cleanDestination
  new_file_permalink -> newFilePermalink
  ```

5. Remove the following keys from your `reptar.config.js` file:
  * `path.plugins`
  * `path.themes`
  * `themes`
  * `plugins`

6. Move your asset files, `js`, `css`, `images` to the top level of your site.

7. Move your templates folder to the top level of your site. _(Optionally)_ Rename the folder to `_templates`.

8. _(Optionally)_ Delete the `_themes` folder as it's no longer used.

9. Add `path.templates` to your `reptar.config.js` file pointing to the location of your templates folder.

10. The template variable `theme` has been removed. You need to update your templates if you make any references to {% raw %}`{{theme.<whatever>}}`{% endraw %} to point to the expected render location of the asset. Doing a global find and replace should be sufficient.
