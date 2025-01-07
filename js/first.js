let divs = document.querySelectorAll(".box");
console.log(divs);

// div[0].innerText = "Unique value 1";
// div[1].innerText = "Unique value 2";
// div[2].innerText = "Unique value 3";

let indx = 1;
for (div of divs) {
  div.innerText = `new unique value is ${indx}`;
  indx++;
}
