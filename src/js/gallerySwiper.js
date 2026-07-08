import Swiper from 'swiper';

import 'swiper/css';

const swiper = new Swiper('#swiper', {
  direction: 'horizontal',
  loop: false,
});

const resizeHandler = () => {
  const windowWidth = window.innerWidth;

  if (windowWidth < 1440) {
    swiper.enable();
  } else {
    swiper.disable();
  }
};

window.addEventListener('resize', resizeHandler);
