const { Router } = require('express');
const { getUsers } = require('../controllers/users.controller');
const { validateToken } = require('../helpers/jwt');

const router = Router();

router.get('/', validateToken, getUsers);

module.exports = router;