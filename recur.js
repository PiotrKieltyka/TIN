var cached = function (cache, proc) {
    return function F(n) {
        if (cache[n] !== undefined) {
            return cache[n];
        } else {
            cache[n] = proc(F, n);
        }
        return cache[n];
    };
};