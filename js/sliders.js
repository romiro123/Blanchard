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

let swiperProject = new Swiper('.swiper--project', {


    // Optional parameters

    slidesPerView: 3,
    spaceBetween: 50,
    /*slidesPerGroup: 1,*/



    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next--project',
        prevEl: '.swiper-button-prev--project',
    },
});