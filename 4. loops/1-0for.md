### **4. Loops**

#### **4.1 `for` Loop**
Repeats a block of code a set number of times:
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // Prints 0, 1, 2, 3, 4
}
```

**Exercise**:
Write a `for` loop to calculate the sum of numbers from `1` to `100`.

---

#### **4.2 `for...of` Loop**
Iterates over **iterable objects** like arrays or strings:
```javascript
const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
  console.log(fruit); // apple, banana, cherry
}
```

**Exercise**:
Write a `for...of` loop to print each character of a string.

---

#### **4.3 `for...in` Loop**
Iterates over **object properties**:
```javascript
const person = { name: "Alice", age: 30 };

for (const key in person) {
  console.log(`${key}: ${person[key]}`); // name: Alice, age: 30
}
```

**Exercise**:
Write a `for...in` loop to print the keys and values of an object representing a book (e.g., title, author, year).

---

#### **4.4 `while` Loop**
Executes a block of code **as long as a condition is true**:
```javascript
let count = 0;

while (count < 3) {
  console.log(count);
  count++;
}
```

**Exercise**:
Write a `while` loop to print numbers from `10` down to `1`.

---

#### **4.5 `do...while` Loop**
Similar to `while`, but guarantees at least one execution:
```javascript
let count = 5;

do {
  console.log(count);
  count--;
} while (count > 0);
```

**Exercise**:
Write a `do...while` loop to collect user input until they type `"stop"`.
