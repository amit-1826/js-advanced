const array1 = [1,2,3,4,[5,6]];

// [5,6] // 5,6

// [1,2,3,4,[5,6]],

function flatten(input) {
    return input.map((element) => {
        if (Array.isArray(element)) {
            return flatten(element);
        }else {
            return element;
        }
    })
}

console.log(flatten(array1));

// 1, 2,3,4

// 1,2,3,4,[5,6]