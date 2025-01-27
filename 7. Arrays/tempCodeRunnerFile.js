// 8.
const stringsArray = ['apple', 'banana', 'apple', 'orange', 'apple'];

const counterWords = {};
stringsArray.reduce((accumulator, currentValue, index) => {
  if(counterWords.hasOwnProperty(currentValue)){
    counterWords[currentValue] += 1;
    console.log(currentValue);
  } else {
    counterWords[currentValue] = 1;
  }
},0) // If we don't set accumulator, it'll take first element of owr array

console.log(counterWords)
