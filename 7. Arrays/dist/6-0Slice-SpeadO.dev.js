"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Slice()
// 1.
var numbers = Array.from({
  length: 10
}, function (_, index) {
  return index + 1;
}); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log("1.1", numbers.slice(0, 3));
console.log("1.2", numbers.slice(-3)); // 2.

var lynchMovies = ["Eraserhead", "The Elephant Man", "Blue Velvet", "Dune", "Wild at Heart", "Twin Peaks: Fire Walk with Me", "Lost Highway", "The Straight Story", "Mulholland Drive", "Inland Empire"];
var lynchMoviesCopy = lynchMovies.slice();
console.log(lynchMoviesCopy === lynchMovies); // 3.

var dialogue = "I'm going to make him an offer he can't refuse.";
var words = dialogue.split(" ");
var newDialogue = words.slice(1, words.length - 1);
console.log("3.", newDialogue); // 4.

var paginationNumbres = Array.from({
  length: 100
}, function (_, index) {
  return index + 1;
});
console.log(paginationNumbres.splice(-10)); // 5.

var javaScript = "JavaScript";
console.log(javaScript.slice(0, 4));
console.log(javaScript.slice(-4)); // Spread Operator

console.log("##### Spread Operator ######");
var fistArray = Array.from({
  length: 10
}, function (_, index) {
  return index + 1;
});
var secondArray = Array.from({
  length: 10
}, function (_, index) {
  return index + 11;
});
var thirdArray = [].concat(_toConsumableArray(fistArray), _toConsumableArray(secondArray));
console.log(thirdArray);