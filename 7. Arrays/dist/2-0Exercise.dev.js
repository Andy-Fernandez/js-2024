"use strict";

var array = [1, 2, 3, 4, 5];
array.push(6);
array.unshift(0);
array.pop();
array.forEach(function (element) {
  console.log(element);
});
array[2] = 100;

var reverse = function reverse(array) {
  return array.reverse();
};

console.log(reverse(array));
array = [1, 2, 3];
array = array.map(function (num) {
  return num * num;
});
console.log(array);
array.forEach(function (element, index) {
  return console.log("Element ".concat(element, " is at index ").concat(index));
});
array = new Array(10).fill().map(function (_, index) {
  return index + 1;
});
console.log(array);
var evenArry = array.filter(function (num) {
  return num % 2 == 0;
}); // 6.

console.log(evenArry);
var arrayReduced = array.reduce(function (total, num) {
  return total + num;
}, 0); // 7.

console.log(arrayReduced);
var arrayReduceMax = array.reduce(function (a, b) {
  return Math.max(a, b);
}); // 8.

console.log(arrayReduceMax);
var users = [{
  name: "Pablo",
  id: 1
}, {
  name: "Andres",
  id: 2
}];

function isId(element) {
  return element.id === 1;
}

console.log(users.find(isId));