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


const log = time => type => msg => `At: ${time},  Severity: ${type} => ${msg}`;

// Above function can be written as 

/* function log(time) {
    return function(type) {
        return function(msg) {
            return `At: ${time},  Severity: ${type} => ${msg}`;
        }
    }
} */

console.log(log(new Date())('Error')('Unknown error'))