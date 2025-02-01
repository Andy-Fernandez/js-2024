class User {
  constructor(userName, password) {
    this.userName = userName;
    this.password = password;
  }
}

class TimeLine {
  constructor(userName, timeStamp = new Date()) {
    this.userName = userName;
    this.timeStamp = timeStamp;
  }
}

// Simulated databases
const dataBase = []; // Stores users
const timeLine = []; // Stores timeline events

// Find user by username and password
function findUser(userName, password) {
  return dataBase.some(user => user.userName === userName && user.password === password);
}

// Save a new user
function addUser(userName, password) {
  const newUser = new User(userName, password);
  dataBase.push(newUser);
}

// Show user timeline
function showTimeLine(userName) {
  const userTimeline = timeLine
    .filter(entry => entry.userName === userName)
    .map(entry => entry.timeStamp);
  console.log("Your timeline:", userTimeline);
}

// Generate fake users
function generateFakeUsers(numberOfUsers) {
  const fakeNames = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
  const fakePasswords = ['password123', '123456', 'qwerty', 'letmein'];

  for (let i = 0; i < numberOfUsers; i++) {
    const randomName = fakeNames[Math.floor(Math.random() * fakeNames.length)];
    const randomPassword = fakePasswords[Math.floor(Math.random() * fakePasswords.length)];
    addUser(randomName, randomPassword);
  }
}

// Export functions and data
export { dataBase, timeLine, findUser, addUser, showTimeLine, generateFakeUsers, TimeLine };
