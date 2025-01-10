"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// primitives
var name0 = "strnig";
var name1 = 'string';
var name2 = "string";
console.log("string: ".concat(_typeof(name0), " string: ").concat(_typeof(name1), " string: ").concat(_typeof(name2)));
var booleanito = true;
console.log("My booleanito es ".concat(_typeof(booleanito), " and has a value of: ").concat(booleanito));
var number0 = 10;
var number1 = 10.10;
var number2 = Infinity;
var number3 = -Infinity;
console.log("number0 ".concat(_typeof(number0), " number1: ").concat(_typeof(number1), " number2: ").concat(_typeof(number2), " number3: ").concat(_typeof(number3), " and NaN: ").concat(typeof NaN === "undefined" ? "undefined" : _typeof(NaN)));