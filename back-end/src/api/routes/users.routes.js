const { Router } = require('express');
const { getUsers, deleteUser } = require('../controllers/users.controller');
const { validateToken } = require('../helpers/jwt');

const router = Router();

router.get('/', validateToken, getUsers);
router.delete('/:id', validateToken, deleteUser);

module.exports = router;