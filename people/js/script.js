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

// Main page - btn

$('.main__btn').click(function() {
  $('.main-page').addClass('active');
  $('body').removeClass('fixed');


  setTimeout(function() {

    $('.main-page').remove();

    $('.header').addClass('active');

    $('.inn-container .section__header').addClass('ani');
    $('.inn-container .section__header-description').addClass('ani');
    $('.inn-list-item').addClass('ani');


  }, 600);

})


if ($(window).width() > 1279) {
  // scroll blocks

  var animationBlocking = false;
  var animationTimer = '';

  function prevSlide() {

    var activeLength = $('.scroll-block.active').length - 1;

    if (activeLength == 0) {
      return;
    } else {
      $('.scroll-block.active').eq(activeLength).removeClass('active');
    }
    numberBlock();

    blackBlock();


  }

  function nextSlide() {

    var activeLength = $('.scroll-block.active').length - 1;
    var blocksLength = $('.scroll-block').length - 1;

    if (activeLength == blocksLength) {
      return;
    } else {
      $('.scroll-block.active').next().addClass('active');
    }

    numberBlock();

    blackBlock();

  }

  var activeSlider = false;
  var disabledBlockScroll = false;


  $('body').on('mousewheel', function(event) {

    if (disabledBlockScroll) {
      return;
    }

    if (activeSlider) {
      return;
    }

    if (animationBlocking) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    } else {
      animationBlocking = true;
      animationTimer = setTimeout(function() {
        animationBlocking = false;
      }, 1500);
    }

    if ($('.main-page').length > 0) {
      return;
    }
    if (event.deltaY >= 0) {
      prevSlide();
    } else {
      nextSlide();
    }

  });

  // black block

  function blackBlock() {
    if ($('.black-block').hasClass('active')) {
      $('.footer').addClass('black');
      $('.header').addClass('black');
      $('.left-container').addClass('black');
    } else {
      $('.footer').removeClass('black');
      $('.header').removeClass('black');
      $('.left-container').removeClass('black');
    }

    if ($('.clear-block').hasClass('active')) {
      $('.footer').removeClass('black');
      $('.header').removeClass('black');
      $('.left-container').removeClass('black');
    }
  }
}

// right slider

function addTextClasses(side) {

  // if (window.innerWidth < 1260) {
  //   return;
  // }

  var topItemsHTML = $('.comp-list__top-hidden-items').html();
  $('.comp-list').prepend(topItemsHTML);

  var bottomItemsHTML = $('.comp-list__bottom-hidden-items').html();
  $('.comp-list').append(bottomItemsHTML);

  var items = $('.comp-list .comp-list-item');
  var activeIndex = $('.comp-list .comp-list-item.center').index();
  var maxIndex = items.length - 1;

  if (side == 'top' && activeIndex == 0) {
    return;
  } else if (side == 'top') {
    activeIndex--;
  }

  if (side == 'bottom' && activeIndex == maxIndex) {
    return;
  } else if (side == 'bottom') {
    activeIndex++;
  }

  items.removeClass('top1 top2 center bottom1 bottom2 hidden-top hidden-bottom');
  items.addClass('hidden');

  var top_1 = '';
  var top_2 = '';
  var bottom_1 = '';
  var bottom_2 = '';

  if ((activeIndex - 1) >= 0) {
    top_1 = items.eq(activeIndex - 1);
    top_1.addClass('top1');
    top_1.removeClass('hidden');
  }

  if ((activeIndex - 2) >= 0) {
    top_2 = items.eq(activeIndex - 2);
    top_2.addClass('top2');
    top_2.removeClass('hidden');
  }

  if ((activeIndex + 1) <= maxIndex) {
    bottom_1 = items.eq(activeIndex + 1);
    bottom_1.addClass('bottom1');
    bottom_1.removeClass('hidden');
  }

  if ((activeIndex + 2) <= maxIndex) {
    bottom_2 = items.eq(activeIndex + 2);
    bottom_2.addClass('bottom2');
    bottom_2.removeClass('hidden');
  }

  items.eq(activeIndex).addClass('center');
  items.eq(activeIndex).removeClass('hidden');

  var firstItemTop = '';
  var lastItemBottom = '';

  if (top_1.length) {
    firstItemTop = top_1;
  } else if (top_2.length) {
    firstItemTop = top_2;
  }

  if (firstItemTop.length) {

    var firstItemTopIndex = firstItemTop.index();

    for (var i = 0; i < firstItemTopIndex; i++) {
      var item = items.eq(i);
      if (item.hasClass('top1') == false && item.hasClass('top2') == false) {
        item.addClass('hidden-top');
      }
    }

  }

  if (bottom_2.length) {
    lastItemBottom = bottom_2;
  } else if (bottom_1.length) {
    lastItemBottom = bottom_1;
  }

  if (lastItemBottom.length) {

    var lastItemBottomIndex = lastItemBottom.index();

    for (var i = lastItemBottomIndex; i <= maxIndex; i++) {
      var item = items.eq(i);
      if (item.hasClass('bottom1') == false && item.hasClass('bottom2') == false) {
        item.addClass('hidden-bottom');
      }
    }

  }

}



var animationRightBlocking = false;
var animationRightTimer = '';

$('.comp-list').mouseover(function() {
  disabledBlockScroll = true;
});

$('.comp-list').mouseout(function() {
  disabledBlockScroll = false;
});

$('.comp-list').on('mousewheel', function(event) {

  if (animationRightBlocking) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  } else {
    animationRightBlocking = true;
    animationRightTimer = setTimeout(function() {
      animationRightBlocking = false;
    }, 700);
  }

  if (event.deltaY >= 0) {
    addTextClasses('top');
  } else {
    addTextClasses('bottom');
  }
});

// active number

function numberBlock() {
  var count = $('.num-block.active').length;
  var index = count - 1;

  if ($('.clear-block').hasClass('active')) {
    $('.left-menu-pc .line__dot').removeClass('active');
  } else {
    $('.left-menu-pc .line__dot').removeClass('active');
    $('.left-menu-pc .line__dot').eq(index).addClass('active');
  }
}




// anchor

$('.left-menu-pc .line__dot').click(function() {

  if ($(this).index() == 0) {
    $('.footer').removeClass('black');
    $('.header').removeClass('black');
    $('.left-menu-pc').removeClass('black');
  }

  var index = $(this).index();
  $('.left-menu-pc .line__dot').removeClass('active');
  $('.left-menu-pc .line__dot').eq(index).addClass('active');

  var href = $(this).attr('data-href');
  var blockIndex = $(href).index();

  $('.scroll-block').removeClass('active')
  $('.scroll-block').eq(0).addClass('active')

  for (var i = 0; i < blockIndex; i++) {
    nextSlide();
  }
})


// mobile anchor

if ($(window).width() < 1280) {
  $('.mob-menu .line__dot').click(function() {

    var href = $(this).attr('data-href');

    var topPosition = $(href).offset().top - 80;

    $('.mob-menu').removeClass('active');

    $('html, body').animate({
      scrollTop: topPosition
    }, 1000);

  });

  $('.header__mob-menu').click(function() {
    $('.mob-menu').addClass('active');
  });

  $(document).on('scroll', function() {

    var scrollTop = $(this).scrollTop();
    var scrollBottom = scrollTop + window.innerHeight;

    // Меняем цвет хедера и футера на черных блоках


    $('.black-with-scroll').each(function() {
      var height = $(this).outerHeight();
      var top = $(this).offset().top - 50;
      var bottom = top + height;

      if (scrollTop > top && bottom > scrollTop) {
        $('.header').addClass('black');
        return false;
      } else {
        $('.header').removeClass('black');
      }
    });

    $('.black-with-scroll').each(function() {
      var height = $(this).outerHeight();
      var top = $(this).offset().top - 50;
      var bottom = top + height;

      if (scrollBottom > top && scrollBottom < bottom) {
        $('.footer').addClass('black');
        return false;
      } else {
        $('.footer').removeClass('black');
      }
    });

    $('.scroll-animation').not('.animate-ready').each(function () {
      var top = $(this).offset().top + 100;
      if (scrollBottom > top) {
        $(this).addClass('animate-ready');
      }
    });

  });


}


// parallax

if ($('.inn-img').is('#parallax-img1') && $(window).width() > 1279) {
  var m_parallaximg1 = document.getElementById('m-left-wave');
  var m_parallaximg2 = document.getElementById('m-right-wave');

  var parallaxImg1 = document.getElementById('parallax-img1');
  var parallaxImg2 = document.getElementById('parallax-img2');
  var parallaxImg3 = document.getElementById('parallax-img3');
  var parallaxImg4 = document.getElementById('parallax-img4');
  var parallaxImg5 = document.getElementById('parallax-img5');
  var parallaxImg6 = document.getElementById('parallax-img6');
  var parallaxImg7 = document.getElementById('parallax-img7');
  var parallaxImg8 = document.getElementById('parallax-img8');
  var parallaxImg9 = document.getElementById('parallax-img9');
  var parallaxImg10 = document.getElementById('parallax-img10');
  var parallaxImg11 = document.getElementById('parallax-img11');
  var parallaxImg12 = document.getElementById('parallax-img12');
  var parallaxImg13 = document.getElementById('parallax-img13');
  var parallaxImg14 = document.getElementById('parallax-img14');
  var parallaxImg15 = document.getElementById('parallax-img15');
  var parallaxImg16 = document.getElementById('parallax-img16');
  var parallaxImg17 = document.getElementById('parallax-img17');
  var parallaxImg18 = document.getElementById('parallax-img18');
  var parallaxImg19 = document.getElementById('parallax-img19');
  var parallaxImg20 = document.getElementById('parallax-img20');
  var parallaxImg21 = document.getElementById('parallax-img21');
  var parallaxImg22 = document.getElementById('parallax-img22');

  var alliParImg1 = document.getElementById('alli-par1');
  var alliParImg2 = document.getElementById('alli-par2');
  var alliParImg3 = document.getElementById('alli-par3');
  var alliParImg4 = document.getElementById('alli-par4');
  var alliParImg5 = document.getElementById('alli-par5');
  var alliParImg6 = document.getElementById('alli-par6');
  var alliParImg7 = document.getElementById('alli-par7');
  var alliParImg8 = document.getElementById('alli-par8');
  var alliParImg9 = document.getElementById('alli-par9');

  var lastParImg1 = document.getElementById('last-img1');
  var lastParImg2 = document.getElementById('last-img2');
  var lastParImg3 = document.getElementById('last-img3');
  var lastParImg4 = document.getElementById('last-img4');
  var lastParImg5 = document.getElementById('last-img5');
  var lastParImg6 = document.getElementById('last-img6');


  var parallaxInstance = new Parallax(parallaxImg1);
  var parallaxInstance = new Parallax(parallaxImg2);
  var parallaxInstance = new Parallax(parallaxImg3);
  var parallaxInstance = new Parallax(parallaxImg4);
  var parallaxInstance = new Parallax(parallaxImg5);
  var parallaxInstance = new Parallax(parallaxImg6);
  var parallaxInstance = new Parallax(parallaxImg7);
  var parallaxInstance = new Parallax(parallaxImg8);
  var parallaxInstance = new Parallax(parallaxImg9);
  var parallaxInstance = new Parallax(parallaxImg10);
  var parallaxInstance = new Parallax(parallaxImg11);
  var parallaxInstance = new Parallax(parallaxImg12);
  var parallaxInstance = new Parallax(parallaxImg13);
  var parallaxInstance = new Parallax(parallaxImg14);
  var parallaxInstance = new Parallax(parallaxImg15);
  var parallaxInstance = new Parallax(parallaxImg16);
  var parallaxInstance = new Parallax(parallaxImg17);
  var parallaxInstance = new Parallax(parallaxImg18);
  var parallaxInstance = new Parallax(parallaxImg19);
  var parallaxInstance = new Parallax(parallaxImg20);
  var parallaxInstance = new Parallax(parallaxImg21);
  var parallaxInstance = new Parallax(parallaxImg22);

  var parallaxInstance = new Parallax(alliParImg1);
  var parallaxInstance = new Parallax(alliParImg2);
  var parallaxInstance = new Parallax(alliParImg3);
  var parallaxInstance = new Parallax(alliParImg4);
  var parallaxInstance = new Parallax(alliParImg5);
  var parallaxInstance = new Parallax(alliParImg6);
  var parallaxInstance = new Parallax(alliParImg7);
  var parallaxInstance = new Parallax(alliParImg8);
  var parallaxInstance = new Parallax(alliParImg9);

  var parallaxInstance = new Parallax(lastParImg1);
  var parallaxInstance = new Parallax(lastParImg2);
  var parallaxInstance = new Parallax(lastParImg3);
  var parallaxInstance = new Parallax(lastParImg4);
  var parallaxInstance = new Parallax(lastParImg5);
  var parallaxInstance = new Parallax(lastParImg6);

  var parallaxInstance = new Parallax(m_parallaximg1);
  var parallaxInstance = new Parallax(m_parallaximg2);
}

// якорь с первой страницы



// Мобайл скрипты

if (window.innerWidth < 1280) {

  $('.inn-list li').click(function() {
    var href = $(this).attr('data-href');
    var top = $(href).offset().top - 100;
    $('html, body').animate({
      scrollTop: top
    }, 1500);
  });

} else if ($('.inn-list li').length) {

  $('.inn-list li').click(function () {
    var href = $(this).attr('data-href');
    $('.line__dot[data-href="' + href + '"]').click();
  });

}

// community animation

$(window).on('load', function() {
  $('.comm__box').addClass('ani');
});
