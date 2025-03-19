const h1Elemento = document.getElementsByTagName("h1")[0];
const pElemento = document.getElementsByClassName("parrafo")[0];
const btn = document.getElementById("btn");
const btnStyle = document.getElementById("btnStyle");
const container = document.getElementById("container");


// Mostramos el texto de los elementos
console.log(h1Elemento.innerText);  // Usamos innerText para acceder al contenido
console.log(pElemento.innerText);   // También usamos innerText para acceder al contenido


// Ahora vamos a sobre escribir

h1Elemento.innerText = "Soy el nuevo titulo";
pElemento.innerText = "Soy el nuevo parrafo"

// Ahora mostraremos por consola nuestros elementos para poder inspeccionar y ver cuales son las propuedades
console.log(document);
console.log(h1Elemento);
console.log(pElemento);

// Quiero ver que pasa en window
console.log("########## innerWidth ##########")
console.log(window.innerWidth);
console.log("########## innerHeight ##########")
console.log(window.innerHeight);
console.log("########## location ##########")
console.log(window.location);

// Aca le vamos a dar un funcionalidad cuando se haga click en el boton
btn.addEventListener("click", () => {
  let nuevoDiv = document.createElement("div");
  container.appendChild(nuevoDiv);
  nuevoDiv.classList.add("nuevoDiv");
})
btnStyle.addEventListener("click", () => {
  const nuevoDiv = container.querySelector(".nuevoDiv");
  if (nuevoDiv) {
    nuevoDiv.style.backgroundColor = "blue"; // Cambiar el fondo
    nuevoDiv.style.width = "200px"; // Ancho del div
    nuevoDiv.style.height = "100px"; // Alto del div
    nuevoDiv.style.margin = "10px"; // Margen
    nuevoDiv.style.borderRadius = "10px"; // Bordes redondeados
  }
})


// por último tenemos el document.dir que nos permite ver que es lo que tenmos dentro de este objeto
console.log("#### document dir ####")
console.dir(document);
console.log("#### h1Elemento dir ####")
console.dir(h1Elemento);
console.log("#### window dir ####")
console.dir(window);
// en window podemos ver inclusive el cache y otros elementos únicos de window