// your code here
function counterFn() {
  let counter = 0;

  /*  this.reset = () => {
    counter = 0;
  }; */

  return function () {
    counter++;

    this.reset = function () {
      counter = 0;
    };

    return counter;
  };
}

let count = new counterFn();
console.log(count());
console.log(count());
console.log(counterFn);
console.log(count.reset());
console.log(count());
/* console.log(count.reset()); */
