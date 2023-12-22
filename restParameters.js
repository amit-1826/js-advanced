// rest parameter
function showAll(a, b, ...rest) {
  console.log(a);
  console.log(b);
  console.log(rest);
  console.log(rest.length);
}
showAll("Apple", "Guava", "Kiwi", "Pineapple");

// rest arguments
const numbers = [1, 2, 3, 4, 5, 6];
console.log(Math.max(...numbers));

// arguments variable in a function

function showArguments() {
  console.log(arguments.length);
  console.log(arguments.callee);
}

showArguments("Kiwi", "Apple", "Pineapple");
