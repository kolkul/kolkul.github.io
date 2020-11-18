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
  calculatingValue();
  changeChooseCountry();
  zoomMap('down');
});


$('.country_flag_name ').click(function() {
  if ($(window).innerWidth() < 1200) {
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
  }
});

$('.country_list').scroll(function() {
  $('.hidden_block.active').fadeOut(500,function() {
    $(this).removeClass('actve');
    $(this).removeClass('top');
  });
});


$('.map_tab_option').click(function() {
  $('.map_tab_option').removeClass('active');
  $(this).addClass('active');
  changeChooseCountry();
  $('.country.active').removeAttr('style');
  $('.country.active').removeClass('active');
  $('.modal_answer_map').fadeOut(500);
});


$('.country').click(function() {
  $('.country.active').removeAttr('style');
  $('.country.active').removeClass('active');
  var blockColor = $(this).find('.country_point').find('.color').css('background-color');
  $(this).addClass('active');
  $('.map_tab_option').removeClass('active');
  changeChooseCountry();
  changeMapModal();
  if ($(window).innerWidth() > 1280) {
    $(this).css({'background': blockColor, 'border-color' : blockColor});
    $('.modal_answer_map').find('.country_rating span').css({'color': blockColor});
  }

});

function changeChooseCountry() {
  $('.map_svg path').css({'fill': '#D5DFFF'})
  var tabOption = $('.map_tab_option.active').attr('data-rating');
  var tabOptionColor = $('.map_tab_option.active').attr('data-color');
  $('.map_svg path').each(function() {
    var countryOption = $(this).attr('data-rating');
    if (countryOption == tabOption) {
     $(this).css({'fill': tabOptionColor});
   }
 });
}

let modalcoord = {
  'china' :[231,552],
  'usa' :[235,141],
  'great_breatan' :[280,337],
  'canada' :[291,124],
  'germany' :[267,363],
  'korea_republic' :[231,600],
  'france' :[254,350],
  'japan' :[230,624],
  'india' :[200,500],
  'russia' :[300,500],
  'australia' :[105,614],
  'denmark' :[281,363],
  'israel' :[225,415],
  'spain' :[239,334],
  'italy' :[250,364],
  'netherland' :[270,354],
  'singapoor' :[161,548],
  'austria' :[258,373],
  'belgium' :[268,353],
  'brazil' :[135,243],
  'norway' :[306,369],
  'polish' :[270,382],
  'portugalian' :[239,327],
  'finland' :[302,396],
  'switzerland' :[302,376],
  'sweden' :[256,360],
  'argentin' :[93,211],
  'bangladesh' :[202,524],
  'vietnam' :[194,554],
  'greece' :[240,389],
  'egypt' :[210,401],
  'indonesia' :[154,570],
  'iran' :[220,455],
  'iraq' :[224,430],
  'ireland' :[272,326],
  'colombia' :[161,191],
  'malaysia' :[157,569],
  'mexico' :[200,135],
  'uae' :[202,451],
  'romania' :[252,393],
  'saudi' :[206,429],
  'thailand' :[196,535],
  'turkish' :[235,415],
  'philipines' :[175,591],
  'czech' :[264,373],
  'chili' :[103,202],
  'south_africa' :[94,393],
  'nigeria' :[171,360],
  'pakistan' :[218,487],
  'peru' :[132,188],
}


function changeMapModal() {
  var listAttr = $('.country.active').attr('data-country').toLowerCase();
  var countryName = $('.country.active').find('.country_name p').text();
  var countryRate = $('.country.active').find('.country_point p').text();
  $('.map_svg path').each(function() {
    var mapAttr = $(this).attr('data-country');
    if (mapAttr == undefined) {
      return;
    }
    if (listAttr == mapAttr.toLowerCase()) {
      var tabOptionColor = $('.country.active').find('.color').css('background-color');
      $(this).css({'fill' : tabOptionColor});
    }
  });
  if ($(window).innerWidth() > 760) {
    $('.modal_answer_map').fadeOut(500, function() {
      $(this).css({'bottom': modalcoord[listAttr][0], 'left': modalcoord[listAttr][1] });
      $('.modal_answer_map').find('.country_name').text(countryName);
      $('.modal_answer_map').find('.country_rating span').text(countryRate);
    });
    $('.modal_answer_map').fadeIn(500, function() { });
  } else {
    $('.modal_answer_map').css({'bottom': modalcoord[listAttr][0], 'left': modalcoord[listAttr][1], 'display' : 'block'});
    $('.modal_answer_map').find('.country_name').text(countryName);
    $('.modal_answer_map').find('.country_rating span').text(countryRate);
  }
}

var currentStep = 50;
var modalPercent = [];
var modalHeightPercent = [];
$.each(modalcoord, function( key, value ) {
  modalPercent.push(value[1] / 100);
  modalHeightPercent.push(value[0] / 100);
});

function zoomMap(direction) {

  if ($(window).innerWidth() < 760) {
    var step = 5;
    var modalStep = step * 2
    var zoomDirection = direction;
    var mapProcent = 1468 / 100;
    if (zoomDirection == 'up') {
      if (currentStep == 100) {
        return;
      } else {
        currentStep += step;
        var i = 0;
        $.each(modalcoord, function(key, value, ) {
         value[1] += modalPercent[i] * modalStep;
         value[0] += (modalHeightPercent[i] / 1.1) * modalStep;
         i++;
       });
      }
    } else {
      if (currentStep == 50) {
        return;
      } else {
        currentStep -= step;
        var i = 0;
        $.each(modalcoord, function( key, value ) {
          value[1] -= modalPercent[i] * modalStep;
          value[0] -= (modalHeightPercent[i] / 1.1) * modalStep;
          i++;
        });
      }
    }
    var mapWidthCurrent = currentStep * mapProcent;
    $('.map').width(mapWidthCurrent + 'px');
    changeMapModal();
  }
}

$('.plus').click(function() {
  zoomMap('up');
});


$('.minus').click(function() {
  zoomMap('down');
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

/*
$('.comp-list').on('mousewheel', function(event) {
  if (event.deltaY >= 0) {
    addTextClasses('top');
  } else {
    addTextClasses('bottom');
  }
});*/