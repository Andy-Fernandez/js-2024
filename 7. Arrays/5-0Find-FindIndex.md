### **Exercises with `find()`**
1. **Find the First Even Number**:
   - Create an array of numbers.
   - Use `find()` to return the first even number in the array.

2. **Find a Specific Word**:
   - Create an array of strings.
   - Use `find()` to locate the first word that starts with the letter "A" (case-insensitive).

3. **Find a Product by Name**:
   - Create an array of objects, each representing a product with `name` and `price`.
   - Use `find()` to locate a product by its `name`.

   Example:
   ```javascript
   const products = [
     { name: "Laptop", price: 1000 },
     { name: "Phone", price: 500 },
     { name: "Tablet", price: 300 },
   ];
   ```

4. **Find the First Negative Number**:
   - Create an array of positive and negative numbers.
   - Use `find()` to return the first negative number.

5. **Find a Student by ID**:
   - Create an array of objects, each representing a student with `id` and `name`.
   - Use `find()` to locate a student by their `id`.

---

### **Exercises with `findIndex()`**
6. **Find the Index of a Word**:
   - Create an array of strings.
   - Use `findIndex()` to return the index of the first string that contains the letter "e".

7. **Find the Index of a Large Number**:
   - Create an array of numbers.
   - Use `findIndex()` to return the index of the first number greater than 100.

8. **Find Index of Out-of-Stock Product**:
   - Create an array of objects, each representing a product with `name`, `price`, and `inStock` (boolean).
   - Use `findIndex()` to return the index of the first product that is out of stock.

9. **Find the Index of a Failing Grade**:
   - Create an array of numbers representing grades.
   - Use `findIndex()` to return the index of the first grade below 50.

10. **Find the Index of an Object by Key**:
    - Create an array of objects, each representing an employee with `id`, `name`, and `department`.
    - Use `findIndex()` to locate the index of an employee in a specific department.

---

### **Combination Challenge**
11. **Find and Modify an Object**:
    - Create an array of objects, each with `name` and `score`.
    - Use `findIndex()` to locate the index of a specific object.
    - Update the `score` property of the found object.

12. **Find All Matches**:
    - Use a combination of `filter()` and `find()`:
      - Start with an array of strings.
      - First, filter for strings that include a specific keyword.
      - Then, use `find()` to locate the first match from the filtered results.

