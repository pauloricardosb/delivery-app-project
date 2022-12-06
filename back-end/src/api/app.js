const express = require('express');
const cors = require('cors');
const loginRouter = require('./routes/login.routes');
const registerRouter = require('./routes/register.routes');

const app = express();
app.use(express.json());

app.use(cors());
app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', loginRouter); 
app.use('/register', registerRouter);

module.exports = app;
