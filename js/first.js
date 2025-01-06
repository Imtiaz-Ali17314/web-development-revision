// Functions        ==>  Array Methods
// Practice Q1

let marks = [45, 67, 90, 89, 96, 99, 45, 97, 84, 91];
console.log(marks);

const topMarks = marks.filter((val) => {
  return val >= 90;
});
console.log(topMarks);

// Practice Q2

let n = prompt("Enter a number: ");

let arr = [];
for (i = 1; i <= n; i++) {
  arr[i - 1] = i;
}
console.log("User array: ", arr);

// sum of all numbers in the array.

let sumOfArrar = arr.reduce((prev, curr) => {
  return prev + curr;
});
console.log("Sum of all numbers in the array: ", sumOfArrar);

// Product of all numbers(Factorial) in the array.

let factorial = arr.reduce((prev, curr) => {
  return prev * curr;
});
console.log("Factorial: ", factorial);
