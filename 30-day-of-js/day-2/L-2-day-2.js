console.log(Number('10') === 10); // 3.

console.log(Math.ceil(parseFloat('9.8')) == 10); // 4.

// 5.
let on = 'on';
let python = 'python';
let jargon = 'jargon';

console.log(python.includes(on) && jargon.includes(on)); // true

// 6.
jargon = "I hope this course is not full of jargon."
console.log(jargon.includes("jargon"));

// 7.
let numeroRan = Math.ceil(Math.random()*100);
console.log(numeroRan);

// 8. Generate a random number between 50 and 100 inclusively.
// do{
//   numeroRan = Math.trunc(Math.random()*100);
//   if (numeroRan < 50){
//     numeroRan += 50;
//     console.log(numeroRan);
//   }
// } while (numeroRan !== 50);

console.log(Math.random());


function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 8.
console.log(getRandom(50, 100));

// 9.
console.log(getRandom(0,255));

// 10.
let string = "JavaScript";
console.log(string[getRandom(0, string.length-1)]);

// 11.
let len = 13;
for ( i = 1; i < len+1; i++){
  let resp = " " + String(i);
  for ( j = 0; j < len-1; j++){
    resp = resp + " " + String(i**j);
  }
  console.log(resp);
}

// 12.
string = 'You cannot end a sentence with because because because is a conjunction';
let word = 'because';
string = string.substr(string.indexOf(word),word.length*3+2); // 'because because because'