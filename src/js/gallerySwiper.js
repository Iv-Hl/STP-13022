import Swiper from 'swiper';
// import { Autoplay } from 'swiper/modules';
// const gallerySwiper = new Swiper('[data-gallery-swiper]', {
//   modules: [Autoplay],

//   loop: true,
//   speed: 700,
//   slidesPerView: 1,
//   spaceBetween: 32,

//   breakpoints: {
//     375: { slidesPerView: 1, spaceBetween: 10 },
//   },

//   autoplay: {
//     delay: 3500,
//     disableOnInteraction: false,
//   },
// });
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
});
