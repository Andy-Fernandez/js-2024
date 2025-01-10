let myString = "Str";
let myArray = ["S","T","R"];

// for
for (let i = 0; i < myString.length; i++) {
  const chart = myString[i];
  console.log(chart);
}

// for...of
for (const [index, element] of myArray.entries()) { // iteration on string and arrays
  console.log(`${index}: ${element}`);
}

// for...in
for (const key in myString) { // iteration in objects keys and vaulues
  if (Object.prototype.hasOwnProperty.call(myString, key)) {
    const element = myString[key];
    console.log(element);
  }
}

// while
let i = 0;
while (i<myString.length) {
  myString.charAt(i);
  i++;
}

// do...while
i = 0;
do {
  myString.charAt(i);
  i++;
} while (i<myString.length);
