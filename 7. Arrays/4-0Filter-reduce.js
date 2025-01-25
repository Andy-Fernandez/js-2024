// ### Filter
let array = new Array(20).fill(0);
const fillArray = (array) => array.forEach((element, index) => {
  array[index] = index + 1;
});

fillArray(array);
console.log(array);

// 1.
console.log(array.filter(num => num%2==0));

// 2.
let words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];
console.log(words.filter(word => word.length > 5));

// 3.
let people = [
  { name: "John Doe", age: 30 },
  { name: "Jane Smith", age: 25 },
  { name: "Alice Johnson", age: 28 },
  { name: "Bob Brown", age: 35 }
];
console.log(people.filter(person => person.age >= 18))

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

console.log(funnyStrings.filter(string => string.includes("I")));

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

console.log("######### Reduce #########")
console.log(array);

console.log(array.reduce((accumulator = 0, currentValue, index) => {
  accumulator = accumulator + currentValue;
  return accumulator;
}));

const anotherReducer = () => (accumulator = 0, currentValue, index) => {
  accumulator = accumulator + currentValue;
  return accumulator;
};

// array.reduce(reducer);

// 7.
array = [[1, 2], [3, 4], [5, 6]];
array.forEach((subArra, index) => {
  array[index] = subArra.reduce(anotherReducer());
});

console.log(array);

// 8.
array = ['apple', 'banana', 'apple', 'orange', 'apple'];


const counterWords = {};
array.reduce((accumulator, currentValue, index) => {
  if(counterWords.hasOwnProperty(currentValue)){
    counterWords[currentValue] += 1;
    console.log(currentValue);
  } else {
    counterWords[currentValue] = 1;
  }
},0) // If we don't set accumulator, it'll take first element of owr array

console.log(counterWords)

