/* 
Write the function byField that can be used for sorting array of objects by given field
*/

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

function sortByField(fieldName) {
  return function (a, b) {
    return a[fieldName] > b[fieldName] ? 1 : -1;
  };
}

// using arrow function
const sortByFieldArrow = (fieldName) => (a, b) =>
  a[fieldName] > b[fieldName] ? 1 : -1;

const filteredByName = users.sort(sortByFieldArrow("name"));
console.log(filteredByName);
const filteredByAge = users.sort(sortByFieldArrow("age"));
console.log(filteredByAge);
