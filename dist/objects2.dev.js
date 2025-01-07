"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var user = {
  name: "Pablito",
  age: 12,
  country: "Bolivia",
  hobbies: ["gamming", "gyming", "dance"],
  grating: function grating() {
    console.log("Hi, I'm ".concat(this.name, " and I'm from ").concat(this.country));
  }
};
user.grating();
var age = user.age,
    hobbies = user.hobbies;
console.log("I'm ".concat(age, " years old, and my hobbies are ").concat(hobbies));
user["isStudent"] = true;
console.log("Dot notacion ".concat(user.isStudent));
console.log("Brackets notation ".concat(user["isStudent"])); // const address = {
//   city: "La Paz",
//   zip: "0000"
// }

user["address"] = {
  city: "La Paz",
  zip: "0000"
};
console.log(user.address);
var _user$address = user.address,
    city = _user$address.city,
    zip = _user$address.zip;
console.log("City: ".concat(city, " and Zip: ").concat(zip)); // console.log(address)

user["listHobbies"] = function () {
  this.hobbies.forEach(function (hobbie, index) {
    return console.log("".concat(index + 1, ". ").concat(hobbie));
  });
};

user.listHobbies();

var name = user.name,
    otherDetails = _objectWithoutProperties(user, ["name"]);

console.log("Name:".concat(name, " \nOther Details:"), otherDetails);
var additionlInfo = {
  profession: "Developer",
  language: "Spanish"
};

var completeUser = _objectSpread({}, user, {}, additionlInfo);

console.log(completeUser);
var myName = user.name,
    isStudent = user.isStudent,
    _user$gender = user.gender,
    gender = _user$gender === void 0 ? "Unknown" : _user$gender;
console.log("name: ".concat(myName, ", Is strudent: ").concat(isStudent, " and Gender: ").concat(gender));

function updateProperty(obj, key, value) {
  if (!obj[key]) {
    obj[key] = value;
  } else {
    obj[key] = value;
  }

  console.log(obj[key]);
}

updateProperty(user, "lastName", "Fernandez");
console.log(user);

function validateUser(obj) {
  if (obj.name && obj.age && obj.country && obj.gender) {
    console.log("Properties exist");
    console.log("name: ".concat(obj.name));
    console.log("age: ".concat(obj.age));
    console.log("country: ".concat(obj.country));
    console.log("gender: ".concat(obj.gender));
  } else {
    console.log("Properties don't exist");
  }
}

validateUser(user);
Object.keys(user).forEach(function (key, index) {
  return console.log("".concat(index + 1, ". ").concat(key));
});

var userCopy = _objectSpread({}, user);

userCopy.name = "Danic";
console.log(user.name);
console.log(userCopy.name);
var userAnotherCopy;
Object.assign.apply(Object, [userAnotherCopy].concat(_toConsumableArray(user)));
userAnotherCopy.name = "Nanis";
console.log(user.name);
console.log(userAnotherCopy.name);