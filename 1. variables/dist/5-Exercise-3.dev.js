'use strict'; // Exercise 3: Mutable Constants
// - Declare a const object and modify its properties.
// - Attempt to reassign the object to a new value and observe the error.

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var Computer = function Computer(name, marca) {
  var dateFabrication = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Date();
  var price = arguments.length > 3 ? arguments[3] : undefined;
  var index = arguments.length > 4 ? arguments[4] : undefined;

  _classCallCheck(this, Computer);

  this.name = name;
  this.marca = marca;
  this.dateFabrication = dateFabrication;
  this.price = price;
  this.index = index;
};

var computer1 = new Computer("Mac 1", "Apple", new Date(), 12, 1);
console.log(computer1); // Modify it's properties

computer1.name = "Mac 2";
console.log(computer1); // Reassign the object to a new value

try {
  computer1 = (_readOnlyError("computer1"), new Computer("Mac 3", "Apple", new Date(), 12, 1));
} catch (error) {
  console.log(error.message);
} // Extra, if I want my object inmutalbe I can use freeze


Object.freeze(computer1);

try {
  computer1.name = "Mac 10";
  console.log(computer1);
} catch (error) {
  console.error(error.message);
}