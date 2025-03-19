### **1. Selección de Elementos por ID**
- Crea un archivo HTML con un elemento que tenga un ID, por ejemplo:
  ```html
  <h1 id="titulo">¡Hola, Mundo!</h1>
  ```
- Usa `document.getElementById()` para seleccionar el elemento y cambia su texto a "¡Aprendiendo DOM!".

---

### **2. Selección de Elementos con `querySelector`**
- Crea un archivo HTML con varios elementos, por ejemplo:
  ```html
  <div class="contenedor">
    <p class="parrafo">Este es el primer párrafo.</p>
    <p class="parrafo">Este es el segundo párrafo.</p>
  </div>
  ```
- Usa `document.querySelector()` para seleccionar el primer párrafo y cambia su texto a "¡Soy el primer párrafo!".

---

### **3. Selección de Elementos con `getElementsByClassName`**
- Usa el mismo HTML del ejercicio anterior.
- Usa `document.getElementsByClassName()` para seleccionar todos los elementos con la clase `parrafo` y cambia el texto del segundo párrafo a "¡Soy el segundo párrafo!".

---

### **4. Selección de Elementos con `getElementsByTagName`**
- Crea un archivo HTML con varios elementos `<li>`, por ejemplo:
  ```html
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  ```
- Usa `document.getElementsByTagName()` para seleccionar todos los elementos `<li>` y cambia el texto del tercer ítem a "¡Soy el tercer ítem!".

---

### **5. Selección de Elementos con `querySelectorAll`**
- Usa el mismo HTML del ejercicio anterior.
- Usa `document.querySelectorAll()` para seleccionar todos los elementos `<li>` y cambia el texto del primer ítem a "¡Soy el primer ítem!".

---

### **6. Comparación de Performance**
- Crea un archivo HTML con muchos elementos (por ejemplo, 100 párrafos).
- Usa `console.time()` y `console.timeEnd()` para medir el tiempo que tarda `getElementsByTagName()` y `querySelectorAll()` en seleccionar todos los párrafos. Compara los resultados.

---

### **7. Manipulación de Atributos**
- Crea un archivo HTML con un enlace, por ejemplo:
  ```html
  <a id="enlace" href="https://google.com">Ir a Google</a>
  ```
- Usa `document.getElementById()` para seleccionar el enlace y cambia su atributo `href` a "https://platzi.com".

---

### **8. Creación de Elementos**
- Crea un archivo HTML con un contenedor vacío, por ejemplo:
  ```html
  <div id="contenedor"></div>
  ```
- Usa `document.createElement()` para crear un nuevo párrafo y agrégalo al contenedor usando `appendChild()`.

---

### **9. Eliminación de Elementos**
- Usa el mismo HTML del ejercicio anterior.
- Usa `removeChild()` o `remove()` para eliminar el párrafo que creaste en el ejercicio 8.

---

### **10. Eventos**
- Crea un archivo HTML con un botón, por ejemplo:
  ```html
  <button id="miBoton">Haz clic</button>
  ```
- Usa `addEventListener()` para agregar un evento de clic al botón que muestre una alerta con el mensaje "¡Botón clickeado!".

---

### **11. Recorrer el DOM**
- Crea un archivo HTML con una lista de elementos, por ejemplo:
  ```html
  <ul id="lista">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  ```
- Usa `childNodes` para recorrer los elementos de la lista y mostrar su contenido en la consola.

---

### **12. Manipulación de Estilos**
- Crea un archivo HTML con un div, por ejemplo:
  ```html
  <div id="miDiv" style="width: 100px; height: 100px; background-color: red;"></div>
  ```
- Usa `style` para cambiar el color de fondo del div a azul.

---

### **13. Manipulación de Formularios**
- Crea un archivo HTML con un formulario, por ejemplo:
  ```html
  <form id="miFormulario">
    <input type="text" id="nombre" placeholder="Ingresa tu nombre">
    <button type="submit">Enviar</button>
  </form>
  ```
- Usa `document.getElementById()` para obtener el valor del input y mostrarlo en la consola.

---

### **14. Desafío Final**
- Crea un archivo HTML con una estructura compleja (por ejemplo, un menú con varios niveles).
- Practica seleccionar y manipular elementos usando todos los métodos que aprendiste (`getElementById`, `querySelector`, `getElementsByClassName`, `getElementsByTagName`, `querySelectorAll`).
- Cambia textos, estilos, atributos, agrega nuevos elementos y elimina otros.

