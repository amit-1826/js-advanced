function throttle(fx, ms) {
  let args = [];
  let timeoutId = null;

  return function (a) {
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        fx(args[-1]);
        timeoutId = null;
      }, ms);
    }
    args.push(a);
  };
}

document.addEventListener(
  "scroll",
  throttle((e) => {
    console.log(1);
  }, 1000)
);

// f1000 passes calls to f at maximum once per 1000 ms
//let f1000 = throttle(f, 1000);

//f1000(1); // shows 1
//f1000(2); // (throttling, 1000ms not out yet)
//f1000(3); // (throttling, 1000ms not out yet)
