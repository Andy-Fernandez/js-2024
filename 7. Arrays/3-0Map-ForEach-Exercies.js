/*
### Key difference between forEach and map:
forEach does something to each item, but it doesn’t change or return a new array.
map transforms the items and returns a new array with the changes.
*/
// forEach example
let arr = [1, 2, 3, 4];
arr.forEach(function(currentValue, index, array) {
  console.log("Item: " + currentValue + " at index: " + index + " in array: " + array);
  return currentValue * 2;  // Returning the doubled value but doesn't change array or retun a new array.
});
console.log(arr);

// map  example
arr = [1, 2, 3, 4];
let newArr = arr.map(function(currentValue, index, array) {
  console.log("Item: " + currentValue + " at index: " + index + " in array: " + array);
  return currentValue * 2;  // Returning the doubled value
});
console.log(newArr); // Output: [2, 4, 6, 8]



// ### Map() ###
// 1.
const array = [1,2,3,4,5];
const doubleIt = num => num*2;
const arrayDobled = array.map(doubleIt);

console.log(arrayDobled);

// 2.
const strings = ["apple", "banana", "cherry"];
const upperCaseAll = word => word.toUpperCase();
const upperStrings = strings.map(upperCaseAll);

console.log(upperStrings);

// 3.
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

const getNames = person => person.name;
const peopleNames = people.map(getNames);
console.log(peopleNames);

// 4.
const reactangles = [
  { width: 1, height: 1 },
  { width: 2, height: 2 },
  { width: 3, height: 3 },
]

const getArea = rectanle => rectanle.width * rectanle.height;
const rectnaglesArea = reactangles.map(getArea);
console.log(rectnaglesArea);

// 5.
const products = [
  { name: 'Mac', price: 100 },
  { name: 'iPhone', price: 120 },
  { name: 'Mac', price: 90 }
]

const addDiscountedPrice = product => ({
  ...product, discountedPrice: product.price * 0.10
});

const updateProducts = products.map(addDiscountedPrice);
console.log(updateProducts);

// ### forEach() ###
// 6.
const numbers = [1,2,3,4,5];
const sumNumbresArray = (numbresArray) => {
  let total = 0;
  numbresArray.forEach(element => total += element);
  return total;
}

console.log(sumNumbresArray(numbers));

// 7.
const books = [
  { title: "100 años de Soledad",author: "Garcia Marques"},
  { title: "Latinoamerica",author: "Andres Oppnhaimer"}
]

const printBookDetails = (array) => array.forEach(element => {
  console.log(`Title: ${element.title}, Author: ${element.author}`);
});

printBookDetails(books);

// 8.
const arrayString = ['Hola', 'Como', 'Estas', 'Hola', 'Como', 'estoy?'];

const countWordFuntion = (array,word) => {
  let countWord = 0;
  array.forEach(element => {
    if(element == word){
      countWord++;
    }
  });
  console.log(`La palabra se repide ${countWord} veces`);
}

countWordFuntion(arrayString, 'Hola');

// Extra, find how many times each word reapeat
const countWordsFuntion = (array) => {
  let countWords = {};

  arrayString.forEach( (element, index) =>{
    if (countWords.hasOwnProperty(element)){
      countWords[element] += 1;
    } else {
      countWords[element] = 1;
    }
  });
  return countWords;
}

console.log(countWordsFuntion(arrayString))

// 9.
const elementIndex = (array) => {
  let elementsAndIndex = {};
  array.forEach((element, index) => elementsAndIndex[element] = index);
  return elementsAndIndex;
}

const anotherArray = ['Hi', 'this', 'is', 'another', 'array'];
console.log(elementIndex(anotherArray));

// 10.
const multplyArry = (array, multiplier) => {
  let newArray = [];
  array.forEach(element => newArray.push(element*multiplier));
  return newArray;
}

const anotherNumbresArray = [1,2,3,4,5];
anotherNumbresArray.forEach((element, index) => anotherNumbresArray[index] *= 2 );

console.log(anotherNumbresArray);
console.log(multplyArry(anotherNumbresArray,2));

// 11. Filter, Map and  Log:
const numeros = [2, 4,3, 5, 7, 8, 11, 13, 17, 18, 19, 23, 29, 31, 37, 41, 42, 43, 47, 53, 54, 59, 61, 62, 67, 71, 72];

const doubleEvens = numeros
  .filter(numero => numero%2===0)
  .map(pares => pares*2);
console.log("11.")
doubleEvens.forEach((number) => console.log(number));

// 12. Flatten and Map
const array2D = [[1, 2], [3, 4], [5, 6]];
const flatArray = array2D.flat();
console.log("12.", flatArray);

// 13. Log and Transform
const latamAuthors = [
  "Gabriel García Márquez",
  "Jorge Luis Borges",
  "Isabel Allende",
  "Mario Vargas Llosa",
  "Pablo Neruda",
  "Julio Cortázar",
  "Carlos Fuentes"
]
latamAuthors.forEach(author => console.log(`${author}: ${author.length}`));

const lengthArray = latamAuthors.map(author => author.length);
console.log("13.", lengthArray);

// 14. Update Invetory
const booksStock = [
  { book: "One Hundred Years of Solitude", stock: 12 },
  { book: "The Aleph", stock: 7 },
  { book: "The Time of the Hero", stock: 5 },
  { book: "Like Water for Chocolate", stock: 9 },
  { book: "The Kingdom of This World", stock: 3 }
];

booksStock.forEach(item => console.log(`📖 Book: "${item.book}" | 📦 Stock: ${item.stock}`));

const incrementStock = (productsStock, amount) => 
  productsStock.map(product => ({ ...product, stock: product.stock + amount }));

console.log("Updated Stock:", incrementStock(booksStock, 10));
