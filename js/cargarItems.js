function addItem(item){
	
	const itemHTML = `
	<div class = "product col-10 col-sm-4 col-md-3.5 col-lg-3" >
  <div class = "product-content">
      <div class = "product-img">
        <img src = ${item.img} alt = "product image" height="250px" >
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
    <a href = "#" class = "product-name">${item.name}</a>
    <p class = "product-price">$${item.price}</p>
  </div>
	</div>`;
	const itemsContainer = document.getElementById("listaBikinis");
	itemsContainer.innerHTML += itemHTML;

}



function CargarItemsByCategory(category){

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
  // const url = new URL("http://localhost:8080/productos/all", {});
  let loading = true;
  console.log(category)
  fetch("http://localhost:8080/productos/all")
    .then((data) => data.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        console.log(data[i])
        console.log(category)
        
        if(data[i].id_categoria == category){
        item = data[i];
        const itemHTML = `
            <div class = "product col-10 col-sm-4 col-md-3.5 col-lg-3" >
            <div class = "product-content">
                <div class = "product-img">
                  <img src = '${item.imagen}' alt = "product image" height="250px" >
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
        //addItem(data[i]);
      }
    }
    })
    .then((loading = false))
    .catch((error) => console.log(error));

}
