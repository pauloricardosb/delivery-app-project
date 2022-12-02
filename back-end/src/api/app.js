const express = require('express');
const loginRouter = require('./routes/login.routes');
const registerRouter = require('./routes/register.routes');
const productsRouter = require('./routes/products.routes');
const ordersRouter = require('./routes/orders.routes');

const app = express();
app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', loginRouter); 
app.use('/register', registerRouter);
app.use('/costumer/products', productsRouter);
app.use('/costumer/orders', ordersRouter);

module.exports = app;
