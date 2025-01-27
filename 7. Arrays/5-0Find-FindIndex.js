// ### find()
// 1.
const numbers = [1, 2, 3, 4, 5];
const firstEvenNumer = numbers.find(number => number%2===0);

console.log("1.",firstEvenNumer);

// 2.
let fruits = ["banana", "cherry", "Apple", "date", "elderberry"];
const firstFuitWithA = fruits.find(fruit => fruit[0]==='A'); // I can create a generc function

console.log("2.",firstFuitWithA);

// 3.
let products = [
  { name: "Laptop", price: 999.99 },
  { name: "Smartphone", price: 499.99 },
  { name: "Headphones", price: 199.99 },
  { name: "Smartwatch", price: 249.99 },
  { name: "Tablet", price: 349.99 }
];

const findPrduct = (target) => products.find(prodcut => products.name === target);

console.log("3.",findPrduct("Laptop"));