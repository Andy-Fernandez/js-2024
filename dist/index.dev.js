"use strict";

// Reto 1
number = 24;
string = "hola que tal";
boolean = true;
console.log(string, " me llamo Pablo y tengg ", number, " años y soy ", boolean); // Reto 2

var myArray = []; // Let's add my family members to the array

myArray.push("Pablo", "Sonia", "Benjamin", "Samula", "Enrique");
myArray[10] = "Samantha";
console.log(myArray);
console.log(Object.keys(myArray));
console.log(Object.values(myArray));
console.log(myArray.length);
var myFamilyJoin = myArray.join(", ");
console.log(myFamilyJoin);