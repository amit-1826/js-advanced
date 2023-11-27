function reverseStr(name) {
    return name.split('').reverse().join('');
}

console.log(reverseStr('Amit'));


////////////////// using constructor function

function User(name) {
    this.name = name;
}

User.prototype.reverseString = function(){
    return this.name.split('').reverse().join('');
}

const user = new User('John');

console.log(user.reverseString());