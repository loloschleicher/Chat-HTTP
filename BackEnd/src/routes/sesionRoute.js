var express = require("express");
var api = express.Router();

const sesionController = require("../controllers/sesionController");


api.post("/sesiones/iniciar", sesionController.sesionesCrear);
api.post("/sesiones/cerrar", sesionController.sesionesCerrar);


module.exports = api;