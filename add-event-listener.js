export default (owner, ...args) => {
    owner.addEventListener(...args);

    return () => owner.removeEventListener(...args);
};
