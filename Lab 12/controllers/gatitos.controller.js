const Gatitos = require('../models/gatitos.model');

const { respuestas } = require('../routes/perritos.routes');

exports.get_nuevo = (request, response, next) => {
    response.render('pets', { petType: 'Gatito', order: 2 });
};

exports.post_nuevo = (request, response, next) => {
    const respuesta = request.body.gatito;
    respuestas.push(respuesta);
    response.redirect('/animales/conejitosgroup');
};

exports.listar = (request, response, next) => {
    response.render('lista', { nombre: Gatitos.fetchAll() });
};