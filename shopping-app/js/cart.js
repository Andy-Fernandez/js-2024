let cart = [];

export function initCart(){
  // Inicializa el carrito; podrías usar localStorage para persistencia si lo deseas.
  cart = [];
}

export function addToCart(product){
  const existing = cart.find(item => item.id === product.id);
  if(existing){
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
}

export function getCartItems(){
  return cart;
}
