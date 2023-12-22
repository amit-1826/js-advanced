// Write a function fib(n) that returns the n-th Fibonacci number.

// 0 1 1 2 3 5 8 13 21

// Recursive Approach
function fib1(n) {
  return n <= 1 ? n : fib1(n - 1) + fib1(n - 2);
}

//Iterative Approach
function fib2(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fib2(4)); // 3
