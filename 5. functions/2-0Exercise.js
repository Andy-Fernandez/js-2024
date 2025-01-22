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
array