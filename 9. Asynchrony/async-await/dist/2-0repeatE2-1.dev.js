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
}]; // Simulate fetching user from the database

function getUserById(id) {
  return regeneratorRuntime.async(function getUserById$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", new Promise(function (resolve, reject) {
            var result = fakeDatabase.find(function (user) {
              return user.userId === id;
            });

            if (result) {
              resolve(result); // User found, resolve with user data
            } else {
              reject(new Error("User with ID ".concat(id, " not found!"))); // User not found, reject with error
            }
          }));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
} // Fetch multiple users and filter adults (18 years or older)


function fetchMultipleUsersAndFilterAdults(ids) {
  var responses, successfulUsers, adults;
  return regeneratorRuntime.async(function fetchMultipleUsersAndFilterAdults$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(Promise.allSettled(ids.map(function (id) {
            return getUserById(id);
          })));

        case 2:
          responses = _context2.sent;
          successfulUsers = responses.filter(function (response) {
            return response.status === 'fulfilled';
          }) // Only consider successful responses
          .map(function (response) {
            return response.value;
          }); // Extract the value (user data)

          adults = successfulUsers.filter(function (user) {
            return user.age >= 18;
          }); // Filter for adults (18+)

          return _context2.abrupt("return", adults.length === 0 ? "No users 18 or older found!" : adults);

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
} // Fetch user data by ID (for a single user)


function fetchUserData(id) {
  var response;
  return regeneratorRuntime.async(function fetchUserData$(_context3) {
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
} // Example usage:


fetchUserData(1); // Should log user data for Alice Johnson (age 25)

fetchMultipleUsersAndFilterAdults([1, 2, 6, 10]).then(function (message) {
  return console.log("Last:", message);
}); // Should log users 1, 2 and 10 is not found