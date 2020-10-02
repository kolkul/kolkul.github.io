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

$(window).on('load', function() {
  $('.mobile-animation').addClass('active');
  $('.main-text').addClass('active');
  $('.main-description').addClass('active');
  $('.start-btn').addClass('active');
})

$('.start-btn').click( function () {
  $('.bg').addClass('start');
  $('.logo').addClass('start');
  $('.mobile-animation').addClass('start');
  $('.main-text').addClass('start');
  $('.main-description').addClass('start');
  $('.start-btn').addClass('start');
  $('.go-container img').addClass('start');

  setTimeout(function () {
    $('.timer').addClass('start');
  },4500);

  setTimeout(function () {
    $('.video')[0].play();
  },500);

  setTimeout(function () {
    $('.bg').removeClass('start');
    $('.logo').removeClass('start');
    $('.timer').removeClass('start');
    $('.last-btn').addClass('active');
    $('.last-container').addClass('active');
  },11300);

  setTimeout(function () {
    $('.logo').addClass('non-transition');
    $('.score-text').addClass('non-transition');
    $('.score').addClass('non-transition');
    $('.date-box').addClass('non-transition');
    $('.date-description').addClass('non-transition');
    $('.last-btn').addClass('non-transition');
  },12000);
});
