let div = document.querySelector("div"); // Access node --> div
console.log(div);

let id = div.getAttribute("id"); // Access id attribute value
console.log("Old Id: ", id);

div.setAttribute("id", "div1"); // Change id attribute value
id = div.getAttribute("id");
console.log("new Id: ", id);

let name = div.getAttribute("name"); // Access name attribute value
console.log("Old name: ", name);

div.setAttribute("name", "firstDiv"); // Change name attribute value
name = div.getAttribute("name");
console.log("new name: ", name);

let p = document.querySelector("p"); // Access node --> p
console.log(p);

let clas = p.getAttribute("class"); // Access class attribute value
console.log("old class: ", clas);

p.setAttribute("class", "paragraph"); // Change class attribute value
clas = p.getAttribute("class");
console.log("new class: ", clas);

p.style.color = "red"; // Change style with js
p.style.fontSize = "20px";
p.style.fontStyle = "italic";
div.style.backgroundColor = "green";
div.style.color = "white";
