// 1.
const book = {
  title: "Harry Potter",
  author: "J.K. Roling",
  generateMessage: function(){
    return `${this.title} is written by ${this.author}`;
  },
  generateMessageArrw: () => `${book.title} is written by ${book.author}`
}

console.log(book.generateMessage());
console.log(book.generateMessageArrw());

// 2.
function outer() {
  let outerVar = "I am outside!"
  return () => `Accessed: ${outerVar}`
}

const inner = outer();
console.log(inner());

// 3.
let number = 13;

function myPure(number){
  return number*2;
}
console.log(myPure(number));
myImpure();
console.log(myPure(number));

function myImpure (){
  number += 12;
}

// 4.
let array = [1,2,3];

addsImpure = (array, item) => array.push(item);

console.log(array);
addsImpure(array, 4);
console.log(array);

/*Side Effects:
Just is modifing a global variable...
*/

// function addPureClean(array, item){
//   return [...array, item];
// }
addPureClean = (array, item) => [...array, item];

console.log(array);
let arrayInside = addsPure(array, 4);
console.log(`These suppost to be differente: `,array, arrayInside);

// 5.
greet = (name = "Stranger") => `Hello ${name}!`;
square = (num) => num*num;

console.log(greet("Pablo"));
console.log(greet());
console.log(square(2));