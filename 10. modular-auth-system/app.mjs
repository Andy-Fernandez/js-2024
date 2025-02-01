// app.js
import { login, signUp } from "./auth.mjs";
import { generateFakeUsers } from "./database.mjs";

console.log("Welcome to the Modular Authentication System");

// Generate some test users
generateFakeUsers(3);

// Example usage
signUp("Samuel", "securePass");
login("Samuel", "securePass"); // Success
login("Alice", "wrongPass"); // Fail
