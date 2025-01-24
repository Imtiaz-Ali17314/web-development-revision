const URL = "https://dog.ceo/api/breeds/list/all";
const para = document.querySelector("#table");

let dogData = [];
const getDogPics = async () => {
  console.log("getting data .... ");
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  dogData = data.message.terrier;
  for (let data of dogData) {
    para.innerHTML =
      para.innerHTML + "<ul><li><tr><td>" + data + "</td></tr></li></ul>";
  }
};

getDogPics();
