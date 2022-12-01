const express = require('express');
const loginRouter = require('./routes/login.routes');
const registerRouter = require('./routes/register.routes');

const app = express();
app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', loginRouter); 
app.use('/register', registerRouter);

module.exports = app;
