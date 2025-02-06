// async and await is mutch better 'cuase make code more readlible
// function fetchData() {
//   fetch("https://rickandmortyapi.com/api/character") // fetch -> buscar -> aller chercher
//     .then( (response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))
// }

async function fetchData() {
  try {
    let response = await fetch("https://rickandmortyapi.com/api/episode");
    let data = await response.json();
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

fetchData();

// now lets use for - await - of

const urls = [
  "https://rickandmortyapi.com/api/character",
  "https://rickandmortyapi.com/api/location",
  "https://rickandmortyapi.com/api/episode"
]

async function fetchAllData(usrls) {
  for await (const url of usrls) {
    let response = await fetch(url);
    let data =  await response.json();
    console.log(data);
  }
}

fetchAllData(urls);