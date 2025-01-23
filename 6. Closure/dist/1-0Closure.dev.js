"use strict";

// function outerFunction(){
//   let outerVariable = "Hi I'm outerviabel";
//   function innterFuntion(){
//     console.log(outerVariable);
//   }
//   return innterFuntion;
// }
function outerFunction() {
  var outerVariable = "Hi I'm outerviabel";
  return function () {
    return console.log(outerVariable);
  };
}

outerFunction()();
var closureFuntion = outerFunction();
closureFuntion(); // ##############################
// function counterFuntion(){
//   let counter = 0
//   function addToCounter(num = 0){
//     counter += num;
//     console.log(counter);
//   }
//   return addToCounter;
// }

function counterFuntion() {
  var counter = 0;
  return function () {
    var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    counter += num;
    console.log(counter);
  };
}

var myCouter = counterFuntion();
myCouter(1);
var mySecondCouter = counterFuntion();
myCouter(2);
mySecondCouter(10);
myCouter(1);
mySecondCouter(1); // ##############################

function grating() {
  var name = "";

  function setAndSay() {
    var newName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stranger;
    console.log("Last name ".concat(name, "."));
    name = newName;
    console.log("Hi ".concat(name, ", your name is the new name."));
  }

  return setAndSay;
}

var nameFuntions = grating();
nameFuntions('Alvaro');
nameFuntions('Denis');