const { Router } = require('express');
const { getProductsController } = require('../controllers/products.controller');
const { getOrderByIdController } = require('../controllers/sales.controller');

const router = Router();

router.get('/products', getProductsController);
router.post('/orders/:id', getOrderByIdController);

module.exports = router;