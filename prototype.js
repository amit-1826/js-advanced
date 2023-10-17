function Person(name, lastName) {
    this.firstName = name;
    this.lastName = lastName;
}

const person1 = new Person('John', 'Wick') // constructure function
const person2 = new Person('Bruce', 'Wayne') // constructure function

// any new property can be assigned to constructure function
// This will assign to only person1 object
person1.sayName = function() {
    console.log(this.firstName, this.lastName);
}

person1.sayName();
// person2.sayName(); // error

// To fix above scenarion, so that to include one proorty to all instances


// This will assign new property to all Person objects
Person.prototype.sayMyName = function() {
    console.log(this.firstName, this.lastName);
}

person1.sayMyName();
person2.sayMyName();