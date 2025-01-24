// # Map()
// 1.
const array = [1,2,3,4,5];
const dobleIt = num => num*2;
const arrayDobled = array.map(dobleIt);

console.log(arrayDobled);

// 2.
const strings = ["apple", "banana", "cherry"];
const uppeCaseAll = word => word.toUpperCase();
const upperStrings = strings.map(uppeCaseAll);

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
  {name: 'Mac', price: 100},
  {name: 'Iphone', price: 120},
  {name: 'Mac', price: 90}
]

// const addDescuntedPrice = product => {this.descountedPrice = product*0.1}; 
const addDiscountedPrice = product => {
  return {...product, discountedPrice: product.price * 0.10}
}; 
const updateProducts = products.map(addDiscountedPrice);

console.log(updateProducts)

// # forEach()
// 6.
const numbers = [1,2,3,4,5];
const sumNumbresArray = (numbresArray) => {
  let total = 0;
  numbresArray.forEach(element => total+=element);
  return total;
}

console.log(sumNumbresArray(numbers));

// 7.
const books = [
  {title: "100 años de Soledad",author: "Garcia Marques"},
  {title: "Latinoamerica",author: "Andres Oppnhaimer"}
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
const anotherArray = ['Hi', 'this', 'is', 'another', 'array'];
let elementsAndIndex = {};

anotherArray.forEach((element, index) => elementsAndIndex[element] = index);

console.log(elementsAndIndex);

// 10.

const anotherNumbresArray = [1,2,3,4,5];
anotherNumbresArray.forEach((element, index) => anotherNumbresArray[index] *= 2 );
console.log(anotherNumbresArray);