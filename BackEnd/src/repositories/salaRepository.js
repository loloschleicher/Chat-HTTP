var db = require("./connectionDB");
const salasObtener = "select * from salas";
const salasCrear = "CALL SalasCrear";
//create class
var Salas = {
    //function to query all items
    salaObtener: () => {
      return new Promise((resolve, reject) => {
        db.query(
            salasObtener,
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

    salaCrear: sala => {
        return new Promise((resolve, reject) => {
          db.query(
            `${salasCrear}('${sala.nombre}', '${sala.nick}')`,
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
module.exports = Salas;