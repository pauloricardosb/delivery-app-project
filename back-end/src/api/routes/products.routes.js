const { Router } = require('express');
const { getProducts, getProductsById } = require('../controllers/products.controller');
const { validateToken } = require('../helpers/jwt');

const router = Router();

router.get('/', validateToken, getProducts);
router.get('/:id', validateToken, getProductsById);

module.exports = router;