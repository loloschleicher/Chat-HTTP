$(document).ready(function() { 
    $("#crearSala").click(function(e){ 
      e.preventDefault()
        sessionStorage.setItem("nick", $("#idNick").val());
        sessionStorage.setItem("sala", $("#ingresarNombre").val());
        if($("#idNick").val() != "" && $("#ingresarNombre").val() != ""){
          crearUsuario();
          setTimeout(() => {
          
            crearSalas();
          }, 100);
          setTimeout(() => {
            
            crearSesionesCrearSala();
          }, 200);
        
        setTimeout(() => {
          $(location).attr('href',"http://localhost:3000/salas");

        }, 600);
        } else{
          alert("Faltan rellenar campos")
        }
       
    });

    traerSalas().then((salas) => {
      salas.forEach(element => {
        $("#salasSelect").append('<option value=' + element.nombre + '>' + element.nombre + '</option>')
      });
     
    });

    $("#ingresarSala").click(function(e){ 
      e.preventDefault()  
        sessionStorage.setItem("nick", $("#idNick").val());
        sessionStorage.setItem("sala", $('#ingresarSala').val($("#salasSelect option:selected").text())[0].value);
        if($("#idNick").val() != "" && $('#ingresarSala').val($("#salasSelect option:selected").text())[0].value != ""){
          crearUsuario(); 
          setTimeout(() => {
            crearSesionesIngresarSala();           
          }, 200);   
          setTimeout(() => {
          $(location).attr('href',"http://localhost:3000/salas");

        }, 600);            } else{
          alert("Faltan rellenar campos")
        }
    });
  });

  // enviar a la api los datos del usuario
function  crearUsuario(){

let url = 'http://localhost:3001/api/usuarios';

return new Promise((resolve, reject) => {
    //find the user to the api users
    fetch(url,{
        method: 'POST',
        body: JSON.stringify({"pnick": $("#idNick").val()}),
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
 
// traer los nombres de las salas creadas
 function traerSalas(){
  let url = 'http://localhost:3001/api/salas';

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
    
        console.log(responseJson)
        resolve(responseJson);
    })
    .catch((error) => {
        reject(error);
    });
  });
  }

  // crear salas en la base de datos
  function crearSalas(){
  
  let url = 'http://localhost:3001/api/salas';
  return new Promise((resolve, reject) => {
  //find the user to the api users
  fetch(url,{
    method: 'POST',
    body: JSON.stringify({"nombre": $("#ingresarNombre").val(), "nick": $("#idNick").val()}),
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

// crear sesiones en la base de datos
function crearSesionesCrearSala(){
    console.log(JSON.stringify({"nombre": $("#ingresarNombre").val(), "nick": $("#idNick").val()}))
  let url = 'http://localhost:3001/api/sesiones/iniciar';
  return new Promise((resolve, reject) => {
  //find the user to the api users
  fetch(url,{
    method: 'POST',
    body: JSON.stringify({"nombre": $("#ingresarNombre").val(), "nick": $("#idNick").val()}),
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

// crear sesiones en la base de datos
function crearSesionesIngresarSala(){
   
  let url = 'http://localhost:3001/api/sesiones/iniciar';
  return new Promise((resolve, reject) => {
  //find the user to the api users
  fetch(url,{
    method: 'POST',
    body: JSON.stringify({"nombre": $('#ingresarSala').val($("#salasSelect option:selected").text())[0].value, "nick": $("#idNick").val()}),
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
