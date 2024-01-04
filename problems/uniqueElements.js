/* 
Write a JavaScript function to find unique elements in two arrays.

console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
["1", "2", "3", "4", "5", "6"]
 */

function difference(arr, arr2) {
  return Array.from(
    new Set([...arr, ...arr2].toString().split(",").map(Number))
  );
}

console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));
