# Functions and Arrow Functions in JavaScript

## 1. Functions
- A **function** is a reusable block of code designed to perform a specific task.
- Functions can:
  - Take arguments (inputs).
  - Return outputs.
  - Be assigned to variables.
  - Be passed as arguments (callback functions).
  - Return other functions.

## 2. Pure vs. Impure Functions
- **Pure Functions**:
  - Always return the same output for the same input.
  - Do not cause side effects (no changes outside their scope).
- **Impure Functions**:
  - Cause side effects such as:
    1. Modifying global variables.
    2. Changing data passed by reference.
    3. Altering external states like files, databases, the DOM, or time.

## 3. Arrow Functions
- A more concise way to write functions.
- Do **not** have their own `this` keyword; they inherit `this` from the enclosing scope.

### Syntax Examples:
1. Regular Function:
    ```javascript
    const lunch = function(protein, carb, fat) {
        return protein + carb + fat;
    };
    ```

2. Arrow Function (multi-line):
    ```javascript
    const lunch = (protein, carb, fat) => {
        return protein + carb + fat;
    };
    ```

3. Arrow Function (single-line):
    ```javascript
    const lunch = (protein, carb, fat) => protein + carb + fat;
    ```

4. Using Template Literals:
    ```javascript
    const lunch = (protein, carb, fat) => `Protein: ${protein}, Carb: ${carb}, Fat: ${fat}`;
    ```

---

### **2. Code Review**
#### Your Code:
```javascript
const myUncle = {
  name: "Ben",
  hisMessage: function(message) {
    return `Uncle ${this.name} says: ${message}`;
  },
  hisMessageArrow: message => `Uncle ${myUncle.name} says: ${message}`
};

console.log(myUncle.hisMessage("hi buddy"));
console.log(myUncle.hisMessageArrow("hi buddy"));
