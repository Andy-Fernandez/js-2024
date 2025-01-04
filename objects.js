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
const { age, hobbies } = user;
console.log("\nDestructured properties:");
console.log("Age:", age);
console.log("Hobbies:", hobbies);

