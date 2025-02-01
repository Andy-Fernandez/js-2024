// ### Promise.any()
const promise9 = Promise.reject("Task 9 failed");
const promise10 = Promise.resolve("Taks 10 resolved");
const promise11 = Promise.reject("Task 11 failed");

Promise.any([promise9, promise10, promise11])
  .then((result) => {
    console.log(result); // 
  })
  .catch((error) => {
    console.error("All promises feuiled", error);
  })