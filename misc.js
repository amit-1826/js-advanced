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
  length: 3, // third element will be value undefined
};

const arr = Array.from(obj);
console.log(arr);

// for an object to be an object

// 1. must have key as string or symbol
// 2. enumerable or non-enumerable  (can be changed or not, hidden or not, example, length property of array)
const object1 = {};
Object.defineProperty(object1, "property1", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 45,
});
console.log(object1);

function closure() {
  let count = 0;
  document.getElementById("btn").addEventListener("click", function () {
    count++;
    console.log("button called", count);
  });
}

closure();

function addString(inputTxt, outputTxt) {
  let str = "";
  return function () {
    str += " " + document.getElementById(inputTxt).value;
    document.getElementById(inputTxt).value = "";
    document.getElementById(outputTxt).innerText = str;
  };
}

const strAdder1 = addString("text1", "text-output1");

let sayHello = function fx(user) {
  // named functional expression

  if (user) {
    return "hello " + user;
  } else {
    return fx("anonymous");
  }
};

// this can help in case where sayHello is re-assiged to something

let sayHi = sayHello;
sayHello = null;
sayHi();
