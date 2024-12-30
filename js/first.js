// Loops
// Lect 3  Paractice Q 2  Guess game

let gameNum = "25";
let userNum = prompt("Enter your guess number: ");

while (userNum != gameNum) {
  userNum = prompt("You entered wrong number , Guess again. ");
}

console.log("Congratulations! You guess a correct number.");
