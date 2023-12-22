function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(1)(2));

///////////////////////////////////////

let x = 1;

function func() {
  console.log(x); // ?
  let x = 2;
}

func();
