Here are **10 exercises** to practice `reduce()` and `filter()`:

---

### **Exercises with `filter()`**
1. **Filter Even Numbers**:
   - Create an array of numbers from 1 to 20.
   - Use `filter()` to create a new array containing only the even numbers.

2. **Filter Words by Length**:
   - Create an array of words.
   - Use `filter()` to return words that are longer than 5 characters.

3. **Filter Adults**:
   - Create an array of objects, each representing a person with `name` and `age`.
   - Use `filter()` to return an array of people who are at least 18 years old.

4. **Filter by Keyword**:
   - Create an array of strings.
   - Use `filter()` to return only the strings that include a specific keyword (e.g., `JavaScript`).

5. **Filter Products in Stock**:
   - Create an array of objects representing products, each with `name`, `price`, and `inStock` (boolean).
   - Use `filter()` to return products that are in stock.

---

### **Exercises with `reduce()`**
6. **Sum of Array**:
   - Create an array of numbers.
   - Use `reduce()` to calculate the sum of all numbers.

7. **Flatten a Nested Array**:
   - Create a nested array (e.g., `[[1, 2], [3, 4], [5, 6]]`).
   - Use `reduce()` to flatten it into a single array.

8. **Count Occurrences**:
   - Create an array of strings (e.g., `['apple', 'banana', 'apple', 'orange']`).
   - Use `reduce()` to count how many times each string appears.

   Example output:
   ```javascript
   { apple: 2, banana: 1, orange: 1 }
   ```

9. **Calculate Total Cart Price**:
   - Create an array of objects, each representing a product with `price` and `quantity`.
   - Use `reduce()` to calculate the total cost of all products.

10. **Find Maximum Value**:
    - Create an array of numbers.
    - Use `reduce()` to find the maximum value in the array.

---

### **Extra Challenges**
11. **Filter and Reduce Combination**:
    - Start with an array of objects, each representing a transaction with `type` (`'income'` or `'expense'`) and `amount`.
    - Use `filter()` to extract only the `'income'` transactions.
    - Use `reduce()` to calculate the total income.

12. **Group by Category**:
    - Create an array of objects representing products, each with `name` and `category`.
    - Use `reduce()` to group the products by category into an object.

    Example output:
    ```javascript
    {
      electronics: ['TV', 'Phone'],
      groceries: ['Apple', 'Banana']
    }
    ```

---

Let me know which ones you'd like to discuss or solve together! 😊