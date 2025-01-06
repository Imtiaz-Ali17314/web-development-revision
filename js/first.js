// Functions Methods ===>  map function in Array

// Map function is similar to forEach function. forEach function changes the actual array but map does not change actual array. it creates a new array and retrun its value.

let arr = [1, 2, 3, 4, 5, 6];
console.log(arr);

let newArr = arr.map((val) => {
  return val * val;
});
console.log(newArr);
