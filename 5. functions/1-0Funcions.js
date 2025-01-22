// Arrow functions

const myUncle = {
  name: "Ben",
  hisMessage: function(message){
    return `Uncle ${this.name} says: ${message}`
  },
  hisMessageArrow: message => `Uncle ${myUncle.name} says: ${message}`
}

console.log(myUncle.hisMessage("hi buddy"));
console.log(myUncle.hisMessageArrow("hi buddy"));

// In this case we can'n use 'this.neme' in arrow funtions, it's somthing about lexial link or enlance lexico... we will see deeper