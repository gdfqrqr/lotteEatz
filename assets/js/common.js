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
    var swiper3 = new Swiper(".sc-benefit .swiper", {
        navigation: {
            nextEl: ".sc-benefit .btn-next",
            prevEl: ".sc-benefit .btn-prev",
        },
        slidesPerView: 2.5,
        spaceBetween: 20,
        loop: true,
    });

    var swiper4 = new Swiper(".sc-quick.swiper", {
        navigation: {
            nextEl: ".sc-benefit .btn-next",
            prevEl: ".sc-benefit .btn-prev",
        },
        slidesPerView: 'auto',
        spaceBetween: 10,
    });

    var swiper5 = new Swiper(".sc-md .swiper", {
        navigation: {
            nextEl: ".sc-md .btn-next",
            prevEl: ".sc-md .btn-prev",
        },
        slidesPerView: 4.8,
        spaceBetween: 10,
    });


})