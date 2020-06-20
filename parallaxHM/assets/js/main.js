$(document).ready(function() {


    /* ======= Fixed header when scrolled ======= */

    $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 0) {
             $('#header').addClass('header-scrolled');
         }
         else {
             $('#header').removeClass('header-scrolled');
         }
    });

    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#header', offset: 100});

    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){

        //store hash
        var target = this.hash;

        e.preventDefault();

		$('body').scrollTo(target, 800, {offset: -50, 'axis':'y'});
        //Collapse mobile menu after clicking
		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}

	});

});


$(".parallax-mirror").not(":first").hide()
	$(".hero-section .carousel-indicator").click(function() {
		$(".hero-section .carousel-indicator").removeClass("active").eq($(this).index()).addClass("active");
		$(".parallax-mirror").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
