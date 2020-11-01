// Маска телефона

$('.phone-mask').inputmask('mask', {
  'mask': '+7 999 999 99 99'
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

if ($('.main-slider-section').length) {

  // Глайвный слайдер

  $('.main-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.bg-slider'
  });

  // Фон галвного слайдера

  $('.bg-slider').slick({
    fade: true,
    cssEase: 'linear',
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.main-slider'
  })
}

// Кнопки навигации (index.html)

if ($('.nav-row__btn-block > span').length) {
  $('.nav-row__btn-block > span').click(function () {
    $(this).toggleClass('active')
  });
}


// Слайдер в блоках выбора туров

if ($('.tour-box').length) {
  $('.tour-box__slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  });
}

// Слайдер архива событий

if ($('.archive-section').length) {
  $('.archive-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
      }
    }
    ]
  });
}

// Открыть/закрыть моб меню

$('.mob-menu-icon').click(function () {
  $('.mob-menu-block').addClass('active');
  blockBody();
})

$('.mob-menu-block').click(function(e) {
	if ($(e.target).closest('.mob-menu').length == 0) {
		$(this).removeClass('active');
    blockBody();
  }
});

$('.mob-menu__cancel svg').click(function () {
  $('.mob-menu-block').removeClass('active');
  blockBody();
})


// Акордеон в моб меню

var isReviewsAnimate = false;

$('.nav__open').click(function() {

  if (isReviewsAnimate) {
    return;
  } else {
    isReviewsAnimate = true;
  }

  if ($(this).hasClass('active')) {

    $(this).removeClass('active');
    $(this).closest('li').find('.nav__hidden-list').animate({
      height: 'hide'
    }, 400, function() {
      isReviewsAnimate = false;
    });

  } else if ($('.nav__open').hasClass('active')) {

    $('.nav__open').closest('ul').find('.nav__open').removeClass('active');
    $('.nav__hidden-list').animate({
      height: 'hide'
    }, 400, function() {
      isReviewsAnimate = false;
    });

    $(this).addClass('active');
    $(this).closest('li').find('.nav__hidden-list').animate({
      height: 'show'
    }, 400, function() {
      isReviewsAnimate = false;
    });

  } else  {

    $(this).addClass('active');
    $(this).closest('li').find('.nav__hidden-list').animate({
      height: 'show'
    }, 400, function() {
      isReviewsAnimate = false;
    });

  }

});

// Места в автобусе

if ($('.fill-slide__car-block').length) {
  $('.fill-slide__car-seat').click(function () {
    $(this).toggleClass('active')
  })
}

// Слайдер автобусов

if ($('.fill-slider').length) {
  $('.fill-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
      breakpoint: 740,
      settings: {
        variableWidth: false
      }
    }
    ]
  });
}

// Слайдер на странице TOUR

if ($('.tour-slider')) {
  $('.tour-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true
  });
}

// Кнопка открытия скрытого текста на странице TOUR

if ($('.tour-description.hidden').length) {
  var isMoreAnimate = false;
  $('.tour-description__more-btn').click(function () {

    if (isMoreAnimate) {
      return;
    } else {
      isMoreAnimate = true;
    }

    if ($(this).hasClass('active')) {

      $(this).removeClass('active');
      $(this).html('Читать далее');
      $('.tour-description.hidden').animate({
        height: 'hide'
      }, 0, function() {
        isMoreAnimate = false;
      });

    } else {

      $(this).addClass('active');
      $(this).html('Скрыть');
      $('.tour-description.hidden').animate({
        height: 'show'
      }, 0, function() {
        isMoreAnimate = false;
      });
    }
  })
}


// Календарь

if ($('#datepicker').length) {

  $.datepicker.regional['ru'] = {
  	closeText: 'Закрыть',
  	prevText: 'Предыдущий',
  	nextText: 'Следующий',
  	currentText: 'Сегодня',
  	monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
  	monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
  	dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
  	dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
  	dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
  	weekHeader: 'Не',
  	dateFormat: 'dd.mm.yy',
  	firstDay: 1,
  	isRTL: false,
  	showMonthAfterYear: false,
  	yearSuffix: ''
  };
  $.datepicker.setDefaults($.datepicker.regional['ru']);


  // Активные даты

  if (window.innerWidth < 740) {
    function enableAllTheseDays(date) {
       var cd = (date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getFullYear();
       return [ $.inArray(cd, enabledDays) != -1 ]
    }


    $("#datepicker").datepicker({
      numberOfMonths: 1,
      dateFormat: 'mm-dd-yyyy',
      beforeShowDay: enableAllTheseDays
    });

  } else {
    function enableAllTheseDays(date) {
       var cd = (date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getFullYear();
       return [ $.inArray(cd, enabledDays) != -1 ]
    }


    $("#datepicker").datepicker({
      numberOfMonths: 2,
      dateFormat: 'mm-dd-yyyy',
      beforeShowDay: enableAllTheseDays
    });
  }
}


// Количество пассажироа и цена


if ($('.counter').length) {
  $(document).ready(function(){

    var a = $('.counter input').val();
    if (a == '') {
      $('.counter input').val('0');
    }

    $('.counter input').blur();
    $('.price').html(0);
    $('.summ-price').html(0);

  });


  $('.minus').click(function() {
    var value_number = Number($(this).siblings('input').val(), 10);
    $(this).siblings('input').val( function(){
      if (value_number > 0) {
        return value_number - 1
      } else {
        return value_number;
      }
    });
    $('.counter input').blur();

    var priceOfPassenger = $(this).closest('.counter_block').find('.price').attr('data-price');

    $(this).closest('.counter_block').find('.price').html($(this).closest('.counter_block').find('.counter input').val() * priceOfPassenger)
  });


  $('.plus').click(function() {
    var value_number = Number($(this).siblings('input').val(), 10);
    $(this).siblings('input').val( function(){
      return value_number + 1
    });
    $('.counter input').blur()

    var priceOfPassenger = $(this).closest('.counter_block').find('.price').attr('data-price');

    $(this).closest('.counter_block').find('.price').html($(this).closest('.counter_block').find('.counter input').val() * priceOfPassenger)
  });


  $('.counter input').blur(function() {
    var a = $(this).val();

    for (var i=0; i<10; i++) {
      var a = $(this).val();
      var b = a[0]
      if (b == 0) {
        var withOutZero = a.slice(0);
        $(this).val(withOutZero);
      } else {
        break;
      }
    };
    if (a == '') {
      $(this).val('0');
    }

    var priceOfPassenger = $(this).closest('.counter_block').find('.price').attr('data-price');

    var summ = 0;
    $(".price").each(function(){
      var summPrice = $(this).text();
      summ += parseInt(summPrice);
      $('.summ-price').text(summ)
    })

    $(this).closest('.counter_block').find('.price').html($(this).closest('.counter_block').find('.counter input').val() * priceOfPassenger);
  });
}

// Авто-растягивание textarea

if ($('textarea').length) {
  var observe;
  if (window.attachEvent) {
    observe = function (element, event, handler) {
      element.attachEvent('on'+event, handler);
    };
  }
  else {
    observe = function (element, event, handler) {
      element.addEventListener(event, handler, false);
    };
  }
  function init (maxH) {
    var text = document.getElementById('text');
    var maxHeight=maxH;
    var oldHeight=  text.scrollHeight;
    var newHeight;
    function resize () {

      text.style.height = 'auto';
      newHeight= text.scrollHeight;
      if(newHeight>oldHeight && newHeight>maxHeight  )
      {
        text.style.height=oldHeight+'px';

      }
      else{
        text.style.height = newHeight+'px';
        oldHeight=  text.scrollHeight;
      }

    }
    /* 0-timeout to get the already changed text */
    function delayedResize () {
      window.setTimeout(resize, 0);
    }
    observe(text, 'change',  resize);
    observe(text, 'cut',     delayedResize);
    observe(text, 'paste',   delayedResize);
    observe(text, 'drop',    delayedResize);
    observe(text, 'keydown', delayedResize);

    resize();
  }
  init();
}

// Якоря

$('.tour-anchore').click(function(e) {

	e.preventDefault();

	var href = $(this).attr('href');
	var top = $(href).offset().top - 10;

	$('html, body').animate({
		scrollTop: top + 'px'
	}, 1000);

});

$('.tour-price-block__btn').click(function(e) {

	e.preventDefault();

	var href = $(this).attr('href');
	var top = $(href).offset().top - 10;

	$('html, body').animate({
		scrollTop: top + 'px'
	}, 1000);

});

// Переходы чтобы купить туры

if ($('.tour__buy-ticket').length) {

  $(document).on('click', '.tour__next-btn.one', function () {
    $('.tour__date-block').fadeOut(300, function() {
      $('.tour__passenger-block').fadeIn(300);
      $('.tour__next-btn.one').addClass('two');
      $('.tour__next-btn.one').removeClass('one')
    })
  });

  $(document).on('click', '.tour__next-btn.two', function () {
    $('.tour__passenger-block').fadeOut(300, function() {
      $('.tour__seat-block').fadeIn(300);
      $('.tour__next-btn.two').addClass('three');
      $('.tour__next-btn.two').removeClass('two');
    })
  });

  $(document).on('click', '.tour__next-btn.three', function () {
    $('.tour__seat-block').fadeOut(300, function() {
      $('.tour__last-block').fadeIn(300);
      $('.tour__next-btn.three').fadeOut(300);
      $('.tour__next-btn.three').removeClass('three');
    })
  });

  $(document).on('click', '.tour-summ-block__btn-to-back', function () {
    $('.tour__last-block').fadeOut(300, function() {
      $('.tour__date-block').fadeIn(300);
      $('.tour__next-btn').fadeIn(300);
      $('.tour__next-btn').addClass('one');
    })
  });

}
