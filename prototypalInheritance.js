// Using Object

/* let animal = {
    eats: true,
    walk() {
      // this method won't be used by rabbit 
    }
  };
  
  let rabbit = {
    __proto__: animal
  };
  
  rabbit.walk = function() {
    alert("Rabbit! Bounce-bounce!");
  };
  
  rabbit.walk(); // Rabbit! Bounce-bounce!

 */

// Using function

function Person(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
}
Person.prototype.fullName = function() {
    return this.firstName + ' ' + this.lastName;
}

function Man(fName, lName) {
    Person.call(this, fName, lName);
    isPerson = true
}

Man.prototype.walk = function() {
    console.log('walking');
}

Man.prototype = Object.create(Person.prototype);

const man1 = new Man('John', 'Wick');
console.log(man1.fullName());