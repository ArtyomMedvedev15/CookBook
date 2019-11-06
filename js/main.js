$(function(){
    $('.slider__inner').slick({
        autoplay: true, /* this is the new line */
        autoplaySpeed: 4000,
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: true
 
    });
});