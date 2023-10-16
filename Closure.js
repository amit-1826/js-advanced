function outer() {
    let counter = 0;
    function inner() {
        counter++;
        console.log(counter);
    }
    return inner;
}
let innerFunction = outer();
innerFunction(); // 1 -> hold the variable value and its scope
innerFunction(); // 2