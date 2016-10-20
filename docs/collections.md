---
title: Collections
---

Reptar supports the ability to group Files into Collections. This is useful when creating paginated blog pages, or creating tag pages that contain Files that match the tag found in its frontmatter.

Collections are configured in `_config.yml`, underneath the `collections` key. Every key of that object is the name of a collection and its value is an object which configures the collection.

The primary configuration required is to define how a collection decides what File belong within itself. This is defined differently depending on the collection type.

## FileSystemCollection

This collection populates itself via the file system. Any files that are found within its defined path are added to the collection.

An example file system configuration:

```yaml
collections:
  post:
    path: ./_posts
    template: post_page
```

This is a simple configuration that says that all files found within the `./_posts` of the Reptar site belong in the Collection named `post`. When Reptar compiles your site it uses the `post_page.html` template file to render the source file.

A `FileSystemCollection` can also include additional configuration values that allow greater control over the output. There's enough configuration available that a `FileSystemCollection` can create a simple blog site.

Here is the example configuration, with explanations for every configuration value found inline.

```yaml
collections:
  post:

    # For every file found within `./_posts` they should be
    # included in this collection.
    path: ./_posts

    # By default every created Collection Page will use
    # the `post_index.html` template.
    template: post_index

    # Decide how many Files should be included in each
    # pagination page.
    page_size: 6

    # Once files have been included in the collection this
    # defines how they should be sorted. The key value
    # corresponds to the frontmatter metadata, so you can choose
    # whatever property you want to dictate how the collection
    # is ordered.
    sort:
      key: date
      order: descending

    # Define what the permalink for every CollectionPage should be.
    permalink:

      # Decide what the URL should be for the initial
      # CollectionPage.
      index: /

      # Decide what the URL should be for every additional
      # CollectionPage.
      page:  /page/:page/
```

## Metadata

This collection is almost identical to a FileSystemCollection collection however its initial source of Files is instead derived from the metadata found within every file.

For example to create a tags MetadataCollection:

```yaml
collections:
  tag:
    metadata: tags
```

This creates a `tag` collection in which every file that has frontmatter that contains a `tags` key will be included in this collection.

Every other configuration option as the FileSystemCollection is available, except the `path` key as that has no bearing on a MetadataCollection.
