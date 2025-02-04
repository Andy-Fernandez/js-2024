"use strict";

// async and await is mutch better 'cuase make code more readlible
// function fetchData() {
//   fetch("https://rickandmortyapi.com/api/character") // fetch -> buscar -> aller chercher
//     .then( (response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))
// }
function fetchData() {
  var response, data;
  return regeneratorRuntime.async(function fetchData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch("https://rickandmortyapi.com/api/episode"));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          data = _context.sent;
          console.log(data);
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
}

fetchData();