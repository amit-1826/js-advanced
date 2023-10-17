// iterables are generalization of array. To create an object an iterable so that it can use for...of loop

// example: 

let range = {
    from: 1,
    to: 5
}
// now if we want to print number from 1,2,3,4,5 using for...of loop, we need to make it iterable

// 1. call to for..of initially calls this
range[Symbol.iterator] = function() {

    // ...it returns the iterator object:
    // 2. Onward, for..of works only with the iterator object below, asking it for next values
    return {
      current: this.from,
      last: this.to,
  
      // 3. next() is called on each iteration by the for..of loop
      next() {
        // 4. it should return the value as an object {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  };
  
  // now it works!
  for (let num of range) {
    alert(num); // 1, then 2, 3, 4, 5
  }