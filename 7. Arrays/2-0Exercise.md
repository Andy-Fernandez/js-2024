### **Basic Array Operations**
1. **Add and Remove Elements**:
   - Create an array with the numbers `1` to `5`.
   - Add `6` to the end and `0` to the beginning.
   - Remove the last element and the first element.
   - Print the array after each operation.

2. **Replace Elements**:
   - Replace the third element in the array with `100`.
   - Print the updated array.

3. **Reverse an Array**:
   - Write a function that reverses an array without using the built-in `reverse()` method.
   - Example:
     ```javascript
     reverseArray([1, 2, 3, 4, 5]); // Output: [5, 4, 3, 2, 1]
     ```

---

### **Iteration with `map()` and `forEach()`**
4. **Square Elements**:
   - Create an array of numbers and use `map()` to return a new array where each number is squared.
   - Example: `[1, 2, 3]` → `[1, 4, 9]`.

5. **Log Messages**:
   - Use `forEach()` to print the message: `Element [value] is at index [index]` for each element in an array.
   - Example: For `[10, 20, 30]`, print:
     ```
     Element 10 is at index 0
     Element 20 is at index 1
     Element 30 is at index 2
     ```

---

### **Filtering and Reducing**
6. **Filter Even Numbers**:
   - Create an array with numbers from `1` to `10`.
   - Use `filter()` to return a new array with only the even numbers.

7. **Sum of Numbers**:
   - Use `reduce()` to calculate the sum of all numbers in an array.

8. **Find Maximum Value**:
   - Use `reduce()` to find the maximum value in an array.

---

### **Searching**
9. **Find an Element**:
   - Create an array of objects representing users, each with `id` and `name`.
   - Use `find()` to get the user with a specific `id`.
   - Example:
     ```javascript
     const users = [
       { id: 1, name: "Alice" },
       { id: 2, name: "Bob" },
       { id: 3, name: "Charlie" },
     ];
     ```

10. **Find Index**:
    - Use `findIndex()` to get the index of the first even number in an array.

---

### **Creating Copies**
11. **Clone an Array**:
    - Use `slice()` and the spread operator (`...`) to create a copy of an array. Modify the copy and verify that the original array is unchanged.

12. **Extract a Subarray**:
    - Use `slice()` to extract the middle three elements of an array with seven elements.

---

### **Advanced Challenges**
13. **Sort an Array**:
    - Write a function that sorts an array of numbers in descending order.

14. **Flatten a Nested Array**:
    - Write a function that flattens a 2D array into a 1D array.
    - Example:
      ```javascript
      flatten([[1, 2], [3, 4], [5, 6]]); // Output: [1, 2, 3, 4, 5, 6]
      ```

15. **Remove Duplicates**:
    - Write a function that removes duplicate elements from an array.
    - Example:
      ```javascript
      unique([1, 2, 2, 3, 4, 4]); // Output: [1, 2, 3, 4]
      ```

16. **Chunk an Array**:
    - Write a function that splits an array into chunks of a specific size.
    - Example:
      ```javascript
      chunkArray([1, 2, 3, 4, 5], 2); // Output: [[1, 2], [3, 4], [5]]
      ```

---

### **Creative Practice**
17. **Student Grade Filter**:
    - Create an array of students, each with a `name` and `grade`.
    - Use `filter()` to find all students who passed (grade >= 50).

18. **Calculate Total Cart Price**:
    - Create an array of objects representing a shopping cart, each with `item` and `price`.
    - Use `reduce()` to calculate the total price.

19. **Shuffle an Array**:
    - Write a function that shuffles an array randomly.
    - Example:
      ```javascript
      shuffle([1, 2, 3, 4]); // Output: [3, 1, 4, 2] (randomized)
      ```