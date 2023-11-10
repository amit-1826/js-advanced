const object1 = {
    name: 'Amit',
    heavy: function heavy(x) {
        console.log('heavy: ', x, this.name);
        return 'heavy: ' + x;
    }
}

function memoizer(Fx) {

    const map = new Map();

    return function(x) {
        if (map.has(x)) {
            return map.get(x)
        } else {
            const result = Fx.call(this,x);
            map.set(x, result);
            return result;
        }

    }
}

object1.memoized = memoizer(object1.heavy);

object1.memoized(4);

