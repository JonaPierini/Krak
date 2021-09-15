//Header

document.addEventListener("scroll", function(){
	let color =document.getElementById('navbaranimacion');
	console.log(color)
	let animacion = document.getElementById("animacionnavbar");
	let posobj = animacion.getBoundingClientRect().top;
	console.log(posobj);
	color.style.position = "fixed";
	color.style.width="100%";
	color.style.height="70px";
	color.style.zIndex="1000";
	if (posobj>-3) {
		color.classList.remove("arribaola");
		color.setAttribute("class", "abajoola");
		color.style.backgroundColor = "transparent";
	}
	if (posobj<-3) {
		color.classList.remove("abajoola");
		color.setAttribute("class", "arribaola");
		color.style.backgroundColor = "#4A148C";
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
