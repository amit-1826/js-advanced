const newObj = {};

Object.defineProperty(newObj, "counter", {
  value: 1,
  writable: true,
  configurable: false,
  enumerable: true,
});
newObj.count = function () {
  return this.counter++;
};

console.log(newObj.count());
console.log(newObj.count());
newObj.counter = 34;
console.log(newObj.count());
