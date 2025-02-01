"use strict";

var _database = require("./database.mjs");

var _auth = require("./auth.mjs");

// testing.js
// ######### Testing ############
console.log("### TESTING START ###"); // Test 1: Generate Fake Users

console.log("Test 1: Generating 10 fake users...");
(0, _database.generateFakeUsers)(10);
console.log("Fake users generated:", _database.dataBase); // Test 2: Check if findUser works

var testUser = _database.dataBase[0]; // Here we get a user in data base

console.log("Test 2: Finding user ".concat(testUser.userName, " with valid credentials..."));
console.assert((0, _database.findUser)(testUser.userName, testUser.password) === true, "FAILED: User should exist with correct credentials.");
console.log("Finding user with invalid credentials...");
console.assert((0, _database.findUser)("InvalidUser", "InvalidPassword") === false, "FAILED: Invalid user should not be found."); // Test 3: Sign Up functionality

console.log("Test 3: Signing up a new user...");
var newUser = {
  userName: "NewUser",
  password: "NewPassword"
}; // Register a new user

(0, _auth.signUp)(newUser.userName, newUser.password); // Should display "User signed up successfully!"

console.assert((0, _database.findUser)(newUser.userName, newUser.password) === true, "FAILED: New user should be found after signing up.");
console.log("Attempting to sign up the same user again...");
(0, _auth.signUp)(newUser.userName, newUser.password); // Should display "User already exists!"
// Test 4: Login functionality

console.log("Test 4: Logging in with valid credentials...");
(0, _auth.login)(testUser.userName, testUser.password); // Should display "Welcome!"

console.log("Logging in with invalid credentials...");
(0, _auth.login)("InvalidUser", "InvalidPassword"); // Should display "User or password wrong!"

console.log("### TESTING COMPLETE ###");