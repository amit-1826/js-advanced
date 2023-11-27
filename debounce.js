let count= 0 ;

function showCount() {
    count++;
    console.log({'count': count});
}

function debounce(callback, time) {
    return function(){
        setTimeout(callback, time);
    }
}

let showCountDebounced = debounce(showCount, 4000);
showCountDebounced();

