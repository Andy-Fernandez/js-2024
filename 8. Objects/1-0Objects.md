## 1. Objects in JavaScript

- **Definition**: Objects are collections of key-value pairs (properties), and can contain both data (properties) and functionality (methods).
- **Creation**:
  - **Object Literal**:  
    ```js
    const persona = { 
      nombre: "Juan", 
      edad: 30 
    };
    ```
  - **Constructor Function**:
    ```js
    function Persona(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
    let persona1 = new Persona("Carlos", 25);
    ```
  - **ES6 Classes** (Introduced in 2015):
    ```js
    class Persona {
      constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
      }
      
      saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
      }
    }

    let persona2 = new Persona("María", 28);
    ```

---

## 2. Adding & Deleting Properties and Methods

- **Add a property** directly on the instance:
  ```js
  persona.telefono = "123456789";
  ```
- **Add a method** directly on the instance:
  ```js
  persona.imprimirTelefono = function() {
    console.log(this.telefono);
  };
  ```
- **Delete a property**:
  ```js
  delete persona.telefono;
  ```
- **Add properties or methods via prototype**:
  ```js
  Persona.prototype.nuevoMetodo = function() {
    console.log("Este es un nuevo método en el prototipo.");
  };
  ```
  - This will be available to all **instances** of `Persona`.

---

## 3. Prototypes

- **Prototype**: A mechanism by which all JavaScript objects inherit features from one another. 
- **Default prototype**: Every function (like `Persona`) automatically has a `.prototype` property, which is used to build the `[[Prototype]]` of new objects created with `new`.
- **Checking an object’s prototype**:
  ```js
  Object.getPrototypeOf(persona1);
  ```
- **Prototype Chain**: When you access a property on an object, JavaScript will first look for it in the object itself. If not found, it searches in the prototype, and so on up the chain until it finds the property or reaches `null`.

---

## 4. ES6 Classes & Inheritance

- **Class Syntax** (since ES6/2015):
  ```js
  class Animal {
    constructor(nombre) {
      this.nombre = nombre;
    }
    
    emitirSonido() {
      console.log("Sonido genérico");
    }
  }
  ```
- **Extending a Class**:
  ```js
  class Perro extends Animal {
    constructor(nombre, raza) {
      // Llama al constructor de la clase padre
      super(nombre);
      // Ahora 'this' se refiere al nuevo objeto 'Perro'
      this.raza = raza;
    }

    emitirSonido() {
      console.log("Guau Guau!");
    }

    correr() {
      console.log(`${this.nombre} está corriendo`);
    }
  }
  ```
  - `extends` allows one class to inherit properties and methods from another.
  - `super()` is used to call the parent constructor.
  - Overriding a method (e.g. `emitirSonido` above) allows you to provide specialized behavior in the child class.

---

## 5. Inspecting the Prototype Chain (Example)

Suppose we create an instance:
```js
let perro1 = new Perro("Fido", "Labrador");
```
We can traverse its prototype chain like this:
```js
let currentPrototype = Object.getPrototypeOf(perro1);

while (currentPrototype !== null) {
  console.log(currentPrototype);
  currentPrototype = Object.getPrototypeOf(currentPrototype);
}
```
You might see output that shows:
1. The prototype object for `Perro` (with methods `emitirSonido`, `correr`, constructor, etc.).
2. The prototype object for `Animal` (with its own methods/constructor).
3. The base `Object` prototype (which has methods like `hasOwnProperty`).
4. Eventually it reaches `null`, ending the chain.

---

## 6. The `this` Keyword

- Refers to the current execution context, usually:
  - In a **constructor function** or **class**, `this` refers to the instance being created.
  - In an **object method**, `this` refers to the object that called the method.
  - **Important**: `this` can be tricky in callbacks or event listeners where context may change.

---

## Summary

1. **Objects** are fundamental in JavaScript, allowing you to group related data and functionality.  
2. **Properties** and **methods** can be added or deleted at any time.  
3. **Prototype inheritance** lets objects inherit properties and methods from other objects.  
4. **Classes** provide syntactic sugar over prototypal inheritance (introduced in ES6).  
5. **`extends`** and **`super`** allow creation of child classes with inherited properties/methods.  
6. **Prototype chain** can be inspected and understood as a hierarchy of objects.  
7. **`this`** context depends on how and where a function is called.
