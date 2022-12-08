const { Router } = require('express');
const { validateToken } = require('../helpers/jwt');
const { 
  create, 
  getByUserName, 
  getByOrderId, 
  updateStatus, 
} = require('../controllers/orders.controller');

const router = Router();

router.get('/:name', validateToken, getByUserName);
router.get('/details/:id', validateToken, getByOrderId);
router.post('/', validateToken, create);
router.patch('/:id', validateToken, updateStatus);

module.exports = router;