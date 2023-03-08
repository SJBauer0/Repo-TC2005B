const express = require('express');
const router = express.Router();

const conejitosController = require('../controllers/conejitos.controller');

router.get('/conejitosgroup', conejitosController.get_nuevo);

router.post('/conejitosgroup', conejitosController.post_nuevo);

router.get('/', conejitosController.listar);

module.exports = router;


