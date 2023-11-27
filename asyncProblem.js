function sum(a,b) {
    if (a<0 || b<0) {
        return ['Input is not correct', null];
    }
    console.log('sum', a + b);
    return [null, a + b];
}

const asyncFx = (a,b, cb) => setTimeout(() => {
    cb(...sum(a,b));
}, 2000);

asyncFx(-4,5, function(error, result){
    if (!error) {
        console.log({result}); // return result of function sum
    } else {
        console.log({error});
    }
})


