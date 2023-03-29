const fs = require('fs');
const path = require('path');

const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}
const Actions = require('../models/actions.model');
const Type = require('../models/type.model');
const multer = require('multer');

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, path.join(__dirname, '.', 'uploads'));
  },
  filename: (req, file, cb) => {
      cb(null, new Date().toISOString() + '-' + file.originalname);
  }
});

const upload =  multer({ storage: fileStorage })


exports.getNew = (req, res, next) => {
  Type.fetchAll()
    .then(([rows, fieldData]) => {
      // console.log(rows);

      res.render('newaction', {
        types: rows,
        isLoggedIn: req.session.isLoggedIn,
        nombre: req.session.nombre || '',
        privileges: req.session.privileges || [],
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postNew = (req, res, next) => {
  upload.single('imagen')(req, res, (err) => {
    if (err) {
      // Handle any errors related to multer
      console.log(err);
      return next(err);
    }

    const action = new Actions({
      name: req.body.name,
      type: req.body.type,
      description: req.body.description,
      img: req.file.filename,
    });
    action.save().then(([rows, fieldData]) => {
      req.session.lastAction = action.name;
      res.redirect('/todolist/actions');
    }).catch(err => {
      console.log(err);
      return next(err);
    });
  });
};

exports.list = (req, res, next) => {
  let cookies = res.get('Cookie') || '';

  let consultas = cookies.split(';')[0].split('=')[1] || 0;

  consultas++;

  res.setHeader(
    'Set-Cookie',
    'consultas=' + consultas + '; HttpOnly'
  );

  Actions.fetchAll()
    .then(([rows, fieldData]) => {
      res.render('actions', {
        actions: rows,
        lastAction: req.session.lastAction || '',
        isLoggedIn: req.session.isLoggedIn,
        nombre: req.session.nombre || '',
        privileges: req.session.privileges || [],
      });
    })
    .catch((err) => {
      console.log(err);
    });
};