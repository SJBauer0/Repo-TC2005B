const Perrito = require('../models/perritos.model');

const { respuestas } = require('../routes/perritos.routes');

exports.get_nuevo = (request, response, next) => {
    response.render('pets', { petType: 'Perrito', order: 1 });
};

exports.post_nuevo = (request, response, next) => {
    const respuesta = request.body.perrito;
    respuestas.push(respuesta);
    response.redirect('/animales/gatitosgroup');
};

exports.listar = (request, response, next) => {
    response.render('lista', { nombre: Perrito.fetchAll() });
};
