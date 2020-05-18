# @cfware/add-event-listener [![NPM Version][npm-image]][npm-url]

Calls owner.addEventListener and returns a function to remove the listener.

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


[npm-image]: https://img.shields.io/npm/v/@cfware/add-event-listener.svg
[npm-url]: https://npmjs.org/package/@cfware/add-event-listener
