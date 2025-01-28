"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

console.log("##### Spread Operator ######"); // 6.

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
console.log("6.", thirdArray); // 7.

var davidLynchMovies = ["Blue Velvet", "Mulholland Drive", "Twin Peaks: Fire Walk with Me", "Eraserhead", "The Elephant Man", "Lost Highway", "Wild at Heart", "Inland Empire", "Dune", "The Straight Story"];
var davidLynchMoviesCopy = [].concat(davidLynchMovies);
console.log("7.", davidLynchMoviesCopy); // 8.

var years = [1492, 1776, 1914, 1969, 1989, 2001, 2020];
var yearsComplete = [].concat(_toConsumableArray(years.slice(0, years.length / 2)), [2024], _toConsumableArray(years.slice(years.length / 2)));
console.log("8.", yearsComplete); // 9.

var tarantinoMovies = ["Pulp Fiction", "Kill Bill: Vol. 1", "Inglourious Basterds", "Django Unchained"];
var wesAndersonMovies = ["The Grand Budapest Hotel", "Moonrise Kingdom", "The Royal Tenenbaums", "Fantastic Mr. Fox"];
var nolanMovies = ["Inception", "The Dark Knight", "Interstellar"];
var combineMovies = [].concat(tarantinoMovies, wesAndersonMovies, nolanMovies);
console.log("9.", combineMovies); // 10.

var products = [{
  name: "Movie Ticket - Standard",
  price: 12.99
}, {
  name: "Movie Ticket - Premium",
  price: 18.99
}, {
  name: "Popcorn - Small",
  price: 5.49
}, {
  name: "Popcorn - Large",
  price: 7.99
}, {
  name: "Soda - Medium",
  price: 3.99
}, {
  name: "Soda - Large",
  price: 4.99
}];

var calculateDiscountedPrice = function calculateDiscountedPrice(price, descount) {
  return price * ((100 - descount) / 100);
};

var applyDiscountToProducts = function applyDiscountToProducts(descount) {
  return products.map(function (product) {
    return _objectSpread({}, product, {
      discountedPrice: calculateDiscountedPrice(product.price, descount)
    });
  });
};

console.log("10.", applyDiscountToProducts(10));