// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n

// Recursive Approach
function sumToR(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + sumToR(n - 1);
  }
}

// Iterative Approach
function sumToI(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}

// Arithmetic Progression Approach
function sumToAP(n) {
  return (n * (1 + n)) / 2;
}

console.log(sumToAP(100));
