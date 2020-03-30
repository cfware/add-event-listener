# @cfware/add-event-listener

![Tests][tests-status]
[![Greenkeeper badge][gk-image]](https://greenkeeper.io/)
[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![MIT][license-image]](LICENSE)

Calls owner.addEventListener and returns a function to remove the listener.

### Install @cfware/add-event-listener

This module requires node.js 8 or above.

```sh
npm i --save @cfware/add-event-listener
```

## Usage

```js
import addEventListener from '@cfware/add-event-listener';

class MyElement extends HTMLElement {
	connectedCallback() {
		this._cleanupFn = addEventListener(window, 'click', () => console.log('click'));
	}

	disconnectedCallback() {
		this._cleanupFn();
	}
}
```

## Running tests

Tests are provided by xo and ava.

```sh
npm install
npm test
```

[npm-image]: https://img.shields.io/npm/v/@cfware/add-event-listener.svg
[npm-url]: https://npmjs.org/package/@cfware/add-event-listener
[tests-status]: https://github.com/cfware/add-event-listener/workflows/Tests/badge.svg
[gk-image]: https://badges.greenkeeper.io/cfware/add-event-listener.svg
[downloads-image]: https://img.shields.io/npm/dm/@cfware/add-event-listener.svg
[downloads-url]: https://npmjs.org/package/@cfware/add-event-listener
[license-image]: https://img.shields.io/npm/l/@cfware/add-event-listener.svg
