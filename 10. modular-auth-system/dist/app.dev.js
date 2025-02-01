"use strict";

var _auth = require("./auth.js");

var _database = require("./database.js");

// app.js
console.log("Welcome to the Modular Authentication System"); // Generate some test users

(0, _database.generateFakeUsers)(3); // Example usage

(0, _auth.signUp)("Samuel", "securePass");
(0, _auth.login)("Samuel", "securePass"); // Success

(0, _auth.login)("Alice", "wrongPass"); // Fail