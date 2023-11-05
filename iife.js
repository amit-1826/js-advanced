(function(){
    var x = 2;
})();

//console.log(x); // error x is not defined

// var is not block scoped
{
    var b = 3;
}

// var is function scoped
function notProtected() {
    var a = 1;
}

notProtected();

//console.log(a); // error, a is not defined

console.log(b);  // b