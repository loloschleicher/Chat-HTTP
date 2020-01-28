//const drugModel = require('../models/drugModel');
const sesionesRepository = require("../repositories/sesionRepository");
const sesionesModel = require("../models/sesionModel");

module.exports = {
 
  sesionesCrear: function(req, res) {
    let sesion = sesionesModel.crearSesionesModelo(
        req.body.nombre, req.body.nick
    );
    return sesionesRepository
      .sesionesCrear(sesion)
      .then(data => {
        res.send(data);
      })
      .catch(error => {
        res.send(error);
      });
  },

  sesionesCerrar: function(req, res) {
    let sesion = sesionesModel.crearSesionesModelo(
        req.body.nombre, req.body.nick
    );
    return sesionesRepository
      .sesionesCerrar(sesion)
      .then(data => {
        res.send(data);
      })
      .catch(error => {
        res.send(error);
      });
  }
};