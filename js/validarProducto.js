var banderaNombre = false;
var banderaCheck = false;
var banderaPrecio = false;
var banderaPiezas = false;

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

  if (cumpleNombre.test(nombre)) {
    banderaNombre = true;
  } else {
    alert("Por favor ingrese un nombre válido");
  }

  if (
    chica == true ||
    mediana == true ||
    grande == true ||
    extraGrande == true
  ) {
    banderaCheck = true;
  } else {
    alert("Por favor seleccione una talla");
  }

  if (cumplePrecio.test(precio)) {
    banderaPrecio = true;
  } else {
    alert("Por favor ingrese un precio válido");
  }

  if (cumplePiezas.test(cantidadPiezas)) {
    banderaPiezas = true;
  } else {
    alert("Por favor ingrese un número de piezas válido");
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
    alert("Archivo inválido. No se permite la extensión " + extension);
  }

  if (
    banderaNombre == false ||
    banderaCheck == false ||
    banderaPrecio == false ||
    banderaPiezas == false
  ) {
    return false;
    //no se puede agregar al local storage
  } else {
    return true;
    //si retorna true se puede agregar al local storage
  }
}
