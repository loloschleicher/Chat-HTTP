var express = require("express");
var api = express.Router();

const salaController = require("../controllers/salaController");

api.get("/salas", salaController.salasObtener);

api.post("/salas", salaController.salasCrear);

module.exports = api;