"use strict";

// 1.
var book = {
  title: "Harry Potter",
  author: "J.K. Roling",
  generateMessage: function generateMessage() {
    return "".concat(this.title, " is written by ").concat(this.author);
  },
  generateMessageArrw: function generateMessageArrw() {
    return "".concat(book.title, " is written by ").concat(book.author);
  }
};
console.log(book.generateMessage());
console.log(book.generateMessageArrw()); // 2.

function outer() {
  var outerVar = "I am outside!";
  return function () {
    return "Accessed: ".concat(outerVar);
  };
}

var inner = outer();
console.log(inner()); // 3.

var number = 13;

function myPure(number) {
  return number * 2;
}

console.log(myPure(number));
myImpure();
console.log(myPure(number));

function myImpure() {
  number += 12;
} // 4.


var array = [1, 2, 3];

function addsImpure(array, item) {
  array.push(item);
}

console.log(array);
addsImpure(array, 4);
console.log(array);
/*Side Effects:
Just is modifing a global variable...
*/

function addsPure(array, item) {
  var arrayInside = array.slice();
  arrayInside.push(item);
  return arrayInside;
}

console.log(array);
var arrayInside = addsPure(array, 4);
console.log("These suppost to be differente: ", array, arrayInside); // 5.

greet = function greet(name) {
  return "Hello ".concat(name, "!");
};

square = function square(num) {
  return num * num;
};

console.log(greet("Pablo"));
console.log(square(2));