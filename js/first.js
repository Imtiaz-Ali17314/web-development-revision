let mainHeading = document.createElement("h1"); // Create h1 heading at the top
mainHeading.innerText = "Hello! This is Java Script";
let body = document.querySelector("body");
body.prepend(mainHeading);

let itemList = document.createElement("p"); // Create paragraph in the div at top
itemList.innerText = "item list";
let ul = document.querySelector("ul");
ul.before(itemList);

let listBtn = document.createElement("button"); // Create button in div at bottom
listBtn.innerText = "Click me!";
document.querySelector("div").append(listBtn);

let btn = document.createElement("button"); // Create button at page bottom
btn.innerText = "Submit";
document.querySelector(".para").after(btn);

document.querySelector(".toRemove").remove(); // delete div at after listItem div

let div = document.querySelector("div"); // change height of div
div.style.height = "150px";
