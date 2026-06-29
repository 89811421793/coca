import Swiper from 'swiper';
import 'swiper/css';

export const useValueSlider = () => {
    new Swiper('.values__slider', {
        slidesPerView: 'auto',
        spaceBetween: 32,
        loop: true,
        centeredSlides: false,
    });
};

export const useTeamSlider = () => {
    new Swiper('.team__slider', {
        slidesPerView: 'auto',
        spaceBetween: 32,
        loop: true,
        centeredSlides: false,
    });
};
