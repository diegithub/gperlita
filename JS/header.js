const navToggle = document.querySelector(".nav-toggle");
const navMenuH = document.querySelector(".nav-menu-h");
const navMenuV = document.querySelector(".nav-menu-v");

navToggle.addEventListener("click", () => {
  navMenuH.classList.toggle("nav-menu-h-visible");

  if (navMenuH.classList.contains("nav-menu-h-visible")) {
    navToggle.setAttribute("aria-label", "cerrar menu");
  } else {
    navToggle.setAttribute("aria-label", "abrir menu");
  }
});


navMenuV.addEventListener("click", () => {
  navMenuH.classList.toggle("nav-menu-h-visible");
});


function onScroll() {
  let headernav = document.querySelector(".header_nav");
  let altura = headernav.offsetTop;
  let posicionVentana = window.scrollY;

  if (posicionVentana > altura) {
    headernav.classList.add("headernav-fixed");
  } else {
    headernav.classList.remove("headernav-fixed");
  }
}

function fixNavbarOnScroll() {
  window.addEventListener("scroll", onScroll);
}

fixNavbarOnScroll();

/*const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const menuItems = document.querySelectorAll('.menu li a');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});*/


// Obtener la posición vertical de la segunda barra de menú
let headernav = document.querySelector(".header_nav").offsetTop;

// Detectar cuando se hace scroll en la página
window.addEventListener("scroll", function() {
  // Obtener la posición vertical actual de la página
  let scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  
  // Verificar si se ha alcanzado la posición de la segunda barra de menú
  if (scrollPos >= headernav) {
    // Cambiar la posición del menú desplegable para que quede pegado a la segunda barra de menú
    document.querySelector(".nav-menu-h").style.top = "60px";
  } else {
    // Volver a la posición original del menú desplegable
    document.querySelector(".nav-menu-h").style.top = "120px";
  }
});



