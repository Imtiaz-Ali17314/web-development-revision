// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("weather data");
//       resolve(200);
//     }, 2000);
//   });
// }

// async function getWeatherData(params) {
//   await api();
//   await api();
// }

// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data1");
//       resolve("success");
//     }, 2000);
//   });
// }

// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data2");
//       resolve("success");
//     }, 2000);
//   });
// }
// //  promise Chain
// console.log("fetching data1 .....");
// asyncFunc1().then((res) => {
//   console.log("fetching data2  .....");
//   asyncFunc2().then((res) => {});
// });

// const getNewPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("hy! I am a promise");
//     resolve("successfully");
//     // reject("network error");
//   });
// };

// let promise = getNewPromise();
// // if promise resolve
// promise.then((res) => {
//   console.log("fulFilled", res);
// });
// // if promise reject
// promise.catch((err) => {
//   console.log("rejected", err);
// });

function getData(idData, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data", idData);
      resolve("successfully get data");
      if (getNextData) {
        getNextData();
      }
    }, 2000);
  });
}

// Async await

// async function getAllData() {
//   console.log("fetching data1 ......");
//   await getData(1);
//   console.log("fetching data2 ......");
//   await getData(2);
//   console.log("fetching data3 ......");
//   await getData(3);
// }

// IIFE

(async function getAllData() {
  console.log("fetching data1 ......");
  await getData(1);
  console.log("fetching data2 ......");
  await getData(2);
  console.log("fetching data3 ......");
  await getData(3);
})();

// // Promise Chain
// console.log("fetching data 1");
// getData(1)
//   .then((res) => {
//     console.log("fetching data 2");
//     return getData(2);
//   })
//   .then((res) => {
//     console.log("fetching data 3");
//     return getData(3);
//   })
//   .then((res) => {
//     console.log("fetching data 4");
//     return getData(4);
//   });

// //  Callback hell

// getData(1, () => {
//   getData(2, () => {
//     getData(3);
//   });
// });
