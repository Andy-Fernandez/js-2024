// cart.mjs
import { productos } from './db.mjs';

// Carrito de compras
export let cart = [];

// Función para agregar productos al carrito
export function addProductToCart(id, tipoPrecio = 'por_menor') {
  const product = productos.find(prod => prod.id === id);
  if (!product) {
    console.error(`Producto con id ${id} no encontrado.`);
    return;
  }

  // Obtiene el precio según el tipo de cliente
  const price = updateProductPrice(product, tipoPrecio);

  // Verificar si el producto ya está en el carrito
  const existingProduct = cart.find(item => item.productoId === id);
  if (existingProduct) {
    // Incrementa cantidad y actualiza subtotal
    existingProduct.cantidad += 1;
    existingProduct.precioUnitario = price; // En caso de que el precio cambie
    existingProduct.subtotal = existingProduct.cantidad * existingProduct.precioUnitario;
  } else {
    // Agrega el producto nuevo al carrito
    cart.push({
      productoId: product.id,
      nombre: product.nombre,
      cantidad: 1,
      precioUnitario: price,
      subtotal: price
    });
  }
  updateTotal();
}

// Función para actualizar y mostrar el total del carrito
export function updateTotal() {
  const total = cart.reduce((acc, item) => acc + item.subtotal, 0);
  console.log('Total del carrito:', total.toFixed(2));
  return total;
}

// Función para actualizar el precio según el tipo de cliente
export function updateProductPrice(product, tipoPrecio) {
  if (tipoPrecio === 'por_menor') {
    return product.precioUnitario;
  } else if (tipoPrecio === 'por_mayor') {
    return product.precioPorMayor;
  } else if (tipoPrecio === 'preferencial') {
    return product.precioPreferencial;
  }
  return product.precioUnitario; // Valor por defecto
}
