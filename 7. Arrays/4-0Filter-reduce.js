// ### Filter
// Generating mi array [1,2,... 20];

let array = Array.from({ length: 20 }, (_,index) => index + 1);
console.log(array);

// 1.
console.log(array.filter(num => num%2==0));

// 2.
const isLongerThanFiveChars = word => word.length > 5;
const isLongerThan = (word, length) => word.length > length;
let words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];
const longWords1 = words.filter(isLongerThanFiveChars)
const longWords2 = words.filter(word => isLongerThan(word, 5));
console.log(longWords1);
console.log(longWords2);

// 3.
let people = [
  { name: "John Doe", age: 30 },
  { name: "Jane Smith", age: 25 },
  { name: "Alice Johnson", age: 28 },
  { name: "Bob Brown", age: 35 }
];
const isLegalAge = person => person.age && person.age >= 18;
console.log(people.filter(isLegalAge));

// 4.
let funnyStrings = [
  "I'm not arguing, I'm just explaining why I'm right.",
  "I told my computer I needed a break, and now it won't stop sending me Kit-Kats.",
  "Why don't skeletons fight each other? They don't have the guts.",
  "I’m on a seafood diet. I see food and I eat it.",
  "Parallel lines have so much in common. It’s a shame they’ll never meet.",
  "I asked the librarian if the library had any books on paranoia. She whispered, 'They’re right behind you.'",
  "Why don’t some couples go to the gym? Because some relationships don’t work out."
];

const isInString = (string, word) => string.toLowerCase().includes(word.toLowerCase());
const searchWord = "I'm";
console.log(funnyStrings.filter(string => isInString(string, searchWord)));

// 5.
let products = [
  { name: "Laptop", price: 999.99, inStock: true },
  { name: "Smartphone", price: 499.99, inStock: false },
  { name: "Headphones", price: 89.99, inStock: true },
  { name: "Smartwatch", price: 199.99, inStock: true },
  { name: "Keyboard", price: 49.99, inStock: false }
];
console.log(products.filter(product => product.inStock))

// ### Reduce
// 6.
function reducer(accumulator, currentValue, index){
  const returns = accumulator + currentValue;
  console.log( `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`);
  return returns;
}
// index and array are optionals

console.log("######### Reduce #########")
console.log(array);
console.log("6.",array.reduce((accumulator, currentValue ) => accumulator + currentValue, 0));
const anotherReducer = () => (accumulator, currentValue) => accumulator + currentValue;
console.log("6.",array.reduce(anotherReducer(), 0));


// 7.
array = [[1, 2], [3, 4], [5, 6]];
const newArray = array.map(subArra => subArra.reduce((accumulator, currentValue) => accumulator + currentValue));
console.log("7.", newArray);


// 8.
const moreWords = ['apple', 'banana', 'apple', 'orange', 'apple'];

const counterWords = moreWords.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]){
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {}); // here is the trick, It must be inicialitaded ass and object
console.log("8. ",counterWords)


// 9.
const otherProducts = [
  { name: "Product 1", price: 10.99, quantity: 5 },
  { name: "Product 2", price: 15.49, quantity: 3 },
  { name: "Product 3", price: 7.99, quantity: 12 },
  { name: "Product 4", price: 25.00, quantity: 2 },
  { name: "Product 5", price: 3.75, quantity: 20 }
];

const totalCost = otherProducts.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.price * currentValue.quantity;
}, 0);
console.log("9.",totalCost);

// 10.
const numbers = [1, 12, 54, 65, 34];
const maximum = numbers.reduce((maximo, currentValue) => {
  if (maximo < currentValue) {
    maximo = currentValue
  };
  return maximo;
}, 0)
console.log("10.", maximum);