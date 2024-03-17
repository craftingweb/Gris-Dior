const swiper = new Swiper(".swiper", {
  // Optional parameters
  effect: "fade",

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
