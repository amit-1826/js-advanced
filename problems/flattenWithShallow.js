/* 
Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened to a single level.
 */
// console.log(flatten([1, [2], [3, [[4]]],[5,6]])); -> [1, 2, 3, 4, 5, 6]
// console.log(flatten([1, [2], [3, [[4]]],[5,6]], true)); -> [1, 2, 3, [[4]], 5, 6]

function flatten(arr, isShallow) {
  if (isShallow) {
    return arr.flat();
  }
  return flatArray(arr);
}

function flatArray(array, result) {
  if (!result) {
    result = [];
  }
  if (Array.isArray(array)) {
    array.forEach((element) => {
      if (Array.isArray(element)) {
        flatArray(element, result);
      } else {
        result.push(element);
      }
    });
  }
  return result;
}

console.log(flatten([1, [2], [3, [[4]]], [5, 6]]));
