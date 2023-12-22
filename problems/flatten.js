const results = [];

function flatten(array) {
  if (Array.isArray(array)) {
    array.forEach((element) => {
      if (Array.isArray(element)) {
        flatten(element);
      } else {
        results.push(element);
      }
    });
  }

  return results;
}

// Simpler version
/* function flat(arr) {
  return arr.toString().split(",").map(Number);
} */

console.log(flatten([1, 2, 3, [5, 6, [8, 9]], 23])); //  [1, 2, 3, 5, 6, 8, 9, 23]
