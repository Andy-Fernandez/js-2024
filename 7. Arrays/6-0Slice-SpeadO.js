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
// 6.
const fistArray = Array.from({length: 10}, (_,index) => index + 1);
const secondArray = Array.from({length: 10}, (_,index) => index + 11);

const thirdArray = [...fistArray, ...secondArray];
console.log("6.", thirdArray);

// 7.
const davidLynchMovies = [
  "Blue Velvet",
  "Mulholland Drive",
  "Twin Peaks: Fire Walk with Me",
  "Eraserhead",
  "The Elephant Man",
  "Lost Highway",
  "Wild at Heart",
  "Inland Empire",
  "Dune",
  "The Straight Story"
];

const davidLynchMoviesCopy = [...davidLynchMovies];
console.log("7.",davidLynchMoviesCopy);

// 8.
const years = [1492, 1776, 1914, 1969, 1989, 2001, 2020];
const yearsComplete = [...years.slice(0, years.length/2), 2024,...years.slice(years.length/2)];
console.log("8.", yearsComplete)

// 9.
const tarantinoMovies = [
  "Pulp Fiction",
  "Kill Bill: Vol. 1",
  "Inglourious Basterds",
  "Django Unchained"
];

const wesAndersonMovies = [
  "The Grand Budapest Hotel",
  "Moonrise Kingdom",
  "The Royal Tenenbaums",
  "Fantastic Mr. Fox"
]

const nolanMovies = [
  "Inception",
  "The Dark Knight",
  "Interstellar"
];

const combineMovies = [...tarantinoMovies, ...wesAndersonMovies, ...nolanMovies];
console.log("9.",combineMovies)

// 10.
const products = [
  { name: "Movie Ticket - Standard", price: 12.99 },
  { name: "Movie Ticket - Premium", price: 18.99 },
  { name: "Popcorn - Small", price: 5.49 },
  { name: "Popcorn - Large", price: 7.99 },
  { name: "Soda - Medium", price: 3.99 },
  { name: "Soda - Large", price: 4.99 }
];
const calculateDiscountedPrice = (price, descount) => {
  return price*((100-descount)/100)
}


const applyDiscountToProducts = (descount) => products.map(
  product => ({...product, discountedPrice: calculateDiscountedPrice(product.price,descount)})
);
console.log("10.", applyDiscountToProducts(10));