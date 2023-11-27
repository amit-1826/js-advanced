function undefinedToNull(data) {

    // array -> loop through the elements check if undefined change it to null
    if (Array.isArray(data)) {
        return convertArray(data);
    } else if (data === null) {
        return data;
    } else if (typeof data === 'object') {
        return convertObject(data);
    } else if (data === undefined) {
        return null;
    } else {
        return data;
    }
}

// a: [1,4, undefined, {abc: undefned}, [{a: 1, b: 2, c: undefined}]]
function convertArray(data) {
    return data.map((element) => {
        return undefinedToNull(element);
    })
}

function convertObject(data) {
    // {name: undefined, abc: 123}
    Object.keys(data).forEach(key => {
        data[key] = undefinedToNull(data[key]);
    });

    return data;
}

console.log(undefinedToNull([1,4, undefined, {abc: undefined}, [{a: 1, b: 2, c: undefined}]]));


// Object.prototype.toString(yourObject) -> "[object Array]"

