// Menu Moba

let navBar = document.querySelector(".header .nav");

document.querySelector("#menu-btn").addEventListener("click", () => {
  navBar.classList.add("active");
});

document.querySelector("#nav-close").addEventListener("click", () => {
  navBar.classList.remove("active");
});

/* slide dos comentarios 
======================================================== */

var swiper = new Swiper(".review-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 18,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});

/* slide dos comentarios / End
======================================================== */

// CategoriaForcedor

var swiper = new Swiper(".review-slider", {
  slidesPerView: 1, // Quantidade de cartões visíveis por vez
  spaceBetween: 10, // Espaçamento entre os cartões
  loop: true,
  grabCursor: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});
