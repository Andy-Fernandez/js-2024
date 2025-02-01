"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
### Key difference between forEach and map:
forEach does something to each item, but it doesn’t change or return a new array.
map transforms the items and returns a new array with the changes.
*/
// forEach example
var arr = [1, 2, 3, 4];
arr.forEach(function (currentValue, index, array) {
  console.log("Item: " + currentValue + " at index: " + index + " in array: " + array);
  return currentValue * 2; // Returning the doubled value but doesn't change array or retun a new array.
});
console.log(arr); // map  example

arr = [1, 2, 3, 4];
var newArr = arr.map(function (currentValue, index, array) {
  console.log("Item: " + currentValue + " at index: " + index + " in array: " + array);
  return currentValue * 2; // Returning the doubled value
});
console.log(newArr); // Output: [2, 4, 6, 8]
// ### Map() ###
// 1.

var array = [1, 2, 3, 4, 5];

var doubleIt = function doubleIt(num) {
  return num * 2;
};

var arrayDobled = array.map(doubleIt);
console.log(arrayDobled); // 2.

var strings = ["apple", "banana", "cherry"];

var upperCaseAll = function upperCaseAll(word) {
  return word.toUpperCase();
};

var upperStrings = strings.map(upperCaseAll);
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
  name: 'iPhone',
  price: 120
}, {
  name: 'Mac',
  price: 90
}];

var addDiscountedPrice = function addDiscountedPrice(product) {
  return _objectSpread({}, product, {
    discountedPrice: product.price * 0.10
  });
};

var updateProducts = products.map(addDiscountedPrice);
console.log(updateProducts); // ### forEach() ###
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

var arrayString = ['Hola', 'Como', 'Estas', 'Hola', 'Como', 'estoy?'];

var countWordFuntion = function countWordFuntion(array, word) {
  var countWord = 0;
  array.forEach(function (element) {
    if (element == word) {
      countWord++;
    }
  });
  console.log("La palabra se repide ".concat(countWord, " veces"));
};

countWordFuntion(arrayString, 'Hola'); // Extra, find how many times each word reapeat

var countWordsFuntion = function countWordsFuntion(array) {
  var countWords = {};
  arrayString.forEach(function (element, index) {
    if (countWords.hasOwnProperty(element)) {
      countWords[element] += 1;
    } else {
      countWords[element] = 1;
    }
  });
  return countWords;
};

console.log(countWordsFuntion(arrayString)); // 9.

var elementIndex = function elementIndex(array) {
  var elementsAndIndex = {};
  array.forEach(function (element, index) {
    return elementsAndIndex[element] = index;
  });
  return elementsAndIndex;
};

var anotherArray = ['Hi', 'this', 'is', 'another', 'array'];
console.log(elementIndex(anotherArray)); // 10.

var multplyArry = function multplyArry(array, multiplier) {
  var newArray = [];
  array.forEach(function (element) {
    return newArray.push(element * multiplier);
  });
  return newArray;
};

var anotherNumbresArray = [1, 2, 3, 4, 5];
anotherNumbresArray.forEach(function (element, index) {
  return anotherNumbresArray[index] *= 2;
});
console.log(anotherNumbresArray);
console.log(multplyArry(anotherNumbresArray, 2)); // 11. Filter, Map and  Log:

var numeros = [2, 4, 3, 5, 7, 8, 11, 13, 17, 18, 19, 23, 29, 31, 37, 41, 42, 43, 47, 53, 54, 59, 61, 62, 67, 71, 72];
var doubleEvens = numeros.filter(function (numero) {
  return numero % 2 === 0;
}).map(function (pares) {
  return pares * 2;
});
console.log("11.");
doubleEvens.forEach(function (number) {
  return console.log(number);
}); // 12. Flatten and Map

var array2D = [[1, 2], [3, 4], [5, 6]];
var flatArray = array2D.flat();
console.log("12.", flatArray); // 13. Log and Transform

var latamAuthors = ["Gabriel García Márquez", "Jorge Luis Borges", "Isabel Allende", "Mario Vargas Llosa", "Pablo Neruda", "Julio Cortázar", "Carlos Fuentes"];
latamAuthors.forEach(function (author) {
  return console.log("".concat(author, ": ").concat(author.length));
});
var lengthArray = latamAuthors.map(function (author) {
  return author.length;
});
console.log("13.", lengthArray); // 14. Update Invetory

var booksStock = [{
  book: "One Hundred Years of Solitude",
  stock: 12
}, {
  book: "The Aleph",
  stock: 7
}, {
  book: "The Time of the Hero",
  stock: 5
}, {
  book: "Like Water for Chocolate",
  stock: 9
}, {
  book: "The Kingdom of This World",
  stock: 3
}];
booksStock.forEach(function (item) {
  return console.log("\uD83D\uDCD6 Book: \"".concat(item.book, "\" | \uD83D\uDCE6 Stock: ").concat(item.stock));
});

var incrementStock = function incrementStock(productsStock, amount) {
  return productsStock.map(function (product) {
    return _objectSpread({}, product, {
      stock: product.stock + amount
    });
  });
};

console.log("Updated Stock:", incrementStock(booksStock, 10));