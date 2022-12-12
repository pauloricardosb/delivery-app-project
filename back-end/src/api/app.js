const express = require('express');
const cors = require('cors');
const loginRouter = require('./routes/login.routes');
const registerRouter = require('./routes/register.routes');
const productsRouter = require('./routes/products.routes');
const ordersRouter = require('./routes/orders.routes');
const imagesRouter = require('./routes/images.routes');
<<<<<<< HEAD
const sellerRouter = require('./routes/sellers.routes');
=======
const usersRouter = require('./routes/users.routes');
>>>>>>> 31286371ea66485314edbd18d4b0a1a043ff42ad

const app = express();
app.use(express.json());

app.use(cors());
app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', loginRouter); 
app.use('/register', registerRouter);
app.use('/costumer/products', productsRouter);
app.use('/costumer/orders', ordersRouter);
app.use('/seller', sellerRouter);
app.use('/images', imagesRouter);
app.use('/users', usersRouter);

module.exports = app;
