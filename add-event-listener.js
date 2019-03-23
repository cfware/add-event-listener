export default function addEventListener(owner, type, fn, capture) {
	owner.addEventListener(type, fn, capture);

	return () => owner.removeEventListener(type, fn);
}
