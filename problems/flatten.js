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

console.log(flatten([1, 2, 3, [5, 6, [8, 9]], 23]));
