//const drugModel = require('../models/drugModel');
const salaRepository = require("../repositories/salaRepository");
const salaModel = require("../models/salaModel");

module.exports = {
  salasObtener: function(req, res) {
    let salasArray = [];
   
    return salaRepository
      .salaObtener()
      .then(data => {
        data.forEach(element => {
            salasArray.push(salaModel.salasModelo(element.nombre))
        });

        res.send(salasArray);
      })
      .catch(error => {
        res.send(error);
      });
  },
  
  salasCrear: function(req, res) {
    let salaCrear = salaModel.crearSalasModelo(
        req.body.nombre, req.body.nick
    );
    return salaRepository
      .salaCrear(salaCrear)
      .then(data => {
        res.send(data);
      })
      .catch(error => {
        res.send(error);
      });
  }
};