// Functions Methods ===>  Reduce function in Array
// Reduce function perform some operations and reduce the array into a single value. it retruns a single value.

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr);

let largestNo = arr.reduce((prev, curr) => {
  return prev > curr ? prev : curr;
});
console.log("Largest number in the array ", largestNo);

let sumArr = arr.reduce((prev, curr) => {
  return prev + curr;
});
console.log("Sum of all numbers in the array ", sumArr);
