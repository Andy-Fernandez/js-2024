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

const findPrduct = (target) => products.find(product => product.name == target);
console.log("3.",findPrduct("Laptop"));

// 4.
const moreNumbers = [5, -3, 8, -1, 4, -6, 7, -2];
const firtsNegative = moreNumbers.find(number => number < 0);
console.log("4.",firtsNegative);

// 5.
const students = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'David' },
  { id: 5, name: 'Eva' }
];

const findById = (id) => students.find(student => student.id === id);
console.log("5.", findById(1));

console.log("#### FindIndex ####");

// 6.
const vehicles = ["car", "motorcycle", "bicycle", "truck", "bus", "electric car"];
const serchVehicle = (fistLetter) => vehicles.findIndex(vehicle => vehicle[0] === fistLetter);
console.log("6.", serchVehicle('e'));

// 7.
const anotherNumbers = [-50, -30, 80, -10, 40, -60, 700, -20];
const largeNumbre = (largeThan) => anotherNumbers.findIndex(number => number > largeThan);
console.log("7.", largeNumbre(100));

// 8.
const electrics = [
  { name: "Laptop", price: 800, inStock: true },
  { name: "Smartphone", price: 500, inStock: false },
  { name: "Tablet", price: 300, inStock: true },
  { name: "Headphones", price: 150, inStock: true },
  { name: "Keyboard", price: 100, inStock: false },
  { name: "Mouse", price: 50, inStock: true }
];

const firstOutOfStock = electrics.findIndex(electric => !electric.inStock);
console.log("8.", firstOutOfStock);

// 9.
const grades = [88, 92, 75, 33, 85, 90, 78, 84, 76, 97];
const bellowTo = (gradeBeingSerch) => grades.findIndex(grade => grade < gradeBeingSerch);
console.log("9.", bellowTo(50));

// 10.
const employees = [
  { id: 1, name: "Alice Johnson", department: "Human Resources" },
  { id: 2, name: "Bob Smith", department: "Marketing" },
  { id: 3, name: "Carol Taylor", department: "Finance" },
  { id: 4, name: "Dave Brown", department: "IT" },
  { id: 5, name: "Eve Davis", department: "Operations" }
];
const employeeInDepartent = (department) => employees.findIndex(employee => employee.department == department )
console.log("10.", employeeInDepartent("IT"));