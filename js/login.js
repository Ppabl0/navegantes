// creacion de clase usuario para guardar registro
class Usuario {
  constructor (nombre, correo, telefono, contrasena){
    this.nombre = nombre;
    this.correo = correo;
    this.telefono = telefono;
    this.contrasena= contrasena;
  }
}

const contenedor = document.getElementById("contenedor");

//reemplazar el formulario de iniciar sesion con el de registrase
function anadirRegistro() {
  const itemHTML = `<div class="row justify-content-md-center">
  <div class="col-lg-5 col-md-12 col-12">
    <div class="container">
    <form id="forma" class='contacto'>
    <div><label>Tu Nombre:</label><input id="nombre" type='text' value='' placeholder="Ejemplo: Hugo Lopez Chávez" required>
    </div>
    <div><label>Tu Email:</label><input id="correo" type='email' value='' placeholder="Ejemplo: alberto54@gmail.com" required>
    </div>
    <div><label>Telefono:</label><input id="telefono" type='text' value='' minlength="10" maxlength="10" placeholder="3331310863" required></div>
    <div><label>Contraseña (8 caracteres minimo):</label><input id="contra" type='password'  value='' minlength="8" placeholder="Al menos una mayúscula, un dígito y un símbolo." required></div>
    <div><label>Confirmar contraseña:</label><input id="contra2" type='password'  value='' placeholder="" required></div>
    <div><input class="btn" style="background-color: #f700cd; color:white;" type="button" onclick="validarFormulario()" value='Registrarme'></div>
    </form>
    </div>
  </div>
  </div>`;
  contenedor.innerHTML = '';
  contenedor.innerHTML += itemHTML;
}


function validarFormulario(){
  var nombreForm = document.getElementById('nombre').value;
  var nombre = /^[a-zA-Z-\s]+$/;

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
  
  if(telefonoForm.length != 10){
    alert('Número de telefono no valido, deben ser 10 digitos');
    return;
  }

  // validar contraseña, debe tener al menos 8 caracteres, 1 mayuscula, 1 caracter especial
  let contrasena = document.getElementById('contra').value
  let contrasena2 = document.getElementById('contra2').value

  if(!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(contrasena)){
    alert('La contraseña debe contener entre 8 y 16 caracteres, un dígito, una mayúscula y un símbolo.')
    return;
  }

  if(contrasena != contrasena2){
    alert('Las contraseñas no coinciden, debe ingresar la misma contraseña en los 2 campos')
    return;
  }

  //encriptar contraseña y guardar la contraseña encriptada en los datos del usuario
  let contraEncriptada = crypt.encrypt(contrasena);

  let usuarioNuevo = new Usuario(nombreForm, correoForm, telefonoForm, contraEncriptada);
  agregarUsuario(usuarioNuevo)

  return true;
}

//añadir el usuario y sus datos al local storage
function agregarUsuario(usuario){
  
  let nuevoUsuario = JSON.stringify(usuario)

  if(localStorage.getItem(usuario.correo) == null){
    localStorage.setItem(usuario.correo, nuevoUsuario)
    alert('Registro exitoso')
    location.reload()
  }else{
    alert('el usuario ya existe')
  }
}


function validarInicio(){
  //------validar correo
  let correo = document.getElementById('email').value
  var correoReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
  
  if(!correoReg.test(correo)) {
    alert('Ingresa un correo valido');
    return;
  }

  //validar que exista el usuario y su contraseña
  let contra = document.getElementById('password').value
  let registro = localStorage.getItem(correo)

  if(registro == null){
    alert('no se encontro ningun usuario con el correo: '+ correo)
  }else {
    let usuario = JSON.parse(registro)
    //desencriptar contraseña del usuario
    let desencriptada = crypt.decrypt(usuario.contrasena)
    if(desencriptada == contra){
      alert('Inicio de sesion existoso')
      document.getElementById('inicio').reset()
      window.location.replace("/html/PaginaPrincipal.html");
    }else {
      alert('La contraseña es incorrecta')
    }
    
  }
}

//declaracion de las funciones pa encriptar la contraseña
// (B) ENCRYPT & DECRYPT FUNCTIONS
var crypt = {
  // (B1) THE SECRET KEY
  secret : "CIPHERKEY",

  // (B2) ENCRYPT
  encrypt : function (clear) {
    var cipher = CryptoJS.AES.encrypt(clear, crypt.secret);
    cipher = cipher.toString();
    return cipher;
  },

  // (B3) DECRYPT
  decrypt : function (cipher) {
    var decipher = CryptoJS.AES.decrypt(cipher, crypt.secret);
    decipher = decipher.toString(CryptoJS.enc.Utf8);
    return decipher;
  }
}


