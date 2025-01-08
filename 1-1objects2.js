const user = {
  name: "Pablito",
  age: 12,
  country: "Bolivia",
  hobbies: ["gamming", "gyming", "dance"],
  grating: function(){
    console.log(`Hi, I'm ${this.name} and I'm from ${this.country}`)
  }
}

user.grating();

const { age, hobbies } = user
console.log(`I'm ${age} years old, and my hobbies are ${hobbies}`)

user["isStudent"] = true;
console.log(`Dot notacion ${user.isStudent}`);
console.log(`Brackets notation ${user["isStudent"]}`);

// const address = {
//   city: "La Paz",
//   zip: "0000"
// }

user["address"] = {
    city: "La Paz",
    zip: "0000"
  };
console.log(user.address);

const { address: { city, zip }} = user;
console.log(`City: ${city} and Zip: ${zip}`);

// console.log(address)
user["listHobbies"] = function(){
  this.hobbies.forEach((hobbie, index) =>
    console.log(`${index + 1}. ${hobbie}`)
  );
}
user.listHobbies();

const {name, ...otherDetails} = user;
console.log(`Name:${name} \nOther Details:`, otherDetails);

const additionlInfo = {
  profession: "Developer",
  language: "Spanish"
};

const completeUser = { ...user, ...additionlInfo}

console.log(completeUser);

const { name: myName, isStudent, gender = "Unknown"} = user;
console.log(`name: ${myName}, Is strudent: ${isStudent} and Gender: ${gender}`);

function updateProperty(obj, key, value){
  if(!obj[key]){
    obj[key] = value;
  } else {
    obj[key] = value;
  }
  console.log(obj[key]);
}

updateProperty(user, "lastName", "Fernandez");
console.log(user);

function validateUser(obj) {
  if (obj.name && obj.age && obj.country && obj.gender){
    console.log("Properties exist");
    console.log(`name: ${obj.name}`);
    console.log(`age: ${obj.age}`);
    console.log(`country: ${obj.country}`);
    console.log(`gender: ${obj.gender}`);
  } else {
    console.log("Properties don't exist");
  }
}
validateUser(user);

Object.keys(user).forEach((key, index) =>
  console.log(`${index + 1}. ${key}`)
);

const userCopy = { ...user};
userCopy.name = "Danic";
console.log(user.name);
console.log(userCopy.name);

let userAnotherCopy;
Object.assign(userAnotherCopy, ...user);
userAnotherCopy.name = "Nanis";
console.log(user.name);
console.log(userAnotherCopy.name);