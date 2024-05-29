// Importar la función a probar
const obtenerCarrito = require('http://localhost:8080/js/obtenerCart.js');

// Mockear la función fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([
      { id: 1, name: 'Producto 1', price: 10 },
      { id: 2, name: 'Producto 2', price: 20 }
      
    ])
  })
);

// Mockear document.createElement
document.createElement = jest.fn((tagName) => {
  return { 
    tagName,
    textContent: '',
    appendChild: jest.fn()
  };
});

// Mockear document.getElementById
document.getElementById = jest.fn(() => {
  return {
    innerHTML: '',
    appendChild: jest.fn()
  };
});

// Prueba unitaria
test('obtenerCarrito obtiene y muestra correctamente el contenido del carrito', async () => {
  // Llamar a la función y esperar a que se resuelva la promesa
  await obtenerCarrito();

  // Verificar que fetch se llamó con la URL correcta
  expect(fetch).toHaveBeenCalledWith('/cart');

  // Verificar que createElement se llamó para cada producto
  expect(document.createElement).toHaveBeenCalledTimes(2); // Cambia el número si agregaste más productos

  // Verificar que getElementById se llamó una vez
  expect(document.getElementById).toHaveBeenCalledWith('cart-items');
});
