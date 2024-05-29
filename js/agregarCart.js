
// Función para agregar un producto al carrito
function agregarAlCarrito(productId) {
  fetch('/cart/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ productId })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data.message);
    // Actualizar visualmente el carrito si es necesario
    obtenerCarrito();
  })
  .catch(error => {
    console.error('Error al agregar producto al carrito:', error);
  });
}

