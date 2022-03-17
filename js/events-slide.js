let swiperEvents = new Swiper('.swiper--events', {

    slideLabelMessage: false,
    // Optional parameters

    slidesPerGroup: 1,
    slidesPerView: 3,
    spaceBetween: 50,


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next--events',
        prevEl: '.swiper-button-prev--events',
        disabledClass: 'swiper-button-disabled--events',
    },
});