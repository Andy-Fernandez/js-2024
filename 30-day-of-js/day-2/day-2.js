let myString = 'Hi, here\'s my sintg in Days Of JavaScript from 30 Days Of JavaScript';

// 6.
let firstWord = myString.substring(0,2); // "Hi"
firstWord = myString.substr(2,2); //", "

// 7.
slicePhrase = myString.substr(23); // We don't need define how a long or even where it's end.

// 8.
let isIn = myString.includes(firstWord); //true
isIn = myString.includes(firstWord, 3); //false

// 9.
let splitedString = myString.split(" "); // ['Hi,', "here's", ... 'JavaScript.']
splitedString = myString.split(" ", 2); // ['Hi,', "here's"]

// 10.
splitedString = (myString.substring(23).split(' '));

// 11.
myString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
myArray = new Array();
for (const element of myString.split(',')) {
  myArray.push(element.trim())
}

// 12.
splitedString = splitedString.join(' ');
splitedString = splitedString.replaceAll("JavaScript", "Python");// Also we can use only replace(), this replaces just the first match in the main string

// 13.
myString = '30 Days Of JavaScript';
let char = myString.charAt(15)

// 14.
let number = myString.charCodeAt('J');
for (let index = 0; index < myString.length; index++) {
  const element = myString[index];
  // console.log(`Unicode (Dec): ${myString.charCodeAt(index)}, (Hex): 0x${myString.charCodeAt(index).toString(16)}, Element: ${element}`);
}

// 15.
number = myString.indexOf('a'); // 4

// 16.
number = myString.lastIndexOf('a') // 14

// 17.
myString = 'You cannot end a sentence with because because because is a conjunction';
number = myString.indexOf('because'); // 31

// 18.
number = myString.lastIndexOf('because'); // 47

// 19.
number = myString.search('because'); // 31

// 20.
firstWord = myString.substr(30,9);
firstWord = firstWord.trim();

// 21.
myString = '30 Days Of JavaScript';
let bool = myString.startsWith("30 Days", 0); // true

// 22.
for (let index = 0; index < myString.length; index++) {
  const element = myString[index];
  if(myString.endsWith("pt",index+1)){
    number = index; // 20
    break;
  }
}

// 23.
const ragex = /[a]/g;
let anObject = myString.match(ragex); // [ 'a', 'a', 'a' ]

// 24.
firstWord = myString.substr(11);
myString = myString.substr(0,11);
combinedString = myString.concat(firstWord); // 30 Days OfJavaScript

// 25.
console.log(combinedString.repeat(2));