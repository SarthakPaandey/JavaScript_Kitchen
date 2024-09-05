function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args); 
        if (cache[key] !== undefined) {
            return cache[key];
        }
        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}



const fib = memoize(function(n) {
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
});
console.log(fib(10));
