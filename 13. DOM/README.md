# Manipulación del DOM

Curso: [Document Object Model - Platzi](https://platzi.com/cursos/document-object-model/)

---

## **Window**

El objeto `window` es la ventana global del navegador. Representa la ventana del navegador y contiene todo el DOM. Es el objeto principal desde el cual se accede a todo lo relacionado con el navegador, como el DOM, el BOM (Browser Object Model), y otras APIs.

### Propiedades y Métodos comunes de `window`

| **Categoría**   | **Descripción**                                                                 | **Ejemplos**                                              |
|-----------------|-------------------------------------------------------------------------------|----------------------------------------------------------|
| **Propiedades** | Accede a características de la ventana del navegador.                          | `window.innerWidth`, `window.innerHeight`, `window.location` |
| **Métodos**     | Permiten interactuar con la ventana del navegador.                             | `window.alert()`, `window.open()`, `window.scrollTo()`    |

**Ejemplo**:

```javascript
// Obtener el ancho y alto de la ventana
let ancho = window.innerWidth;
let alto = window.innerHeight;
console.log(`Ancho: ${ancho}, Alto: ${alto}`);

// Mostrar una alerta
window.alert("¡Hola desde la ventana del navegador!");
```

---

## **Manipulación del DOM**

### **Selección de Elementos**

Además de `getElementById()`, hay otros métodos para seleccionar elementos del DOM:

| **Método**                | **Descripción**                                                                 | **Ejemplo**                                              |
|--------------------------|-------------------------------------------------------------------------------|----------------------------------------------------------|
| `getElementsByClassName()` | Selecciona elementos por su clase. Devuelve una colección HTML.                | `document.getElementsByClassName("miClase")`             |
| `getElementsByTagName()`   | Selecciona elementos por su etiqueta. Devuelve una colección HTML.             | `document.getElementsByTagName("div")`                   |
| `querySelector()`          | Selecciona el primer elemento que coincida con el selector CSS.                | `document.querySelector(".miClase")`                     |
| `querySelectorAll()`       | Selecciona todos los elementos que coincidan con el selector CSS.              | `document.querySelectorAll("div.miClase")`               |

**Ejemplo**:

```javascript
// Seleccionar el primer elemento con la clase "miClase"
let elemento = document.querySelector(".miClase");

// Seleccionar todos los elementos <p>
let parrafos = document.querySelectorAll("p");
parrafos.forEach(p => console.log(p.innerText));
```

---

### **Modificación de Elementos**

Una vez seleccionados los elementos, puedes modificar sus propiedades y contenido.

#### **Propiedades comunes para modificar elementos**

| **Propiedad**   | **Descripción**                                                                 | **Ejemplo**                                              |
|-----------------|-------------------------------------------------------------------------------|----------------------------------------------------------|
| `innerText`     | Modifica el texto visible dentro de un elemento.                               | `elemento.innerText = "Nuevo texto"`                     |
| `innerHTML`     | Modifica el contenido HTML dentro de un elemento.                              | `elemento.innerHTML = "<strong>Texto en negrita</strong>"`|
| `style`         | Modifica los estilos CSS de un elemento.                                       | `elemento.style.color = "red"`                           |
| `className`     | Modifica la clase de un elemento.                                              | `elemento.className = "nuevaClase"`                      |
| `classList`     | Permite agregar, eliminar o alternar clases de un elemento.                    | `elemento.classList.add("nuevaClase")`                   |

**Ejemplo**:

```javascript
// Cambiar el texto y el color de un elemento
let titulo = document.querySelector("h1");
titulo.innerText = "¡Nuevo título!";
titulo.style.color = "blue";

// Agregar una clase a un elemento
titulo.classList.add("destacado");
```

---

### **Creación y Eliminación de Elementos**

Puedes crear nuevos elementos y agregarlos al DOM, o eliminar elementos existentes.

#### **Métodos para crear y eliminar elementos**

| **Método**                | **Descripción**                                                                 | **Ejemplo**                                              |
|--------------------------|-------------------------------------------------------------------------------|----------------------------------------------------------|
| `createElement()`         | Crea un nuevo elemento HTML.                                                  | `let nuevoElemento = document.createElement("div")`      |
| `appendChild()`           | Agrega un elemento como hijo de otro.                                          | `document.body.appendChild(nuevoElemento)`               |
| `removeChild()`           | Elimina un elemento hijo de un contenedor.                                     | `document.body.removeChild(elemento)`                    |
| `remove()`                | Elimina el elemento directamente.                                              | `elemento.remove()`                                      |

**Ejemplo**:

```javascript
// Crear un nuevo párrafo y agregarlo al body
let nuevoParrafo = document.createElement("p");
nuevoParrafo.innerText = "Este es un nuevo párrafo.";
document.body.appendChild(nuevoParrafo);

// Eliminar un elemento
let elementoAEliminar = document.querySelector(".eliminar");
elementoAEliminar.remove();
```

---

### **Eventos**

Los eventos permiten interactuar con el usuario, como hacer clic, mover el mouse, presionar una tecla, etc.

#### **Métodos para manejar eventos**

| **Método**                | **Descripción**                                                                 | **Ejemplo**                                              |
|--------------------------|-------------------------------------------------------------------------------|----------------------------------------------------------|
| `addEventListener()`      | Asocia un evento a un elemento.                                                | `elemento.addEventListener("click", miFuncion)`          |
| `removeEventListener()`   | Elimina un evento asociado a un elemento.                                      | `elemento.removeEventListener("click", miFuncion)`       |

**Ejemplo**:

```javascript
// Agregar un evento de clic a un botón
let boton = document.querySelector("button");
boton.addEventListener("click", function() {
    alert("¡Botón clickeado!");
});
```

---

### **Atributos**

Puedes modificar los atributos de los elementos, como `id`, `class`, `src`, `href`, etc.

#### **Métodos para manipular atributos**

| **Método**                | **Descripción**                                                                 | **Ejemplo**                                              |
|--------------------------|-------------------------------------------------------------------------------|----------------------------------------------------------|
| `setAttribute()`          | Establece un atributo en un elemento.                                          | `elemento.setAttribute("id", "nuevoId")`                |
| `getAttribute()`          | Obtiene el valor de un atributo.                                               | `let valor = elemento.getAttribute("href")`              |
| `removeAttribute()`       | Elimina un atributo de un elemento.                                            | `elemento.removeAttribute("class")`                      |

**Ejemplo**:

```javascript
// Cambiar el atributo href de un enlace
let enlace = document.querySelector("a");
enlace.setAttribute("href", "https://platzi.com");

// Obtener el valor de un atributo
let href = enlace.getAttribute("href");
console.log(href);
```

---

### **Recorrer el DOM**

Puedes navegar entre los nodos del DOM utilizando propiedades como `parentNode`, `childNodes`, `nextSibling`, etc.

| **Propiedad**             | **Descripción**                                                                 | **Ejemplo**                                              |
|--------------------------|-------------------------------------------------------------------------------|----------------------------------------------------------|
| `parentNode`              | Accede al nodo padre de un elemento.                                           | `elemento.parentNode`                                    |
| `childNodes`              | Accede a los nodos hijos de un elemento.                                       | `elemento.childNodes`                                    |
| `nextSibling`             | Accede al siguiente nodo hermano.                                              | `elemento.nextSibling`                                   |
| `previousSibling`         | Accede al nodo hermano anterior.                                               | `elemento.previousSibling`                               |

**Ejemplo**:

```javascript
// Recorrer los hijos de un elemento
let contenedor = document.querySelector(".contenedor");
contenedor.childNodes.forEach(nodo => console.log(nodo));
```

---

### **Manipulación de Formularios**

Puedes acceder y manipular los elementos de un formulario, como inputs, selects, etc.

**Ejemplo**:

```javascript
// Obtener el valor de un input
let input = document.querySelector("input");
let valor = input.value;
console.log(valor);

// Cambiar el valor de un input
input.value = "Nuevo valor";
```

---

### **Manipulación de Estilos**

Puedes modificar los estilos CSS de un elemento directamente desde JavaScript.

**Ejemplo**:

```javascript
// Cambiar el color de fondo de un elemento
let div = document.querySelector("div");
div.style.backgroundColor = "yellow";

// Cambiar múltiples estilos
div.style.cssText = "color: red; font-size: 20px;";
```
