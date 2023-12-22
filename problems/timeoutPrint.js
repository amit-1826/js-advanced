/* 
Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to
 */

// using setInterval
function printNumbers(from, to) {
  let timer = setInterval(() => {
    console.log(from);
    from++;
    if (from > to) {
      clearInterval(timer);
    }
  }, 1000);
}

// using settimeout
function printNumbersST(from, to) {
  let timer = setTimeout(() => {
    console.log(from);
    from++;
    if (from <= to) {
      printNumbersST(from, to);
    } else {
      clearTimeout(timer);
    }
  }, 1000);
}

printNumbersST(4, 10);
