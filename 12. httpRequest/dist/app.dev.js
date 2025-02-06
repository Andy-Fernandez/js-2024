"use strict";

// We're doing a request waiting for a response
function sendHTTPRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function (response) {
    return response.json();
  });
}

function fetchData() {
  var response;
  return regeneratorRuntime.async(function fetchData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(sendHTTPRequest("GET", "https://rickandmortyapi.com/api/character"));

        case 2:
          response = _context.sent;
          return _context.abrupt("return", response);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", function _callee() {
  var character_image, character_name, character_status, character_species, character_gender, character_origin, character_location, message, _message$results$, image, name, status, species, gender, origin, location;

  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          character_image = document.getElementById("character-image");
          character_name = document.getElementById("character-name");
          character_status = document.getElementById("character-status");
          character_species = document.getElementById("character-species");
          character_gender = document.getElementById("character-gender");
          character_origin = document.getElementById("character-origin");
          character_location = document.getElementById("character-location");
          _context2.prev = 7;
          _context2.next = 10;
          return regeneratorRuntime.awrap(fetchData());

        case 10:
          message = _context2.sent;
          // Assuming message contains the character data
          _message$results$ = message.results[0], image = _message$results$.image, name = _message$results$.name, status = _message$results$.status, species = _message$results$.species, gender = _message$results$.gender, origin = _message$results$.origin, location = _message$results$.location; // Assign values to the DOM elements in the correct order

          character_image.src = image; // Image (set as source for <img> tag)

          character_name.textContent = name; // Name

          character_status.textContent = status; // Status

          character_species.textContent = species; // Species

          character_gender.textContent = gender; // Gender

          character_origin.textContent = origin.name; // Origin name (it’s an object)

          character_location.textContent = location.name; // Location name (it’s an object)

          console.log("Response:", {
            name: name,
            status: status,
            species: species,
            gender: gender,
            origin: origin.name,
            location: location.name
          });
          _context2.next = 26;
          break;

        case 22:
          _context2.prev = 22;
          _context2.t0 = _context2["catch"](7);
          resultDiv.textContent = "Error: Unable to fetch exchange rates.";
          console.error("Error:", _context2.t0.message);

        case 26:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[7, 22]]);
}); // async function getRick() {
// }
// fetchData()
//     .then((message) => {
//       console.log("Response:", message.results[0].image)
//       console.log("Response:", message.results[0].name)
//       console.log("Response:", message.results[0].status)
//       console.log("Response:", message.results[0].species)
//       console.log("Response:", message.results[0].gender)
//       console.log("Response:", message.results[0].origin)
//       console.log("Response:", message.results[0].location)
//     })
//     .catch((error) => console.log(error));
// async function fetchRickAndMortyData() {
//   try {
//     console.log("https://rickandmortyapi.com/api/character")
//     let response = await fetch("https://rickandmortyapi.com/api/character");
//     console.log("response:", response);
//     let data = await response.json();
//     console.log("data:",data);
//     return data;
//   } catch (error) {
//     console.error(error.message);
//   }
// }
// fetchRickAndMortyData()
//   .then((message) => console.log("Response", message))
//   .catch(error => console.log("Error:", error));