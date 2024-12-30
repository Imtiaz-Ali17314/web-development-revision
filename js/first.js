// Logical Operators
// Logical AND &&        Logical OR ||         Logical NOT !

let a = 12;
let b = 5;

console.log("12 > 5 && b = 5", a > b && b === 5); // True

console.log("12 > 5 && b = 6", a > b && b === 6); // False

console.log("12 > 5 || b = 6", a > b || b === 6); // True

console.log("12 = 5 || b = 6", a == b && b === 6); // False

console.log("!( a = b )", !(a == b)); // True

console.log("!( a > b )", !(a > b)); // False
