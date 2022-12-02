const { Router } = require('express');
const { create, getAll, getByUserId } = require('../controllers/orders.controller');
const { validateToken } = require('../helpers/jwt');

const router = Router();

router.get('/', validateToken, getAll);
router.get('/:id', validateToken, getByUserId);
router.post('/', validateToken, create);

module.exports = router;