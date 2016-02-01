---
title: Variables
---

Every template that is rendered has access to variables when it is rendered. The following describes what variables are accessible from a template file. They are all accessible within a template via `{{site.title}}` or `{{theme.css}}`, etc.

## site

This contains all values that are defined in your `_config.yml`'s  `site` object. Anything you put there will be accessible from every file that is rendered.

An example site object:

```json
{
  "site": {
    "title": "My Name",
    "email": "my@email.com",
    "description": "Personal blog.\n",
    "url": "http://example.com/"
  }
}
```

## theme

This primarily includes two variables, `css` and `js` whose values are the URL to the asset that is going to be rendered. This is primarily useful when linking to the processed theme asset files.

An example theme object:

```json
{
  "theme": {
    "css": "/css/main-684582f800.css",
    "js": "/js/main-fc9402a8a5.js"
  }
}
```

## yarn

This contains meta information about your Yarn installation.

```json
{
  "yarn": {
    "version": "0.6.0",
    "time": "2015-11-28T15:30:33-05:00"
  }
}
```

## collections

This is an object whose keys reflect every Collection that you have defined in your `_config.yml`, and every value is also an object.

The keys on a collection are `files` and `pages`. Both are arrays which contain a File data object and a Pagination data object respectively.

For example the default `post` collection looks like this:

```json
{
  "collections": {
    "post": {
      "files": [
        // File data objects
      ],
      "pages": [
        // Pagination data objects.
      ]
    }
  }
}
```

### File data object

These are found within a non-static collection. They include all Frontmatter defined data in the object as well as two additional fields, `content` which contains the non-Frontmatter data, and `url` which can either be defined in the file or is derived from from the File's Collection's permalink value.

An example File data object:

```json
{
  "file": {
    "title": "Example post",
    "date": "2015-08-15T02:17:07.184Z",
    "content": "<p>Contents of file.</p>\n",
    "url": "/example-post/"
  }
}
```

### Pagination data object

If a Collection has defined pagination variables then it will contain a pages array full of Pagination data objects. This allows for easy pagination of Collection Files. Each Pagination data object contains information about the page as well as containing the files that belong in that page, so you can render a list of those files.

An example Pagination data object:

```json
{
  "pagination": {
    "page": 1,
    "files": [{
      // File data objects
    }],
    "total_pages": 67,
    "per_page": 6,
    "total": 399,
    "url": "/",
    "next": 2,
    "next_link": "/page/2/"
  }
}
```
