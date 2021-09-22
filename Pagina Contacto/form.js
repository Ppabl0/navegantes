function validarFormulario(){
    var nombreForm = document.getElementById('nombre').value;
var nombre = /^[a-zA-Z]+$/;
if(!nombre.test(nombreForm)) {
alert('Ingresa solo letras en tu nombre');
return;
}

//------validar correo

var correoForm = document.getElementById('correo').value;
var correoReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

if(!correoReg.test(correoForm)) {
alert('Ingresa un correo valido');
return;
}

//---------------validar numero

var telefonoForm = document.getElementById('telefono').value;
var telefonoReg = /^[0-9]+$/;


if(!telefonoReg.test(telefonoForm)) {
alert('Ingresa solo números en el telefono');
return;
}


//  obtener los datos ingresados

let nombreCliente = document.getElementById("forma").elements[0].value
let correo = document.getElementById("forma").elements[1].value
let telefono = document.getElementById("forma").elements[2].value
let asunto = document.getElementById("forma").elements[3].value
let mensaje = document.getElementById("forma").elements[4].value

console.log(nombreCliente, correo, telefono, asunto, mensaje)

// se despejan/borran los campos que ingreso el cliente
document.getElementById("forma").reset();
}










        




