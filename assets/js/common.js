$(function () {
    
    var swiper = new Swiper(".sc-visual.swiper", {
        navigation: {
            nextEl: ".sc-visual .btn-next",
            prevEl: ".sc-visual .btn-prev",
        },
        pagination: {
            el: ".pagination",
            type: "fraction",
        },
        loop: true,
    });

    var swiper2 = new Swiper(".tab-right.swiper", {
        navigation: {
            nextEl: ".tab-right .btn-next",
            prevEl: ".tab-right .btn-prev",
        },
        slidesPerView: 'auto',
        spaceBetween: 10,
        loop: true,
    });

    var swiper3 = new Swiper(".sc-cont .swiper", {
        navigation: {
            nextEl: ".sc-cont .btn-next",
            prevEl: ".sc-cont .btn-prev",
        },
        slidesPerView: 4.8,
        spaceBetween: 10,
        loop: true,
    });


})