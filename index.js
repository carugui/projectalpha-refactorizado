let mybutton = document.querySelector('#button-inicio');
let mynav = document.querySelector('#nav');
let mylogonav = document.querySelector('.svg-logo');

window.onscroll = function() {scrollFunction(), scrollNav()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.classList.add('show');
  } else {
    mybutton.classList.remove('show');
  }
}

function scrollNav() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mynav.classList.add('nav-green');
    mylogonav.classList.add('svg-logo-green');
  } else {
    mynav.classList.remove('nav-green');
    mylogonav.classList.remove('svg-logo-green');
  }
}

// Cuando hagas click en el botón, subirá a arriba de la página o se desplazará a la izquierda
mybutton.addEventListener("click", topFunction);

function topFunction() {
  if (window.innerWidth < 900) { // Si la pantalla es de menos de 900px, subirá arriba
    document.body.scrollTop = 0; //Safari
    document.documentElement.scrollTop = 0; //Chrome, Firefox, IE and Opera
  } if (window.innerWidth > 900) { // Si la pantalla es de más de 900px, irá a la izquierda del todo
    document.querySelector('main').scrollLeft = 0; //Safari
    document.documentElement.scrollLeft = 0; //Chrome, Firefox, IE and Opera
  }
}

// Para que cuando a partir de 900px de ancho de la ventana, se haga scroll
// horizontal cuando se le da a la rueda del ratón
const scrollContainer = document.querySelector("main");

scrollContainer.addEventListener("wheel", (evt) => {
  if (window.innerWidth > 900) {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
  }
});

scrollContainer.addEventListener("wheel", botonInicioHorizontal)

function botonInicioHorizontal() {
  if (document.querySelector('main').scrollLeft > 300) {
    mybutton.classList.add('show');
    mynav.classList.add('nav-green-desktop');
    mylogonav.classList.add('svg-logo-green');
  } else {
    mybutton.classList.remove('show');
    mynav.classList.remove('nav-green-desktop');
    mylogonav.classList.remove('svg-logo-green');
  }
}