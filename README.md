# React Test Attributes

[![Version](https://badgen.net/npm/v/react-test-attributes)](https://www.npmjs.com/package/react-test-attributes/v/latest)
[![Last Commit](https://badgen.net/github/last-commit/dennismorello/react-test-attributes)](https://github.com/dennismorello/react-test-attributes/commits/master)
[![Downloads](https://badgen.net/npm/dt/react-test-attributes)](https://www.npmjs.com/package/react-test-attributes/v/latest)
[![Size](https://badgen.net/bundlephobia/minzip/react-test-attributes)](https://bundlephobia.com/result?p=react-test-attributes@latest)
[![License](https://badgen.net/npm/license/react-test-attributes)](https://www.npmjs.com/package/react-test-attributes/v/latest)

[React Test Attributes](https://github.com/dennismorello/react-test-attributes) is a library for React apps that decorates the DOM with custom attributes that can be used to uniquely indentify elements in a page. The main use case is for E2E testing using tools like [Cypress](https://www.cypress.io) or [Selenium](https://selenium.dev).

## Table Of Contents

- [Features](#features)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Usage](#usage)
- [License](#license)

## Features

- 🏷 **TypeScript support** - It is written in TypeScript to make it easier and faster to use the library
- 🍃 **Lightweight** - Almost zero footprint on your project and no other dependencies required
- 🚀 **Production mode** - `data-*` attributes are added to the DOM only when not in production mode
- 🌳 **Tree-shakeable** - Only the parts you use will be included in your final bundle

## Installation

To add this package as a dependency to your app, simply run

```sh
npm install react-test-attributes --save
```

or, if you are using Yarn (as I strongly suggest):

```sh
yarn add react-test-attributes
```

## Quick Start

Import [React Test Attributes](https://www.npmjs.com/package/react-test-attributes) to your React component:

```js
import Test from 'react-test-attributes';
```

Then simply wrap the components you want to decorate:

```jsx
<Test id="btn-submit">
  <button>Sumbit</button>
</Test>
```

The resulting DOM will be the following, depending on the value of `NODE_ENV` environment variable when your project is built:

```html
<!-- NODE_ENV != "production" -->
<button data-test-id="btn-submit">Submit</button>

<!-- NODE_ENV == "production" -->
<button>Submit</button>
```

### Usage

You can customize both the name and the value of the `data-*` attribute:

- `suffix` is the string to append to `"data-"` when building the attribute name (default to `"test-id"`)
- `id` is the value of the added attribute

For example, if you want to name the attribute `data-tid` and give it the value `"link-home"` you should write:

```jsx
<Test id="link-home" suffix="tid">
  <a href="/home">Home</a>
</Test>
```

## License

Project source code is licensed under the MIT license. You are free to fork this repository, edit the code, share and use it both for non-commercial and commercial purposes.
