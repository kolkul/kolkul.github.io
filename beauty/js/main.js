// HEADER SLIDER

$(document).ready(function () {
  $('.header-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="prev arrows"></button>',
    nextArrow: '<button type="button" class="next arrows"></button>',
    dots: true,
    dotsClass: 'dots',
    asNavFor: '.bg-slider',
    responsive: [
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });
$('.bg-slider').slick({
    fade: true,
    arrows: false,
    swipe: false,
    draggable: false
  });
});

// CONTENT SLIDER

$(document).ready(function(){
  $('.catalog-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<button type="button" class="prev arrows main-arrow-prev main-arrows"></button>',
    nextArrow: '<button type="button" class="next arrows main-arrow-next main-arrows"></button>',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
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
});

// BLOG SLIDER

$(document).ready(function(){
  $('.blog-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<button type="button" class="prev arrows main-arrow-prev main-arrows"></button>',
    nextArrow: '<button type="button" class="next arrows main-arrow-next main-arrows"></button>',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
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
});

// ACCOUNT TAB

  var isAnimate = false;
  $(".item").not(":first").hide();
  $('.tab-box .tab').click(function () {

        if (isAnimate) {
          return;
        } else {
          isAnimate = true;
        }

        var index = $(this).index();
        $('.tab.active').removeClass('active');

      $('.item.active').animate({opacity: 'hide'}, 350, function () {
        $(this).removeClass('active');
        $('.tab').eq(index).addClass('active');

      $('.item').eq(index).animate({opacity:  'show'}, 350, function () {
        $(this).addClass('active');

        isAnimate = false;

      });
    });
  });

  // REVIEW MORE BUTTON

  var isReviewsAnimate = false;

  $('.p-review-more-btn').click(function () {

    if (isReviewsAnimate) {
      return;
    } else {
      isReviewsAnimate = true;
    }

    if ($(this).hasClass('active')) {

      $(this).removeClass('active');
      $(this).html('Показать еще');
      $('.p-review__review-hidden-list').animate({height: 'hide'}, 500, function () {
        isReviewsAnimate = false;
      });

    } else {

      $(this).addClass('active');
      $(this).html('Скрыть');
      $('.p-review__review-hidden-list').animate({height: 'show'}, 500, function () {
        isReviewsAnimate = false;
      });
    }

  });

// PRODUCT FOTO

$('.p-small-img-box__img').click(function () {

  var src = $(this).find('img').attr('src');
  $('.p-foto-block__big-img img').animate({opacity: 'hide'}, 350, function () {
    $(this).attr('src', src);
    $('.p-foto-block__big-img img').animate({opacity: 'show'}, 350);

  });
});
