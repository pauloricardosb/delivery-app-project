const { Router } = require('express');
const { getBySellerName } = require('../controllers/orders.controller');
const { validateToken } = require('../helpers/jwt');

const router = Router();

router.get('/orders/:name', validateToken, getBySellerName);

module.exports = router;