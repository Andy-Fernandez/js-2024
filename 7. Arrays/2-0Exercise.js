let array = [1,2,3,4,5];

array.push(6);
array.unshift(0);
array.pop();
array.forEach(element => {
  console.log(element)
});

array[2] = 100;

let reverse = array => array.reverse();
console.log(reverse(array));

array = [1,2,3];
array = array.map((num) => num*num);
console.log(array);

array.forEach((element, index) => console.log(`Element ${element} is at index ${index}`));

array = new Array(10).fill().map((_,index) => index + 1);
console.log(array);

const evenArry = array.filter(num => num%2==0); // 6.
console.log(evenArry);

const arrayReduced = array.reduce((total, num) => total + num, 0); // 7.
console.log(arrayReduced);

const arrayReduceMax = array.reduce((a, b) => Math.max(a,b)); // 8.
console.log(arrayReduceMax);

const users = [
  {name: "Pablo", id: 1 },
  {name: "Andres", id: 2 }
]

function isId(element){
  return element.id === 1;
}

console.log(users.find(isId));
