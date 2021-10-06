$(document).on('click', ".shared", function() {	
	var url = window.location.href;
	var title = document.title;
	
	url = encodeURIComponent(url);
	title = encodeURIComponent(title);
	
	//Boton Facebook
	if($(this).hasClass('fb')){	
		url = 'https://www.facebook.com/sharer/sharer.php?u='+url+'&t='+title;

	//Boton Twitter
	}else if($(this).hasClass('tt')){
		user = 'DevlazMX';//Nuestro usuario de twitter para mostrar como @user
		url = 'https://twitter.com/intent/tweet?text='+title+'&url='+url+'&via='+user;

	
	//Boton WhatsApp
	}else if($(this).hasClass('wa')){		
		url = 'https://web.whatsapp.com/'+title+'&url='+url+'&via='+user;
	
	
	//Ningun boton valido
	}else return;
	
	//Abrimos la url
	window.open(url, '_blank');			
});