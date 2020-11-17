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


$(".header__menu-icon").click(function() {
  blockBody();
  $(this).find('.hamburger').toggleClass("is-active");
  $('.header__mob-menu').toggleClass('active');
});

$('.header__mob-menu').on('click', function (e) {
  if (!$('.mob-menu').is(e.target) && $('.mob-menu').has(e.target).length === 0) {
    blockBody();
    $('.header__mob-menu').removeClass('active');
    $('.hamburger').removeClass("is-active");
  }
})


if ($(window).innerWidth() > 1279) {
  $(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();

    if (scrollTop > 90) {
      $('.header').addClass('active')
    } else {
      $('.header').removeClass('active')
    }
  });
} else {
  $('.header').addClass('active');

  $(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();

    if (scrollTop > 1) {
      $('.header').addClass('line')
    } else {
      $('.header').removeClass('line')
    }
  });
}

function calculatingValue() {
  var $block = $('.country_box_row');
  $block.each(function() {
   var techValue =  $(this).find('.col.tech_rating').text();
   var specValue = $(this).find('.col.spec_rating').text();
   var countryRating = $(this).find('.col.country_rating').text();
   var researchRating = $(this).find('.col.research_rating').text();
   var educationRating = $(this).find('.col.education_rating').text();

   $(this).find('.hidden_block').find('.tech_rating').text(techValue);
   $(this).find('.hidden_block').find('.spec_rating').text(specValue);
   $(this).find('.hidden_block').find('.country_rating').text(countryRating);
   $(this).find('.hidden_block').find('.research_rating').text(researchRating);
   $(this).find('.hidden_block').find('.education_rating').text(educationRating);
 });
}

$(document).ready(function() {
  calculatingValue()
});


$('.country_flag_name ').click(function() {
  var block_offset = $('.country_list').offset().top;
  var row_offset = $(this).closest('.country_box_row').offset().top;
  var hiddenBlockHeight = $(this).closest('.country_box_row').find('.hidden_block').height();
  $('.hidden_block.active').fadeOut(500, function() {
    $(this).removeClass('actve');
    $(this).removeClass('top');
  });
  if ((row_offset - block_offset) < hiddenBlockHeight) {
    $(this).closest('.country_box_row').find('.hidden_block').fadeIn(500,function() {
      $(this).addClass('active');
    });
  } else {
    $(this).closest('.country_box_row').find('.hidden_block').addClass('top');
   $(this).closest('.country_box_row').find('.hidden_block').fadeIn(500, function() {
    $(this).addClass('active');
  });
 }
});

$('.country_list').scroll(function() {
  $('.hidden_block.active').fadeOut(500,function() {
    $(this).removeClass('actve');
    $(this).removeClass('top');
  });
});

$('.experts-slider').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: true,
  arrows: false,
  dots: false,
  responsive: [
  {
    breakpoint: 1280,
    settings: {
      slidesToShow: 2,
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