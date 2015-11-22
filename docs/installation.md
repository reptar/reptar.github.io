---
title: Installation
---

## Dependencies

Yarn is built on [nodejs](https://nodejs.org/en/) and as such you need to have nodejs installed to use Yarn.

**Please note**: Yarn requires at least nodejs v4.0.0.

You can install nodejs via its homepage or via [Homebrew](http://brew.sh/).

After installing Homebrew you can install nodejs via:

```shell
brew install node
```

## Install

Ready to install Yarn? Getting started is simple!

1. Install the Yarn command line interface. This installs the `yarn` command, which is your main interface to building your site.
```shell
npm install -g yarn-cli
```

2. Create the directory where your Yarn site will reside.
```shell
mkdir mysite && cd mysite
```

3. Initialize a new Yarn site. This copies over basic scaffold files that are needed to build.
```shell
yarn init
```

4. Build your Yarn site for the first time and then start a local http-server to view the built files.
```shell
yarn build && yarn serve
```

5. Navigate to [http://localhost:8080/](http://localhost:8080/) to see your new Yarn site!
