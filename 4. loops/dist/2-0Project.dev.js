"use strict";

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getNumber(callback) {
  rl.question('Enter a number: ', function (answer) {
    var number = parseFloat(answer); // Convert the input to a number

    callback(number); // Pass the number to the callback

    rl.close();
  });
}

getNumber(function (number) {
  console.log("You entered: ".concat(number)); // You can now use the `number` variable here
}); // let userNumber;
// do{
// } while(userNumber)