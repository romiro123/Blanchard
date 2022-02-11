const swiper = new Swiper('.swiper--gallery', {

    slideLabelMessage: false,
    // Optional parameters
    loop: true,
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
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});


