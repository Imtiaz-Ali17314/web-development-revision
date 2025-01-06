// Functions Methods ===>  Filter function in Array
// filter function check all indices of array and create a new array for elements that give true value for a filter/ condition.

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr);

let evenArr = arr.filter((val) => {
  return val % 2 === 0;
});

console.log("Even numbers in array ", evenArr);
