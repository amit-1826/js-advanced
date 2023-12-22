// Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.

function getLastElement(arr, n) {
  if (!n) {
    return arr.at(-1);
  }
  return arr.slice(-n);
}

console.log(getLastElement([7, 9, 0, -2]));
console.log(getLastElement([7, 9, 0, -2], 3));
console.log(getLastElement([7, 9, 0, -2], 6));
