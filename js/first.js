let div = document.querySelector("div");

let changeColor = (e) => {
  console.log(e.target);
  console.log(e.type);
  console.log(e.clientX);
  console.log(e.clientY);
};
div.addEventListener("mouseover", changeColor);

let body = document.querySelector("body");
let bodyClass = body.getAttribute("class");

let button = document.querySelector("button");
let currMode = "light";

button.addEventListener("click", (e) => {
  if (currMode == "light") {
    currMode = "dark";
    console.log(currMode);

    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    currMode = "light";
    console.log(currMode);

    body.classList.add("light");
    body.classList.remove("dark");
  }
});
