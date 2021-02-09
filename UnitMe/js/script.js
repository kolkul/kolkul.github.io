// Маска телефона

$('.phone-mask').inputmask('mask', {
	'mask': '+380 99 999 9999',
	showMaskOnHover: false
});


// Ввод только чисел

$('.num').bind("change keyup input click", function () {
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

// header anchor

$(document).ready(function () {
	$('.header__nav').on("click", "a", function (event) {
		event.preventDefault();

		var id = $(this).attr('href');
		var top = $(id).offset().top - 40;

		$('body,html').animate({
			scrollTop: top
		}, 1500);
	});
});


// validation

$('input[type="submit"]').on('click', function (e) {
	e.preventDefault();

	$(this).closest('form').find('.input-box input').each(function () {

		if (this.value.length <= 2 || $(this).val().trim().split('').includes('_')) {
			$(this).addClass('wpcf7-not-valid');
		}

	});

	if (!($(this).closest('form').find('.input-box input').hasClass('wpcf7-not-valid'))) {

		$(this).closest('.pop-up-wrapper').removeClass('active');
		$('.pop-up-thanks').addClass('active');

	}
});

$('.input-box input').on('input', function () {
	$(this).removeClass('wpcf7-not-valid');
});

let name = $('.letters');
let regex = /[0-9]/g;

name.on('input', function () {
	this.value = this.value.replace(regex, '');
})


// pop-up

$('.open-pop-up').on('click', function () {
	$('.pop-up-container').addClass('active');
	blockBody();
});

$('.open-pop-up-thanks').on('click', function () {
	if ($(this).closest('form').find('input').hasClass('wpcf7-not-valid')) {
		return;
	}

	$('.pop-up-thanks').addClass('active');
	blockBody();
});

$('.open-pop-up-question').on('click', function () {
	$('.pop-up-container-question').addClass('active');
	blockBody();
});

$('.pop-up-wrapper').click(function (e) {
	if ($(e.target).closest('.pop-up-content').length == 0) {

		if ($(this).hasClass('pop-up-video')) {

			$('.close-pop-up').click();

		} else {

			$(this).removeClass('active');
			blockBody();

		}
	}
});

$('.close-pop-up').on('click', function () {
	$(this).closest('.pop-up-wrapper').removeClass('active');
	blockBody();
})


// video pop-up

$('.open-video').on('click', function () {
	blockBody();
	$('.pop-up-video').addClass('active');
	$('#video')[0].src += "&autoplay=1&playsinline=1";
});

$(document).on('click', '.close-pop-up', function () {
	jQuery("iframe").each(function () {
		jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
	});
});


// approach section -- accordion

$('.approach-box__more-btn').on('click', function () {
	var getHiddenText = $(this).closest('.approach-block__box').find('.approach-box__text');
	var getHiddenTextBlockHeight = getHiddenText.find('p').height();

	getHiddenText.addClass('active');
	getHiddenText.css({
		'height': getHiddenTextBlockHeight + 'px'
	});

	$(this).slideToggle(400);
});


// questions section -- accordion

var openAnswerAnimation = false;

$('.questions-box__question').on('click', function () {

	if (!openAnswerAnimation) {
		var getQuestionContainer = $(this).closest('.questions-section__box');

		getQuestionContainer.toggleClass('active');
		getQuestionContainer.find('.questions-box__answer').slideToggle(200);

		openAnswerAnimation = true;

		setTimeout(function () {
			openAnswerAnimation = false;
		}, 200)
	}

});


// button "more questions"

if (!$('.questions-block__hidden-questions').length) {
	$('.open-more-questions').remove();
}

$('.open-more-questions').on('click', function () {
	$('.questions-block__hidden-questions').slideDown(700);
	$(this).slideUp(400);
});


// slider

$('.slider').slick({
	infinite: true,
	arrows: true,
	dots: true,
	autoplay: true,
	autoplaySpeed: 4500,
	variableWidth: true,
	pauseOnFocus: false,
	pauseOnHover: false,
	pauseOnDotsHover: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	cssEase: 'ease',
	speed: 700,
	draggable: true,
	edgeFriction: 15,
	touchThreshold: 125,
	swipeToSlide: true,
	prevArrow: $('.prev-arrow'),
	nextArrow: $('.next-arrow'),
	appendDots: $('.slider__dots-box'),
	customPaging: function (slider, i) {
		var thumb = $(slider.$slides[i]).data('thumb');
		return '<div class="slider__dot">\n' +
			'\t\t\t\t\t<div class="dot__user"><img src="img/user-1.png" alt="">\n' +
			'\t\t\t\t\t\t<div class="dot__circle">\n' +
			'\t\t\t\t\t\t\t<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
			'\t\t\t\t\t\t\t\t<circle cx="40" cy="40" r="38" stroke="url(#paint0_linear)" stroke-width="4" stroke-dasharray="0, 239"/>\n' +
			'\t\t\t\t\t\t\t\t<defs>\n' +
			'\t\t\t\t\t\t\t\t\t<linearGradient id="paint0_linear" x1="40" y1="0" x2="40" y2="80" gradientUnits="userSpaceOnUse">\n' +
			'\t\t\t\t\t\t\t\t\t\t<stop stop-color="#D8261E"/>\n' +
			'\t\t\t\t\t\t\t\t\t\t<stop offset="1" stop-color="#FF4D00"/>\n' +
			'\t\t\t\t\t\t\t\t\t</linearGradient>\n' +
			'\t\t\t\t\t\t\t\t</defs>\n' +
			'\t\t\t\t\t\t\t</svg>\n' +
			'\t\t\t\t\t\t</div>\n' +
			'\t\t\t\t\t</div>\n' +
			'\t\t\t\t</div>';
	},
	responsive: [
		{
			breakpoint: 750,
			settings: {
				arrows: false
			}
		}
	]
});


// back to top btn

$('.btn-to-top').on('click', function (e) {

	e.preventDefault();

	$('html, body').animate({
		scrollTop: '0px'
	}, 1500);

});


// scroll animation

function animation(scrollTop) {

	$('.animation').not('.animated').each(function() {

		var offsetTop = $(this).offset().top;
		var windowHeight = window.innerHeight;

		if ((scrollTop + windowHeight) > offsetTop) {
			$(this).addClass('animated');
		}
	});

}

$(window).scroll(function() {
	var scrollTop = $(this).scrollTop();

	// Анимации подплываний
	animation(scrollTop);
});

$(window).on('load', function() {
	$(window).scroll();
});


// function hover

function hover(ths, parent) {
	$(ths).closest(parent).find('.hover').addClass('on');
	$(ths).removeClass('on');
}

$('.hover').mouseenter(function () {

	if ($(this).closest('.header').length) {
		hover(this,'.header');
	} else if ($(this).closest('.footer').length) {
		hover(this,'.footer');
	}

})

$('.hover').mouseleave(function () {
	$('.hover').removeClass('on');
})


// resize texarea

$('textarea').on('input', function(e) {
	this.style.height = '1px';
	this.style.height = (this.scrollHeight + 1) + 'px';
});