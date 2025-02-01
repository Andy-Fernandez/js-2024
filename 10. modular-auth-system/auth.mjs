import { dataBase, timeLine, findUser, addUser, showTimeLine, TimeLine } from "./database.mjs";

// User login
function login(userName, password) {
  if (findUser(userName, password)) {
    console.log("Welcome!");
    timeLine.push(new TimeLine(userName));
    showTimeLine(userName);
  } else {
    console.log("User or password incorrect!");
  }
}

// User sign-up
function signUp(userName, password) {
  if (!userName.trim() || !password.trim()) {
    console.log("Username and password cannot be empty!");
    return;
  }

  if (!dataBase.some(user => user.userName === userName)) {
    addUser(userName, password);
    timeLine.push(new TimeLine(userName));
    console.log("User signed up successfully!");
    showTimeLine(userName);
  } else {
    console.log("User already exists!");
  }
}

// Export authentication functions
export { login, signUp };
