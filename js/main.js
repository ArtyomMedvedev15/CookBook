$(function () {
  $('.slider__inner').slick({
    autoplay: true, /* this is the new line */
    autoplaySpeed: 4000,
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: true

  });
  for (var i = 1; i <= 6; i++) {
    $("#rateYo" + i).rateYo({
      normalFill: "#A0A0A0",
      starWidth: "15px",
      numStars: 5,
      rating: "80%",
      readOnly: true
    });
  }
  $(".gluten__rating").rateYo({
    normalFill: "#A0A0A0",
    starWidth: "15px",
    numStars: 5,
    rating: "80%",
    readOnly: true
  });

  $(window).scroll(function () {

    if ($(this).scrollTop() != 0) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });

  $('#toTop').click(function () {

    $('body,html').animate({ scrollTop: 0 }, 700);

  });


});