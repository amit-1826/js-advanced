// Output: 0 for all buttons

/* for(var i = 0; i<5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button' + i));
    btn.addEventListener('click', function(){ console.log(i); })
    document.body.appendChild(btn);
} */



// Array like
const obj = {
    0: 1,
    1: 2,
    length: 3 // third element will be value undefined
}

const arr = Array.from(obj);
console.log(arr);



// for an object to be an object

// 1. must have key as string or symbol
// 2. enumerable or non-enumerable  (can be changed or not, hidden or not, example, length property of array)
const object1 = {};
Object.defineProperty(object1, 'property1', {enumerable: true, configurable: true, writable: true, value: 45});
console.log(object1);

