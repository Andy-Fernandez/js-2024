"use strict";

var _require = require("vite"),
    resolveBaseUrl = _require.resolveBaseUrl; // 1. Creating a promise


var myPromise = new Promise(function (resolve, reject) {
  var success = true;

  if (success) {
    resolve("The operation was successful!");
  } else {
    reject("The operation failed.");
  }
});
myPromise.then(function (message) {
  console.log(message);
})["catch"](function (error) {
  console.error(error);
})["finally"](function () {
  console.log("Execution completed.");
}); // 2. Promise Chaining

var fectchData = new Promise(function (resolve) {
  resolve("Step 1: Data Fetched");
});
fectchData.then(function (message) {
  console.log(message);
  return "Step 2: Processed data";
}).then(function (message) {
  console.log(message);
  return "Step 3: Data ready to use";
}).then(function (message) {
  console.log(message);
})["catch"](function (error) {
  console.error("An error ocurred:", error);
}); // ## Promise Methods
// ### Promise.all()
// Waits for all Promises in an array to reolve or rejects if any Promise fails.

var promise1 = Promise.resolve("Task 1 completed");
var promise2 = Promise.resolve("Task 2 completed");
var promise3 = Promise.resolve("Task 3 completed");
Promise.all([promise1, promise2, promise3]).then(function (results) {
  console.log(results); // retuns an array with resolved cases.
})["catch"](function (error) {
  console.error("Error in one of the task", error); // If any primise fail restuns error
}); // ### Promise.allSettled() "Todo resuelto"
// Waist for all Promises to settle (either fulfilled or rejected) and returns an arrya with their status.

var promise4 = Promise.resolve("Task 4 completed");
var promise5 = Promise.reject("Task 5 failed");
var promise6 = Promise.resolve("Task 6 completed");
Promise.allSettled([promise4, promise5, promise6]).then(function (results) {
  console.log(results); // returns an array with their status as an object each one [{}, {}]
}); // ### Promise.rice()
// Returns the result of the first Promise to settle (fulfilled or rejected!)

var promise7 = new Promise(function (resolve) {
  return setTimeout(resolve, 1000, "Task 7 completed");
});
var promise8 = new Promise(function (resolve) {
  return setTimeout(resolve, 500, "Task 8 completed");
});
Promise.race([promise7, promise8]).then(function (result) {
  console.log(result);
}); // ### Promise.any()
// Returns the first fullfulled Promise and ignores rehected ones

var promise9 = Promise.reject("Task 9 failed");
var promise10 = Promise.resolve("Taks 10 resolved");
var promise11 = Promise.reject("Task 11 failed");
var promise12 = Promise.resolve("Taks 12 resolved");
Promise.any([promise9, promise10, promise11, promise12]).then(function (result) {
  console.log(result); // Returns the first fulfulled Promise and ignores rejectes ones.
})["catch"](function (error) {
  console.error("All promises feuiled", error);
}); // ### Combining Promises
// You can combine Promises to perform concurrent asynchronous tasks

var task13 = new Promise(function (resolve) {
  return setTimeout(resolve, 1000, "Task 13 resolver");
});
var task14 = new Promise(function (resolve) {
  return setTimeout(resolve, 2000, "Task 14 resolver");
});
var task15 = new Promise(function (resolve) {
  return setTimeout(resolve, 1500, "Task 15 resolver");
});
Promise.all([task13, task14, task15]).then(function (results) {
  console.log(results);
}); // ## Error Handling in Promises