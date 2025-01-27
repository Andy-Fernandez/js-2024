"use strict";

// ### find()
// 1.
var numbers = [1, 2, 3, 4, 5];
var firstEvenNumer = numbers.find(function (number) {
  return number % 2 === 0;
});
console.log("1.", firstEvenNumer); // 2.

var fruits = ["banana", "cherry", "Apple", "date", "elderberry"];
var firstFuitWithA = fruits.find(function (fruit) {
  return fruit[0] === 'A';
}); // I can create a generc function

console.log("2.", firstFuitWithA); // 3.

var products = [{
  name: "Laptop",
  price: 999.99
}, {
  name: "Smartphone",
  price: 499.99
}, {
  name: "Headphones",
  price: 199.99
}, {
  name: "Smartwatch",
  price: 249.99
}, {
  name: "Tablet",
  price: 349.99
}];

var findPrduct = function findPrduct(target) {
  return products.find(function (product) {
    return product.name == target;
  });
};

console.log("3.", findPrduct("Laptop")); // 4.

var moreNumbers = [5, -3, 8, -1, 4, -6, 7, -2];
var firtsNegative = moreNumbers.find(function (number) {
  return number < 0;
});
console.log("4.", firtsNegative); // 5.

var students = [{
  id: 1,
  name: 'Alice'
}, {
  id: 2,
  name: 'Bob'
}, {
  id: 3,
  name: 'Charlie'
}, {
  id: 4,
  name: 'David'
}, {
  id: 5,
  name: 'Eva'
}];

var findById = function findById(id) {
  return students.find(function (student) {
    return student.id === id;
  });
};

console.log("5.", findById(1));
console.log("#### FindIndex ####"); // 6.

var vehicles = ["car", "motorcycle", "bicycle", "truck", "bus", "electric car"];

var serchVehicle = function serchVehicle(fistLetter) {
  return vehicles.findIndex(function (vehicle) {
    return vehicle[0] === fistLetter;
  });
};

console.log("6.", serchVehicle('e')); // 7.

var anotherNumbers = [-50, -30, 80, -10, 40, -60, 700, -20];

var largeNumbre = function largeNumbre(largeThan) {
  return anotherNumbers.findIndex(function (number) {
    return number > largeThan;
  });
};

console.log("7.", largeNumbre(100)); // 8.

var electrics = [{
  name: "Laptop",
  price: 800,
  inStock: true
}, {
  name: "Smartphone",
  price: 500,
  inStock: false
}, {
  name: "Tablet",
  price: 300,
  inStock: true
}, {
  name: "Headphones",
  price: 150,
  inStock: true
}, {
  name: "Keyboard",
  price: 100,
  inStock: false
}, {
  name: "Mouse",
  price: 50,
  inStock: true
}];
var firstOutOfStock = electrics.findIndex(function (electric) {
  return !electric.inStock;
});
console.log("8.", firstOutOfStock); // 9.

var grades = [88, 92, 75, 33, 85, 90, 78, 84, 76, 97];

var bellowTo = function bellowTo(gradeBeingSerch) {
  return grades.findIndex(function (grade) {
    return grade < gradeBeingSerch;
  });
};

console.log("9.", bellowTo(50)); // 10.

var employees = [{
  id: 1,
  name: "Alice Johnson",
  department: "Human Resources"
}, {
  id: 2,
  name: "Bob Smith",
  department: "Marketing"
}, {
  id: 3,
  name: "Carol Taylor",
  department: "Finance"
}, {
  id: 4,
  name: "Dave Brown",
  department: "IT"
}, {
  id: 5,
  name: "Eve Davis",
  department: "Operations"
}];

var employeeInDepartent = function employeeInDepartent(department) {
  return employees.findIndex(function (employee) {
    return employee.department == department;
  });
};

console.log("10.", employeeInDepartent("IT"));