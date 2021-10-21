var banderaNombre = false;
var banderaCheck = false;
var banderaPrecio = false;
var banderaPiezas = false;

var listaErrores = [];


function validacionDeProducto(nombre, chica, mediana, grande, extraGrande, precio, cantidadPiezas) {
  let cumpleNombre = /^[A-Za-z\s]+$/g;
  let cumplePrecio = /^[0-9.]+$/;
  let cumplePiezas = /^[0-9]+$/;


  if(listaErrores.length > 0){
      listaErrores = [];
  }else{
    document.getElementById("alert").innerHTML=" ";
    document.getElementById("alert").hidden=false;
    document.getElementById("alert").innerHTML = "Bikini registrado con exito!";
    $('#alert').fadeIn();     
    setTimeout(function() {
      $('#alert').fadeOut();           
    },4000);
  }

  if (cumpleNombre.test(nombre)) {
    banderaNombre = true;
  } else {
    //  alert("Por favor ingrese un nombre válido");
    listaErrores.push("Nombre del producto");
  }
    
  if (chica == true || mediana == true || grande == true || extraGrande == true) {
    banderaCheck = true;
  } else {
    // alert("Por favor seleccione una talla");
    listaErrores.push("No se selecciona ninguna talla");
  }

  if (cumplePrecio.test(precio)) {
    banderaPrecio = true;
  } else {
    // alert("Por favor ingrese un precio válido");
    listaErrores.push("El precio no es válido");
  }

  if (cumplePiezas.test(cantidadPiezas)) {
    banderaPiezas = true;
  } else {
    // alert("Por favor ingrese un número de piezas válido");
    listaErrores.push("La cantidad de piezas no es valida");
  }

  let archivo = document.getElementById("imagenProducto").value;
  // Obtener extensión del archivo
  let extension = archivo.substring(archivo.lastIndexOf("."), archivo.length);
  // Si la extensión obtenida no está incluida en la lista de valores
  // del atributo "accept", mostrar un error.
  if (document.getElementById("imagenProducto").getAttribute("accept").split(",").indexOf(extension) < 0) {
    // alert("Archivo inválido. No se permite la extensión " + extension);
    listaErrores.push("La extensión de la imagen no es valida");
  }

  return listaErrores;

  // if (
  //   banderaNombre == false ||
  //   banderaCheck == false ||
  //   banderaPrecio == false ||
  //   banderaPiezas == false
  // ) {
  //   return false;
  //   //no se puede agregar al local storage
  // } else {
  //   return true;
  //   //si retorna true se puede agregar al local storage
  // }
}

function ejecutaAlerta(lista) { 

  if(lista.length > 0){
    // for (let index = 0; index < lista.length; index++) {
    //   lista[index].shift();
    // }
    document.getElementById("alert").innerHTML=" ";
    document.getElementById("alert").hidden=false;
    document.getElementById("alert").innerHTML = "Errores encontrados: <br/>";
    for (let index = 0; index < lista.length; index++) {
      document.getElementById("alert").innerHTML += "<br/>" + " - " + lista[index];
    }
    $('#alert').fadeIn();     
    setTimeout(function() {
      $('#alert').fadeOut();           
    },4000);
  }  else{
  //
  }

}



// funciones para tabla de productos
// se modifico: se creo una class producto, creo funcion anadirproducto,
class producto{
  constructor(){
  this.nombre
  this.imagenlink
  this.precio
  this.categoria
  this.cantidad
  this.tallaChica
  this.tallaMediana
  this.tallaGrande
  this.tallaXgrande
  }
}

//selecionar el tag table para poderlo modificar
let tabla = document.getElementsByClassName("tablaProductos")[0]

function anadirProducto(){
  //primero validar la informacion
  let nuevoProducto = new producto

  //agregar la informacion del producto al objeto
  nuevoProducto.nombre = document.getElementById('nombreProducto').value
  nuevoProducto.imagenlink = document.getElementById("imagenProducto").value
  nuevoProducto.precio = document.getElementById('precioProducto').value
  nuevoProducto.categoria = document.getElementById("categoriaProducto").value
  nuevoProducto.cantidad = document.getElementById('cantidadPiezas').value
  nuevoProducto.tallaChica = document.getElementById('tallaChica').checked
  nuevoProducto.tallaMediana = document.getElementById('tallaMediana').checked
  nuevoProducto.tallaGrande = document.getElementById('tallaGrande').checked
  nuevoProducto.tallaXgrande = document.getElementById('tallaExtraGrande').checked

  let linea = document.createElement('tr')
  tabla.append(linea)

  //crear las columnas de la linea con los datos
  let columnaNombre = document.createElement('td')
  let nombre = document.createTextNode(nuevoProducto.nombre)
  columnaNombre.appendChild(nombre)

  //imagen, ver despues

  let columnaPrecio = document.createElement('td')
  let precio = document.createTextNode(nuevoProducto.precio)
  columnaPrecio.appendChild(precio)

  let columnaCategoria = document.createElement('td')
  let categoria = document.createTextNode(nuevoProducto.categoria)
  columnaCategoria.appendChild(categoria)

  let columnaCantidad = document.createElement('td')
  let cantidad = document.createTextNode(nuevoProducto.cantidad)
  columnaCantidad.appendChild(cantidad)

  let columnaTallas = document.createElement('td')
  let tallas = document.createTextNode(anadirTallas(nuevoProducto))
  columnaTallas.appendChild(tallas)
  
  //añadir las columnas a la linea que creamos en la tabla
  let index = (tabla.getElementsByTagName('tr')).length
  let ultimaLinea = tabla.getElementsByTagName('tr')[index-1]
  ultimaLinea.append(columnaNombre) //nombre tipo tallas precio cantidad
  ultimaLinea.append(columnaCategoria)
  ultimaLinea.append(columnaTallas)
  ultimaLinea.append(columnaPrecio)
  ultimaLinea.append(columnaCantidad)
  
  document.getElementById('formularioBiki').reset()
  console.log(nuevoProducto.nombre, nuevoProducto.imagenlink, nuevoProducto.precio, nuevoProducto.categoria, nuevoProducto.cantidad, nuevoProducto.tallaChica, nuevoProducto.tallaGrande, nuevoProducto.tallaMediana, nuevoProducto.tallaXgrande)

}

function anadirTallas(objetoProducto){
  let tallas = ""

  if(objetoProducto.tallaChica){
    tallas += "Ch "
  }
  if(objetoProducto.tallaMediana){
    tallas += "M "
  }
  if(objetoProducto.tallaGrande){
    tallas += "G "
  }
  if(objetoProducto.tallaXgrande){
    tallas += "Xg "
  }

  return tallas
}

// console.log(document.getElementById('alert'))
