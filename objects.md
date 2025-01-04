Initial Challenge:
## **Reto 1.3: Objetos y Destructuring**

1. Crea un objeto que represente un **usuario** con propiedades como: `nombre`, `edad`, `pais`, `hobbies` (array).
2. Añade un **método** dentro del objeto que retorne un saludo usando el `nombre` y `pais`.
3. Desde fuera del objeto, llama ese método e imprime el resultado.
4. Utiliza **destructuring** para acceder a `edad` y `hobbies` en una sola línea.

**Objetivo:** reforzar la creación y uso de objetos, métodos y destructuring.

---

Extra Challenge to meke knowledge stick:

#### **Exercise 1: Add a New Property**
1. Add a new property `isStudent` to the `user` object.
2. Assign a boolean value (`true` or `false`) and print it.
3. Access this property using both **dot notation** and **bracket notation**.

---

#### **Exercise 2: Destructure Nested Objects**
1. Modify the `user` object to include a nested `address` object:
   ```javascript
   address: {
     city: "Guadalajara",
     zip: 44100
   }
   ```
2. Destructure `city` and `zip` from the `address` object.
3. Print them in a single line.

---

#### **Exercise 3: Add a Method to List Hobbies**
1. Add a new method `listHobbies` to the `user` object.
2. This method should loop through the `hobbies` array and print each hobby.
3. Call the method and verify it works.

---

#### **Exercise 4: Rest Operator with Object**
1. Use destructuring with the rest operator to separate `name` and collect the remaining properties into a variable called `otherDetails`.
2. Print both the `name` and `otherDetails`.

Example structure:
```javascript
const { name, ...otherDetails } = user;
console.log("Name:", name);
console.log("Other details:", otherDetails);
```

---

#### **Exercise 5: Merge Two Objects**
1. Create another object `additionalInfo`:
   ```javascript
   const additionalInfo = { profession: "Developer", language: "Spanish" };
   ```
2. Merge `user` and `additionalInfo` into a new object `completeUser`.
3. Print `completeUser`.

---

#### **Exercise 6: Destructure with Default Values**
1. Use destructuring to extract `name`, `isStudent`, and `gender` from the `user` object.
2. Assign a **default value** of `"Unknown"` to `gender`.
3. Print the extracted values.

---

#### **Exercise 7: Check and Modify Properties Dynamically**
1. Write a function `updateProperty(obj, key, value)`:
   - If the `key` exists in `obj`, update it to the new `value`.
   - If the `key` does not exist, add it to `obj` with the `value`.
2. Test it with the `user` object:
   - Update `name` to `"Carlos"`.
   - Add a new property `favoriteColor` with a value.

---

#### **Exercise 8: Validate Object Properties**
1. Write a function `validateUser(obj)`:
   - Check if the `user` object has the properties `name`, `age`, and `country`.
   - Print a message for each property (exists or missing).
2. Test it with the `user` object.

---

#### **Exercise 9: Iterate Over Object Keys**
1. Use `Object.keys(user)` to get an array of all keys in the object.
2. Loop through the keys and print each key with its value.

---

#### **Exercise 10: Clone the Object**
1. Create a shallow copy of the `user` object using:
   - The spread operator (`...`).
   - `Object.assign`.
2. Modify the copied object and verify that the original object remains unchanged.
