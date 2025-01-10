// Commond methods

let myString = "Hola a dodis ";
console.log(typeof myString);

console.log(myString.toLowerCase());
console.log(myString.toUpperCase());
console.log(myString.trim());
console.log(myString.charAt(0));
try{
  myString.forEach(element => {
    console.log(element);
  });
}catch(error){
  console.error(error.message); //forEech doesn't work for strings
}
for(let i=0; i<myString.length; i++){
  console.log(
    `Chart: ${myString.charAt(i)} at index of: ${myString.indexOf(myString.charAt(i))} and slice: ${myString.slice(i,i+3)}`);
}

console.log(myString.replace(" ","_"));
console.log(myString.split(" "));

// Escape Characters
console.log("Hello \"wold\"", '\nIt\'s work!');
console.log("C:\\Path");

// Exercise:
let myName = "Pablo Andres";
let myFColor = "Purple";
let funFact = "I had a probler with bathrooms";

let combinedString = `My name is ${myName}, my favorite color is ${myFColor}, and a fun fact about me is that I had a problem with bathrooms.`;

console.log(combinedString);

// methods than I know
// .indexOf(), .charAt(), .trim(), .split(), toUpperCase(), toLowerCase(), .replace()

console.log(`A ${combinedString.slice(11,11+12)} le gusta el color ${combinedString.slice(45,52).trim()}`);
console.log(`Last chart in my combineString es: ${combinedString.charAt(combinedString.length-1)}`);