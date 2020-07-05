export const  swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 16,
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        450: {
            slidesPerView: 2,
            spaceBetween: 8
        },
        850: {
            slidesPerView: 3,
            spaceBetween: 16
        }
    },

    loop: true,
    infinite: true,
    grabCursor: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }

});

