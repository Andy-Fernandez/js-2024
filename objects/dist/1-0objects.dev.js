"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Reto 1.3: Objetos y Destructuring
// Define the user object
// 1. Crea un objeto que represente un usuario con propiedades como: nombre, edad, pais, hobbies (array).
var user = {
  name: "Pablo",
  age: 24,
  country: "Mexico",
  hobbies: ["Gaming", "Reading", "Coding"],
  // 2. Añade un método dentro del objeto que retorne un saludo usando el nombre y pais.
  greating: function greating() {
    console.log("Hello, my name is " + this.name + " and I'm from " + this.country);
  }
}; // 3. Desde fuera del objeto, llama ese método e imprime el resultado.
// Calling the method

console.log("\nCalling the 'greating' method:");
user.greating(); // 4. Utiliza destructuring para acceder a edad y hobbies en una sola línea.
// Using destructuring to extract specific properties

var myAge = user.age,
    myHobbies = user.hobbies,
    _user$isStudent = user.isStudent,
    myStd = _user$isStudent === void 0 ? "Unknown" : _user$isStudent;
console.log("\nDestructured properties:");
console.log("Age:", myAge);
console.log("Hobbies:", myHobbies);
console.log("Is student:", myStd); // ## Extra Challenge to meke knowledge stick:
// Exercise 1: Add a New Property
// 1. Add a new property isStudent to the user object.
// 2. Assign a boolean value (true or false) and print it.
// 3. Access this property using both dot notation and bracket notation.
// 1.

user.isStudent = true; // user["isStudent"] = true;  // Simple but is not for any case
// Object.assign(user, { isStudent: true, anotherProperty: "value" }); //this ones is more flexible
// updateUser = { ...user, isStudent: true };
// const usert2 = { name: "Pablo" };
// Object.defineProperty( usert2, "age", {  // This is the way to add a property with more control
//   value: 24,
//   writable: true,
//   enumerable: true,
//   configurable: true
// });
// --- Let'ts make an example using Object.freeze, it make the object inmutable.

console.log("########## INMUTALBE OBJECT ##########");

var userInmutalbe = _objectSpread({}, user);

user.newProperty = "This works";
console.log(user);
Object.freeze(userInmutalbe);
userInmutalbe.newProperty = "This not works";
console.log(userInmutalbe); // console.log(usert2);
// 2.

console.log("\nNew property:");
console.log("Is student: ", user.isStudent); // 3.

console.log("\nAccessing the new property:");
user.isStudent = false;
console.log("Is student (dot notation):", user.isStudent);
var property = "isStudent";
user[property] = true;
console.log("Is student (bracket notation):", user[property]); // Exercise 2: Destructure Nested Objects
// 1.

var firstAddress = {
  street: "Main",
  city: "New York",
  country: "USA"
};
user.address = firstAddress;
console.log("\nNested object:");
console.log(user); // 2.
// const country = user.country;
// console.log("\nDestructuring nested objects:");
// console.log("Address:", country);

var _user$address = user.address,
    street = _user$address.street,
    city = _user$address.city,
    country = _user$address.country;
console.log("\nDestructuring nested objects:");
console.log("Address:", street);
console.log("City:", city);
console.log("Country:", country); // Another way: 

var _user$address2 = user.address,
    myStreet = _user$address2.street,
    myCity = _user$address2.city,
    myCountry = _user$address2.country;
console.log("\nDestructuring nested objects (another way):"); // 3

console.log("Vars:", myStreet, myCity, myCountry); // Exercise 3: Add a Method to List Hobbies

user.listHobbies = function () {
  if (!this.hobbies || this.hobbies.length === 0) {
    console.log("There are no hobbies to list.");
    return;
  }

  console.log("\nHobbies:");
  this.hobbies.forEach(function (hobby, index) {
    console.log(index + 1 + ". " + hobby);
  });
};

user.listHobbies(); // Exercise 4: Rest Operator with Objects

var myName = user.name,
    otherDetails = _objectWithoutProperties(user, ["name"]);

console.log("\nDestructuring with rest:");
console.log("Name:", myName);
console.log("Other details:", otherDetails); // Exercise 5: Merge Two Objects

var addiotionalInfo = {
  prodession: "Developer",
  language: "Sapnish"
};

var completeUser = _objectSpread({}, user, {}, addiotionalInfo);

console.log("\nMerging objects:");
console.log(completeUser); // Exercise 6:

var name = user.name,
    isStudent = user.isStudent,
    _user$gender = user.gender,
    gender = _user$gender === void 0 ? "Unkkown" : _user$gender;
console.log("Values:", name, isStudent, gender); // Exercise 7:

function updateProperty(obj, key, value) {
  // obj its the object we want to update something
  // key is the kay, if key doesn't exist add in to obj with the value
  obj[key] = value;
  console.log(obj[key]);
}

console.log("Adding new property: ");
updateProperty(user, "secondName", "Cari");
console.log("Complete object: ");
console.log(user); // Exercise 8:

function validateUser(obj) {
  if (obj.name, obj.age, obj.country) {
    console.log("Exists");
  } else {
    console.log("Missing");
  }
}

console.log("Validating user: ");
validateUser(user); // Exercise 9:

console.log("All keys of my user"); // function inteareOverKeys(obj){
//   for obj each
// }

Object.keys(user).forEach(function (key, index) {
  console.log("".concat(index + 1, ". ").concat(key));
}); // Excercise 10:

var userCopy = _objectSpread({}, user);

var nameProperty = "name";
userCopy[nameProperty] = "Pablin";
console.log("User copy: ", userCopy[nameProperty]);
console.log("User orig: ", user[nameProperty]);
var anotherCopy = Object.assign(user);
anotherCopy[nameProperty] = "Pablote";
console.log("Anther copy: ", anotherCopy[nameProperty]);
console.log("User orig: ", user[nameProperty]);