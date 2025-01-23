"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

addsImpure = function addsImpure(array, item) {
  return array.push(item);
};

console.log(array);
addsImpure(array, 4);
console.log(array);
/*Side Effects:
Just is modifing a global variable...
*/
// function addPureClean(array, item){
//   return [...array, item];
// }

addPureClean = function addPureClean(array, item) {
  return [].concat(_toConsumableArray(array), [item]);
};

console.log(array);
var arrayInside = addsPure(array, 4);
console.log("These suppost to be differente: ", array, arrayInside); // 5.

greet = function greet() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Stranger";
  return "Hello ".concat(name, "!");
};

square = function square(num) {
  return num * num;
};

console.log(greet("Pablo"));
console.log(greet());
console.log(square(2));