const express = require('express');
const perritosRoute = express.Router();

const respuestas = []

const perritosController = require('../controllers/perritos.controller');

perritosRoute.get('/perritosgroup',perritosController.get_nuevo );

perritosRoute.post('/perritosgroup', perritosController.post_nuevo);

module.exports = { perritosRoute };