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

$(document).ready(function(){
  $('.slider').slick({
    arrows: false,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    dots: true,
    swipeToSlide: true
  });
});

$(window).on('load', function () {
  $('.logo-block').addClass('active');
  $('.text').addClass('active')
  $('.slider').addClass('active');
  $('.btn').addClass('active')
})
