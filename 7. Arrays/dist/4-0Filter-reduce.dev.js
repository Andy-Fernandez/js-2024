"use strict";

// ### Filter
// Generating mi array [1,2,... 20];
var array = Array.from({
  length: 20
}, function (_, index) {
  return index + 1;
});
console.log(array); // 1.

console.log(array.filter(function (num) {
  return num % 2 == 0;
})); // 2.

var isLongerThanFiveChars = function isLongerThanFiveChars(word) {
  return word.length > 5;
};

var isLongerThan = function isLongerThan(word, length) {
  return word.length > length;
};

var words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];
var longWords1 = words.filter(isLongerThanFiveChars);
var longWords2 = words.filter(function (word) {
  return isLongerThan(word, 5);
});
console.log(longWords1);
console.log(longWords2); // 3.

var people = [{
  name: "John Doe",
  age: 30
}, {
  name: "Jane Smith",
  age: 25
}, {
  name: "Alice Johnson",
  age: 28
}, {
  name: "Bob Brown",
  age: 35
}];

var isLegalAge = function isLegalAge(person) {
  return person.age && person.age >= 18;
};

console.log(people.filter(isLegalAge)); // 4.

var funnyStrings = ["I'm not arguing, I'm just explaining why I'm right.", "I told my computer I needed a break, and now it won't stop sending me Kit-Kats.", "Why don't skeletons fight each other? They don't have the guts.", "I’m on a seafood diet. I see food and I eat it.", "Parallel lines have so much in common. It’s a shame they’ll never meet.", "I asked the librarian if the library had any books on paranoia. She whispered, 'They’re right behind you.'", "Why don’t some couples go to the gym? Because some relationships don’t work out."];

var isInString = function isInString(string, word) {
  return string.toLowerCase().includes(word.toLowerCase());
};

var searchWord = "I'm";
console.log(funnyStrings.filter(function (string) {
  return isInString(string, searchWord);
})); // 5.

var products = [{
  name: "Laptop",
  price: 999.99,
  inStock: true
}, {
  name: "Smartphone",
  price: 499.99,
  inStock: false
}, {
  name: "Headphones",
  price: 89.99,
  inStock: true
}, {
  name: "Smartwatch",
  price: 199.99,
  inStock: true
}, {
  name: "Keyboard",
  price: 49.99,
  inStock: false
}];
console.log(products.filter(function (product) {
  return product.inStock;
})); // ### Reduce
// 6.

function reducer(accumulator, currentValue, index) {
  var returns = accumulator + currentValue;
  console.log("accumulator: ".concat(accumulator, ", currentValue: ").concat(currentValue, ", index: ").concat(index, ", returns: ").concat(returns));
  return returns;
}

console.log("######### Reduce #########");
console.log(array);
console.log(array.reduce(function () {
  var accumulator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var currentValue = arguments.length > 1 ? arguments[1] : undefined;
  var index = arguments.length > 2 ? arguments[2] : undefined;
  accumulator = accumulator + currentValue;
  return accumulator;
}));

var anotherReducer = function anotherReducer() {
  return function () {
    var accumulator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var currentValue = arguments.length > 1 ? arguments[1] : undefined;
    var index = arguments.length > 2 ? arguments[2] : undefined;
    accumulator = accumulator + currentValue;
    return accumulator;
  };
}; // array.reduce(reducer);
// 7.


array = [[1, 2], [3, 4], [5, 6]];
array.forEach(function (subArra, index) {
  array[index] = subArra.reduce(anotherReducer());
});
console.log(array); // 8.

array = ['apple', 'banana', 'apple', 'orange', 'apple'];
var counterWords = {};
array.reduce(function (accumulator, currentValue, index) {
  if (counterWords.hasOwnProperty(currentValue)) {
    counterWords[currentValue] += 1;
    console.log(currentValue);
  } else {
    counterWords[currentValue] = 1;
  }
}, 0); // If we don't set accumulator, it'll take first element of owr array

console.log(counterWords);