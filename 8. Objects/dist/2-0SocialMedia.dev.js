"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* observaciones
Usar promt para pedir los datos del usuario
El timeLine no se refería a cuando entro el usuario, si no hace referencia a los post de los usuarios.
*/
var User = function User(userName, password) {
  _classCallCheck(this, User);

  this.userName = userName, this.password = password;
};

var TimeLine = function TimeLine(userName) {
  var timeStamp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

  _classCallCheck(this, TimeLine);

  this.userName = userName;
  this.timeStamp = timeStamp;
};

var dataBase = [];
var timeLine = []; // [{ userName: 'name', timeStamp: new Date()}]

function findUser(userName, password) {
  return dataBase.some(function (user) {
    return user.userName === userName && user.password === password;
  });
}

function showTimeLine(userName) {
  // I could be simplest...
  var timeLineObject = timeLine.filter(function (timeLine) {
    return timeLine.userName === userName;
  });
  var timeLineArray = timeLineObject.map(function (register) {
    return register.timeStamp;
  });
  console.log("Your timeline is:", timeLineArray);
}

function generateFakeUsers(numberOfUsers) {
  var fakeNames = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Grace', 'Hank', 'Ivy', 'Jack', 'Kara'];
  var fakePasswords = ['password123', '123456', 'qwerty', 'letmein', 'password!@#'];

  for (var i = 0; i < numberOfUsers; i++) {
    var randomName = fakeNames[Math.floor(Math.random() * fakeNames.length)];
    var randomPassword = fakePasswords[Math.floor(Math.random() * fakePasswords.length)];

    var _newUser = new User(randomName, randomPassword);

    dataBase.push(_newUser);
  }
}

function login(userName, password) {
  if (findUser(userName, password)) {
    console.log("Welcome!");
    timeLine.push(new TimeLine(userName));
    showTimeLine(userName);
  } else {
    console.log("User or password wrong!");
  }
}

function signUp(userName, password) {
  if (!userName.trim() || !password.trim()) {
    console.log("Username and password cannot be empty!");
    return;
  }

  if (!dataBase.some(function (user) {
    return user.userName === userName;
  })) {
    dataBase.push(new User(userName, password));
    timeLine.push(new TimeLine(userName));
    console.log("User signed up successfully!");
    showTimeLine(userName);
  } else {
    console.log("User already exist!");
  }
} // ######### Testing ############
// ###### TEST SCRIPT ######


console.log("### TESTING START ###"); // Test 1: Generate Fake Users

console.log("Test 1: Generating 10 fake users...");
generateFakeUsers(10);
console.log("Fake users generated:", dataBase); // Test 2: Check if findUser works

var testUser = dataBase[0]; // Here we get a user in data base

console.log("Test 2: Finding user ".concat(testUser.userName, " with valid credentials..."));
console.assert(findUser(testUser.userName, testUser.password) === true, "FAILED: User should exist with correct credentials.");
console.log("Finding user with invalid credentials...");
console.assert(findUser("InvalidUser", "InvalidPassword") === false, // Pass a invalid user
"FAILED: Invalid user should not be found."); // Test 3: Sign Up functionality

console.log("Test 3: Signing up a new user...");
var newUser = new User("NewUser", "NewPassword"); // Register a new user

signUp(newUser.userName, newUser.password); // Should display "User signed up successfully!"

console.assert(findUser(newUser.userName, newUser.password) === true, "FAILED: New user should be found after signing up.");
console.log("Attempting to sign up the same user again...");
signUp(newUser.userName, newUser.password); // Should display "User already exists!"
// Test 4: Login functionality

console.log("Test 4: Logging in with valid credentials...");
login(testUser.userName, testUser.password); // Should display "Welcome!"

console.log("Logging in with invalid credentials...");
login("InvalidUser", "InvalidPassword"); // Should display "User or password wrong!"

console.log("### TESTING COMPLETE ###");