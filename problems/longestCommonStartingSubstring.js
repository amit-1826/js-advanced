// Write a JavaScript function to find the longest common starting substring in a set of strings.
// console.log(longestCommonStartingSubstring(['go', 'google'])) -> "go"

function longestCommonStartingSubstring(arrayOfStrings) {
  const firstString = arrayOfStrings[0];
  const secondString = arrayOfStrings[1];
  let result = "";
  for (let i = 0; i < firstString.length; i++) {
    if (firstString.charAt(i) === secondString.charAt(i)) {
      result += firstString.charAt(i);
    }
  }
  return result;
}

console.log(longestCommonStartingSubstring(["go", "google"]));
console.log(longestCommonStartingSubstring(["SQLInjection", "SQLTutorial"]));
console.log(longestCommonStartingSubstring(["abcd", "1234"]));
