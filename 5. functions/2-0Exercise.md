### **1. Additional Exercises**
To deepen your understanding, here are some exercises:

#### **Exercise 1: Create a Message Generator**
- Define an object with properties `title`, `author`, and a method `generateMessage`.
- Use both a regular function and an arrow function to return:
  ```javascript
  "[Title] is written by [Author]"
  ```

#### **Exercise 2: Lexical Scoping**
- Create a function `outer` that defines a variable and returns an arrow function `inner`.
- Access the outer function’s variable from the `inner` function:
  ```javascript
  function outer() {
    let outerVar = "I am outside!";
    return () => `Accessed: ${outerVar}`;
  }
  const inner = outer();
  console.log(inner());
  ```

#### **Exercise 3: Pure vs. Impure Functions**
- Write two functions:
  - **Pure**: Accepts a number, doubles it, and returns the result.
  - **Impure**: Modifies a global variable.

#### **Exercise 4: Side Effects**
- Write a function that adds an item to a global array and discuss its side effects.
- Refactor it to avoid side effects by returning a new array instead.

#### **Exercise 5: Refactor with Arrow Functions**
Refactor this code to use arrow functions:
```javascript
function greet(name) {
  return "Hello, " + name + "!";
}
function square(num) {
  return num * num;
}
```
