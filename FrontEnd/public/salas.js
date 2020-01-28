$(document).ready(function() { 
    $("#tituloSala").append(" " + sessionStorage.getItem("sala"));

    $("#cerrarSesion").click(function(e){       
      cerrarSesiones();
      sessionStorage.clear();
      });

      $("#enviarSms").click(function(e){ 
        //  e.preventDefault();      
          crearMensajes();
          obtenerMensajes().then((mensajes) => {
      mensajes.forEach(element => {
       $("#sala").append('<div>' + element.texto + '<p>' + element.fechaHora + '</p>' + '</div>')
       });

      });
      });

      obtenerMensajes().then((mensajes) => {
      mensajes.forEach(element => {
       $("#sala").append('<div style="background-color: gray; color: white"> <img style="border-radius: 50%;width: 40px; heigth:40px" src="http://localhost:3000/anonimo.png">' + '<p>' + element.nick + ' dice:</p>' + '<p>' + element.texto + '</p>'  + '<p>' + element.fechaHora + '</p>' + '</div>')
       });

      });

  });

  // crear sesiones en la base de datos
function cerrarSesiones(){
console.log(JSON.stringify({"nombre": sessionStorage.getItem("sala"), "nick": sessionStorage.getItem("nick")}))
let url = 'http://localhost:3001/api/sesiones/cerrar';
return new Promise((resolve, reject) => {
//find the user to the api users
fetch(url,{
method: 'POST',
body: JSON.stringify({"nombre": sessionStorage.getItem("sala"), "nick": sessionStorage.getItem("nick")}),
headers:{
  'Content-Type': 'application/json'
}
})
.then((response) => response.json())
.then((responseJson) => {

console.log(responseJson)
resolve(responseJson);
})
.catch((error) => {
reject(error);
});
});
}

function crearMensajes(){
console.log(JSON.stringify({"texto": $("#sms").val(), "nick": sessionStorage.getItem("nick"), "nombreSala": sessionStorage.getItem("sala")}))
let url = 'http://localhost:3001/api/mensajes/crear';
return new Promise((resolve, reject) => {
//find the user to the api users
fetch(url,{
method: 'POST',
body: JSON.stringify({"texto": $("#sms").val(), "nick": sessionStorage.getItem("nick"), "nombreSala": sessionStorage.getItem("sala")}),
headers:{
  'Content-Type': 'application/json'
}
})
.then((response) => response.json())
.then((responseJson) => {

console.log(responseJson)
resolve(responseJson);
})
.catch((error) => {
reject(error);
});
});
}

function obtenerMensajes(){

let nombreSala = sessionStorage.getItem("sala").replace(" ", "+");

let url = `http://localhost:3001/api/mensajes/obtener/${nombreSala}`;

return new Promise((resolve, reject) => {
//find the user to the api users
fetch(url,{
method: 'GET',
headers:{
  'Content-Type': 'application/json'
}
})
.then((response) => response.json())
.then((responseJson) => {

resolve(responseJson);
})
.catch((error) => {
reject(error);
});
});
}