"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Contact = function Contact(name) {
  var phone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var email = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

  _classCallCheck(this, Contact);

  this.name = name;
  this.phone = phone;
  this.email = email;
};

contacts = [];

contacts.add = function (name) {
  var number = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var email = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

  if (!name) {
    throw new Error("Name is require.");
  }

  var contact = new Contact(name, number, email);
  contacts.push(contact);
}; // this work


contacts["delete"] = function () {};

contacts.update = function () {};

contacts.search = function () {}; // ############### TEST ###############


contacts.add("Andys", 62541782, "andys@gmail.com");
contacts.add("Pablo", 62541783);
contacts.add("Ferna");
contacts.add("Andys", "", "andys@gmail.com");

function showContacts() {
  contacts.forEach(function (element) {
    console.log(element);
  });
}

showContacts();