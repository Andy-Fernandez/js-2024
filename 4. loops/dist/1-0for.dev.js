"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var myString = "Str";
var myArray = ["S", "T", "R"]; // for

for (var _i = 0; _i < myString.length; _i++) {
  var chart = myString[_i];
  console.log(chart);
} // for...of


var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = myArray.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var _step$value = _slicedToArray(_step.value, 2),
        index = _step$value[0],
        _element = _step$value[1];

    // iteration on string and arrays
    console.log("".concat(index, ": ").concat(_element));
  } // for...in

} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

for (var key in myString) {
  // iteration in objects keys and vaulues
  if (Object.prototype.hasOwnProperty.call(myString, key)) {
    var element = myString[key];
    console.log(element);
  }
} // while


var i = 0;

while (i < myString.length) {
  myString.charAt(i);
  i++;
} // do...while


i = 0;

do {
  myString.charAt(i);
  i++;
} while (i < myString.length);