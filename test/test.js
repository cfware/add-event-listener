import test from 'ava';

import addEventListener from '..';

test('addEventListener is a function', t => {
	t.is(typeof addEventListener, 'function');
});

test('lifecycle', t => {
	const cb = () => {};
	const owner1 = {
		adds: 0,
		removes: 0,
		addEventListener(type, fn, capture) {
			t.is(this, owner1);
			t.is(this.adds, 0);
			t.is(this.removes, 0);
			this.adds++;
			t.is(type, 'test1');
			t.is(fn, cb);
			t.is(typeof capture, 'undefined');
		},
		removeEventListener(type, fn) {
			t.is(this, owner1);
			t.is(this.adds, 1);
			t.is(this.removes, 0);
			this.removes++;
			t.is(type, 'test1');
			t.is(fn, cb);
		}
	};
	const owner2 = {
		addEventListener(type, fn, capture) {
			t.is(type, 'test2');
			t.is(fn, cb);
			t.true(capture);
		},
		removeEventListener() {}
	};

	const remover1 = addEventListener(owner1, 'test1', cb);
	const remover2 = addEventListener(owner2, 'test2', cb, true);
	remover1();
	remover2();

	t.is(owner1.adds, 1);
	t.is(owner1.removes, 1);
});
