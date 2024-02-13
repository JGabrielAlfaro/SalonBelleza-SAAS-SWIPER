var swiper = new Swiper(".swiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
});


// window.swiper = new Swiper({
//   el: '.swiper__contenedor',
//   swiperClass: 'swiper__slide',
//   createElements: true,
//   autoplay: {
//     delay: 5000
//   } 
// })