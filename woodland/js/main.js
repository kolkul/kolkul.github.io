if ($('.i-slider-block').length) {

  $('.i-slider-block').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    centerMode: true,
    dots: true,
    variableWidth: true,
    responsive: [{
      breakpoint: 1280,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });

  var slidesCount = $('.i-slider-block .slick-dots li').length;

  if (slidesCount < 10) {
    slidesCount = '0' + slidesCount;
  }

  $('.i-slider-block .i-slider-l-line .i-slider-s-line').css({
    width: (100 / slidesCount) + '%'
  });
}

function changeSlide(sliderContainer) {

  var activeSlide = $(sliderContainer).find('.slick-dots .slick-active').index();
  var lineWidth = $(sliderContainer).find('.i-slider-l-line .i-slider-s-line').width();

  $(sliderContainer).find('.i-slider-l-line .i-slider-s-line').css({
    transform: 'translateX(' + (lineWidth * activeSlide) + 'px)'
  });

}




$('.phone-mask').inputmask('mask', {
  'mask': '+38 999 999 99 99'
});


// Ввод только чисел

$('.num').bind("change keyup input click", function() {
  if (this.value.match(/[^0-9]/g)) {
    this.value = this.value.replace(/[^0-9]/g, '');
  }
});

$('.mob-menu-icon').click(function() {
  $('.mob-nav').toggleClass('active');
  blockBody();
});

var isReviewsAnimate = false;

$('.main-button').click(function() {

  if (isReviewsAnimate) {
    return;
  } else {
    isReviewsAnimate = true;
  }

  if ($(this).hasClass('active')) {

    $(this).removeClass('active');
    $('.hidden-list-block').animate({
      height: 'hide'
    }, 500, function() {
      isReviewsAnimate = false;
    });

  } else {

    $(this).addClass('active');
      $('.hidden-list-block').animate({
      height: 'show'
    }, 500, function() {
      isReviewsAnimate = false;
    });
  }

});
