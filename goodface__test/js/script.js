if ($('.top-slider').length) {

  // top slider

  $('.top-slider').slick({
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: true,
    nextArrow: document.querySelector('#next'),
    prevArrow: document.querySelector('#prev'),
    asNavFor: '.bot-slider',
    focusOnSelect: true,
  });

  // bot slide

  $('.bot-slider').slick({
    infinite: false,
    arrows: false,
    fade: true,
    asNavFor: '.top-slider',
    swipe: false
  });

  // counter

  var slickList = $('.top-slider .top-slide');

  $(document).ready(function() {

    var slickLength = $(slickList).length;
    $('.sum-counter').html(slickLength);

    $('.counter').append( $('.top-slider .top-slide.slick-active').index()+1 );

    $('.top-slider').on(`init reInit`, function(event, slick) {
      $('.counter').html(1);
    });
    $('.top-slider').on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
      $('.counter').html(currentSlide + 1);
    });

  });

}
