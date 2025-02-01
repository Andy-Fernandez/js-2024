Here are some **map** and **forEach** exercises to help you practice and deepen your understanding:

---

### **Exercises with `map()`**
1. **Double the Numbers**:
   - Create an array of numbers.
   - Use `map()` to return a new array where each number is doubled.

2. **Capitalize Strings**:
   - Create an array of lowercase strings (e.g., `["apple", "banana", "cherry"]`).
   - Use `map()` to capitalize the first letter of each string.

3. **Extract Property Values**:
   - Create an array of objects, each with `name` and `age` properties.
   - Use `map()` to extract just the `name` property into a new array.

   Example:
   ```javascript
   const people = [
     { name: "Alice", age: 25 },
     { name: "Bob", age: 30 },
     { name: "Charlie", age: 35 },
   ];
   ```

4. **Compute Areas**:
   - Create an array of objects representing rectangles, each with `width` and `height`.
   - Use `map()` to return a new array containing the area of each rectangle.

5. **Add a New Property**:
   - Create an array of objects representing products, each with `name` and `price`.
   - Use `map()` to add a new property `discountedPrice` (e.g., 10% off).

---

### **Exercises with `forEach()`**
6. **Sum of Elements**:
   - Create an array of numbers.
   - Use `forEach()` to calculate the sum of all elements.

7. **Log Details**:
   - Create an array of objects, each with `title` and `author`.
   - Use `forEach()` to log a message like: `"[Title] by [Author]"`.

8. **Count Specific Elements**:
   - Create an array of strings.
   - Use `forEach()` to count how many times a specific string appears.

9. **Track Indices**:
   - Use `forEach()` to log each element of an array along with its index.

10. **Modify In-Place**:
    - Create an array of numbers.
    - Use `forEach()` to modify the original array by doubling each number.

---

### **Combined Challenges**
11. **Filter, Map, and Log**:
    - Start with an array of numbers.
    - First, filter the array to include only even numbers.
    - Then, use `map()` to double the filtered numbers.
    - Finally, use `forEach()` to log each doubled number.

12. **Flatten and Map**:
    - Create a 2D array (e.g., `[[1, 2], [3, 4], [5, 6]]`).
    - Use `map()` to flatten it into a single array (hint: combine with `flat()`).

13. **Log and Transform**:
    - Create an array of strings.
    - Use `forEach()` to log each string and its length.
    - Then, use `map()` to transform the array into an array of string lengths.

14. **Update Inventory**:
    - Create an array of objects, each with `book` and `stock`.
    - Use `forEach()` to log current inventory.
    - Use `map()` to increase the `stock` of each product by 10.

---

### **Advanced Challenges**
15. **Chain Methods**:
    - Create an array of numbers.
    - Use `map()` to square each number, then filter out squares greater than 100, and finally use `forEach()` to log the results.

16. **Group by First Letter**:
    - Create an array of strings.
    - Use `map()` to group words by their first letter into a new array of objects:
      ```javascript
      [
        { letter: "a", words: ["apple", "apricot"] },
        { letter: "b", words: ["banana", "berry"] },
      ];
      ```

17. **Average Age**:
    - Create an array of objects, each with `name` and `age`.
    - Use `map()` to extract ages, then use `reduce()` to compute the average age.
    - Use `forEach()` to log each person's name and whether their age is above or below the average.

---

Let me know if you'd like explanations or solutions for any of these exercises! 😊