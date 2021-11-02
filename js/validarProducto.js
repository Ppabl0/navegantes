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
  precio,
  descripcion
) {
  let cumpleNombre = /^[A-Za-z\s]+$/;
  let cumplePrecio = /^[0-9.]+$/;
  let cumpleDescripcion = /^[A-Za-z\s]+$/;

  if (listaErrores.length > 0) {
    listaErrores = [];
  } else {
    document.getElementById("alert").innerHTML = " ";
    document.getElementById("alert").hidden = false;
    document.getElementById("alert").innerHTML = "Bikini registrado con exito!";
    $("#alert").fadeIn();
    setTimeout(function () {
      $("#alert").fadeOut();
    }, 4000);
  }

  if (cumpleNombre.test(nombre)) {
    banderaNombre = true;
  } else {
    //  alert("Por favor ingrese un nombre válido");
    listaErrores.push("Nombre del producto");
  }

  if ((chica>0) || (mediana > 0) || (grande > 0)) {
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

  if (cumpleDescripcion.test(descripcion)) {
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
  if (lista.length > 0) {
    // for (let index = 0; index < lista.length; index++) {
    //   lista[index].shift();
    // }
    document.getElementById("alert").innerHTML = " ";
    document.getElementById("alert").hidden = false;
    document.getElementById("alert").innerHTML = "Errores encontrados: <br/>";
    for (let index = 0; index < lista.length; index++) {
      document.getElementById("alert").innerHTML +=
        "<br/>" + " - " + lista[index];
    }
    $("#alert").fadeIn();
    setTimeout(function () {
      $("#alert").fadeOut();
    }, 4000);
  } else {
    //
  }
}

// funciones para tabla de productos
// se modifico: se creo una class producto, creo funcion anadirproducto,
class Producto {
  constructor() {
    this.nombre_producto; //= nombre_producto;
    this.precio; // = precio;
    this.descripcion; //= descripcion;
    this.id_categoria; //= id_categoria;
    this.descripcion; //= descripcion;

    // this.sizeCH=sizeCH;
    // this.sizeM=sizeM;
    // this.sizeG=sizeG;
    // this.sizeXG=sizeXG;
  }
}

class Tallas {
  constructor() {
    this.talla_ch;
    this.talla_m;
    this.talla_g;
  }
}

class ImagenProducto {
  constructor() {
    this.imagen_producto;
  }
}

//selecionar el tag table para poderlo modificar
let tabla = document.getElementsByClassName("tablaProductos")[0];
let imagen = localStorage.get('imagen',hola);
console.log(hola);

function anadirProducto() {
  //primero validar la informacion
  var id_producto;
  var producto = new Producto();
  var tallas = new Tallas();
  let imagenProducto = new ImagenProducto();

  //agregar la informacion a objetos producto,tallas e imagen
  producto.nombre_producto = document.getElementById("nombreProducto").value;
  imagenProducto.imagen_producto =
    document.getElementById("imagenProducto").value;
  producto.precio = Number(document.getElementById("precioProducto").value);
  producto.id_categoria = Number(
    document.getElementById("categoriaProducto").value
  );

  let imagen = localStorage.getItem("ejemplo");
  producto.imagen = imagen;

  producto.descripcion = document.getElementById("descripcion").value;
  


  tallas.talla_ch = Number(document.getElementById("tallaChica").value);
  tallas.talla_m = Number(document.getElementById("tallaMediana").value);
  tallas.talla_g = Number(document.getElementById("tallaGrande").value);

  //Realiza el post a la tabla de producto
  var productoJson = JSON.stringify(producto);
  console.log(productoJson);
  //const url = new URL("http://localhost:8080/productos/add");
  fetch("http://localhost:8080/productos/add", {
    //Genera el producto en la base de datos (nombre_producto,categoria,descripcion y precio)
    method: "POST",
    body: productoJson,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      tallas.id_producto = data.id_producto;
      console.log(tallas.id_producto);
      var tallasJson = JSON.stringify(tallas);
      //const url = new URL("http://localhost:8080/tallas/add");
      fetch("http://localhost:8080/tallas/add", {
        //Genera el producto en la base de datos (nombre_producto,categoria,descripcion y precio)
        method: "POST",
        body: tallasJson,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((talla) => {
          console.log("Tallas",talla);
          location.reload(true);
        })
        .catch((error) => {
          console.error("error", error);
        });
    })
    .catch((error) => {
      console.error("error", error);
    });

  //Realiza el post a la tabla de tallas

  //document.getElementById("formularioBiki").reset();
  // console.log(nuevoProducto.nombre, nuevoProducto.imagenlink, nuevoProducto.precio, nuevoProducto.categoria, nuevoProducto.cantidad, nuevoProducto.tallaChica, nuevoProducto.tallaGrande, nuevoProducto.tallaMediana, nuevoProducto.tallaXgrande)
}

function eliminarProducto(id) {
  console.log("se elimino producto")
  fetch(`http://localhost:8080/productos/producto/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json)
    .then((res) => {
      console.log("El producto se ha eliminado");
    })
    .catch((error) => {
      console.error("error", error);
    });

  fetch(`http://localhost:8080/tallas/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json)
    .then((res) => {
      console.log("El producto se ha eliminado");
      location.reload(true)
    })
    .catch((error) => {
      console.error("error", error);
    });
}


function modificarProducto(id) {

  fetch(`http://localhost:8080/productos/producto/${id}`, {
    method: "GET",
  })
    //.then((res) => res.json)
    .then((res) => res.json())
    .then((res) => {
      console.log("Producto con id: ",id);
      console.log(res.id_producto);
      document.getElementById("nombreProducto").value = res.nombre_producto;
     
      document.getElementById("precioProducto").value = res.precio;
      document.getElementById("descripcion").value = res.descripcion;
      
      if(res.id_categoria == 1){
        document.getElementById("categoriaProducto").value = 1;}
        else if(res.id_categoria == 2){
        document.getElementById("categoriaProducto").value = 2;}
        else if(res.id_categoria == 3){
        document.getElementById("categoriaProducto").value = 3;}
        else if(res.id_categoria == 4){
        document.getElementById("categoriaProducto").value = 4;}
        else if(res.id_categoria == 5){
        document.getElementById("categoriaProducto").value = 5;}
        else{      
        document.getElementById("categoriaProducto").value = 6;}
    })
    .catch((error) => {
      console.error("error", error);
    });

    fetch(`http://localhost:8080/tallas/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        document.getElementById("tallaChica").value = res.talla_ch;
        document.getElementById("tallaMediana").value = res.talla_m;
        document.getElementById("tallaGrande").value = res.talla_g;
      })
      .catch((error) => {
        console.error("error", error);
      });

      document.getElementById("botonMod").hidden = false;
      document.getElementById("botonReg").hidden = true;
      //window.scrollBy(0, -window.innerHeight);
      window.scrollBy(0, -3000);

     
      document.getElementById("oculto").value=id;


}

function actualizarUp(){
  let tallas = new Tallas();
  let imagenProducto = new ImagenProducto();
  var id = document.getElementById("oculto").value;
  let producto = new Producto();
  producto.id_producto = id;
  producto.nombre_producto = document.getElementById("nombreProducto").value;
  imagenProducto.imagen_producto =
    document.getElementById("imagenProducto").value;
  producto.precio = Number(document.getElementById("precioProducto").value);
  producto.id_categoria = Number(
    document.getElementById("categoriaProducto").value
  );
  producto.descripcion = document.getElementById("descripcion").value;
  tallas.id_producto = id;
  tallas.talla_ch = Number(document.getElementById("tallaChica").value);
  tallas.talla_m = Number(document.getElementById("tallaMediana").value);
  tallas.talla_g = Number(document.getElementById("tallaGrande").value);

  //Realiza el post a la tabla de producto
  let productoJson = JSON.stringify(producto);
  let tallasJson = JSON.stringify(tallas);

 

  console.log(productoJson);
  console.log(tallasJson);
 
 
  
  fetch(`http://localhost:8080/productos/update/${id}`, {
    method: "PUT", 
    body: productoJson,
    //mode:"no-cors",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
  })
    .then((res) => res.json())

    .catch((error2) => {
      console.error("error", error2);
    });

    fetch(`http://localhost:8080/tallas/update/${id}`, {
      //Genera el producto en la base de datos (nombre_producto,categoria,descripcion y precio)
      method: "PUT",
      body: tallasJson,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
    })
      .then((res) => res.json())
      .catch((error) => {
        console.error("error", error);
      });


      alert("¡Se ha actualizado el registro con éxito!");
      location.reload();
}




function tablaRegistros() {
  let tabla = document.getElementsByClassName("tablaProductos")[0];

  let products_data;
  var producto;
  var tallas;
  let columnaNombre = document.createElement("td");

  fetch("http://localhost:8080/productos/all")
    .then((productoLista) => productoLista.json())
    .then((productoLista) => {
      for (let i = 0; i < productoLista.length; i++) {
        let tabla = document.getElementsByClassName("tablaProductos")[0];

        console.log(productoLista[i]);
        let linea = document.createElement("tr");
        tabla.append(linea);
        producto = productoLista[i];
        console.log("Registros");

        let columnaID = document.createElement("td");
        let id = document.createTextNode(producto.id_producto);
        columnaID.appendChild(id);

        let columnaNombre = document.createElement("td");
        let nombre = document.createTextNode(producto.nombre_producto);
        columnaNombre.appendChild(nombre);

        let columnaTipo = document.createElement("td");
        let tipo = document.createTextNode(producto.id_categoria);
        columnaTipo.appendChild(tipo);

        let columnaDescripcion = document.createElement("td");
        let descripcion = document.createTextNode(producto.descripcion);
        columnaDescripcion.appendChild(descripcion);

        let columnaPrecio = document.createElement("td");
        let precio = document.createTextNode(producto.precio);
        columnaPrecio.appendChild(precio);


        let columnaCategoria = document.createElement("td");
        let categoria = document.createTextNode(producto.id_categoria);
        columnaCategoria.appendChild(categoria);

        let columnaTallaCh = document.createElement("td");
        let columnaTallaM = document.createElement("td");
        let columnaTallaG = document.createElement("td");
        //debugger

        fetch(`http://localhost:8080/tallas/${productoLista[i].id_producto}`) //Llamado de la tabla tallas
          .then((tallas_fetch) => tallas_fetch.json())
          //.then((tallas_fetch) => {debugger; console.log("Tallas",tallas_fetch.talla_ch)})
          .then((tallas_fetch) => {
            var talla_ch = document.createTextNode(tallas_fetch.talla_ch);
            columnaTallaCh.appendChild(talla_ch);
            var talla_m = document.createTextNode(tallas_fetch.talla_m);
            columnaTallaM.appendChild(talla_m);
            var talla_g = document.createTextNode(tallas_fetch.talla_g);
            columnaTallaG.appendChild(talla_g);
          })
          .catch((error) => {
            console.error("error", error);
          });

        //debugger Boton eliminar producto

        let columnaEliminar = document.createElement("td");
        let btnEliminar = document.createElement("button");
        btnEliminar.setAttribute("value",producto.id_producto);
        btnEliminar.setAttribute("class",'btn btn-danger');
        let eliminar_p = document.createTextNode("Eliminar");
        btnEliminar.appendChild(eliminar_p)
        btnEliminar.setAttribute("onclick","eliminarProducto(this.value)")
        columnaEliminar.append(btnEliminar);

        //debugger Boton modificar producto
        let columnaModificar = document.createElement("td");
        let btnModificar = document.createElement("button");
        btnModificar.setAttribute("value",producto.id_producto);
        btnModificar.setAttribute("class",'btn btn-warning');
        let modificar_p = document.createTextNode("Modificar");
        btnModificar.appendChild(modificar_p)
        btnModificar.setAttribute("onclick","modificarProducto(this.value)")
        columnaModificar.append(btnModificar);

        //añadir las columnas a la linea que creamos en la tabla
        let index = tabla.getElementsByTagName("tr").length;
        let ultimaLinea = tabla.getElementsByTagName("tr")[index - 1];
        ultimaLinea.append(columnaID);
        ultimaLinea.append(columnaNombre); //nombre tipo tallas precio cantidad
        ultimaLinea.append(columnaDescripcion);
        //ultimaLinea.append(columnaTallas);
        ultimaLinea.append(columnaPrecio);
        //debugger
        ultimaLinea.append(columnaTallaCh);
        ultimaLinea.append(columnaTallaM);
        ultimaLinea.append(columnaTallaG);

        ultimaLinea.append(columnaTipo);
        // ultimaLinea.innerHTML += `
        // <td>
        // <button name=${producto.id_producto} value=${producto.id_producto} onclick=eliminarProducto(this.value) >
        // Eliminar
        // </button>
        // </td>`
        ultimaLinea.append(columnaEliminar);
        ultimaLinea.append(columnaModificar);
        //ultimaLinea.append(columnaCantidad);
      }
    })
    .then((loading = false))
    .catch((error) => console.log(error));
}
//crear las columnas de la linea con los datos

//imagen, ver despues

///////////////////
function anadirTallas(objetoProducto) {
  let tallas = "";

  if (objetoProducto.tallaChica) {
    tallas += "Ch ";
  }
  if (objetoProducto.tallaMediana) {
    tallas += "M ";
  }
  if (objetoProducto.tallaGrande) {
    tallas += "G ";
  }
  if (objetoProducto.tallaXgrande) {
    tallas += "Xg ";
  }

  return tallas;
}

// console.log(document.getElementById('alert'))
