var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    breakpoints: {
        240: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        540: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        990: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1250: {
            slidesPerView: 5,
            spaceBetween: 10,
        },

        1400: {
            slidesPerView: 6,
            spaceBetween: 10,
        },
        1600: {
            slidesPerView: 7,
            spaceBetween: 10,
        },
        1920: {
            slidesPerView: 8,
            spaceBetween: 10,
        },
    },
});