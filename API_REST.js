const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const products = [
  { id: 1, name: 'Product 1', price: 10.99 },
  { id: 2, name: 'Product 2', price: 19.99 },
  ;
];

const orders = [];

;
app.get('/products', (req, res) => {
  res.json(products);
});


app.get('/orders/:clientId', (req, res) => {
  const clientId = parseInt(req.params.clientId);
  const clientOrders = orders.filter((order) => order.clientId === clientId);
  res.json(clientOrders);
});


app.post('/orders', (req, res) => {
  const { clientId, productId, quantity } = req.body;

  const product = products.find((p) => p.id === productId);
  if (!product) {
    res.status(400).json({ error: 'Produto não encontrado' });
    return;
  }

  const order = {
    clientId,
    product,
    quantity,
    total: product.price * quantity,
  };

  orders.push(order);
  res.status(201).json(order);
});


app.put('/products/:productId', (req, res) => {
;
  res.status(200).json({ message: 'Produto editado com sucesso' });
});

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});
