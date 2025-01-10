"use strict";

// PRIMITIVES
// Those are inmutables (They can't modify directly) and represent a unic value
const name0 = "strnig";
const name1 = 'string';
const name2 = `string`;
console.log(`string: ${typeof name0} string: ${typeof name1} string: ${typeof name2}`);

const booleanito = true;
console.log(`My booleanito es ${typeof booleanito} and has a value of: ${booleanito}`)

const number0 = 10;
const number1 = 10.10;
const number2 = Infinity;
const number3 = -Infinity;
console.log(`number0 ${typeof number0} number1: ${typeof number1} number2: ${typeof number2} number3: ${typeof number3} and NaN: ${typeof NaN}`);

const bignumer = 123456789123456789n;
console.log(`my bigint: ${typeof bignumer}`);

const symbolico = Symbol("Kg");
console.log(`I don't know how to use my "symbolico" var but its a ${typeof symbolico} type of data.`);

let x; // It's declarated but doen't inicialited
console.log(typeof x); // undefined

let y = null;
console.log(`Let's se my ${y} variable, it's a ${typeof y} taype of data.`);

// NO PRIMITIVES
// Those can contain multiple values and references.

// Objects
class Person {
  constructor (name, age, ig = "Does't has"){
    this.name = name;
    this.age = age;
    this.ig = ig;
  }
}
const person1 = new Person("Pablo", 18);
console.log(typeof person1);

// Arrays
const personas = [person1, new Person("Andres", 28)];
const numbers = [1,2,3];
console.log(typeof personas);
console.log(typeof numbers);

// Functionss
function showArray(ary){
  ary.forEach((element,index) => console.log(`${index + 1}.`, element));
}

showArray(personas);

// TYPE COMPARATIONS
console.log("5" - 3); // 2
console.log("5" + 3); // "53"
// Explicit ceorcion
const number = Number("42");
const string = String(42);
console.log(`My number is ${number} and it's type of: ${typeof number}`);
console.log(`My string is ${string} and it's type of: ${typeof string}`);

// == and ===
console.log("5" == 5);
console.log("5" === 5);


// EXERCISES
let chall; // declare a variable with out inicializated
console.log(typeof chall); // undefinded

chall = null;
console.log(typeof chall); // object
//I guess differences between null and undefinded is null is and object...

let myString = "Hola!";
let myNumer = 5;
console.log(myString + myNumer); // "Hola!5" 
console.log(myString * myNumer); // "Hola!Hola!Hola!Hola!Hola!" // Real Nan
let aBoolean = true;
let anotherBoolean = false;
console.log(`Boolean covert to a Number True: ${Number(aBoolean)} and False: ${Number(anotherBoolean)}`);

console.log(symbolico);
console.log(person1);
person1[symbolico] = 68;
console.log(person1);
console.log(person1[Symbol("Kg")]); // Undefined
console.log(person1[symbolico]);

let myBigInt = 12345678998765431n;
let number00 = 10;
try{
  let aHugeNumer = myBigInt + number00; // Udefined... Because are not compatibles
  console.log(aHugeNumer);
}catch(error){
  console.error("Error: ", error.message);
}