var express = require("express");
var api = express.Router();

const usuarioController = require("../controllers/usuarioController");

api.post("/usuarios", usuarioController.crearUsuario);

module.exports = api;
