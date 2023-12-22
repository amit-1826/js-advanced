// Write a function printList(list) that outputs list items one-by-one.

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// Recursive Approach
function printList(list) {
  if (list && list.value !== null) {
    console.log(list.value);
    printList(list.next);
  }
}

// Iterative Approach
function printListLoop(list) {
  let temp = list;
  while (temp) {
    console.log(temp.value);
    temp = temp.next;
  }
}

// Recursive Approach (Reverse Order)
function printListRR(list) {
  if (list.next !== null) {
    printListRR(list.next);
  }
  console.log(list.value);
}

// Iterative Approach (Reverse Order)
function printListLoopR(list) {
  let temp = list;
  const arr = [];
  while (temp) {
    if (temp.value) {
      arr.push(temp.value);
    }
    temp = temp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

printListLoopR(list);
