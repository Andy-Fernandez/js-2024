/*
Write a function fetchMultipleUsers(userIds) that:

Fetches all users in parallel using Promise.all().
If any user does not exist, the function should catch the error and return "Some users not found!".
*/
const userDatabase = [
  { userID: 1, password: "123" },
  { userID: 2, password: "456" }
];

function getUserById(userId) {
  return new Promise((resolve, reject) => {
    const foundUser = userDatabase.find(user => user.userID === userId);

    if (foundUser) {
      resolve(`User ${userId} exists!`);
    } else {
      reject(`User ${userId} doesn't exist!`);
    }
  });
};

function fetchMultipleUsers(userIds){
  Promise.allSettled(userIds.map(id => getUserById(id)))
    .then((results) => {
      console.log(results)
    })
    .catch((error) => {
      console.error(error);
    })
};

getUserById(1)
.then((message) => console.log(message))
.catch((error) => console.error(error));

fetchMultipleUsers([1,2,3]);