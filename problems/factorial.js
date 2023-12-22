function findFact(n) {
  return n <= 1 ? 1 : n * findFact(n - 1);
}

console.log(findFact(5));
