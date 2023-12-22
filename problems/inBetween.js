/* 
Make a set of “ready to use” filters:

inBetween(a, b) – between a and b or equal to them (inclusively).
inArray([...]) – in the given array.

arr.filter(inBetween(3,6)) – selects only values between 3 and 6
arr.filter(inArray([1,2,3])) – selects only elements matching with one of the members of [1,2,3]
*/

function inBetween(a, b) {
  return function (x) {
    return a < x && x < b;
  };
}

function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];

const filteredBetween = arr.filter(inBetween(3, 6));
console.log(filteredBetween);

const filteredInArray = arr.filter(inArray([1, 2, 3]));
console.log(filteredInArray);
