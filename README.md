# react-native-template-ui-based

[![npm version][npm-image]][npm-url]
[![npm][npm-dm-image]][npm-dm-url]
[![Join the chat at https://t.me/reactnativesz][telegram-image]][telegram-url]

[npm-image]: https://img.shields.io/npm/v/react-native-template-ui-based.svg
[npm-url]: https://www.npmjs.com/package/react-native-template-ui-based
[npm-dm-image]: https://img.shields.io/npm/dm/react-native-template-ui-based.svg
[npm-dm-url]: https://www.npmjs.com/package/react-native-template-ui-based
[telegram-image]: https://img.shields.io/badge/chat-on%20telegram-blue.svg
[telegram-url]: https://t.me/reactnativesz

Table of Contents
=================

  * [Introduction](#introduction)
    * [Features](#features)
  * [Quick Start](#quick-start)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
    * [Run the new app](#run-the-new-app)
  * [Discussion](#discussion)
  * [License](#license)

Created by [gh-md-toc](https://github.com/ekalinin/github-markdown-toc)

## Introduction

*A React Native cross-platform app template for use with [@blankapp/ui](https://github.com/blankapp/ui).*

### Features

- Multi-language support.
- ...

## Quick Start

### Prerequisites

Before starting make sure you have:

- Installed [Yarn](https://yarnpkg.com/)
- Installed [React Native](https://facebook.github.io/react-native/)

### Usage

Create a new React Native App:

```bash
$ react-native init MyApp --template ui-based
$ cd MyApp && ./scripts/init
```

### Run the new app

- Running on Android

```bash
$ react-native run-android
$ adb reverse tcp:8081 tcp:8081   # required to ensure the Android app can
```

- Running on iOS

```bash
$ react-native run-ios
```

- Running on Web

```bash
$ yarn run-web
```

Or

```bash
$ node web/scripts/start.js
```

## Discussion

If you have any suggestions or questions about this project, you can discuss it by [Telegram][telegram-url] or my private wechat.

![](http://blankapp.org/assets/images/wechat_qrcode.png)

## License

```
MIT License

Copyright (c) 2017 JianyingLi <lijy91@foxmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
