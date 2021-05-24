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
        bulletActiveClass: "swiper__bullet-active",
        clickable: true
    },
    speed: 1000,

})

$('.sidebar__burger').click(function () {  
    $('.sidebar__burger').toggleClass('active');
    $('.sidebar__nav').toggleClass('active');
    $('.swiper-slide__first--body').toggleClass('active');
    $('.header__link--first').toggleClass('active');
    $('.header__link--last').toggleClass('active');
})

$('.sidebar__link').click(function (e) {  
    e.preventDefault()
})


$('.header__link--last').click(function (e) {  
    e.preventDefault()
    $('.sidebar__nav').removeClass('active')
    $('.sidebar__burger').removeClass('active')
    $('.sidebar__burger').addClass('disabled')
    $('.swiper-slide__first--body').removeClass('active')
    $('.swiper-slide__first--body').addClass('hidden');
    $('.swiper-slide__write--body').addClass('hidden')
    $('.swiper-slide__call--body').removeClass('hidden');
    $('button').prop('disabled', true);
    swiper.slideTo(0,800)
    swiper.disable()
    $('.swiper-slide__call--cancel').click(function () {  
        $('.header__link').removeClass('active')
        $('.swiper-slide__call--body').addClass('hidden');
        $('.swiper-slide__first--body').removeClass('hidden');
        $('.sidebar__burger').removeClass('disabled')
        $('button').prop('disabled', false);
        swiper.enable()
    })
})

$('.header__link--first').click(function (e) {  
    e.preventDefault()
    $('.sidebar__nav').removeClass('active')
    $('.sidebar__burger').removeClass('active')
    $('.sidebar__burger').addClass('disabled')
    $('.swiper-slide__first--body').removeClass('active')
    $('.swiper-slide__first--body').addClass('hidden');
    $('.swiper-slide__call--body').addClass('hidden')
    $('.swiper-slide__write--body').removeClass('hidden');
    swiper.slideTo(0,800)
    $('button').prop('disabled', true);
    swiper.disable()
    $('.swiper-slide__write--cancel').click(function () {  
        $('.header__link').removeClass('active')
        $('.swiper-slide__call--body').addClass('hidden');
        $('.swiper-slide__write--body').addClass('hidden');
        $('.swiper-slide__first--body').removeClass('hidden');
        $('.sidebar__burger').removeClass('disabled')
        $('button').prop('disabled', false);
        swiper.enable()
    })
    
})

