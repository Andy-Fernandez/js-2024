"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Commond methods
var myString = "Hola a dodis ";
console.log(_typeof(myString));
console.log(myString.toLowerCase());
console.log(myString.toUpperCase());
console.log(myString.trim());
console.log(myString.charAt(0));

try {
  myString.forEach(function (element) {
    console.log(element);
  });
} catch (error) {
  console.error(error.message); //forEech doesn't work for strings
}

for (var i = 0; i < myString.length; i++) {
  console.log("Chart: ".concat(myString.charAt(i), " at index of: ").concat(myString.indexOf(myString.charAt(i)), " and slice: ").concat(myString.slice(i, i + 3)));
}

console.log(myString.replace(" ", "_"));
console.log(myString.split(" ")); // Escape Characters

console.log("Hello \"wold\"", '\nIt\'s work!');
console.log("C:\\Path"); // Exercise:

var myName = "Pablo Andres";
var myFColor = "Purple";
var funFact = "I had a probler with bathrooms";
var combinedString = "My name is ".concat(myName, ", my favorite color is ").concat(myFColor, ", and a fun fact about me is that I had a problem with bathrooms.");
console.log(combinedString); // methods than I know
// .indexOf(), .charAt(), .trim(), .split(), toUpperCase(), toLowerCase(), .replace()

console.log("A ".concat(combinedString.slice(11, 11 + 12), " le gusta el color ").concat(combinedString.slice(45, 52).trim()));
console.log("Last chart in my combineString es: ".concat(combinedString.charAt(combinedString.length - 1)));