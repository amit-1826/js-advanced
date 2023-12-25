/* 
Write a JavaScript function to generate an array of integer numbers, increasing one from the starting position, of a specified length.
 */

function fillRange(initialRange, fillUpto) {
  const result = [];
  while (fillUpto > 0) {
    result.push(initialRange++);
    fillUpto--;
  }
  return result;
}

console.log(fillRange(-6, 4));
