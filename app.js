const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 8080 


app.use(express.json());

// Base de datos de productos (simulada)
const products = [
  { id: 1, name: 'Laptop Ausu', price: 1000,image:`http://localhost:8080/img/parlantes1.jpg` },
  { id: 2, name: 'Laptop Lenovo', price: 50,image:`http://localhost:8080/img/Laptop1.jpg` },
  { id: 3, name: 'Monitor Mac', price: 2000 ,image:`http://localhost:8080/img/monitores1.jpg` },
  { id: 4, name: 'Laptop Mac', price: 4500,image:`http://localhost:8080/img/mac-des1.jpg` },
  { id: 5, name: 'Mouse Razer', price: 50,image:`http://localhost:8080/img/mouse.gif` },
  { id: 6, name: 'Teclado Razer', price: 250,image:`http://localhost:8080/img/rzaer1.jpg` },
  { id: 5, name: 'Laptop Hp victus', price: 50,image:`http://localhost:8080/img/hpvictus.jpg` },
  { id: 6, name: 'Samsung s24', price: 250,image:`http://localhost:8080/img/samsung24.jpg` },
]

let carrito =[]
app.get('/products', (req, res) => {
  res.json(products);
})

app.post('/cart/add', (req, res) => {
  const productId = parseInt(req.body.productId);
  const product = products.find(product => product.id === productId);
  if (product) {
    carrito.push(product);
    res.status(200).json({ message: 'Producto agregado al carrito', product });
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
});


// obtener un producto por su ID
app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(product => product.id === id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
});

app.get('/cart', (req, res) => {
  res.json(carrito);
});

app.get(`/`,(reg,res) => {
    res.sendFile(`${__dirname}/cliente/index.html`)
  })

  app.get(`/politicassegu.html`,(reg,res) => {
    res.sendFile(`${__dirname}/cliente/politicassegu.html`)
  })
  app.get(`/index.html`,(reg,res) => {
    res.sendFile(`${__dirname}/cliente/index.html`)
  })
  app.get(`/productos.html`,(reg,res) => {
    res.sendFile(`${__dirname}/cliente/productos.html`)
  })
  app.get(`/nosotros.html`,(reg,res) => {
    res.sendFile(`${__dirname}/cliente/nosotros.html`)
  })

  app.get(`/contacto.html`,(reg,res) => {
    res.sendFile(`${__dirname}/cliente/contacto.html`)
  })


// Ruta para realizar una compra (simulada)
app.post('/checkout', (req, res) => {
  const cart = req.body.cart;
  
  res.json({ message: 'Compra realizada con éxito' });
});


app.use(express.static(path.join(__dirname, '/')));


app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});