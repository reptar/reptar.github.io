---
title: Installation
---

## Dependencies

Reptar is built on [nodejs](https://nodejs.org/en/) and as such you need to have nodejs installed to use Reptar.

**Note**: Reptar supports nodejs >= v4.0.0 and been tested on npm >= 3.0.0.

You can install nodejs via its homepage or via [Homebrew](http://brew.sh/).

After installing Homebrew you can install nodejs via:

```shell
brew install node
```

## Install

Ready to install Reptar? Getting started is simple!

1. Install the Reptar command line interface. This installs the `reptar` command, which is your main interface to building your site.
```shell
npm install -g reptar
```

2. Create the directory where your Reptar site will reside.
```shell
mkdir mysite && cd mysite
```

3. Initialize a new Reptar site. This copies over basic scaffold files that are needed to build.
```shell
reptar init
```

4. Build your Reptar site for the first time and then start a local server to view the built files.
```shell
reptar build && reptar serve
```

5. Navigate to [http://localhost:8080/](http://localhost:8080/) to see your new Reptar site!
