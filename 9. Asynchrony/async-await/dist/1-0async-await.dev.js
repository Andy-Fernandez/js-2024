"use strict";

function _asyncIterator(iterable) { var method; if (typeof Symbol !== "undefined") { if (Symbol.asyncIterator) { method = iterable[Symbol.asyncIterator]; if (method != null) return method.call(iterable); } if (Symbol.iterator) { method = iterable[Symbol.iterator]; if (method != null) return method.call(iterable); } } throw new TypeError("Object is not async iterable"); }

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

fetchData(); // now lets use for - await - of

var urls = ["https://rickandmortyapi.com/api/character", "https://rickandmortyapi.com/api/location", "https://rickandmortyapi.com/api/episode"];

function fetchAllData(usrls) {
  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, url, response, data;

  return regeneratorRuntime.async(function fetchAllData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _context2.prev = 2;
          _iterator = _asyncIterator(usrls);

        case 4:
          _context2.next = 6;
          return regeneratorRuntime.awrap(_iterator.next());

        case 6:
          _step = _context2.sent;
          _iteratorNormalCompletion = _step.done;
          _context2.next = 10;
          return regeneratorRuntime.awrap(_step.value);

        case 10:
          _value = _context2.sent;

          if (_iteratorNormalCompletion) {
            _context2.next = 23;
            break;
          }

          url = _value;
          _context2.next = 15;
          return regeneratorRuntime.awrap(fetch(url));

        case 15:
          response = _context2.sent;
          _context2.next = 18;
          return regeneratorRuntime.awrap(response.json());

        case 18:
          data = _context2.sent;
          console.log(data);

        case 20:
          _iteratorNormalCompletion = true;
          _context2.next = 4;
          break;

        case 23:
          _context2.next = 29;
          break;

        case 25:
          _context2.prev = 25;
          _context2.t0 = _context2["catch"](2);
          _didIteratorError = true;
          _iteratorError = _context2.t0;

        case 29:
          _context2.prev = 29;
          _context2.prev = 30;

          if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
            _context2.next = 34;
            break;
          }

          _context2.next = 34;
          return regeneratorRuntime.awrap(_iterator["return"]());

        case 34:
          _context2.prev = 34;

          if (!_didIteratorError) {
            _context2.next = 37;
            break;
          }

          throw _iteratorError;

        case 37:
          return _context2.finish(34);

        case 38:
          return _context2.finish(29);

        case 39:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[2, 25, 29, 39], [30,, 34, 38]]);
}

fetchAllData(urls);