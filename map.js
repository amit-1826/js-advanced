const map = new Map();

const obj = {
    name: 'Amit',
    age: 25
}

map.set('stringKey', 123);
map.set(123, 'stringValue');
map.set(obj, 'Hello');

console.log(map.get(obj));

console.log(map.has('stringKy'));

console.log(map.entries());

console.log(map.values());

console.log(map.keys());

console.log(map.size);



// Object to Map

let m = new Map(Object.entries(obj));
console.log(m);

// Map to Object

let obj2 = Object.fromEntries(m);
console.log(obj2);