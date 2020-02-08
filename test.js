import t from 'libtap';

// eslint-disable-next-line import/no-unresolved
import addEventListener from '@cfware/add-event-listener';

t.type(addEventListener, 'function');

t.test('lifecycle', async t => {
	const callback = () => {};
	const owner1 = {
		adds: 0,
		removes: 0,
		addEventListener(type, fn, capture) {
			t.equal(this, owner1);
			t.equal(this.adds, 0);
			t.equal(this.removes, 0);
			this.adds++;
			t.equal(type, 'test1');
			t.equal(fn, callback);
			t.type(capture, 'undefined');
		},
		removeEventListener(type, fn) {
			t.equal(this, owner1);
			t.equal(this.adds, 1);
			t.equal(this.removes, 0);
			this.removes++;
			t.equal(type, 'test1');
			t.equal(fn, callback);
		}
	};
	const owner2 = {
		addEventListener(type, fn, capture) {
			t.equal(type, 'test2');
			t.equal(fn, callback);
			t.equal(capture, true);
		},
		removeEventListener() {}
	};

	const remover1 = addEventListener(owner1, 'test1', callback);
	const remover2 = addEventListener(owner2, 'test2', callback, true);
	remover1();
	remover2();

	t.equal(owner1.adds, 1);
	t.equal(owner1.removes, 1);
});
