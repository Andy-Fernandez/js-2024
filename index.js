// Reto 1
number = 24;
string = "hola que tal";
boolean = true;

console.log(string, " me llamo Pablo y tengg ", number, " años y soy ", boolean);

// Reto 2
const myArray = [];

// Let's add my family members to the array
myArray.push("Pablo", "Sonia", "Benjamin", "Samula", "Enrique");

myArray[10] = "Samantha";

console.log(myArray);
console.log(Object.keys(myArray));
console.log(Object.values(myArray));
console.log(myArray.length);

const myFamilyJoin = myArray.join(", ");
console.log(myFamilyJoin);

// Reto 3
// Define the user object
const user = {
  name: "Pablo",
  age: 24,
  country: "Mexico",
  hobbies: ["Gaming", "Reading", "Coding"],
  greating: function () {
    console.log("Hello, my name is " + this.name + " and I'm from " + this.country);
  }
};

// Accessing properties using dot notation
console.log("User details (dot notation):");
console.log("Name:", user.name);
console.log("Age:", user.age);
console.log("Hobbies", user.hobbies);

// Accessing properties using bracket notation
console.log("User details (bracket notation):");
console.log("Name:", user["name"]);
console.log("Country:", user["country"]);
console.log("Hobbies:", user["hobbies"]);

// Example of undefined property using bracket notation
const property = "isStudent"; // This property doesn't exist in the object
console.log("Is student (undefined):", user[property]);

// Calling the method
console.log("\nCalling the 'greating' method:");
user.greating();

// Using destructuring to extract specific properties
const { age, hobbies } = user;
console.log("\nDestructured properties:");
console.log("Age:", age);
console.log("Hobbies:", hobbies);
