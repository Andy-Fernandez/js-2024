"use strict";

var _api = require("./api");

(0, _api.fetchExchangeRates)().then(function (message) {
  return console.log(message);
})["catch"](function (error) {
  return console.error(error.message);
});