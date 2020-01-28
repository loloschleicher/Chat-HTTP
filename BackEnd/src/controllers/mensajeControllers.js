//const drugModel = require('../models/drugModel');
const mensajesRepository = require("../repositories/mensajeRepository");
const mensajesModel = require("../models/mensajeModels");

module.exports = {
 
  mensajesCrear: function(req, res) {
    let mensaje = mensajesModel.mensajesCrear(
        req.body.texto, req.body.nick, req.body.nombreSala
    );
    return mensajesRepository
      .mensajesCrear(mensaje)
      .then(data => {
        res.send(data);
      })
      .catch(error => {
        res.send(error);
      });
  },

  mensajesObtener: function(req, res) {
    let mensajes = [];
    let nombreSala = req.params.nombreSala.replace("+", " ");
    return mensajesRepository
      .mensajesObtener(nombreSala)
      .then(data => {
          data.forEach(element => {
              mensajes.push(mensajesModel.mensajesObtener(element.texto, element.fechaHora, element.nickUsuario))
          });
        res.send(mensajes);
      })
      .catch(error => {
        res.send(error);
      });
  },

};