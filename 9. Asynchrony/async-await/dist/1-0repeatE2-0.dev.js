"use strict";

/* Exercise 0:  WITH ASYNC/AWAIT
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
}]; // create get just one user

function getUserById(id) {
  return regeneratorRuntime.async(function getUserById$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", new Promise(function (resolve, reject) {
            var foundUser = userDatabase.find(function (user) {
              return user.userID === id;
            });

            if (foundUser) {
              resolve(foundUser);
            } else {
              reject(new Error("User ".concat(id, " doesn't exist!")));
            }
          }));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}

function fetchMultipleUsers(ids) {
  var responses, allUsers, hasErrors;
  return regeneratorRuntime.async(function fetchMultipleUsers$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(Promise.allSettled(ids.map(function (id) {
            return getUserById(id);
          })));

        case 2:
          responses = _context2.sent;
          allUsers = [];
          hasErrors = false;
          responses.forEach(function (response) {
            if (response.status === 'fulfilled') {
              console.log("Found user:", response.value);
              allUsers.push(response.value);
            } else {
              console.error("Error:", response.reason.message);
              hasErrors = true;
            }
          });
          return _context2.abrupt("return", hasErrors ? "Some users not found!" : allUsers);

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function fetchUser(id) {
  var response;
  return regeneratorRuntime.async(function fetchUser$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(getUserById(id));

        case 3:
          response = _context3.sent;
          console.log(response);
          _context3.next = 10;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0.message);

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
}

var id = 4;
var ids = [1, 2, 3];
fetchUser(id);
getUserById(id).then(function (response) {
  return console.log(response);
})["catch"](function (error) {
  return console.error(error.message);
});
fetchMultipleUsers(ids).then(function (result) {
  return console.log("Result:", result);
});