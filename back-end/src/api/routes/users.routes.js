const { Router } = require('express');
const { getUsers, getSellers, deleteUser } = require('../controllers/user.controller');
const { validateToken } = require('../helpers/jwt');

const router = Router();

router.get('/', validateToken, getUsers);
router.get('/sellers', validateToken, getSellers);
router.delete('/:id', validateToken, deleteUser);

module.exports = router;