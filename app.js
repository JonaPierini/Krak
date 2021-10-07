//
window.addEventListener("load", function(){
var elem = document.getElementById("loader");
elem.parentNode.removeChild(elem);
document.querySelectorAll("header,main,footer").forEach(function(item) {
item.classList.remove('d-none');
});  
});

//Header
let colorBoton = document.getElementById("colorContacto")
	colorBoton.style.backgroundColor = "#4A148C";
	colorBoton.style.borderRadius = "20px";
	colorBoton.style.textAlign = "center";
	colorBoton.style.marginLeft = "20px"
	colorBoton.style.marginRight = "20px"

document.addEventListener("scroll", function(){
	let color =document.getElementById('navbaranimacion');
	let animacion = document.getElementById("animacionnavbar");
	let posobj = animacion.getBoundingClientRect().top;

	// Barra

	if (posobj>-3) {
		color.classList.remove("arribaola");
		color.setAttribute("class", "abajoola");
		color.style.backgroundColor = "transparent";

		let colorBoton = document.getElementById("colorContacto")
		colorBoton.style.backgroundColor = "#4A148C";

	}
	if (posobj<-3) {
		color.classList.remove("abajoola");
		color.setAttribute("class", "arribaola");
		color.style.backgroundColor = "#4A148C";
		color.style.position = "fixed";
		color.style.width="100%";
		color.style.zIndex="1000";
		color.style.display = "flex"
		color.style.alignItems = "center"

		let colorBoton = document.getElementById("colorContacto")
		colorBoton.style.backgroundColor = "#F90C65"
	}

	var ancho = window.innerWidth;
	if(ancho < 992){
		color.style.position = "static"
	}

	else{
		color.style.position = "fixed"
		color.style.width="100%";
		color.style.zIndex="1000";
		
	
	}

})


// Carrousel Uno
window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel1__contenedor'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable:true,
		dots: '.carousel1__indicadores',
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				dots: '.carousel1__indicadores',
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				dots: '.carousel1__indicadores',
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});

// Carousel Dos
let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})


// Animación Aparece
let anochoDos = window.innerWidth;

	
	function aparecescroll(){
		let html = document.getElementsByTagName("html")[0]; 
		let elementoaparece = document.getElementsByClassName("aparece3"); 
		document.addEventListener("scroll", function(){
		let  topelem = html.scrollTop;
		for(i=0; i<elementoaparece.length; i++){
		
		let topelementoaparece = elementoaparece[i].offsetTop;
		if (topelem>topelementoaparece-600) {
			
			elementoaparece[i].style.opacity = 1;
			
		}
			
			
		}
		})
		}

aparecescroll();
	

