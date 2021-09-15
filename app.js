//Header
let colorBoton = document.getElementById("colorContacto")
	colorBoton.style.backgroundColor = "#4A148C";
	colorBoton.style.borderRadius = "20px";
	colorBoton.style.width = "150px";
	colorBoton.style.textAlign = "center";
	colorBoton.style.marginLeft = "20px"
	colorBoton.style.marginRight = "20px"

document.addEventListener("scroll", function(){
	let color =document.getElementById('navbaranimacion');
	let animacion = document.getElementById("animacionnavbar");
	let posobj = animacion.getBoundingClientRect().top;

	// Barra
	color.style.position = "fixed";
	color.style.width="100%";
	color.style.height="90px";
	color.style.zIndex="1000";

	

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

		let colorBoton = document.getElementById("colorContacto")
		colorBoton.style.backgroundColor = "#F90C65"
	}
})
// Carrousel Uno
window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel1__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable:true,
		dots: '.carousel1__indicadores',
		arrows: {
			prev: '.carousel1__anterior',
			next: '.carousel1__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
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
