let button = document.createElement("button");
button.innerText = "Click me!";
button.style.backgroundColor = "red";
button.style.color = "white";

document.querySelector("body").prepend(button);

let p = document.querySelector("p");
p.classList.add("newClass");
