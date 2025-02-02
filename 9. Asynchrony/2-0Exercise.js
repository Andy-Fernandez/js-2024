/* Exercise 0:
Write a function fetchMultipleUsers(userIds) that:

Fetches all users in parallel using Promise.allSettled().
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
      resolve(foundUser);
    } else {
      reject(new Error(`User ${userId} doesn't exist!`));
    }
  });
};

function fetchMultipleUsers(userIds){
  return Promise.allSettled(userIds.map(id => getUserById(id)))
    .then( results => {
      let someUsersNotFound = false;

      results.forEach( result => {
        if(result.status === 'fulfilled'){
          console.log(`Found a user:`, result.value);
        } else {
          console.log(`Error:`, result.reason.message);
          someUsersNotFound = true;
        }
      });
      if (someUsersNotFound) {
        return "Some users not found!"
      }
      return "All users were found!"
    });
};

getUserById(1)
  .then((message) => console.log(message));


fetchMultipleUsers([1,2,3,1])
  .then((message) => console.log(message));