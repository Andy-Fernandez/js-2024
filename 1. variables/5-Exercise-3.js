'use strict';

// Exercise 3: Mutable Constants
// - Declare a const object and modify its properties.
// - Attempt to reassign the object to a new value and observe the error.

class Computer {
  constructor(name, marca, dateFabrication = new Date(), price, index){
    this.name = name;
    this.marca = marca;
    this.dateFabrication = dateFabrication;
    this.price = price;
    this.index = index;
  }
}

const computer1 = new Computer("Mac 1", "Apple", new Date() ,12, 1);

console.log(computer1);

// Modify it's properties
computer1.name = "Mac 2";
console.log(computer1);

// Reassign the object to a new value
try{
  computer1 = new Computer("Mac 3", "Apple", new Date() ,12, 1);
} catch(error){
  console.log('ERROR: ', error.message)
}

// Extra, if I want my object inmutalbe I can use freeze
Object.freeze(computer1);
try{
  computer1.name = "Mac 10";
  console.log(computer1);
}catch(error){
  console.error('ERROR: ', error.message);
}



