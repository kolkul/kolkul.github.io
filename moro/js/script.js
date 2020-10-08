// Маска телефона

$('.phone-mask').inputmask('mask', {
  'mask': '+38 999 999 99 99'
});


// Ввод только чисел

$('.num').bind("change keyup input click", function() {
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

    $('body').addClass('no-scroll');
    $('body').css({
      top: '-' + scrollTop + 'px'
    });
    $('body').attr('data-scroll', scrollTop);

  }

}

$(document).ready(function() {
  $('.main-section__slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1
  });

  $('.i-news-section__slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  });

  $('.i-exc-section__slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipe: true,
    draggable: true,
    variableWidth: true,
    swipeToSlide: true,
    touchThreshold: 150
  });


  $('.i-insta-section__slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 650,
    slidesToShow: 4,
    slidesToScroll: 4,
    variableWidth: true
  });
});
