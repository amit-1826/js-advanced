// Global Space

// 'this' refers to global object or window
console.log(this); // Window

// Inside a function
// 'this' value depends on strict mode or non-strict mode
// if it is strict mode, 'this' value will be undefined
// if it is non-strict mode, ' this substitution ' will happen repalacing undefined and null with global object
function x() {
  console.log(this); // window in non-strict mode, undefined in strict mode
}
x();

// 'this' value depends on how the function is called
//Window.x(); // window

// Inside object method

const student = {
  name: "Amit",
  sayMyName: function () {
    console.log(this); // object student
  },
};

student.sayMyName();

// call apply and bind

function sayHelloWithName(surName) {
  console.log("Hello " + this.name + " " + surName); // undefined initially.
}

sayHelloWithName.call(student, "Dubey"); // now the value of 'this' will be student object

// Inside arrow function / nested arrow function
let obj = {
  name: "amit",
  sayName: function () {
    console.log(this.name); // amit
  },
  sayName2: () => {
    console.log(this.name); // undefined
  },
  sayName3: function () {
    const y = () => {
      console.log(this.name); // amit
    };
    y();
  },
};
obj.sayName3();

// 'this' keyword refers to an object

// Implicit binding
const person = {
  name: "Amit",
  sayName: function () {
    console.log(this.name); // here, this will refer to person object
  },
};

// person.sayName();

// Explicit Binding
function sayMyNameAgain() {
  console.log(this.name); // this will refer to person object as it is binded while invoking the function
}

sayMyNameAgain.call(person);
