"use strict";

// Arrow functions
var myUncle = {
  name: "Ben",
  hisMessage: function hisMessage(message) {
    return "Uncle ".concat(this.name, " says: ").concat(message);
  },
  hisMessageArrow: function hisMessageArrow(message) {
    return "Uncle ".concat(myUncle.name, " says: ").concat(message);
  }
};
console.log(myUncle.hisMessage("hi buddy"));
console.log(myUncle.hisMessageArrow("hi buddy")); // In this case we can'n use 'this.neme' in arrow funtions, it's somthing about lexial link or enlance lexico... we will see deeper