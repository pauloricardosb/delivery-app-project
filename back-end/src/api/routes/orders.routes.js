const { Router } = require('express');
const { create, getAll } = require('../controllers/orders.controller');
const { validateToken } = require('../helpers/jwt');

const router = Router();

router.get('/', validateToken, getAll);
router.post('/', validateToken, create);

module.exports = router;