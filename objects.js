// Reto 1.3: Objetos y Destructuring
// Define the user object

// 1. Crea un objeto que represente un usuario con propiedades como: nombre, edad, pais, hobbies (array).
const user = {
  name: "Pablo",
  age: 24,
  country: "Mexico",
  hobbies: ["Gaming", "Reading", "Coding"],
  // 2. Añade un método dentro del objeto que retorne un saludo usando el nombre y pais.
  greating: function () {
    console.log("Hello, my name is " + this.name + " and I'm from " + this.country);
  }
};

// 3. Desde fuera del objeto, llama ese método e imprime el resultado.
// Calling the method
console.log("\nCalling the 'greating' method:");
user.greating();

// 4. Utiliza destructuring para acceder a edad y hobbies en una sola línea.
// Using destructuring to extract specific properties
const { age: myAge, hobbies: myHobbies, isStudent: myStd = "Unknown" } = user;
console.log("\nDestructured properties:");
console.log("Age:", myAge);
console.log("Hobbies:", myHobbies);
console.log("Is student:", myStd);

// ## Extra Challenge to meke knowledge stick:

// Exercise 1: Add a New Property
// 1. Add a new property isStudent to the user object.
// 2. Assign a boolean value (true or false) and print it.
// 3. Access this property using both dot notation and bracket notation.

// 1.

user.isStudent = true;
// user["isStudent"] = true;  // Simple but is not for any case
// Object.assign(user, { isStudent: true, anotherProperty: "value" }); //this ones is more flexible
// updateUser = { ...user, isStudent: true };

// const usert2 = { name: "Pablo" };
// Object.defineProperty( usert2, "age", {  // This is the way to add a property with more control
//   value: 24,
//   writable: true,
//   enumerable: true,
//   configurable: true
// });

// --- Let'ts make an example using Object.freeze, it make the object inmutable.
console.log("########## INMUTALBE OBJECT ##########");
const userInmutalbe = { ...user }
user.newProperty = "This works";
console.log(user);
Object.freeze(userInmutalbe);
userInmutalbe.newProperty = "This not works";
console.log(userInmutalbe);


// console.log(usert2);

// 2.
console.log("\nNew property:");
console.log("Is student: ", user.isStudent);

// 3.

console.log("\nAccessing the new property:");
user.isStudent = false;
console.log("Is student (dot notation):", user.isStudent);
const property = "isStudent";
user[property] = true;
console.log("Is student (bracket notation):", user[property]);

// Exercise 2: Destructure Nested Objects
// 1.
const firstAddress = {
  street: "Main",
  city: "New York",
  country: "USA"
};

user.address = firstAddress;
console.log("\nNested object:");
console.log(user);

// 2.
// const country = user.country;
// console.log("\nDestructuring nested objects:");
// console.log("Address:", country);

const { address: { street, city, country }} = user;
console.log("\nDestructuring nested objects:");
console.log("Address:", street);
console.log("City:", city);
console.log("Country:", country);

// Another way: 
const { street: myStreet, city: myCity, country: myCountry } = user.address;
console.log("\nDestructuring nested objects (another way):");

// 3
console.log("Vars:", myStreet, myCity, myCountry);


// Exercise 3: Add a Method to List Hobbies
user.listHobbies = function () {
  if (!this.hobbies || this.hobbies.length === 0) {
    console.log("There are no hobbies to list.");
    return;
  }
  console.log("\nHobbies:");
  this.hobbies.forEach((hobby, index) => {
    console.log(index + 1 + ". " + hobby);
  });
}

user.listHobbies();


// Exercise 4: Rest Operator with Objects
const { name: myName, ...otherDetails } = user;
console.log("\nDestructuring with rest:");
console.log("Name:", myName);
console.log("Other details:", otherDetails);

// Exercise 5: Merge Two Objects
const addiotionalInfo = {
  prodession: "Developer",
  language: "Sapnish"
};

const completeUser = { ...user, ...addiotionalInfo };
console.log("\nMerging objects:");
console.log(completeUser);

// Exercise 6:
const { name, isStudent, gender = "Unkkown" } = user;
console.log("Values:", name, isStudent, gender);

// Exercise 7:
function updateProperty(obj, key, value){
  // obj its the object we want to update something
  // key is the kay, if key doesn't exist add in to obj with the value
  obj[key] = value;
  console.log(obj[key]);
}

console.log("Adding new property: ")
updateProperty(user, "secondName", "Cari")
console.log("Complete object: ")
console.log(user)

// Exercise 8:
function validateUser(obj){
  if (obj.name, obj.age, obj.country){
    console.log("Exists");
  }else{
    console.log("Missing");
  }
}

console.log("Validating user: ")
validateUser(user);

// Exercise 9:
console.log("All keys of my user")
// function inteareOverKeys(obj){
//   for obj each
// }
Object.keys(user).forEach((key, index) => {
  console.log(`${index + 1}. ${key}`)
})

// Excercise 10:
const userCopy = { ...user };
const nameProperty = "name";
userCopy[nameProperty] = "Pablin";
console.log("User copy: ", userCopy[nameProperty]);
console.log("User orig: ", user[nameProperty]);

const anotherCopy = Object.assign(user);
anotherCopy[nameProperty] = "Pablote";
console.log("Anther copy: ", anotherCopy[nameProperty]);
console.log("User orig: ", user[nameProperty]);