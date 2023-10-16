// Nested function scope - lexical scoping

let a = 10;
function outer() {
    let b = 20;
    function inner() {
        let c = 30;
        console.log(a,b,c);
    }
    // console.log(a,b,c); // error, c not defined
    inner();
}
// console.log(a,b,c); // error, b and c not defined
outer();