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


// validation

$('input[type="submit"]').on('click', function (e) {
	e.preventDefault();

	$(this).closest('form').find('input').each(function () {

		if (this.value.length <= 2 || $(this).val().trim().split('').includes('_')) {
			$(this).closest('.input-box').addClass('error');
		}

	});

	if (!($(this).closest('form').find('.input-box').hasClass('error'))) {

		$(this).closest('.pop-up-wrapper').removeClass('active');
		$('.pop-up-thanks').addClass('active');

	}
});

$('.input-box input').on('input', function () {
	$(this).closest('.input-box').removeClass('error');
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
	if ($(this).closest('form').find('.input-box').hasClass('error')) {
		return;
	}

	$('.pop-up-thanks').addClass('active');
	blockBody();
});

$('.open-pop-up-question').on('click', function () {
	$('.pop-up-thanks').addClass('active');
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


// video pop-up

$('.open-video').on('click', function () {
	blockBody();
	$('.pop-up-video').addClass('active');
	$('#video')[0].src += "&autoplay=1";
});


$('.close-pop-up').on('click', function () {
	$(this).closest('.pop-up-video').removeClass('active');
	blockBody();
})

$(document).on('click', '.close-pop-up', function() {
	jQuery("iframe").each(function() {
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

