const swiperGallery = new Swiper('.swiper--gallery', {

    slideLabelMessage: false,
    // Optional parameters
    slidesPerGroup: 3,
    slidesPerView: 3,
    spaceBetween: 50,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next--gallery',
        prevEl: '.swiper-button-prev--gallery',
    },


});


