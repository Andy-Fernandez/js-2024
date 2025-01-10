const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getNumber(callback) {
  rl.question('Enter a number: ', (answer) => {
    const number = parseFloat(answer); // Convert the input to a number
    callback(number); // Pass the number to the callback
    rl.close();
  });
}

getNumber((number) => {
  console.log(`You entered: ${number}`);
  
  // You can now use the `number` variable here
});


// let userNumber;

// do{

// } while(userNumber)