const { Router } = require('express');
const { getImage } = require('../controllers/image.controller');

const router = Router();

router.get('/:image', getImage);

module.exports = router;