const iterable = {
    start: 0,
    end: 5,
    [Symbol.iterator]() {
        let start = this.start;
        let end = this.end;
        return {
            next: () => {
                return {value: start, done: start++ > end}
            }
        }
    }
}

for (const iterator of iterable) {
    console.log(iterator);
}

const arr = [1,2,3];
const arriterator = arr[Symbol.iterator]();
console.log(arriterator.next()); // {value: 1, done: false}
console.log(arriterator.next()); // {value: 2, done: false}
console.log(arriterator.next()); // {value: 3, done: false}
console.log(arriterator.next()); // {value: undefined, done: true}