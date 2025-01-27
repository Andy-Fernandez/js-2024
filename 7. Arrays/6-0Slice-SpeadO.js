// Slice()
// 1.
const numbers = Array.from({length: 10 }, (_,index) => index + 1)
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log("1.1",numbers.slice(0,3));
console.log("1.2",numbers.slice(-3));

// 2.
const lynchMovies = [
  "Eraserhead",
  "The Elephant Man",
  "Blue Velvet",
  "Dune",
  "Wild at Heart",
  "Twin Peaks: Fire Walk with Me",
  "Lost Highway",
  "The Straight Story",
  "Mulholland Drive",
  "Inland Empire"
];

const lynchMoviesCopy = lynchMovies.slice();
console.log(lynchMoviesCopy === lynchMovies);

// 3.
const dialogue = "I'm going to make him an offer he can't refuse.";
const words = dialogue.split(" ");

const newDialogue = words.slice(1,words.length-1);
console.log("3.", newDialogue);

// 4.
const paginationNumbres = Array.from({length:  100}, (_, index) => index +1);
console.log(paginationNumbres.splice(-10));

// 5.
const javaScript = "JavaScript";
console.log(javaScript.slice(0,4))
console.log(javaScript.slice(-4))

// Spread Operator
console.log("##### Spread Operator ######");
const fistArray = Array.from({length: 10}, (_,index) => index + 1);
const secondArray = Array.from({length: 10}, (_,index) => index + 11);

const thirdArray = [...fistArray, ...secondArray];
console.log(thirdArray);