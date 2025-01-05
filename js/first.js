// Functions

count = 0;
function countVoweles(str) {
  for (val of str) {
    console.log(val);
    if (
      val === "a" ||
      val === "e" ||
      val === "i" ||
      val === "o" ||
      val === "u" ||
      val === "A" ||
      val === "E" ||
      val === "I" ||
      val === "O" ||
      val === "U"
    ) {
      count++;
    }
  }
  console.log(count);
}
countVoweles("ImtiazAli");

count = 0;
const arrowFun = (str) => {
  for (val of str) {
    if (
      val === "a" ||
      val === "e" ||
      val === "i" ||
      val === "o" ||
      val === "u" ||
      val === "A" ||
      val === "E" ||
      val === "I" ||
      val === "O" ||
      val === "U"
    ) {
      count++;
    }
  }
  console.log(count);
};

arrowFun("Hello world! i love js");
