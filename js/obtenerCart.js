// Función para obtener y mostrar el contenido del carrito
function obtenerCarrito() {
    fetch('/cart')
      .then(response => response.json())
      .then(carrito => {
        const carritoElement = document.getElementById('cart-items');
        carritoElement.innerHTML = '';
        carrito.forEach(producto => {
          const itemElement = document.createElement('div');
          itemElement.textContent = `${producto.name} - $${producto.price}`;
          carritoElement.appendChild(itemElement);
        });
      })
      .catch(error => {
        console.error('Error al obtener el carrito:', error);
      });
  }
  
  // Cargar los productos cuando se cargue la página
  window.onload = cargarProductos;