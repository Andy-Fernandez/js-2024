import { getProducts } from './product.js';
import { addToCart, getCartItems, initCart } from './cart.js';

// Función auxiliar para cargar fragmentos HTML y colocarlos en un elemento por ID
async function loadHTML(url, elementId) {
  const res = await fetch(url);
  const html = await res.text();
  document.getElementById(elementId).innerHTML = html;
}

// Cargar el header y footer de forma simultánea
Promise.all([
  loadHTML('./components/header.html', 'header'),
  loadHTML('./components/footer.html', 'footer')
]).then(() => {
  console.log('Header y footer cargados.');
});

// Función para cargar el template del producto
async function loadProductTemplate() {
  const res = await fetch('./components/product.html');
  const html = await res.text();
  const templateContainer = document.createElement('div');
  templateContainer.innerHTML = html;
  const template = templateContainer.querySelector('template');
  return template;
};

document.addEventListener('DOMContentLoaded', async () => {
  initCart(); // Create cart prodcutos list
  const productList = document.getElementById('product-list');
  const cartList = document.getElementById('cart-list');

  const products = getProducts();
  const template = await loadProductTemplate();

  // Para cada producto, clonamos el template, completamos sus datos y asignamos el evento
  products.forEach(product => {
    const productElem = template.content.cloneNode(true);
    productElem.querySelector('.product-name').textContent = product.name;
    productElem.querySelector('.product-price').textContent = `Precio: $${product.price}`;
    const button = productElem.querySelector('.add-to-cart');
    button.setAttribute('data-id', product.id); 
 
    button.addEventListener('click', () => {
      addToCart(product);
      updateCartUI();
    });

    productList.appendChild(productElem);
  });

  // Función para actualizar la interfaz del carrito
  function updateCartUI(){
    cartList.innerHTML = '';
    const cartItems = getCartItems();
    cartItems.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - Cantidad: ${item.quantity}`;
      cartList.appendChild(li);
    });
  }
});
