"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchExchangeRates = fetchExchangeRates;

function fetchExchangeRates() {
  var apiKey, url, response;
  return regeneratorRuntime.async(function fetchExchangeRates$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          apiKey = "481f2a1952ecef3df3a6ccc1";
          url = "https://v6.exchangerate-api.com/v6/".concat(apiKey, "/latest/USD");
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch(url));

        case 4:
          response = _context.sent;
          return _context.abrupt("return", response.json());

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}