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

function getUserByIdAndAdult(id){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = fakeDatabase.find(user => user.userId === id);
      if (user){
        resolve(user); // In this part I can pass my entery user and check his age after
      } else {
        reject(new Error(`User ${id} is not found!`));
      }
    }, 1000);
  })
}

function fetchMultipleUsersAndFilterAdults(userIds){
  return Promise.allSettled(userIds.map(id => getUserByIdAndAdult(id)))
    .then( results => { //resutl = [{status, value:{userId:, name:, age:}}, {status, value:{...}}]
      // Get fulfilled users
      const succesfulUsers = results
        .filter(result => result.status === 'fulfilled')
        .map(result => result.value);

      // Resturn just altut users
      const adults = succesfulUsers.filter(user => user.age >= 18);

      if (adults.length > 0){
        return adults;
      } else {
        return "No adults found!"
      }
    })
}

  console.log("fetchMultipleUsersAndFilterAdults");
fetchMultipleUsersAndFilterAdults([1,2,6,7,8, 10])
  .then(message => console.log("Last:",message))
