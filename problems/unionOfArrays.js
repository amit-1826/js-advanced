/* 
Write a JavaScript program to compute the union of two arrays.
console.log(union([1, 2, 3], [100, 2, 1, 10]));
[1, 2, 3, 10, 100]
 */

function union(arr1, arr2) {
  return Array.from(new Set([...arr1, ...arr2]));
}

console.log(union([1, 2, 3], [100, 2, 1, 10]));
