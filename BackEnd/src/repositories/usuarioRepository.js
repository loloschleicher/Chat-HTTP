var db = require("./connectionDB");
const crearUsuario = "CALL insertarUsuario";

//create class
var Usuario = {
    //function to query all items
    crear: usuario => {
      return new Promise((resolve, reject) => {
        db.query(
          `${crearUsuario}('${usuario.pnick}')`,
          (err, res) => {
            if (err) {
              reject(err);
            } else {
              resolve(res);
            }
          }
        );
      });
    },
};
module.exports = Usuario;