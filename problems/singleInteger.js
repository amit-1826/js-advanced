// [10, 2, 2 , 1, 0, 0, 10]
function singleInteger(arr) {
    const obj = {};
    arr.forEach((element) => {
        if (obj[element]) {
            obj[element]++
        } else {
            obj[element] = 1;
        }
    })
    let result = null;
    Object.keys(obj).forEach((key) => {
        if (obj[key] === 1) {
            result = obj[key];
        } 
    })
    return result;
}

console.log(singleInteger([10, 2, 2 , 1, 0, 0, 10]));