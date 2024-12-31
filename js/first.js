// Arrays

// Paractice Q1

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;

for (val of marks) {
  sum += val;
}

console.log(sum);
console.log(marks.length);
let avg = sum / marks.length;

console.log(`The average marks of class = ${avg}`);
