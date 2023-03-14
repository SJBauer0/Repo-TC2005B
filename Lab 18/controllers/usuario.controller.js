const Usuario = require('../models/usuarios.model');

exports.get_login = (request, response, next) => {
    response.render('login');
};

exports.post_login = (request, response, next) => {
    Usuario.fetchOne(request.body.username)
    .then(([rows, fieldData]) => {
        if (rows.length == 1) {
            response.redirect('/todolist/goals');
        } else {
            request.session.mensaje = "Usuario y/o contraseña incorrectos";
            response.redirect('/usuarios/login');
        }
    })
    .catch((error) => {
        console.log(error);
    });};


exports.get_signup = (request, response, next) => {
    response.render('signup');
};

exports.post_signup = (request, response, next) => {
    const usuario = new Usuario({
        nombre: request.body.nombre,
        username: request.body.username,
        password: request.body.password,
    });

    usuario.save()
    .then(([rows, fieldData]) => {
        response.redirect('/usuarios/login');
    }).catch((error) => {console.log(error)});
};

exports.logout = (req, res, next) => {
    req.session.destroy(()=>{
        res.redirect('/todolist/actions')
    })
}