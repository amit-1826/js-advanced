/* for(var i=1; i<=5; i++) {
    setTimeout(() => {console.log(i);}, i * 1000);
} */

// Closure
/* for(var i=1; i<=5; i++) {
    function x(i) {
        setTimeout(() => {console.log(i);}, i * 1000);
    }
    x(i);
} */


// IIFE
/* for(var i=1; i<=5; i++) {
    (function(i){
        setTimeout(() => {
            console.log(i);
        }, i * 1000)
    })(i);
} */


// Block scoped
/* for(let i=0; i<5; i++) {
    setTimeout(() => {console.log(i);}, i * 1000);
} */
