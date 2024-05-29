// Importar la función a probar
const cargarProductos = require(`http://localhost:8080/js/CargarPro.js`); 

// Mockear la función fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([
      { id: 1, name: 'Producto 1', price: 10, image: 'imagen1.jpg' },
      { id: 2, name: 'Producto 2', price: 20, image: 'imagen2.jpg' }
      
    ])
  })
);

// Mockear document.createElement
document.createElement = jest.fn((tagName) => {
  return { 
    tagName,
    classList: {
      add: jest.fn()
    },
    innerHTML: '',
    appendChild: jest.fn()
  };
});

// Mockear document.getElementById
document.getElementById = jest.fn(() => {
  return {
    appendChild: jest.fn()
  };
});

// Prueba unitaria
test('cargarProductos carga y renderiza correctamente los productos', async () => {
  // Llamar a la función y esperar a que se resuelva la promesa
  await cargarProductos();

  
  expect(fetch).toHaveBeenCalledWith('/products');

  
  expect(document.createElement).toHaveBeenCalledTimes(2); 

  
  expect(document.getElementById).toHaveBeenCalledWith('product-list');
});
