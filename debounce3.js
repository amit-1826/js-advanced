const input = document.getElementById("db3Input");
const output = document.getElementById("db3Output");

input.addEventListener(
  "keydown",
  debounce(function (event) {
    output.innerText += input.value;
    console.log(event?.key);
  })
);

function debounce(fn, timeout = 300) {
  let timer;
  return (args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, timeout, args);
  };
}
