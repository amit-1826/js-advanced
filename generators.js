function* generatorFunction() {
    yield 'Hello'
    yield 'World'
}

// this create an iterable with elements which are yielded
const generatorObject = generatorFunction();

for (const iterator of generatorObject) {
    console.log(iterator);
}
