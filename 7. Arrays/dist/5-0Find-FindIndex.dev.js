"use strict";

// ### find()
// 1.
var numbers = [1, 2, 3, 4, 5];
var firstEvenNumer = numbers.find(function (number) {
  return number % 2 === 0;
});
console.log("1.", firstEvenNumer); // 2.

var fruits = ["banana", "cherry", "Apple", "date", "elderberry"];
var firstFuitWithA = fruits.find(function (fruit) {
  return fruit[0] === 'A';
}); // I can create a generc function

console.log("2.", firstFuitWithA); // 3.

var products = [{
  name: "Laptop",
  price: 999.99
}, {
  name: "Smartphone",
  price: 499.99
}, {
  name: "Headphones",
  price: 199.99
}, {
  name: "Smartwatch",
  price: 249.99
}, {
  name: "Tablet",
  price: 349.99
}];

var findPrduct = function findPrduct(target) {
  return products.find(function (prodcut) {
    return products.name === target;
  });
};

console.log("3.", findPrduct("Laptop"));