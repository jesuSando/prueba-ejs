const userModel = require('../models/user.model.js');

exports.index = (req, res) => {
  const usuarios = userModel.getAll();
  res.render('users/index', { usuarios });
};

exports.show = (req, res) => {
  const usuario = userModel.getById(req.params.id);
  if (!usuario) {
    return res.status(404).send('Usuario no encontrado');
  }
  res.render('users/show', { usuario });
};
