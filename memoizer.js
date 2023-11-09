function heavy(x) {
    console.log('heavy: ', x);
    return 'heavy: ' + x;
}

function memoizer(Fx) {

    const map = new Map();

    return function(x) {

        if (map.has(x)) {
            return map.get(x)
        } else {
            const result = Fx(x);
            map.set(x, result);
            return result;
        }

    }
}

const memoized = memoizer(heavy);

memoized(4);
memoized(3);
memoized(4);

