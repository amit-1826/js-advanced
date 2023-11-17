const animal = {
    eats: true,
    walks: () => {
        console.log('walks');
    }
}

const dog = {
    barks: true
}

const myDog = {
    name: 'Tiger'
}

myDog.__proto__ = dog;
dog.__proto__ = animal;

myDog.walks();

// updating prototype of current object does not override parent object property values

console.log(myDog);

// for...in loop also provides key of parent prototypes as well, but Object.jeys and Object.values iterates over current object only

for (const key in myDog) {
    console.log(key);  // will also console mydog, dog and animal keys
}

for(let value of Object.keys(myDog)) {
    console.log(value);
}

///////////////////////

console.log(String.prototype);

const str = 'Hello';
console.log(str);
const str1 = new String('Hello')
console.log(str1);



function User(name){
    this.name = name
}

let user = new User('john');
