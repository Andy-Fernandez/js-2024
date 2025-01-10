"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

// Exercise 6: Create a Constant Array
// - Create a const array with three elements.
// - Add a new element to the array and remove one.
// - Try reassigning the array to a new value.
var myArray = [1, 2, 3];
myArray.push(4);
console.log(myArray);
console.log(myArray.pop());
console.log(myArray);

try {
  myArray = (_readOnlyError("myArray"), [3, 2, 1]);
} catch (error) {
  console.error(error.message);
}