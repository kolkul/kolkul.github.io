// Slider (index.html)

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

  $('.i-slider-block').on('afterChange', function(event, slick, currentSlide, nextSlide) {
    sliderLine();
  });

  sliderLine();
}

// Slider's line

function sliderLine() {

  var slidesCount = $('.i-slider-block .slick-dots li').length;
  var lineWidth = 100 / slidesCount;

  $('.i-slider-s-line').css({width: lineWidth + '%'});

  var linePieceWidth = $('.i-slider-s-line').width();
  var activeSlideIndex = $('.i-slider-block .slick-dots li.slick-active').index();

  $('.i-slider-s-line').css({transform: 'translateX(' + (linePieceWidth * activeSlideIndex) + 'px)'});

}

// Phone mask

$('.phone-mask').inputmask('mask', {
  'mask': '+38 999 999 99 99'
});


// Print only number

$('.num').bind("change keyup input click", function() {
  if (this.value.match(/[^0-9]/g)) {
    this.value = this.value.replace(/[^0-9]/g, '');
  }
});

// Mobile menu (header)

$('.mob-menu-icon').click(function() {
  $('.mob-nav').toggleClass('active');
  blockBody();
});

// Search filter (index.html)

var isReviewsAnimate = false;

$('.main-button').click(function() {

  if (isReviewsAnimate) {
    return;
  } else {
    isReviewsAnimate = true;
  }

  if (window.innerWidth < 1280) {

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
  } else {

    if ($(this).hasClass('active')) {

      $(this).removeClass('active');
      $('.i-search-filter-container').animate({
        width: 'hide'
      }, 500, function() {
        isReviewsAnimate = false;
      });

    } else {

      $(this).addClass('active');
        $('.i-search-filter-container').animate({
        width: 'show'
      }, 500, function() {
        isReviewsAnimate = false;
      });
    }
  }
});


// Tabs (listings.html)

var isAnimate = false;

$(".item").not(":first").hide();
$('.tabs .tab').click(function() {

  if (isAnimate) {
    return;
  } else {
    isAnimate = true;
  }

  var index = $(this).index();
  $('.tab.active').removeClass('active');

  $('.item.active').animate({
    opacity: 'hide'
  }, 300, function() {
    $(this).removeClass('active');
    $('.tab').eq(index).addClass('active');

    $('.item').eq(index).animate({
      opacity: 'show'
    }, 300, function() {
      $(this).addClass('active');

      isAnimate = false;

    });
  });
});


// Slider fotorama (listings.html)

if (window.innerWidth < 1280) {
  $('.fotorama').getAttribute('data-maxheight');
  $('.fotorama').removeAttribute('data-maxheight');
  $('.fotorama').setAttribute('data-maxheight', '220' + 'px')
} else {
  $('.fotorama')
}
