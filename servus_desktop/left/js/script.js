//left
var moveSlider=false;
var oldClientX=0;
var iFrameWidth={0:0,1:0,2:0};
var curElNum=0;

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


$(window).on('mousemove', function(event) {
	if (Math.round(oldClientX)!=Math.round(event.clientX)) {
		oldClientX=event.clientX;
		var obj={mousePos: event.clientX};
		if (moveSlider) {
			parent.postMessage(JSON.stringify(obj), '*');
		}
	}
});
$('.page-container').on('mousedown', '.twentytwenty-handle', function(event) {
	var obj={moveSlider: true};
	parent.postMessage(JSON.stringify(obj), '*');
});
$(window).on('mouseup', function(event) {
	var obj={moveSlider: false};
	parent.postMessage(JSON.stringify(obj), '*');
});
$(function() {
	$('.page-container').twentytwenty({
		no_overlay: true,
	}).trigger('twentytwenty_move',[window.innerWidth+100]);
});

window.addEventListener("message", function(event) {
	if (typeof(event.data) !== 'undefined') {
		try {
			var obj = JSON.parse(event.data);
			var send_size=true;

			if(typeof obj.elWidth !== 'undefined' && typeof obj.elNum !== 'undefined') {
				iFrameWidth[obj.elNum]=obj.elWidth;
				send_size=false;
			}

			var widthAll = iFrameWidth[0] + iFrameWidth[1] + iFrameWidth[2];
				$('.page-container .bg').width(widthAll);
				$('.page-container .bg').height(Math.round(widthAll / 4));

			if (typeof obj.moveSlider !== 'undefined') {
				moveSlider=obj.moveSlider;
				send_size=false;
			}

			if (typeof obj.mousePos !== 'undefined' && moveSlider) {
				var mpos=obj.mousePos;
				$('.page-container').trigger('twentytwenty_move',[mpos]);
				// $(debug).html(mpos);
				send_size=false;
			}

			if (send_size) {
				obj={elWidth: window.innerWidth, elNum: 0};
				parent.postMessage(JSON.stringify(obj), '*');
			}
		} catch (e) {}
	}
}, false);

// true-false

$('.true').click(function () {
	$('.true').addClass('true-c');
	$('.btn').addClass('none');
})

$('.false').click(function () {
	$('.false').addClass('false-c');
	$('.btn').addClass('none');
})
