// 11. Filter, Map and  Log:
const numeros = [2, 4,3, 5, 7, 8, 11, 13, 17, 18, 19, 23, 29, 31, 37, 41, 42, 43, 47, 53, 54, 59, 61, 62, 67, 71, 72];

const doubleEvens = numeros
  .filter(numero => numero%2===0)
  .map(pares => pares*2);
console.log("11.")
doubleEvens.forEach((number) => console.log(number));