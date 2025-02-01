"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;
exports.signUp = signUp;

var _database = require("./database.js");

// User login
function login(userName, password) {
  if ((0, _database.findUser)(userName, password)) {
    console.log("Welcome!");

    _database.timeLine.push(new _database.TimeLine(userName));

    (0, _database.showTimeLine)(userName);
  } else {
    console.log("User or password incorrect!");
  }
} // User sign-up


function signUp(userName, password) {
  if (!userName.trim() || !password.trim()) {
    console.log("Username and password cannot be empty!");
    return;
  }

  if (!_database.dataBase.some(function (user) {
    return user.userName === userName;
  })) {
    (0, _database.addUser)(userName, password);

    _database.timeLine.push(new _database.TimeLine(userName));

    console.log("User signed up successfully!");
    (0, _database.showTimeLine)(userName);
  } else {
    console.log("User already exists!");
  }
} // Export authentication functions