class Venta{
  constructor () {
    this.id_usuario=1;
    this.cantidad;
    this.venta_terminada;
    this.fecha;
}
}
class ProductoVenta{
  constructor () {
    this.id_venta;
    this.id_producto;
    this.cantidad;
    }
  }
function llamarUsuario(){
  var id;
  let correo = sessionStorage.getItem("User")
  const url = new URL("http://localhost:8080/users/all");
  token = sessionStorage.getItem("Token");
  let loading = true;
  fetch(url,{method:'GET'})//, headers:{'Authorization':token}
    .then((data) => data.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        console.log(data[i].correo)
        console.log(correo)
      if(data[i].correo==correo){
        console.log(data[i].id_usuario)
        data[i].id_usuario=id
        return  data[i].id_usuario
        debugger
      }}})
}

function agregarCarrito(id) {
  
  fetch(`http://localhost:8080/venta/venta_en_proceso`)
    .then((data) => data.json())
    .then((data) => {

      if(data==-1){
        console.log("no hay venta activa")//Como no hay venta activa se procede a crear una
        
        nueva_venta = new Venta();

        //nueva_venta.id_usuario=llamarUsuario()
        nueva_venta.id_usuario=1;
        nueva_venta.cantidad=1
        nueva_venta.venta_terminada=0
        nueva_venta.fecha="";
        ventaJson=JSON.stringify(nueva_venta)
        console.log(ventaJson)
  
        fetch("http://localhost:8080/venta/agregar", {method: "POST",body: ventaJson,headers: {
        "Content-Type": "application/json"}})
        .then((res) => res.json)
        .then((res) => {

          console.log("Se genero la venta",res);


          productoVenta = new ProductoVenta();
          productoVenta.id_venta=res.id_venta;
          productoVenta.id_producto=id;
          productoVenta.cantidad=1;
          productoVentaJson=JSON.stringify(productoVenta);

          console.log(productoVentaJson)
          fetch("http://localhost:8080/producto_venta/add", {method: "POST",body: productoVentaJson,   headers: {"Content-Type": "application/json"}})
          .then((data) => res.json)
          .then((data) => { alert("El producto se agrego al carrito")})
          .catch((error) => {console.error("error",error)})
        })
      }

      else{
  
        productoVenta = new ProductoVenta();
        productoVenta.id_venta=data;
        productoVenta.id_producto=id;
        productoVenta.cantidad=1;
        productoVenta.fecha=""
        productoVentaJson=JSON.stringify(productoVenta);

        console.log(productoVentaJson)
        fetch("http://localhost:8080/producto_venta/add", {method: "POST",body: productoVentaJson,   headers: {"Content-Type": "application/json"}})
        .then((data) => data.json)
        .then((data) => { alert("El producto se agrego al carrito")})
        .catch((error) => {console.error("error",error)})



      }
    })
    .catch((error),console.error("error",error))
}


  // document.getElementById('formularioBiki').reset()
  // console.log(nuevoProducto.nombre, nuevoProducto.imagenlink, nuevoProducto.precio, nuevoProducto.categoria, nuevoProducto.cantidad, nuevoProducto.tallaChica, nuevoProducto.tallaGrande, nuevoProducto.tallaMediana, nuevoProducto.tallaXgrande)
  

    
function unidadesVendidas() {}

function mostrarProducto(codigo) {
  fetch(`http://localhost:8080/productos/producto/${codigo}`)
    .then((producto_fetch) => producto_fetch.json())
    .then((producto_fetch) => {
      const itemsContainer = document.getElementById("listaBikinis");
      itemsContainer.innerHTML = "";
      const itemHTML = `
    <div class="card" style="padding: 30px;">
    <div class="row no-gutters">
      <aside class="col-md-6">
  <article class="gallery-wrap"> 
    <div class="img-big-wrap">
       <a href="#"><img src="${producto_fetch.imagen}"></a>
    </div> 	<!--img-big-wrap.// -->
  
    <!-- <div class="thumbs-wrap"> galeria miniatura
      <a href="#" class="item-thumb"> <img src="bootstrap-ecommerce-html/images/items/12-1.jpg"></a>
      <a href="#" class="item-thumb"> <img src="bootstrap-ecommerce-html/images/items/12-2.jpg"></a>
      <a href="#" class="item-thumb"> <img src="bootstrap-ecommerce-html/images/items/12.jpg"></a>
      <a href="#" class="item-thumb"> <img src="bootstrap-ecommerce-html/images/items/4.jpg"></a>
    </div> //-- thumbs-wrap.  -->
  </article> <!-- // -- gallery-wrap .end -->
      </aside>
      <main class="col-md-6 border-left">
  <article class="content-body">
  
  <h2 class="title">${producto_fetch.nombre_producto}</h2>
  
  <!-- <div class="rating-wrap my-3">
    <ul class="rating-stars">
      <li style="width:80%" class="stars-active">
        <img src="bootstrap-ecommerce-html/images/icons/stars-active.svg" alt="">
      </li>
      <li>
        <img src="bootstrap-ecommerce-html/images/icons/starts-disable.svg" alt="">
      </li>
    </ul>
    <small class="label-rating text-muted">132 reviews</small>
    <small class="label-rating text-success"> <i class="fa fa-clipboard-check"></i> 154 orders </small>
  </div> rating-wrap.// -->
  
  <div class="price"> 
    <var class="price h4">$${producto_fetch.precio}</var>  
  </div> 
  
  <p class="description">${producto_fetch.descripcion}</p>
  
  <dl class="row category">
    <dt class="col-sm-3">Categoria</dt>
    <dd class="col-sm-9">Bikini una pieza</dd>
  
    <dt class="col-sm-3">Color</dt>
    <dd class="col-sm-9">Cafe</dd>
  
  </dl>
  
  <hr>
    <div class="row" style="padding-left:15px;">
      <div class="form-group col-md flex-grow-0">
        <label>Cantidad</label>
        <div class="form-cantidad">
          <div class="">
            <button class="btn btn-cantidad btn-light" type="button" id="button-plus"> + </button>
          </div>
          <input type="text" class="cantidad" value="1">
          <div class="input-group-append">
            <button class="btn btn-cantidad btn-light" type="button" id="button-minus"> &minus; </button>
          </div>
        </div>
      </div> <!-- col.// -->
      <div class="form-group col-md">
          <label>Talla</label>
          <div class="mt-2">
            <label class="custom-control custom-radio custom-control-inline">
              <input type="radio" name="select_size" checked="" class="custom-control-input">
              <div class="custom-control-label">CH</div>
            </label>
  
            <label class="custom-control custom-radio custom-control-inline">
              <input type="radio" name="select_size" class="custom-control-input" style="background-color:#f700cd">
              <div class="custom-control-label">M</div>
            </label>
  
            <label class="custom-control custom-radio custom-control-inline">
              <input type="radio" name="select_size" class="custom-control-input">
              <div class="custom-control-label">G</div>
            </label>
  
          </div>
      </div> <!-- col.// -->
    </div> <!-- row.// -->
    <div style="padding-left: 15px;">
      <a href="#" class="btn btn-comprar btn-outline-primary"> Comprar ahora </a>
      <a href="#" class="btn btn-comprar btn-outline-primary"> <span class="text">Agregar al carrito</span> <i class="fas fa-shopping-cart"></i>  </a>
    </div>
    
  </article> <!-- product-info-aside .// -->
      </main> <!-- col.// -->
    </div> <!-- row.// -->
  </div> <!-- card.// -->`;

      itemsContainer.innerHTML += itemHTML;
    })
    .catch((error) => {
      console.error("error", error);
    });
}

function precarga(codigo){
  const itemsContainer = document.getElementById("listaBikinis");
  itemsContainer.innerHTML = "";
  mostrarProducto(codigo);
}




function mostrarCarrito(){

  const itemsContainer = document.getElementById("carrito");
  itemsContainer.innerHTML = "";

  // // if(localStorage.getItem("Productos") == null){
  // //   localStorage.setItem("Productos",'[lista]')
  // // }

  // // let list  = JSON.parse(localStorage.getItem("Productos"));
  // // console.log(list.length)
  // // for(let i = 0; i < list.length ; i++){
  // // 	console.log(list[i].name);
  // // 	addItem(list[i]);
  // // }
  // let products_data;
  const url = new URL("http://localhost:8080/producto_venta/all");
  token = sessionStorage.getItem("Token");
  let loading = true;
  fetch(url,{method:'GET'})//, headers:{'Authorization':token}
    .then((data) => data.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        console.log(data[i])
        item = data[i];

        fetch(`http://localhost:8080/productos/producto/${data[i].id_producto}`)
        .then((producto_fetch) => producto_fetch.json())
        .then((producto_fetch) => {
        //itemsContainer = document.getElementById("carrito");
        //itemsContainer.innerHTML = "";
        const itemHTML = 

        `   <tr>
              <td>
                  <figure class="itemside align-items-center">
                      <div class="aside"><img src="${producto_fetch.imagen}" class="img-sm" height=250px></div>
                      <figcaption class="info">
                          <a href="#" class="title text-dark"> ${producto_fetch.nombre_producto}</a>
                          <p class="text-muted small"> Traje una pieza <br>$${producto_fetch.precio}</p>
                      </figcaption>
                  </figure>
              </td>
              <td>
                  <select class="form-control">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                  </select>
              </td>
              <td>
                  <div class="price-wrap">
                      <var class="price">$${producto_fetch.precio}</var>
                      <small class="text-muted"> $${producto_fetch.precio} </small>
                  </div> <!-- price-wrap .// -->
              </td>
              <td class="text-right d-none d-md-block">
              <a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light" data-toggle="tooltip"> <i class="fa fa-heart"></i></a>
              <button type="submit" class="btn" style="background-color: #f700cd; color:white;" onclick='precargaEliminar(${producto_fetch.id_producto})'>Eliminar</button>
              </td>
          </tr>
                  `;

        itemsContainer.innerHTML += itemHTML + `<script src="/js/ventaProducto.js"></script>`;
        //addItem(data[i]);
        })
      }
      })
      .then((loading = false))
      .catch((error) => console.log(error));
}


function eliminarDelCarrito(codigo_eliminar){
  //console.log("se elimino producto")
  fetch(`http://localhost:8080/producto_venta/eliminar/${codigo_eliminar}`, {
  method: "DELETE",
})
  .then((res) => {res.json})
  .then((res) => {  console.log("El producto se ha eliminado",res);location.reload(true);
  })
  .catch((error) => {
    console.error("error", error);
  });
}
 

function precargaEliminar(codigo_eliminar){
eliminarDelCarrito(codigo_eliminar);
}

