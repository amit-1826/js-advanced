class User{
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName
    }

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    set fullName(_fullName) {
        this.firstName = _fullName.split(' ')[0];
        this.lastName = _fullName.split(' ')[1];
    }
}

const userInstance = new User('Amit', 'Dubey');

userInstance.fullName = 'John Wick';
console.log(userInstance.fullName);

//////////////  this issue   /////////////////////////////////

class Button{
    constructor(value) {
        this.value = value;
    }

    click() {
        console.log('btn clicked', this.value);
        return this.value;
    }
}

const btn = new Button('play');

// works
// btn.click();


// works
/* setTimeout(() => {
    btn.click();
}, 1000); */
 

// does not work
//setTimeout(btn.click, 1000);


// works
setTimeout(btn.click.bind(btn), 1000);
