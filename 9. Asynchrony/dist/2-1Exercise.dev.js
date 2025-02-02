"use strict";

/* Exercise 1:
Fetch and Process User Data

Instructions:
Create a function fetchUserData(userId) that:

Simulates fetching user data from a database.
Resolves with an object { userID, name, age } if the user exists.
Rejects with an error message "User not found" if the user doesn't exist.
Use setTimeout() to simulate a 1-second delay.
Create a function fetchMultipleUsersAndFilterAdults(userIds) that:

Uses Promise.allSettled() to fetch multiple users in parallel.
Filters only users who are 18 years or older.
Returns an array of adult users.
If no adults are found, return "No adults found!".*/
var fakeDatabase = [{
  userId: 1,
  name: "Alice Johnson",
  age: 25
}, {
  userId: 2,
  name: "Bob Smith",
  age: 30
}, {
  userId: 3,
  name: "Charlie Brown",
  age: 22
}, {
  userId: 4,
  name: "David White",
  age: 28
}, {
  userId: 5,
  name: "Emma Davis",
  age: 35
}, {
  userId: 6,
  name: "Emma Davis",
  age: 16
}];

function getUserByIdAndAdult(id) {
  return new Promise(function (resolve, reject) {
    var user = fakeDatabase.find(function (user) {
      return user.userId === id && isAdult(user.age);
    });

    if (user) {
      resolve("User ".concat(id, " is found and adult with ").concat(user.age, "!"));
    } else {
      reject("User ".concat(id, " is not found or not adult!"));
    }
  });
}

var isAdult = function isAdult(age) {
  return age >= 18 ? true : false;
};

function fetchMultipleUsersAndFilterAdults(userIds) {
  return Promise.allSettled(userIds.map(function (id) {
    return getUserByIdAndAdult(id);
  })).then(function (results) {
    //resutl = [{status, value}, {status, value}]
    var someAdultsFound = false;
    results.forEach(function (result) {
      if (result.status === 'fulfilled') {
        console.log("Found a user:", result.value);
      } else {
        console.log("Error:", result.reason.message);
        someAdultsFound = true;
      }
    });

    if (someAdultsFound) {
      return "Some adults found!";
    }

    return "All adults found!";
  });
}

getUserByIdAndAdult(7).then(function (message) {
  return console.log(message);
})["catch"](function (message) {
  return console.log(message);
});
fetchMultipleUsersAndFilterAdults([1, 2, 7]).then(function (message) {
  return console.log("Last:", message);
});