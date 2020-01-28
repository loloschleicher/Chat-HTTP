//const drugModel = require('../models/drugModel');
const usuarioRepository = require("../repositories/usuarioRepository");
const usuarioModel = require("../models/usuarioModel");


module.exports = {
  crearUsuario: function(req, res) {
    
    let usuario = usuarioModel.UsuarioModelo(
        req.body.pnick,
    );
    return usuarioRepository
      .crear(usuario)
      .then(data => {
        res.send(data);
      })
      .catch(error => {
        res.send(error);
      });
  }
  
};
