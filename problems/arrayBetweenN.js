/* 
Write a JavaScript function to generate an array between two integers of 1 step length.
 */

function createArray(initialStep, uptoStep) {
  const result = [];
  while (initialStep <= uptoStep) {
    result.push(initialStep++);
  }
  return result;
}

console.log(createArray(-4, 7));
