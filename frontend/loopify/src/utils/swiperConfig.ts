interface SwiperConfig {
  spaceBetween: number;
  slidesPerView: number;
  breakpoints: {
    [key: number]: {
      slidesPerView: number;
      spaceBetween: number;
    };
  };
}

const swiperConfig: SwiperConfig = {
  spaceBetween: 30,
  slidesPerView: 5,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
};


export default swiperConfig;