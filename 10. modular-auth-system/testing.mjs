// testing.js
import { findUser, dataBase, generateFakeUsers } from "./database.mjs";
import { login, signUp } from "./auth.mjs";

// ######### Testing ############
console.log("### TESTING START ###");

// Test 1: Generate Fake Users
console.log("Test 1: Generating 10 fake users...");
generateFakeUsers(10);
console.log("Fake users generated:", dataBase);

// Test 2: Check if findUser works
const testUser = dataBase[0]; // Here we get a user in data base
console.log(`Test 2: Finding user ${testUser.userName} with valid credentials...`);
console.assert(
  findUser(testUser.userName, testUser.password) === true,
  "FAILED: User should exist with correct credentials."
);

console.log("Finding user with invalid credentials...");
console.assert(
  findUser("InvalidUser", "InvalidPassword") === false,
  "FAILED: Invalid user should not be found."
);

// Test 3: Sign Up functionality
console.log("Test 3: Signing up a new user...");
const newUser = { userName: "NewUser", password: "NewPassword" }; // Register a new user
signUp(newUser.userName, newUser.password); // Should display "User signed up successfully!"
console.assert(
  findUser(newUser.userName, newUser.password) === true,
  "FAILED: New user should be found after signing up."
);

console.log("Attempting to sign up the same user again...");
signUp(newUser.userName, newUser.password); // Should display "User already exists!"

// Test 4: Login functionality
console.log("Test 4: Logging in with valid credentials...");
login(testUser.userName, testUser.password); // Should display "Welcome!"

console.log("Logging in with invalid credentials...");
login("InvalidUser", "InvalidPassword"); // Should display "User or password wrong!"

console.log("### TESTING COMPLETE ###");
