let start = performance.now();
console.log(sumArray([1,2 ,3,4,5,6]));
let end = performance.now();
console.log(end-start);

/* function sumUp(n) {
    let result = 0;
    for (let index = 0; index <= n; index++) {
        result += index;
    }
    return result;
} */

/* function sumUp(n) {
    return (n/2) * (1+n);
} */

function sumArray(array) {
    let result = 0; // 1
    for(let i=0; i<array.length; i++) {  // 1
        result += array[i];  // n
    }
    return result; // 1
}

// T = 1+1+n+1 = 3+n
// T = n
