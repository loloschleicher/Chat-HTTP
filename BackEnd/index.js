var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// import routes

const usuarioRoute = require("./src/routes/usuarioRoute");
const salasRoute = require("./src/routes/salaRoute");
const sesionesRoute = require("./src/routes/sesionRoute");
const mensajesRoute = require("./src/routes/mensajeRoutes");



app.use("/api", usuarioRoute);
app.use("/api", salasRoute);
app.use("/api", sesionesRoute);
app.use("/api", mensajesRoute);



//config ports
var port = Number(process.env.PORT || 3001);

app.listen(port, function() {
  console.log("Running in port", port);
});

