/* 
Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.
input: [10,20,10,40,50,60,70], target=50
output: 2, 3
 */

function findIndices(array, target) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        result = [i, j];
      }
    }
  }
  return result;
}

console.log(findIndices([10, 20, 10, 40, 50, 60, 70], 50));
