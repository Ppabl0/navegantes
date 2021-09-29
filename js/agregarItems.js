function addItem(item){
	
	const itemHTML = `
	<div class = "product col-md-3" >
  <div class = "product-content">
      <div class = "product-img">
        <img src = ${item.img} alt = "product image">
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
	class Item {
		constructor (name,img,price){
						this.name = name;
						this.img = img;
						this.price = price;
		}
}

let list = [];

list.push(new Item('Red Summer','/imagenes/1.jpg','390'));
list.push(new Item('Fresh Style','/imagenes/2.png','200'));
list.push(new Item('Top Wave','/imagenes/3.jpg','190'));
list.push(new Item('Twisted Summer','/imagenes/4.jpg','175'));
list.push(new Item('Water Sun','/imagenes/5.jpg','350.50'));
list.push(new Item('Wave light','/imagenes/6.jpg','500'));
list.push(new Item('Sea peace','/imagenes/7.jpg','392'));
list.push(new Item('Beauty love','/imagenes/8.jpg','190'));
list.push(new Item('Fire wave','/imagenes/9.jpg','165'));
list.push(new Item('Flowers top','/imagenes/10.jpg','500'));


list = JSON.stringify(list);

localStorage.setItem("Productos",list);
}


function CargarItems(){

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


GuardarItemsLocalStorage();
CargarItems();