// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.
// 025468 ->  0-254-6-8
function addDash(n) {
  const originalStr = n.toString();
  let result = [];
  for (let i = 0; i < originalStr.length; i++) {
    if (originalStr[i] % 2 === 0 && originalStr[i - 1] % 2 === 0) {
      result.push("-", originalStr[i]);
    } else {
      result.push(originalStr[i]);
    }
  }
  return result.join("");
}

console.log(addDash("025468"));

console.log(addDash(2543682368));
