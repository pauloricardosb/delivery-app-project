const { Router } = require('express');
const { create, getByUserName, getByOrderId } = require('../controllers/orders.controller');
const { validateToken } = require('../helpers/jwt');

const router = Router();

router.get('/:name', validateToken, getByUserName);
router.get('/details/:id', validateToken, getByOrderId);
router.post('/', validateToken, create);

module.exports = router;