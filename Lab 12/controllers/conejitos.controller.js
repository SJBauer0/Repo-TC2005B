const Conejo = require('../models/conejitos.model');

const { respuestas } = require('../routes/perritos.routes');

exports.get_nuevo = (request, response, next) => {
    response.render('pets', { petType: 'Conejito', order: 3 });
};

exports.post_nuevo = (request, response, next) => {
    const respuesta = request.body.conejito;
    respuestas.push(respuesta);
    response.redirect('/results');
};

exports.listar = (request, response, next) => {
    response.render('lista', { nombre: Conejo.fetchAll() });
};