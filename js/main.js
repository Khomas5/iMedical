var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  slidesPerView: 2,
  spaceBetween: 32,
  loop: true,
  breakpoints: {
    1050: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  mousewheel: true,
  keyboard: true,
});

var swiper = new Swiper(".myswiper", {
  cssMode: true,
  slidesPerView: 2,
  spaceBetween: 32,
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  mousewheel: true,
  keyboard: true,
});

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
