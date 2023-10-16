// 'this' keyword refers to an object

// Implicit binding
const person = {
    name: 'Amit',
    sayName: function() {
        console.log(this.name); // here, this will refer to person object
    }
}

// person.sayName();


// Explicit Binding
function sayMyNameAgain() {
    console.log(this.name);  // this will refer to person object as it is binded while invoking the function
}

sayMyNameAgain.call(person); 
