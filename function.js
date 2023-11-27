/* 
js - synchronous singlethreaded lang
hoisting - accessing the vriable anf functio before those are declared. memory is allocated because of memory allocation phase in global execution content
scope - local memory where the raviable is accessible
lexical envirinmeny - local memory + lecical env of parent
scope chain - chain of lexical environment
TDZ - phase between variable are being accessed and variable are being assigned value. Between hoisting to initialization.
Block - group of statements. Example 'if' statement

*/

var x = 1;
a();
b();
console.log(x);


let g = 1;
console.log(g);
function a() {
    var x = 10;
    console.log(x);
}

function b() {
    var x = 100;
    console.log(x);
}


String.prototype.reverse = function() {
    return this.split('').reverse().join('');
}

console.log('abcde'.reverse());


function test() {
    console.log(a);
    console.log(foo());

    var a = 1;
    function foo() {
        return 2;
    }
}

test();