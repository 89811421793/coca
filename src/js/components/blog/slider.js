import Swiper from 'swiper';
import 'swiper/css';

export const useBlogSlider = () => {
    new Swiper('.blog-slider__swiper', {
        slidesPerView: 'auto',
        spaceBetween: 32,
        loop: true,
        centeredSlides: false,
    });
};
