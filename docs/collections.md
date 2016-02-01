---
title: Collections
---

One of the core concepts of Yarn is the idea of a 'collection'. A collection is how Yarn understands your source files, how it decides what templates to apply, and how and where to write the files when building your site.

You configure Collections in your `_config.yml` file, underneath the `collections` key. Every key of that object is the name of a collection and its value is an object which configures the collection.

The primary configuration required is to define how a collection decides what files belong within itself. This is defined differently depending on the collection type.

Currently there are three collection types that you can create. Each has a different strategy that is used.

## FileSystemCollection

This collection fills itself via the file system. Any files that are found within its defined path are added to the collection.

An example file system configuration:

```yaml
collections:
  default:
    path: ./
    template: page
```

This is a simple configuration that says that all files found within the root of the Yarn site belong in the Collection named `default`. When Yarn compiles your site it uses the `page.html` template file to render the source file.

A FileSystemCollection can also include additional configuration values that allow greater control over the output. There's enough configuration available that a FileSystemCollection can create a simple blog site.

Here is the example configuration, with explanations for every configuration value found inline.

```yaml
collections:
  post:

    # For every file found within `./_posts` they should be
    # tentatively included in this collection, depending on
    # additional configurations.
    path: ./_posts

    # By default every post will use the `post.html` template.
    # This can be over-ridden on a per-file basis if desired
    # in the file's frontmatter.
    template: post

    # This is the URL that every file should have when being
    # built. This takes directly from the frontmatter of the
    # file, making every value in the frontmatter available
    # for use in the permalink configuration template string.
    permalink: /:title/

    # Configure an optional filter to apply when deciding if a
    # file should belong in this collection. Currently there are
    # two types of filters that can be applied, both are shown
    # as an example here.
    filter:

      # This corresponds to the frontmatter metadata found
      # in a file. If the value described here is found to be
      # true then the file is filtered out of the `post`
      # collection. In this case we're saying that any file
      # which says it is a draft will not be included in
      # this collection.
      metadata:
        draft: true

      # This corresponds to the frontmatter of the file as well.
      # Depending on what key is defined it checks to see if it
      # is a date object, and if it is then it sees if it is a
      # date in the future. If it is a date in the future then
      # it is not included in the collection.
      future_date:
        key: date

    # Once files have been included in the collection this
    # defines how they should be sorted. The key value
    # corresponds to the frontmatter metadata, so you can choose
    # whatever property you want to dictate how the collection
    # is ordered.
    sort:
      key: date
      order: descending

    # There is also the concept of pagination built into Yarn.
    pagination:

      # Decide what template to use when rendering a
      # pagination page.
      template: index

      # Decide how many Files should be included in each
      # pagination page.
      size: 6

      # Decide what the URL should be for the initial
      # pagination page.
      permalink_index: /

      # Decide what the URL should be for every additional
      # pagination page.
      permalink_page:  /page/:page/
```

This creates a `post` collection.

Now you may note that there is overlap between the `post` collection and the `default` collection. However every collection is defined so that they are mutually exclusive. What that means is that no matter how many FileSystemCollection's you create they will only contain files that do not exist in other FileSystemCollection's.

Under the hood Yarn creates an array of exclude paths which consists of every path that is defined in your `_config.yml` file. When a FileSystemCollection is deciding if a file should be included it checks if that file exists in one of the other FileSystemCollection path's, if so then it is excluded.

## Metadata

This collection is almost identical to a FileSystemCollection collection however its initial source of files is instead derived from the metadata found within every file.

For example to create a tags MetadataCollection:

```yaml
collections:
  tag:
    metadata: tags
```

This creates a `tag` collection in which every file that has frontmatter that contains a `tags` key will be included in this collection.

Every other configuration option as the FileSystemCollection is available, except the `path` key as that has no bearing on a MetadataCollection.

## Static

This is the simplest type of collection. This collection offers no advanced configuration, as it simply copies its files to the output without any modification.

An example static collection configuration:

```yaml
collections:
  images:
    path: ./images
    # Required to describe a collection as static.
    static: true
```

This says that for all files found within `./images` are to be directly copied to our output destination.

No other configuration options are available as this is simply a straight copy.
