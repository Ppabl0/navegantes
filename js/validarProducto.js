var banderaNombre = false;
var banderaCheck = false;
var banderaPrecio = false;
var banderaPiezas = false;

var listaErrores = [];


function validacionDeProducto(
  nombre,
  chica,
  mediana,
  grande,
  extraGrande,
  precio,
  cantidadPiezas
) {
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
    
  if (
    chica == true ||
    mediana == true ||
    grande == true ||
    extraGrande == true
  ) {
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
  if (
    document
      .getElementById("imagenProducto")
      .getAttribute("accept")
      .split(",")
      .indexOf(extension) < 0
  ) {
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


