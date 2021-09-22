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

return true;

}










        




