// Маска телефона

$('.phone-mask').inputmask('mask', {
  'mask': '+380 99 999 9999',
  showMaskOnHover: false
});


// Ввод только чисел

$('.num').bind("change keyup input click", function () {
  if (this.value.match(/[^0-9]/g)) {
    this.value = this.value.replace(/[^0-9]/g, '');
  }
});

// Блокировка скроллинга Body

function blockBody() {
  if ($('body').hasClass('no-scroll')) {
    let scrollTop = $('body').attr('data-scroll');

    $('body').removeClass('no-scroll');
    $('body').attr('style', '');

    $(document).scrollTop(scrollTop);
  } else {
    let scrollTop = $(document).scrollTop();
    $('body').css({
      top: '-' + scrollTop + 'px'
    });

    $('body').addClass('no-scroll');
    $('body').attr('data-scroll', scrollTop);
  }
}


// header hide

$(window).scroll(function () {
  var scroll = $(this).scrollTop();

  if (scroll > 0) {
    $('.header').addClass('fill');
  } else {
    $('.header').removeClass('fill');
  }
});


// main block header animation

function changeLettersWidth(ths) {
  var activeLetters = $(ths).find('.word-end span.active');
  var widthActiveLetters = activeLetters.width();

  $(ths).find('.word-end').css('width', widthActiveLetters)
}

$(window).on('load', function () {
  $('.main-section__header').each(function () {

    var maxWordsBoxWidth = Math.ceil(Math.max.apply(Math, $(this).find('.change-words span').map(function () {
      return $(this).width();
    }).get()));
    $(this).find('.change-words').attr('style', 'width: ' + maxWordsBoxWidth + 'px;');

    changeLettersWidth(this);

    setInterval(() => {

      var getEl = $(this).find('.change-words span');
      var activeEl = $(this).find('.change-words span.active')
      var activeElIndex = activeEl.index();
      var elLength = getEl.length - 1;

      activeEl.removeClass('active').addClass('top').clone().appendTo($(this).find('.change-words'));
      getEl.eq(activeElIndex + 1).addClass('active');

      setTimeout(() => {
        $(this).find('.change-words span').removeClass('top');
        $(this).find('.change-words span').first().remove();
      }, 700)


      var getActiveElAttr = $(this).find('.change-words span.active').attr('data-letter');

      if (getActiveElAttr == 'm') {

        $(this).find('.word-end .active').removeClass('active');
        $(this).find('.word-end span.m').addClass('active');

        changeLettersWidth(this);

      } else if (getActiveElAttr == 'f') {

        $(this).find('.word-end .active').removeClass('active');
        $(this).find('.word-end span.f').addClass('active');

        changeLettersWidth(this);

      }

    }, 3000)
  })
});


// header anchor

$(document).ready(function () {
  $('.header__nav').on("click", "a", function (event) {
    event.preventDefault();

    var id = $(this).attr('href');
    var top = $(id).offset().top - 100;

    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });
});


// validation

$('input[type="submit"]').on('click', function (e) {
  e.preventDefault();

  $(this).closest('form').find('.input-box input').each(function () {

    if (this.value.trim().length < 1 || $(this).val().trim().split('').includes('_')) {
      $(this).addClass('wpcf7-not-valid');
    }

  });

  if ($(this).closest('form').find('.input-box textarea').length) {
    $(this).closest('form').find('.input-box textarea').each(function () {

      if (this.value.length < 1) {
        $(this).addClass('wpcf7-not-valid');
      }

    });
  }

});

$('.input-box input').on('input', function () {
  $(this).removeClass('wpcf7-not-valid');
});

$('.input-box textarea').on('input', function () {
  $(this).removeClass('wpcf7-not-valid');
});


// scroll for modal

var scrollWidth;

function getScrollBarWidth() {
  let $divs = $('<div class="div1" style="width: 100vw; overflow-y: scroll;"><div class="div2" style="width: 100%;"></div></div>');
  $('body').append($divs);
  let width1 = $('.div1').width(),
    width2 = $('.div2').width();
  scrollWidth = width1 - width2;
  $divs.remove();
}

getScrollBarWidth();

function bodyScroll() {
  $('body').css('padding-right', scrollWidth + 'px');
  $('.header').css('right', scrollWidth + 'px');
}


// pop-up

function scrollBlockForPC() {
  // if ($(window).width() > 1250) {
    blockBody();
  // }
}

$('.open-pop-up').on('click', function () {
  $('.pop-up-container').addClass('active');
  bodyScroll();
  scrollBlockForPC();
});

$('.open-pop-up-thanks').on('click', function () {
  if (($(this).closest('form').find('input').hasClass('wpcf7-not-valid')) || ($(this).closest('form').find('textarea').hasClass('wpcf7-not-valid'))) {
    return;
  }

  if ($(this).closest('.pop-up-wrapper').length) {

    $(this).closest('.pop-up-wrapper').removeClass('active');
    $('.pop-up-thanks').addClass('active');

  } else {

    $('.pop-up-thanks').addClass('active');
    scrollBlockForPC();

  }

  bodyScroll();
});

$('.open-pop-up-question').on('click', function () {
  $('.pop-up-container-question').addClass('active');
  bodyScroll();
  scrollBlockForPC();
});

$('.pop-up-wrapper').on('click', function (e) {
  if ($(e.target).closest('.pop-up-content').length == 0) {
    $(this).find('.close-pop-up').click();
  }
});

$('.close-pop-up').on('click', function () {
  $(this).closest('.pop-up-wrapper').removeClass('active');
  $('body').css('padding-right', 0 + 'px');
  $('.header').css('right', 0 + 'px');
  scrollBlockForPC();

  if ($(this).closest('.pop-up-video').length) {
    $(this).closest('.pop-up-video').find('#video').get(0).pause();
  }
})

// video pop-up

$('.open-video').on('click', function () {

  scrollBlockForPC();
  bodyScroll();

  $('.pop-up-video').addClass('active');
  $('#video').get(0).play();

});


// approach section -- accordion

$('.approach-box__more-btn').on('click', function () {
  var getHiddenText = $(this).closest('.approach-block__box').find('.approach-box__text');
  var getHiddenTextBlockHeight = getHiddenText.find('p').height();

  getHiddenText.addClass('active');
  getHiddenText.css({
    'height': getHiddenTextBlockHeight + 'px'
  });

  $(this).slideToggle(400);
});


// questions section -- accordion

var openAnswerAnimation = false;

$('.questions-box__question').on('click', function () {

  if (!openAnswerAnimation) {
    var getQuestionContainer = $(this).closest('.questions-section__box');

    getQuestionContainer.toggleClass('active');
    getQuestionContainer.find('.questions-box__answer').slideToggle(200);

    openAnswerAnimation = true;

    setTimeout(function () {
      openAnswerAnimation = false;
    }, 200)
  }

});


// button "more questions"

if (!$('.questions-block__hidden-questions').length) {
  $('.open-more-questions').remove();
}

$('.open-more-questions').on('click', function () {
  $('.questions-block__hidden-questions').slideDown(700);
  $(this).slideUp(400);
});


// slider

$(window).on('load', function () {

  var slideNumber = $('.slider').find('.slide').length;

  if (slideNumber > 4) {
    $('.slider__dots-number').html('+' + (slideNumber - 4))
  } else if (slideNumber <= 4) {
    $('.slider__dots-number').remove();
  }

  $('.slider').slick({
    infinite: true,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 4500,
    variableWidth: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'ease',
    speed: 700,
    draggable: true,
    edgeFriction: 15,
    touchThreshold: 125,
    swipeToSlide: true,
    swipe: true,
    prevArrow: $('.prev-arrow'),
    nextArrow: $('.next-arrow'),
    asNavFor: '.dots-slider',
    responsive: [
      {
        breakpoint: 750,
        settings: {
          arrows: false,
          touchThreshold: 225
        }
      }
    ]
  });

  $('.dots-slider').slick({
    infinite: true,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 4500,
    variableWidth: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'ease',
    speed: 700,
    swipeToSlide: false,
    swipe: false,
    prevArrow: $('.prev-arrow'),
    nextArrow: $('.next-arrow'),
    asNavFor: '.slider',
    zIndex: 1,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          arrows: false
        }
      }
    ]
  });

  $('.dots-slider').find('.slick-current').addClass('circle');

  $('.dots-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $(this).find('.slick-current').addClass('hide');
  });

  $('.dots-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $('.dots-slide').removeClass('circle hide');
    $(this).find('.slick-current').addClass('circle');
  });


})

// back to top btn

$('.btn-to-top').on('click', function (e) {

  e.preventDefault();

  $('html, body').animate({
    scrollTop: '0px'
  }, 1500);

});


// scroll animation

function animation(scrollTop) {

  $('.animation').not('.animated').each(function () {

    var offsetTop = $(this).offset().top;
    var windowHeight = window.innerHeight;

    if ((scrollTop + windowHeight) > offsetTop) {
      $(this).addClass('animated');
    }
  });

}


// function hover

function hover(ths, parent) {
  $(ths).closest(parent).find('.hover').addClass('on');
  $(ths).removeClass('on');
}

$('.hover').mouseenter(function () {

  if ($(this).closest('.header').length) {
    hover(this, '.header');
  } else if ($(this).closest('.footer').length) {
    hover(this, '.footer');
  }

})

$('.hover').mouseleave(function () {
  $('.hover').removeClass('on');
})


// resize texarea

$('textarea').on('input', function (e) {
  this.style.height = '1px';
  this.style.height = (this.scrollHeight + 1) + 'px';

  if ($(this).closest('.pop-up-wrapper').find('.pop-up').outerHeight(true) > $(window).height()) {
    $('body').removeClass('scroll padding');
    $('body').addClass('padding');
  } else {
    $('body').removeClass('scroll padding');
    $('body').addClass('scroll');
  }
});


// video

var mainVideo = $('#the-video');

var medQualVersionSrc = mainVideo.attr('data-video-mob');
var highQualVersionSrc = mainVideo.attr('data-video');

if ($(window).width() < 750) {
  mainVideo.append("<source type='video/mp4' src='" + medQualVersionSrc + "' />");
} else {
  mainVideo.append("<source type='video/mp4' src='" + highQualVersionSrc + "' />");
}


// ios viewport

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);


$(window).scroll(function () {
  var scrollTop = $(this).scrollTop();

  // Анимации подплываний
  animation(scrollTop);
});

$(window).on('load', function () {
  setTimeout(function () {
    $('.pop-up-wrapper').removeClass('hide');
  }, 400)
  $(window).scroll();
});