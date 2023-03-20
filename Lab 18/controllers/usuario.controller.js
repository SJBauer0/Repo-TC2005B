const Usuario = require('../models/usuarios.model');

exports.get_login = (req, res, next) => {
  const mensaje = req.session.mensaje || '';

  if (req.session.mensaje) {
    req.session.mensaje = '';
  }

    res.render('login',
        {
            mensaje: mensaje,
        });
};

exports.post_login = (req, res, next) => {
  Usuario.fetchOne(req.body.username)
    .then(([rows, fieldData]) => {
      if (rows.length == 1) {
        res.redirect('/todolist/goals');
      } else {
        req.session.mensaje = 'Usuario y/o contraseña incorrectos';
        res.redirect('/usuarios/login');
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.get_signup = (req, res, next) => {
  res.render('signup');
};

exports.post_signup = (req, res, next) => {
  const usuario = new Usuario({
    nombre: req.body.nombre,
    username: req.body.username,
    password: req.body.password,
  });

  usuario
    .save()
    .then(([rows, fieldData]) => {
      res.redirect('/usuarios/login');
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.logout = (req, res, next) => {
  req.session.destroy(() => {
    res.redirect('/todolist/actions');
  });
};
