class Item {
  constructor(id_producto, nombre_producto, precio, descripcion, id_categoria) {
    this.id_producto = id_producto;
    this.nombre_producto = nombre_producto;
    this.precio = precio;
    this.descripcion = descripcion;
    this.id_categoria = id_categoria;
    this.imagen;
    // this.sizeCH=sizeCH;
    // this.sizeM=sizeM;
    // this.sizeG=sizeG;
    // this.sizeXG=sizeXG;
  }
}

function GuardarItemsLocalStorage() {
  let list = [];
  // Productos Dama una pieza
  // list.push(new Item('Hombro','/imagenes/UNAPIEZA2.jpg','390','Dama una pieza'));
  // list.push(new Item('Lunares','/imagenes/UNAPIEZA3.jpg','175','Dama una pieza'));
  // list.push(new Item('Plizado','/imagenes/UNAPIEZA4.jpg','165','Dama una pieza'));
  // list.push(new Item('Flores de líneas',"'/imagenes/IMAGENES EXTRA UNA PIEZA, DOS PIEZAS Y TRIKINI/D1P4.jpg'",'160','Dama una pieza'));
  // list.push(new Item('Flores Van G',"'/imagenes/IMAGENES EXTRA UNA PIEZA, DOS PIEZAS Y TRIKINI/D1P5.jpg'",'160','Dama una pieza'));
  // list.push(new Item('Summer',"'/imagenes/IMAGENES EXTRA UNA PIEZA, DOS PIEZAS Y TRIKINI/D1P6.jpg'",'160','Dama una pieza'));
  // list.push(new Item('Flor Negro',"'/imagenes/IMAGENES EXTRA UNA PIEZA, DOS PIEZAS Y TRIKINI/D1P7.jpg'",'160','Dama una pieza'));
  // list.push(new Item('Jardín Negro',"'/imagenes/IMAGENES EXTRA UNA PIEZA, DOS PIEZAS Y TRIKINI/D1P8.jpg'",'160','Dama una pieza'));

  // //  Productos Dama Curvy
  // list.push(new Item('Lunar rojo','/imagenes/CURVY1.jpg','200', 'Dama curvy'));
  // list.push(new Item('Doble flor','/imagenes/CURVY2.jpg','350.50', 'Dama curvy'));
  // list.push(new Item('Stripes','/imagenes/CURVY3.jpg','392', 'Dama curvy'));
  // list.push(new Item('Curvy Trikini',"'/imagenes/DAMA CURVY EXTRAS/TDC4.jpg'",'360','Dama curvy'));
  // list.push(new Item('Trikini Red',"'/imagenes/DAMA CURVY EXTRAS/TDC5.jpg'",'460','Dama curvy'));
  // list.push(new Item('Unaflor',"'/imagenes/DAMA CURVY EXTRAS/TDC6.jpg'",'560','Dama curvy'));
  // list.push(new Item('Margaritas',"'/imagenes/DAMA CURVY EXTRAS/TDC7.jpg'",'460','Dama curvy'));
  // list.push(new Item('Olanes Naranja',"'/imagenes/DAMA CURVY EXTRAS/TDC8.jpg'",'360','Dama curvy'));

  // //  Productos Dama dos
  // list.push(new Item('Trama','/imagenes/DOSPIEZAS1.jpg','190', 'Dama dos piezas'));
  // list.push(new Item('Doble black','/imagenes/DOSPIEZAS2.jpg','500', 'Dama dos piezas'));
  // list.push(new Item('Flores ondas','/imagenes/DOSPIEZAS3.jpg','190', 'Dama dos piezas'));
  // list.push(new Item('Hojas',"'/imagenes/IMAGENES EXTRA UNA PIEZA, DOS PIEZAS Y TRIKINI/D2P4.jpg'",'560','Dama dos piezas'));
  // list.push(new Item('Verde hoja',"'/imagenes/IMAGENES EXTRA UNA PIEZA, DOS PIEZAS Y TRIKINI/D2P5.jpg'",'560','Dama dos piezas'));
  // list.push(new Item('Borlas',"'/imagenes/IMAGENES EXTRA UNA PIEZA, DOS PIEZAS Y TRIKINI/D2P6.jpg'",'460','Dama dos piezas'));
  // list.push(new Item('Plizar',"'/imagenes/IMAGENES EXTRA UNA PIEZA, DOS PIEZAS Y TRIKINI/D2P7.jpg'",'360','Dama dos piezas'));
  // list.push(new Item('Moños',"'/imagenes/IMAGENES EXTRA UNA PIEZA, DOS PIEZAS Y TRIKINI/D2P8.jpg'",'260','Dama dos piezas'));

  // // Productos Caballero
  // list.push(new Item('Summer sport','/imagenes/HOMBRE1.jpg','150','Caballero'));
  // list.push(new Item('Fresh Beach','/imagenes/HOMBRE2.jpg','170','Caballero'));
  // list.push(new Item('Hoja amarillento',"'/imagenes/CABALLERO EXTRA/HR3.jpg'",'160','Caballero'));
  // list.push(new Item('Suave',"'/imagenes/CABALLERO EXTRA/HR4.jpg'",'180','Caballero'));
  // list.push(new Item('Casual',"'/imagenes/CABALLERO EXTRA/HR5.jpg'",'190','Caballero'));
  // list.push(new Item('Tri Stripes',"'/imagenes/CABALLERO EXTRA/HR6.jpg'",'120','Caballero'));
  // list.push(new Item('Cuadro',"'/imagenes/CABALLERO EXTRA/HR7.jpg'",'300','Caballero'));
  // list.push(new Item('Beach',"'/imagenes/CABALLERO EXTRA/HR8.jpg'",'250','Caballero'));

  // // Productos Trikini
  // list.push(new Item('Black Flower','/imagenes/TRIKINI1.jpg','430','Dama trikini'));
  // list.push(new Item('Black Print','/imagenes/TRIKNI2.jpg','140','Dama trikini'));
  // list.push(new Item('BW',"'/imagenes/IMAGENES EXTRA UNA PIEZA, DOS PIEZAS Y TRIKINI/D3P4.jpg'",'260','Dama trikini'));
  // list.push(new Item('80s',"'/imagenes/IMAGENES EXTRA UNA PIEZA, DOS PIEZAS Y TRIKINI/D3P5.jpg'",'460','Dama trikini'));
  // list.push(new Item('GrayBlack',"'/imagenes/IMAGENES EXTRA UNA PIEZA, DOS PIEZAS Y TRIKINI/D3P6.jpg'",'660','Dama trikini'));
  // list.push(new Item('PinkRed',"'/imagenes/IMAGENES EXTRA UNA PIEZA, DOS PIEZAS Y TRIKINI/D3P7.jpg'",'750','Dama trikini'));
  // list.push(new Item('TriColor',"'/imagenes/IMAGENES EXTRA UNA PIEZA, DOS PIEZAS Y TRIKINI/D3P8.jpg'",'360','Dama trikini'));
  // list.push(new Item('RedColors',"'/imagenes/IMAGENES EXTRA UNA PIEZA, DOS PIEZAS Y TRIKINI/D3P9.jpg'",'230','Dama trikini'));

  // // Productos Caballero Curvy
  // list.push(new Item('Sunday vibes','/imagenes/CURVY4.jpg','100','Caballero curvy'));
  // list.push(new Item('Sabadrink','/imagenes/CURVY5.jpg','120','Caballero curvy'));
  // list.push(new Item('Hawai','/imagenes/CURVY6.jpg','160','Caballero curvy'));
  // list.push(new Item('Mar',"'/imagenes/CABALLERO CURVY/HC3.jpg'",'160','Caballero curvy'));
  // list.push(new Item('Ocean',"'/imagenes/CABALLERO CURVY/HC4.jpg'",'160','Caballero curvy'));
  // list.push(new Item('Lake',"'/imagenes/CABALLERO CURVY/HC5.jpg'",'160','Caballero curvy'));
  // list.push(new Item('River',"'/imagenes/CABALLERO CURVY/HC6.jpg'",'160','Caballero curvy'));
  // list.push(new Item('Cascada',"'/imagenes/CABALLERO CURVY/HC7.jpg'",'160','Caballero curvy'));

  list = JSON.stringify(data);

  localStorage.setItem("Productos", list);
}

function agregarItemLocalStorage(validation) {
  console.log("Entro a funcion agregar item");
  if (validation === true) {
    if (localStorage.getItem("Productos") == null) {
      localStorage.setItem("Productos", "[lista]");
    }

    let list = JSON.parse(localStorage.getItem("Productos"));
    //sizeCH = document.getElementById("tallaChica");
    // if(sizeCH.checked){
    //   sizeCH=true;
    // }

    const $form = document.querySelector("#formularioBiki");
    const formData = new FormData($form);
    const imagen = document.getElementById("imagenProducto").value;
    debugger;
    let item = new Item(
      document.getElementById("nombreProducto").value,
      document.getElementById("imagenProducto").value,
      document.getElementById("precioProducto").value,
      document.getElementById("categoriaProducto").value,
      document.getElementById("tallaChica").value,
      document.getElementById("tallaMediana").value,
      document.getElementById("tallaGrande").value,
      document.getElementById("tallaExtraGrande").value,
      document.getElementById("cantidadPiezas").value
    );

    list.push(item);

    list = JSON.stringify(list);

    localStorage.setItem("Productos", list);
  }
}

function CargarItems() {
  const itemsContainer = document.getElementById("listaBikinis");
  itemsContainer.innerHTML = "";

  // if(localStorage.getItem("Productos") == null){
  //   localStorage.setItem("Productos",'[lista]')
  // }

  // let list  = JSON.parse(localStorage.getItem("Productos"));
  // console.log(list.length)
  // for(let i = 0; i < list.length ; i++){
  // 	console.log(list[i].name);
  // 	addItem(list[i]);
  // }
  let products_data;
  const url = new URL("http://localhost:8080/productos/all");
  token = sessionStorage.getItem("Token");
  let loading = true;
  fetch(url,{method:'GET'})//, headers:{'Authorization':token}
    .then((data) => data.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        console.log(data[i])
        item = data[i];
        const itemHTML = `
            
            <div class = "product col-10 col-sm-4 col-md-3.5 col-lg-3" >
            <div class = "product-content">
                <div class = "product-img">
                  <img href="#producto/${item.id_producto}_${item.nombre_producto}" src='${item.imagen}' alt="product image" onclick='precarga(${item.id_producto})' height="250px" >
                </div>
                <div class = "product-btns">
                  <button type = "button" class = "btn-cart" onclick='agregarCarrito(${item.id_producto})'> añadir a carrito
                  <span><i class = "fas fa-plus"></i></span>
                  </button>
                  <button type = "button" class = "btn-buy"> comprar ahora
                  <span><i class = "fas fa-shopping-cart"></i></span>
                  </button>
                </div>
            </div>

            <div class = "product-info">
              <div class = "product-info-top">
                <h2 class = "sm-title">Verano</h2>
                <div class = "rating">
                  <span><i class = "fas fa-star"></i></span>
                  <span><i class = "fas fa-star"></i></span>
                  <span><i class = "fas fa-star"></i></span>
                  <span><i class = "fas fa-star"></i></span>
                  <span><i class = "far fa-star"></i></span>
                </div>
              </div>
              <a href="#producto/${item.id_producto}_${item.nombre_producto}" onclick="precarga(${item.id_producto})" class = "product-name">${item.nombre_producto}</a>
              <p class = "product-price">$${item.precio}</p>
            </div>
            </div>`;

        const itemsContainer = document.getElementById("listaBikinis");
        itemsContainer.innerHTML += itemHTML + `<script src="/js/ventaProducto.js"></script>`;
        //addItem(data[i]);
      }
    })
    .then((loading = false))
    .catch((error) => console.log(error));
}

function addItem(item) {
  console.log("addItem");
  const itemHTML = `
            <div class = "product col-10 col-sm-4 col-md-3.5 col-lg-3" >
            <div class = "product-content">
                <div class = "product-img">
                  <img src = '/imagenes/UNAPIEZA2.jpg' alt = "product image" height="250px" >
                </div>
                <div class = "product-btns">
                  <button type = "button" class = "btn-cart"> añadir a carrito
                  <span><i class = "fas fa-plus"></i></span>
                  </button>
                  <button type = "button" class = "btn-buy"> comprar ahora
                  <span><i class = "fas fa-shopping-cart"></i></span>
                  </button>
                </div>
            </div>

            <div class = "product-info">
              <div class = "product-info-top">
                <h2 class = "sm-title">Verano</h2>
                <div class = "rating">
                  <span><i class = "fas fa-star"></i></span>
                  <span><i class = "fas fa-star"></i></span>
                  <span><i class = "fas fa-star"></i></span>
                  <span><i class = "fas fa-star"></i></span>
                  <span><i class = "far fa-star"></i></span>
                </div>
              </div>
              <a href = "#" class = "product-name">${item.nombre_producto}</a>
              <p class = "product-price">$${item.precio}</p>
            </div>
            </div>`;

  const itemsContainer = document.getElementById("listaBikinis");
  itemsContainer.innerHTML += itemHTML;
}
