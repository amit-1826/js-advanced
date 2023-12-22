/* function createOrder(cb) {
  function cb1() {
    console.log("CB1 Called");
  }
  cb(cb1);
}

function anotherOrder(cb1) {
  console.log("Callback called");
  cb1();
}

createOrder(anotherOrder); */

/* createOrder(item, function () {
  makePayment(orderId, function () {
    viewOrder();
  });
}); */

/* const GITHUB_API = "https://api/github.com/users/amit-1826";

const userPromise = fetch(GITHUB_API);

console.log(userPromise);

userPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  }); */

function createOrder(cartArray) {
  return new Promise((resolveCallback, rejectCallback) => {
    if (cartArray.length) {
      setTimeout(() => {
        resolveCallback("21fe43");
      }, 2000);
    } else {
      rejectCallback("Error: Please add items in cart");
    }
  });
}

function proceedToPayment(orderId) {
  return new Promise((resolveCallback, rejectCallback) => {
    if (!!orderId) {
      setTimeout(() => {
        resolveCallback({ name: "Amit", orderId });
      }, 2000);
    } else {
      rejectCallback("Error: Order ID is not provided");
    }
  });
}

const cart = ["pen", "pencil", "eraser"];

const createOrderPromise = createOrder(cart);

createOrderPromise
  .then((orderId) => {
    return proceedToPayment(orderId);
  })
  .then((paymentDetails) => {
    console.log(paymentDetails);
  })
  .catch((error) => {
    console.log(error);
  });
///////////////////////////////////////////////////////
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p1"), 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p2"), 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p3"), 2000);
});

Promise.all([p1, p2, p3])
  .then((response) => {
    console.log("Promise all: Result", response);
  })
  .catch((error) => {
    console.log("Promise all: Error", error);
  });

Promise.any([p1, p2, p3])
  .then((response) => {
    console.log("Promise Any: Result", response);
  })
  .catch((error) => {
    console.log("Promise Any: Error", error);
  });

Promise.allSettled([p1, p2, p3])
  .then((response) => {
    console.log("Promise allSettled: Result", response);
  })
  .catch((error) => {
    console.log("Promise allSettled: Error", error);
  });

Promise.race([p1, p2, p3])
  .then((response) => {
    console.log("Promise race: Result", response);
  })
  .catch((error) => {
    console.log("Promise race: Error", error);
  });
