---
title: Middlewares
---

If Reptar is missing some functionality you desire then you can further customize Reptar through the use of middleware.

Middleware is a function that is given the current `reptar` instance, allowing you to access any APIs on the Reptar object and manipulate it however you want.

Middleware is ran in-between the update and build step of `reptar build`.

You add middleware through the `reptar.config.js` file.

```javascript
module.exports = {
  // Reptar iterates through each middleware function in order defined.
  middlewares: [

    // Reptar attempts to load an npm package named 'my-middleware'
    'my-middleware',

    // Reptar uses the middleware function directly.
    myFunc,
  ],
}
```

## Example

Let's say you wanted to add a custom frontmatter value to every File object. You wanted to take the title of the File and make it all lower case.

```javascript
// All within reptar.config.js

function toLowerCaseMiddleware(reptar) {
  for (const fileKey in reptar.destination) {
    const file = reptar.destination[fileKey];

    file.data.titleLower = file.data.title.toLowerCase();
  }
};

module.exports = {
  middlewares: [
    toLowerCaseMiddleware,
  ],
}
```

And now you will have a `titleLower` variable available in every rendered file.

## Lifecycle Middleware

Reptar also has support for middleware to be ran at certain points in the build lifecycle.

You can configure the lifecycle middleware in your `reptar.config.js` file.

```javascript
module.exports = {
  // The value of every lifecycle middleware is the same as regular middleware.
  lifecycle: {
    // This is ran right before Reptar updates itself from the filesystem.
    willUpdate: [],

    // This is ran right after Reptar updates itself from the filesystem.
    didUpdate: [],

    // This is ran right before Reptar is going to build your site.
    willBuild: [],

    // This is ran right after Reptar built your site.
    didBuild: [],
  }
}
```

## Asynchronous Middleware

Middleware functions can also be asynchronous.

To opt-in to asynchronous behavior you can:

1. Return a `Promise`.
```javascript
function promiseMiddleware(reptar) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 100);
  })
}
```

2. Add a second argument to your middleware function, called `done`, and call it when you're done.

```javascript
function doneMiddleare(reptar, done) {
  setTimeout(() => {
    done();
  }, 100);
}
```

## Current Reptar Middleware

- [reptar-excerpt](https://github.com/reptar/reptar-excerpt)

Add excerpt data to each File object. Useful when rendering a list of pages.

- [reptar-html-minifier](https://github.com/reptar/reptar-html-minifier)

Minify your rendered files.
