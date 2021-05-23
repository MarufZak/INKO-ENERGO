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


if ($(window).width() > 535) {
    $('.header__link--last').click(function (e) {  
        e.preventDefault()
        $('.swiper-slide__write--body').addClass('hidden')
        $('.swiper-slide__call--body').removeClass('hidden');
        $('.swiper-slide__first--body').addClass('hidden');
        $('.swiper-slide__call--cancel').click(function () {  
            $('.swiper-slide__call--body').addClass('hidden');
            $('.swiper-slide__first--body').removeClass('hidden');
        })
    })
    
    $('.header__link--first').click(function (e) {  
        e.preventDefault()
        $('.swiper-slide__first--body').addClass('hidden');
        $('.swiper-slide__call--body').addClass('hidden');
        $('.swiper-slide__write--body').removeClass('hidden');
        $('.swiper-slide__write--cancel').click(function () {  
            $('.swiper-slide__first--body').removeClass('hidden');
            $('.swiper-slide__write--body').addClass('hidden');  
        })
        
    })
} else {
    $('.header__link--last').click(function (e) {  
        e.preventDefault()
        $('.sidebar__nav').removeClass('active')
        $('.sidebar__burger').removeClass('active')
        $('.swiper-slide__first--body').removeClass('active')
        $('.swiper-slide__call--body').removeClass('hidden');
        $('.header__link--last').removeClass('active')
        $('.header__link--first').removeClass('active')
        $('.swiper-slide__call--cancel').click(function () {  
            $('.swiper-slide__call--body').addClass('hidden');
            $('.swiper-slide__first--body').removeClass('active');
        })
    })

    $('.header__link--first').click(function (e) {  
        e.preventDefault()
        $('.sidebar__nav').removeClass('active')
        $('.sidebar__burger').removeClass('active')
        $('.swiper-slide__last--body').removeClass('active')
        $('.swiper-slide__call--body').removeClass('hidden');
        $('.header__link--first').removeClass('active')
        $('.header__link--last').removeClass('active')
        $('.swiper-slide__last--cancel').click(function () {  
            $('.swiper-slide__call--body').addClass('hidden');
            $('.swiper-slide__first--body').removeClass('active');
        })
    })
}
