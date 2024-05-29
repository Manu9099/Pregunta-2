// Función para manejar la búsqueda de productos
function buscarProductos() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase(); // Convertir la entrada a minúsculas para una búsqueda insensible a mayúsculas y minúsculas
    const products = document.querySelectorAll('.product');
  
    products.forEach(product => {
      const name = product.querySelector('h2').textContent.toLowerCase(); // Obtener el nombre del producto y convertirlo a minúsculas
      if (name.includes(filter)) {
        product.style.display = 'block'; // Mostrar el producto si el nombre coincide con el término de búsqueda
      } else {
        product.style.display = 'none'; // Ocultar el producto si el nombre no coincide con el término de búsqueda
      }
    });
  }
  
  // Agregar evento de escucha para la barra de búsqueda
  document.getElementById('searchInput').addEventListener('input', buscarProductos);