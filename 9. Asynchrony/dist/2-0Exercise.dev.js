"use strict";

/* Exercise 0:
Write a function fetchMultipleUsers(userIds) that:

Fetches all users in parallel using Promise.allSettled().
If any user does not exist, the function should catch the error and return "Some users not found!".
*/
var userDatabase = [{
  userID: 1,
  password: "123"
}, {
  userID: 2,
  password: "456"
}];

function getUserById(userId) {
  return new Promise(function (resolve, reject) {
    var foundUser = userDatabase.find(function (user) {
      return user.userID === userId;
    });

    if (foundUser) {
      resolve(foundUser);
    } else {
      reject(new Error("User ".concat(userId, " doesn't exist!")));
    }
  });
}

;

function fetchMultipleUsers(userIds) {
  return Promise.allSettled(userIds.map(function (id) {
    return getUserById(id);
  })).then(function (results) {
    var someUsersNotFound = false;
    results.forEach(function (result) {
      if (result.status === 'fulfilled') {
        console.log("Found a user:", result.value);
      } else {
        console.log("Error:", result.reason.message);
        someUsersNotFound = true;
      }
    });

    if (someUsersNotFound) {
      return "Some users not found!";
    }

    return "All users were found!";
  });
}

;
getUserById(1).then(function (message) {
  return console.log(message);
});
fetchMultipleUsers([1, 2, 3, 1]).then(function (message) {
  return console.log(message);
});