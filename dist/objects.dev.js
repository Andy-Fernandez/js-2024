"use strict";

// Reto 3
// Define the user object
var user = {
  name: "Pablo",
  age: 24,
  country: "Mexico",
  hobbies: ["Gaming", "Reading", "Coding"],
  greating: function greating() {
    console.log("Hello, my name is " + this.name + " and I'm from " + this.country);
  }
}; // Accessing properties using dot notation

console.log("User details (dot notation):");
console.log("Name:", user.name);
console.log("Age:", user.age);
console.log("Hobbies", user.hobbies); // Accessing properties using bracket notation

console.log("User details (bracket notation):");
console.log("Name:", user["name"]);
console.log("Country:", user["country"]);
console.log("Hobbies:", user["hobbies"]); // Example of undefined property using bracket notation

var property = "isStudent"; // This property doesn't exist in the object

console.log("Is student (undefined):", user[property]); // Calling the method

console.log("\nCalling the 'greating' method:");
user.greating(); // Using destructuring to extract specific properties

var age = user.age,
    hobbies = user.hobbies;
console.log("\nDestructured properties:");
console.log("Age:", age);
console.log("Hobbies:", hobbies);