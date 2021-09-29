function addItem(item){
	const itemHTML = '<div class="col"> <div class="card h-100">' +
			' <img src="'+item.img+'" class="card-img-top" height="250px" alt="image" >' +
			'    <div class="card-body text-center">' +
			'        <h5 class="card-title">'+item.name+'</h5>' +
			'        	<ul class="list-group list-group-flush" id="ulCards">' + 
			'<li class="list-group-item">'+item.precio+'</li>'+
			'<li class="list-group-item">'+
			'<div class="contenedorIconosTarjetas">'+
		'<div class="text-center justify-content-center">'+
			'<a href="#" target="_blank" class="izquierda"><i class="fas fa-cart-plus fa-2x"></i></a>'+
			'<button type="button" class="btn btn-primary">Ver más...</button>'+
			'<a href="#" target="_blank" class="derecha"><i class="fas fa-heart fa-2x" ></i></a>'+
			'</div></div>'+
			'</li></ul>'+
			'    </div>' +
			'</div></div></div>';
	const itemsContainer = document.getElementById("listaBikinis");
	itemsContainer.innerHTML += itemHTML;
}

addItem({'name':'Red Summer',
	'img':'/imagenes/1.jpg',
	'precio':'390'});

addItem({'name':'Fresh Style',
	'img':'/imagenes/2.png',
	'precio':'200'});

	addItem({'name':'Top Wave',
	'img':'/imagenes/3.jpg',
	'precio':'190'});

	addItem({'name':'Twisted Summer',
	'img':'/imagenes/4.jpg',
	'precio':'175'});

addItem({'name':'Water Sun',
	'img':'/imagenes/5.jpg',
	'precio':'350.50'});

	addItem({'name':'Wave light',
	'img':'/imagenes/6.jpg',
	'precio':'500'});

	addItem({'name':'Sea peace',
	'img':'/imagenes/7.jpg',
	'precio':'392'});

addItem({'name':'Beauty love',
	'img':'/imagenes/8.jpg',
	'precio':'190'});

	addItem({'name':'Fire wave',
	'img':'/imagenes/9.jpg',
	'precio':'165'});

	addItem({'name':'Flowers top',
	'img':'/imagenes/10.jpg',
	'precio':'500'});

	addItem({'name':'Blue collection',
	'img':'/imagenes/11.jpg',
	'precio':'199'});

	addItem({'name':'Blue mood',
	'img':'/imagenes/12.jpg',
	'precio':'460'});


