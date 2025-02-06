// We're doing a request waiting for a response
function sendHTTPRequest(method, url, data){
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    }
  }).then( (response) =>
     response.json()
  )
}

async function fetchData() {
  const response = await sendHTTPRequest("GET", "https://rickandmortyapi.com/api/character");
  return response;
}


document.addEventListener("DOMContentLoaded", async () => {
  const character_image = document.getElementById("character-image");
  const character_name = document.getElementById("character-name");
  const character_status = document.getElementById("character-status");
  const character_species = document.getElementById("character-species");
  const character_gender = document.getElementById("character-gender");
  const character_origin = document.getElementById("character-origin");
  const character_location = document.getElementById("character-location");

  try {
    let message = await fetchData();
    // Assuming message contains the character data
    const { image, name, status, species, gender, origin, location } = message.results[0];

    // Assign values to the DOM elements in the correct order
    character_image.src = image; // Image (set as source for <img> tag)
    character_name.textContent = name; // Name
    character_status.textContent = status; // Status
    character_species.textContent = species; // Species
    character_gender.textContent = gender; // Gender
    character_origin.textContent = origin.name; // Origin name (it’s an object)
    character_location.textContent = location.name; // Location name (it’s an object)

    console.log("Response:", { name, status, species, gender, origin: origin.name, location: location.name });
  } catch ( error ) {
    resultDiv.textContent = "Error: Unable to fetch exchange rates.";
      console.error("Error:", error.message);
  }
})

// async function getRick() {
  
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