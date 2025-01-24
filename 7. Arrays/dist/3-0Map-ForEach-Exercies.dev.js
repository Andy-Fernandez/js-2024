"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// # Map()
// 1.
var array = [1, 2, 3, 4, 5];

var dobleIt = function dobleIt(num) {
  return num * 2;
};

var arrayDobled = array.map(dobleIt);
console.log(arrayDobled); // 2.

var strings = ["apple", "banana", "cherry"];

var uppeCaseAll = function uppeCaseAll(word) {
  return word.toUpperCase();
};

var upperStrings = strings.map(uppeCaseAll);
console.log(upperStrings); // 3.

var people = [{
  name: "Alice",
  age: 25
}, {
  name: "Bob",
  age: 30
}, {
  name: "Charlie",
  age: 35
}];

var getNames = function getNames(person) {
  return person.name;
};

var peopleNames = people.map(getNames);
console.log(peopleNames); // 4.

var reactangles = [{
  width: 1,
  height: 1
}, {
  width: 2,
  height: 2
}, {
  width: 3,
  height: 3
}];

var getArea = function getArea(rectanle) {
  return rectanle.width * rectanle.height;
};

var rectnaglesArea = reactangles.map(getArea);
console.log(rectnaglesArea); // 5.

var products = [{
  name: 'Mac',
  price: 100
}, {
  name: 'Iphone',
  price: 120
}, {
  name: 'Mac',
  price: 90
}]; // const addDescuntedPrice = product => {this.descountedPrice = product*0.1}; 

var addDiscountedPrice = function addDiscountedPrice(product) {
  return _objectSpread({}, product, {
    discountedPrice: product.price * 0.10
  });
};

var updateProducts = products.map(addDiscountedPrice);
console.log(updateProducts); // # forEach()
// 6.

var numbers = [1, 2, 3, 4, 5];

var sumNumbresArray = function sumNumbresArray(numbresArray) {
  var total = 0;
  numbresArray.forEach(function (element) {
    return total += element;
  });
  return total;
};

console.log(sumNumbresArray(numbers)); // 7.

var books = [{
  title: "100 años de Soledad",
  author: "Garcia Marques"
}, {
  title: "Latinoamerica",
  author: "Andres Oppnhaimer"
}];

var printBookDetails = function printBookDetails(array) {
  return array.forEach(function (element) {
    console.log("Title: ".concat(element.title, ", Author: ").concat(element.author));
  });
};

printBookDetails(books); // 8.

var arryaString = ['Hola', 'Como', 'Estas', 'Hola', 'Como', 'estoy?'];