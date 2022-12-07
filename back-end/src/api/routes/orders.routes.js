const { Router } = require('express');
const { create, getByUserId, getByOrderId } = require('../controllers/orders.controller');
const { validateToken } = require('../helpers/jwt');

const router = Router();

router.get('/orders/user/:id', validateToken, getByUserId);
router.get('/orders/:id', validateToken, getByOrderId);
router.post('/', validateToken, create);

module.exports = router;