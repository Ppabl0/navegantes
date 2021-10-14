class Item {
  constructor (name,img,price,category,sizeCH,sizeM,sizeG,sizeXG,pieces){
          this.name = name;
          this.img = img;
          this.price = price;
          this.category= category;
          this.pieces=pieces;
          this.sizeCH=sizeCH;
          this.sizeM=sizeM;
          this.sizeG=sizeG;
          this.sizeXG=sizeXG;
  }
}



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


function GuardarItemsLocalStorage(){
	
let list = [];

list.push(new Item('Red Summer','/imagenes/UNAPIEZA2.jpg','390','Dama una pieza'));
list.push(new Item('Fresh Style','/imagenes/CURVY1.jpg','200', 'Dama curvy'));
list.push(new Item('Top Wave','/imagenes/DOSPIEZAS1.jpg','190', 'Dama dos piezas'));
list.push(new Item('Twisted Summer','/imagenes/UNAPIEZA3.jpg','175','Dama una pieza'));
list.push(new Item('Water Sun','/imagenes/CURVY2.jpg','350.50', 'Dama curvy'));
list.push(new Item('Wave light','/imagenes/DOSPIEZAS2.jpg','500', 'Dama dos piezas'));
list.push(new Item('Sea peace','/imagenes/CURVY3.jpg','392', 'Dama curvy'));
list.push(new Item('Beauty love','/imagenes/DOSPIEZAS3.jpg','190', 'Dama dos piezas'));
list.push(new Item('Fire wave','/imagenes/UNAPIEZA4.jpg','165','Dama una pieza'));
list.push(new Item('Summer sport','/imagenes/HOMBRE1.jpg','150','Caballero'));
list.push(new Item('Fresh Beach','/imagenes/HOMBRE2.jpg','170','Caballero'));
list.push(new Item('Blue island','/imagenes/TRIKINI1.jpg','430','Dama trikini'));
list.push(new Item('Sky mood','/imagenes/TRIKNI2.jpg','140','Dama trikini'));
list.push(new Item('Sunday vibes','/imagenes/CURVY4.jpg','100','Caballero curvy'));
list.push(new Item('Sabadrink','/imagenes/CURVY5.jpg','120','Caballero curvy'));
list.push(new Item('Hawai','/imagenes/CURVY6.jpg','160','Caballero curvy'));



list = JSON.stringify(list);

localStorage.setItem("Productos",list);
}


function agregarItemLocalStorage(validation){
  console.log("Entro a funcion agregar item");
  if(validation===true){
    if(localStorage.getItem("Productos") == null){
      localStorage.setItem("Productos",'[lista]')
    }
  
    let list  = JSON.parse(localStorage.getItem("Productos"));
    //sizeCH = document.getElementById("tallaChica");
    // if(sizeCH.checked){
    //   sizeCH=true;
    // }

    const $form = document.querySelector('#formularioBiki');
    const formData = new FormData($form)
    const imagen = document.getElementById("imagenProducto").value
    debugger
    let item = new Item(
      document.getElementById("nombreProducto").value,
      document.getElementById("imagenProducto").value,
      document.getElementById("precioProducto").value,
      document.getElementById("categoriaProducto").value,
      document.getElementById("tallaChica").checked,
      document.getElementById("tallaMediana").checked,
      document.getElementById("tallaGrande").checked,
      document.getElementById("tallaExtraGrande").checked,
      document.getElementById("cantidadPiezas").value
    )
  
    list.push(item);
  
    list = JSON.stringify(list);
  
    localStorage.setItem("Productos",list);
  
  }


}


function CargarItems(){

  const itemsContainer = document.getElementById("listaBikinis");
	itemsContainer.innerHTML ='';

	if(localStorage.getItem("Productos") == null){
    localStorage.setItem("Productos",'[lista]')
  }

  let list  = JSON.parse(localStorage.getItem("Productos"));
	console.log(list.length)
	for(let i = 0; i < list.length ; i++){
		console.log(list[i].name);
		addItem(list[i]);
	}

}


