// Currying in JavaScript transforms a function with multiple arguments into a nested series of functions, each taking a single argument. 

/* function sum(a,b,c) {
    return a+b+c;
} */



sum = (a) => {
    return (b) => {
        return (c) => {
            return a + b+c;
        }
    }
}

console.log(sum(1)(2)(3));