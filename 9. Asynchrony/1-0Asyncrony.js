const { resolveBaseUrl } = require("vite");

// 1. Creating a promise
const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success){
    resolve("The operation was successful!");
  } else {
    reject("The operation failed.");
  }
});

myPromise.then((message) => {
  console.log(message);
})
.catch((error) => {
  console.error(error);
})
.finally(() => {
  console.log("Execution completed.")
})

// 2. Promise Chaining
const fectchData = new Promise((resolve) => {
  resolve("Step 1: Data Fetched");
})

fectchData.then((message) => {
  console.log(message);
  return "Step 2: Processed data";
})
.then((message) => {
  console.log(message);
  return "Step 3: Data ready to use";
})
.then((message) => {
  console.log(message);
})
.catch((error) => {
  console.error("An error ocurred:", error);
})

// ## Promise Methods

// ### Promise.all()
// Waits for all Promises in an array to reolve or rejects if any Promise fails.
const promise1 = Promise.resolve("Task 1 completed");
const promise2 = Promise.resolve("Task 2 completed");
const promise3 = Promise.resolve("Task 3 completed");

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // retuns an array with resolved cases.
  })
  .catch((error) => {
    console.error("Error in one of the task", error); // If any primise fail restuns error
  })

// ### Promise.allSettled() "Todo resuelto"
// Waist for all Promises to settle (either fulfilled or rejected) and returns an arrya with their status.
const promise4 = Promise.resolve("Task 4 completed");
const promise5 = Promise.reject("Task 5 failed");
const promise6 = Promise.resolve("Task 6 completed");

Promise.allSettled([promise4, promise5, promise6])
  .then((results) => {
    console.log(results); // returns an array with their status as an object each one [{}, {}]
  })

// ### Promise.rice()
// Returns the result of the first Promise to settle (fulfilled or rejected!)
const promise7 = new Promise((resolve) => setTimeout(resolve, 1000, "Task 7 completed"))
const promise8 = new Promise((resolve) => setTimeout(resolve, 500, "Task 8 completed"))

Promise.race([promise7, promise8])
  .then((result) => {
    console.log(result);
  });

// ### Promise.any()
// Returns the first fullfulled Promise and ignores rehected ones
const promise9 = Promise.reject("Task 9 failed");
const promise10 = Promise.resolve("Taks 10 resolved");
const promise11 = Promise.reject("Task 11 failed");
const promise12 = Promise.resolve("Taks 12 resolved");

Promise.any([promise9, promise10, promise11, promise12])
  .then((result) => {
    console.log(result); // Returns the first fulfulled Promise and ignores rejectes ones.
  })
  .catch((error) => {
    console.error("All promises feuiled", error);
  })

// ### Combining Promises
// You can combine Promises to perform concurrent asynchronous tasks
const task13 = new Promise((resolve) => setTimeout(resolve, 1000, "Task 13 resolver"));
const task14 = new Promise((resolve) => setTimeout(resolve, 2000, "Task 14 resolver"));
const task15 = new Promise((resolve) => setTimeout(resolve, 1500, "Task 15 resolver"));

Promise.all([task13, task14, task15]).then((results => {
  console.log(results);
}));

// ## Error Handling in Promises