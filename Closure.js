function outer() {
    let counter = 0;
    function inner() {
        counter++;
        console.log(counter);
    }
    return inner;
}
let innerFunction = outer();
innerFunction(); // 1 -> hold the variable value and its scope
innerFunction(); // 2



function addString(txtId, pId) {
    let txt = '';
    return () => {
        txt += ' ' + document.getElementById(txtId).value;
        document.getElementById(txtId).value = '';
        document.getElementById(pId).innerText = txt;
    }
}

const addString1 = addString('txt1', 'p1');
