"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findUser = findUser;
exports.addUser = addUser;
exports.showTimeLine = showTimeLine;
exports.generateFakeUsers = generateFakeUsers;
exports.TimeLine = exports.timeLine = exports.dataBase = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function User(userName, password) {
  _classCallCheck(this, User);

  this.userName = userName;
  this.password = password;
};

var TimeLine = function TimeLine(userName) {
  var timeStamp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

  _classCallCheck(this, TimeLine);

  this.userName = userName;
  this.timeStamp = timeStamp;
}; // Simulated databases


exports.TimeLine = TimeLine;
var dataBase = []; // Stores users

exports.dataBase = dataBase;
var timeLine = []; // Stores timeline events
// Find user by username and password

exports.timeLine = timeLine;

function findUser(userName, password) {
  return dataBase.some(function (user) {
    return user.userName === userName && user.password === password;
  });
} // Save a new user


function addUser(userName, password) {
  var newUser = new User(userName, password);
  dataBase.push(newUser);
} // Show user timeline


function showTimeLine(userName) {
  var userTimeline = timeLine.filter(function (entry) {
    return entry.userName === userName;
  }).map(function (entry) {
    return entry.timeStamp;
  });
  console.log("Your timeline:", userTimeline);
} // Generate fake users


function generateFakeUsers(numberOfUsers) {
  var fakeNames = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
  var fakePasswords = ['password123', '123456', 'qwerty', 'letmein'];

  for (var i = 0; i < numberOfUsers; i++) {
    var randomName = fakeNames[Math.floor(Math.random() * fakeNames.length)];
    var randomPassword = fakePasswords[Math.floor(Math.random() * fakePasswords.length)];
    addUser(randomName, randomPassword);
  }
} // Export functions and data