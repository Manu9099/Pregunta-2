  // Función para cargar los productos desde la API
  function cargarProductos() {
    fetch('/products') 
      .then(response => response.json())
      .then(products => {
        const productList = document.getElementById('product-list');
        products.forEach(product => {
          const productElement = document.createElement('div');
          productElement.classList.add('product');
          productElement.innerHTML = `
            <h2>${product.name}</h2>
            <p>Precio: $${product.price}</p>
            <img src="${product.image}" alt="${product.name}">
            <button onclick="agregarAlCarrito(${product.id})">Agregar al Carrito</button>
          `;
          productList.appendChild(productElement);
        });
      })
      .catch(error => {
        console.error('Error al cargar los productos:', error);
      });
  }

  window.onload = cargarProductos;