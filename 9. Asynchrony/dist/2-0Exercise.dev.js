"use strict";

/*
Write a function fetchMultipleUsers(userIds) that:

Fetches all users in parallel using Promise.all().
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
      resolve("User ".concat(userId, " exists!"));
    } else {
      reject("User ".concat(userId, " doesn't exist!"));
    }
  });
}

;

function fetchMultipleUsers(userIds) {
  Promise.allSettled(userIds.map(function (id) {
    return getUserById(id);
  })).then(function (results) {
    console.log(results);
  })["catch"](function (error) {
    console.error(error);
  });
}

;
getUserById(1).then(function (message) {
  return console.log(message);
})["catch"](function (error) {
  return console.error(error);
});
fetchMultipleUsers([1, 2, 3]);