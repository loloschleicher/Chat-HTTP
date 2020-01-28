var db = require("./connectionDB");

const mensajesObtener = "select * from mensajes m inner join sesiones s on m.idSesion = s.idSesion where s.nombreSala = ";
const mensajesCrear = "CALL MensajesCrear";


//create class
var Mensajes = {

    mensajesCrear: mensaje => {
        return new Promise((resolve, reject) => {
          db.query(
            `${mensajesCrear}('${mensaje.texto}', '${mensaje.nick}', '${mensaje.nombreSala}')`,
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

      mensajesObtener: nombreSala => {
        return new Promise((resolve, reject) => {
          db.query(
            `${mensajesObtener}'${nombreSala}' order by m.idMensaje asc`,
            (err, res) => {
              if (err) {
                reject(err);
              } else {
                resolve(res);
              }
            }
          );
        });
      }

};
module.exports = Mensajes;