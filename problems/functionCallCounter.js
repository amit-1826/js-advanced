function counter() {
  let count = 0;

  counter.setValue = function (value) {
    this.count = value;
  };

  counter.decrease = function () {
    this.count--;
  };

  return count;
}

counter();
counter();
counter.setValue(5);
counter.decrease();

console.log(`function counter is: ${counter.count}`);
