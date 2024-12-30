// Comparison Operators
// Equal to ==
// Not equal to !=
// Equal to & type ===
// Not equal to & type !==
// >, >=, <, <=

let a = 12;
let b = 5;
let c = "12";

// Compare Value of a and b only. its answer will be only in true or false
console.log("12 == 5", a == b); //false

// Compare Value of a and b only. its answer will be only in true or false
console.log("12 != 5", a != b); //True

// Compare Value only js converts string into number first then compare
console.log("12 == '12'", a == c); //true

// Compare Value and also compare its data type
console.log("12 === '12'", a === c); //false

// Compare Value and also compare its data type
console.log("12 !== '12'", a !== c); //True

// Compare Value Greater then
console.log("12 > 5", a > b); //True

// Compare Value Less then
console.log("12 < 5", a < b); //False

// Compare Value Greater then and equal to
console.log("12 >= 5", a >= b); //True

// Compare Value Less then and equal to
console.log("12 <= 5", a <= b); //False
