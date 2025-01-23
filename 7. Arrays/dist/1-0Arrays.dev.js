"use strict";

// Some comands I didn't know
// anArray.contacat(['some', 'thing']) join 2 arrays 
// Arrayt.isArray(arrayInQuestion) retunr false
// when u use pop() ir returns element just being poped and array is without last element
// with push(element) add element in last postion and retuns new array's lenght
// this way to eterate in an array was interesting, was keept in a cost
var fruts = ['Apple', 'Peach', 'Watermelon'];
var iteratedFruts = fruts.forEach(function (element) {
  return console.log(element);
});
console.log(fruts);
console.log(iteratedFruts);