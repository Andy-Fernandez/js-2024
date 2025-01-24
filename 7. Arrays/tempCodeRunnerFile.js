// # forEach()
const numbers = [1,2,3,4,5];
const sumNumbresArray = (numbresArray) => {
  let total = 0;
  numbresArray.forEach(element => total+element);
  return total;
}