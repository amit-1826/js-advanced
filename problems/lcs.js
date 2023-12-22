function lcs(string1, string2) {
  let result = "";
  let string2LastIndex = -1;
  for (let i = 0; i < string1.length; i++) {
    string2 =
      string2LastIndex === -1
        ? string2.slice()
        : string2.slice(++string2LastIndex);
    string2LastIndex = string2
      .split("")
      .findIndex((item, index) => item === string1.charAt(i));
    if (string2LastIndex !== -1) {
      result += string1.charAt(i);
    } else {
      string2LastIndex = -1;
    }
  }
  return result;
}

console.log(lcs("SQLInjection", "SQLTutorial"));

console.log(lcs("ABAZDC", "BACBAD"));

console.log(lcs("AGGTAB", "GXTXAYB"));
