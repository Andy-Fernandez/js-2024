/* Exercise 1:
Fetch and Process User Data

Instructions:
Create a function fetchUserData(userId) that:

Simulates fetching user data from a database.
Resolves with an object { userID, name, age } if the user exists.
Rejects with an error message "User not found" if the user doesn't exist.
Use setTimeout() to simulate a 1-second delay.
Create a function fetchMultipleUsersAndFilterAdults(userIds) that:

Uses Promise.allSettled() to fetch multiple users in parallel.
Filters only users who are 18 years or older.
Returns an array of adult users.
If no adults are found, return "No adults found!".*/

const fakeDatabase = [
  { userId: 1, name: "Alice Johnson", age: 25 },
  { userId: 2, name: "Bob Smith", age: 30 },
  { userId: 3, name: "Charlie Brown", age: 22 },
  { userId: 4, name: "David White", age: 28 },
  { userId: 5, name: "Emma Davis", age: 35 },
  { userId: 6, name: "Emma Davis", age: 16 },
];

// Simulate fetching user from the database
async function getUserById(id) {
  return new Promise((resolve, reject) => {
    let result = fakeDatabase.find(user => user.userId === id);
    if (result) {
      resolve(result);  // User found, resolve with user data
    } else {
      reject(new Error(`User with ID ${id} not found!`));  // User not found, reject with error
    }
  });
}

// Fetch multiple users and filter adults (18 years or older)
async function fetchMultipleUsersAndFilterAdults(ids) {
  let responses = await Promise.allSettled(ids.map(id => getUserById(id)));

  const successfulUsers = responses
    .filter(response => response.status === 'fulfilled')  // Only consider successful responses
    .map(response => response.value);  // Extract the value (user data)

  const adults = successfulUsers.filter(user => user.age >= 18);  // Filter for adults (18+)

  return adults.length === 0 ? "No users 18 or older found!" : adults;
}

// Fetch user data by ID (for a single user)
async function fetchUserData(id) {
  try {
    let response = await getUserById(id);
    console.log(response);
  } catch (error) {
    console.error(error.message);
  }
}

// Example usage:
fetchUserData(1);  // Should log user data for Alice Johnson (age 25)

fetchMultipleUsersAndFilterAdults([1, 2, 6, 10])
  .then(message => console.log("Last:", message));  // Should log users 1, 2 and 10 is not found
