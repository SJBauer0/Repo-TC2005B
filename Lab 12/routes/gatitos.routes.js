const express = require('express');
const router = express.Router();

const gatitoController = require('../controllers/gatitos.controller');

router.get('/gatitosgroup', gatitoController.get_nuevo);

router.post('/gatitosgroup', gatitoController.post_nuevo);

module.exports = router;