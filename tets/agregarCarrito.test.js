// Importa la función a probar
const agregarAlCarrito = require(`http://localhost:8080/js/agregarCart.js`); 

// Mockear la función fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ message: 'Producto agregado al carrito' })
  })
);

// Prueba unitaria
test('agregarAlCarrito agrega correctamente un producto al carrito', async () => {
  // Llama a la función y espera a que se resuelva la promesa
  await agregarAlCarrito('productId');

  
  expect(fetch).toHaveBeenCalledWith('/cart/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ productId: 'productId' })
  });

  // Verifica que console.log haya sido llamado con el mensaje correcto
  expect(console.log).toHaveBeenCalledWith('Producto agregado al carrito');
});
