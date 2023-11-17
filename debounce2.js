

const textInput = document.getElementById('inputTxt');
const textOutput = document.getElementById('txtOuput1');

textInput.addEventListener('keyup', debounce(function(event) {
    console.log(textInput.value);
    textOutput.innerText = event.target.value;
}, 5000))

function debounce(f, timer) {
    let timeout = null;
    return function(x) {
        if (timeout) {
            clearTimeout(timeout);
        }
        // settimeout has third argument which is the paramters of the function to be executed
        timeout = setTimeout(f, timer, x);
    }
}
