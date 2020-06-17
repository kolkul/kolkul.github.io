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
          prevArrow: '<button class="prev arrow"></div>',
          nextArrow: '<button class="next arrow"></div>',
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          prevArrow: '<button class="prev arrow"></div>',
          nextArrow: '<button class="next arrow"></div>',
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
