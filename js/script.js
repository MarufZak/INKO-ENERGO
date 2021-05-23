let swiper = new Swiper('.swiper',{
    wrapperClass: "swiper__wrapper",
    slideClass: "swiper-slide",
    direction: "vertical",
    mousewheel: {
        sensitivity: 1
    },
    pagination: {
        el: ".swiper__pagination",
        type: 'bullets',
        bulletClass: "swiper__bullet",
        bulletActiveClass: "swiper__bullet-active"
    },
    speed: 800,

})

$('.sidebar__burger').click(function () {  
    $('.sidebar__nav').toggleClass('active');
    $('.swiper-slide__first--body').toggleClass('active');
    $('.sidebar__burger').toggleClass('active');
    $('.header__link--first').toggleClass('active');
    $('.header__link--last').toggleClass('active');
})

$('.sidebar__link').click(function (e) {  
    e.preventDefault()
})