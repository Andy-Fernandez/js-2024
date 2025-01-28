class User {
  constructor(userName, password) {
    this.userName = userName,
    this.password = password
  }
}

const dataBase = [];

function findUser(userName, password){
  let user = dataBase.find(user => user.userName === userName && user.password === password);
  let restult = false;
  restult = typeof(user)!== 'undefined' ?  true : false;
  return restult;
}

function generateFakeUsers(numberOfUsers) {
  const fakeNames = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Grace', 'Hank', 'Ivy', 'Jack', 'Kara'];
  const fakePasswords = ['password123', '123456', 'qwerty', 'letmein', 'password!@#'];

  for (let i = 0; i < numberOfUsers; i++) {
    const randomName = fakeNames[Math.floor(Math.random() * fakeNames.length)];
    const randomPassword = fakePasswords[Math.floor(Math.random() * fakePasswords.length)];
    const newUser = new User(randomName, randomPassword);
    dataBase.push(newUser);
  }
}

function login(userName, password) {
  if(findUser(userName, password)){
    console.log("Welcome!");
  } else {
    console.log("User or password wrong!");
  }
}

function signUp(userName, password) {
  if(!findUser(userName, password)){
    dataBase.push(new User(userName, password));
  } else {
    console.log("User already exist!")
  }
}

// ######### Testing ############
// ###### TEST SCRIPT ######
console.log("### TESTING START ###");

// Test 1: Generate Fake Users
console.log("Test 1: Generating 10 fake users...");
generateFakeUsers(10);
console.log("Fake users generated:", dataBase);

// Test 2: Check if findUser works
const testUser = dataBase[0]; // Here we get a user in data base
console.log(`Test 2: Finding user ${testUser.userName} with valid credentials...`);
console.assert(
  findUser(testUser.userName, testUser.password) === true,
  "FAILED: User should exist with correct credentials."
);

console.log("Finding user with invalid credentials...");
console.assert(
  findUser("InvalidUser", "InvalidPassword") === false, // Pass a invalid user
  "FAILED: Invalid user should not be found."
);

// Test 3: Sign Up functionality
console.log("Test 3: Signing up a new user...");
const newUser = new User("NewUser", "NewPassword"); // Register a new user
signUp(newUser.userName, newUser.password);
console.assert(
  findUser(newUser.userName, newUser.password) === true,
  "FAILED: New user should be found after signing up."
);

console.log("Attempting to sign up the same user again...");
signUp(newUser.userName, newUser.password); // Should display "User already exists!"

// Test 4: Login functionality
console.log("Test 4: Logging in with valid credentials...");
login(testUser.userName, testUser.password); // Should display "Welcome!"

console.log("Logging in with invalid credentials...");
login("InvalidUser", "InvalidPassword"); // Should display "User or password wrong!"

console.log("### TESTING COMPLETE ###");