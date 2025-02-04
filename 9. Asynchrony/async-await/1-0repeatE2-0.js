/* Exercise 0:  WITH ASYNC/AWAIT
Write a function fetchMultipleUsers(userIds) that:

Fetches all users in parallel using Promise.allSettled().
If any user does not exist, the function should catch the error and return "Some users not found!".
*/

const userDatabase = [
  { userID: 1, password: "123" },
  { userID: 2, password: "456" }
];

// create get just one user
async function getUserById(id) {
  return new Promise((resolve, reject) => {
    const foundUser = userDatabase.find(user => user.userID === id)
    if(foundUser){
      resolve(foundUser)
    } else {
      reject(new Error(`User ${id} doesn't exist!`));
    }
  })
}

async function fetchMultipleUsers(ids) {
  let responses = await Promise.allSettled(ids.map(id => getUserById(id)));

  let allUsers = [];
  let hasErrors = false;

  responses.forEach(response => {
    if (response.status === 'fulfilled') {
      console.log(`Found user:`, response.value);
      allUsers.push(response.value);
    } else {
      console.error(`Error:`, response.reason.message);
      hasErrors = true;
    }
  });

  return hasErrors ? "Some users not found!" : allUsers;
}

async function fetchUser(id) {
  try {
    let response = await getUserById(id);
    console.log(response);
  } catch (error) {
    console.error(error.message);
  }
}



const id = 4
const ids = [1,2,3]

fetchUser(id);

getUserById(id)
  .then((response) => console.log(response))
  .catch((error) => console.error(error.message))

  fetchMultipleUsers(ids)
  .then( (result) => console.log(`Result:`, result));