/* 
Write a JavaScript function to find the difference between two arrays.
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
["6"]
 */

function flatArray(array, result) {
  return array.toString().split(",").map(Number);
}

function difference(arr1, arr2) {
  const array1 = flatArray(arr1);
  const array2 = flatArray(arr2);
  let result1 = array1.filter((item) => !array2.includes(item));
  let result2 = array2.filter((item) => !array1.includes(item));
  return [...result1, ...result2];
}
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));
