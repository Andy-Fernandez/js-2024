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