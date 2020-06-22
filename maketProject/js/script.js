// wow.js

        

// slider

$(document).ready(function(){
  $('.advantages__general-box').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          prevArrow: '<button class="prev-adv arrow-adv"></div>',
          nextArrow: '<button class="next-adv arrow-adv"></div>',
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          prevArrow: '<button class="prev-adv arrow-adv"></div>',
          nextArrow: '<button class="next-adv arrow-adv"></div>',
          slidesToScroll: 1
        }
      }
    ]
  });
});

// slider-review

$(document).ready(function(){
  $('.review-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="prev-rev arrow-rev"></div>',
    nextArrow: '<button class="next-rev arrow-rev"></div>',
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  });
})

// foto slider-review

$(document).ready(function(){
  $('.review-box__slider').on('click',function(){
      $(this).slick('slickNext');
    });
  $('.slider-for').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   fade: true,
   asNavFor: '.slider-nav'
 });
 $('.slider-nav').slick({
   slidesToShow: 5,
   slidesToScroll: 1,
   asNavFor: '.slider-for',
   dots: false,
   centerMode: true,
   focusOnSelect: true,
   arrows: false,
   responsive: [
     {
       breakpoint: 720,
       settings: {
         arrows: true,
         slidesToShow: 2,
         prevArrow: '<button class="prev-f-s arrow-f-s"></div>',
         nextArrow: '<button class="next-f-s arrow-f-s"></div>',
         slidesToScroll: 1
       }
     }
   ]
 });
})

// materals slider

$(document).ready(function(){
  $('.mat-block').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          prevArrow: '<button class="prev-adv arrow-adv"></div>',
          nextArrow: '<button class="next-adv arrow-adv"></div>',
          slidesToScroll: 1
        }
      }
    ]
  });
});

// modal

$(document).ready(function() {
	$('.modal-open').click(function(e) {
    e.preventDefault();
		$('.modal').fadeIn();
	});
	$('.modal-close').click(function(e) {
    e.preventDefault();
		$('.modal').fadeOut();
	});
  $('.modal').click(function(e) {
		if ($(e.target).closest('.modal-box').length == 0) {
			$(this).fadeOut();
		}
	});
});
