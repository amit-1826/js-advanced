function* generatorFunction() {
    yield 'Hello'
    yield 'World'
    // return 'End' // return statement will end the generator with {value: 'End', done: true}
}

// this create an iterable with elements which are yielded
const generatorObject = generatorFunction();

for (const iterator of generatorObject) {
    console.log(iterator);
}


function* range(start, end) {
    for(let value = start; value <= end; value++) {
        yield value
    }
}

for (let val of range(0, 5)) {
    console.log(val); 
}



//////////// Generator composition

function* range1(start, end){
    for(let value = start; value <= end; value++) {
        yield value;
    }
}

function* multiGenerator() {
    yield* range1(0,4);
    yield* range1(10,14);
    yield* range1(50,54);
}


const grObj = multiGenerator()

for(let gValue of grObj) {
    console.log(gValue);
}