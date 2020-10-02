//top
var moveSlider=false;
var oldClientX=0;
var iFrameWidth={0:0,1:0,2:0};
var curElNum=0;

var smPos=70;
var smDir=0.3;
var startingMove=setInterval(function() {
	if (smPos<=67 || smPos>=72) {
		smDir=-smDir;
	}
	smPos+=smDir;
	var pos=Math.round($('body').get(0).clientWidth/100*smPos);
	$('.page-container').trigger('twentytwenty_move',[pos]);
}, 50);

// Блокировка скроллинга Body
function blockBody() {

	if ($('body').hasClass('no-scroll')) {

		var scrollTop = $('body').attr('data-scroll');

		$('body').removeClass('no-scroll');
		$('body').attr('style', '');

		$(document).scrollTop(scrollTop);

	} else {

		var scrollTop = $(document).scrollTop();

		$('body').addClass('no-scroll');
		$('body').css({
			top: '-' + scrollTop + 'px'
		});
		$('body').attr('data-scroll', scrollTop);

	}

}

$(window).on('load', function () {
	$('.video').addClass('active');
	var obj={topWidth: window.innerWidth};
	parent.postMessage(JSON.stringify(obj), '*');
});


$(window).on('mousemove', function(event) {
	if (Math.round(oldClientX)!=Math.round(event.clientX)) {
		oldClientX=event.clientX;
		var obj={mousePos: event.clientX+iFrameWidth[0]};
		if (moveSlider) {
			parent.postMessage(JSON.stringify(obj), '*');
		}
	}
});
$('.page-container').on('mousedown', '.twentytwenty-handle', function(event) {
	var obj={moveSlider: true};
	parent.postMessage(JSON.stringify(obj), '*');
	clearInterval(startingMove);
});
$(window).on('mouseup', function(event) {
	var obj={moveSlider: false};
	parent.postMessage(JSON.stringify(obj), '*');
});
var move = false;
$(function() {
	$('.page-container').twentytwenty({
		no_overlay: true,
	});
});
window.addEventListener("message", function() {
	if (typeof(event.data) !== 'undefined') {
		try {
			// console.log(event.data)
			var obj = JSON.parse(event.data);
			var send_size=true;

			if(typeof obj.elWidth !== 'undefined' && typeof obj.elNum !== 'undefined') {
				iFrameWidth[obj.elNum]=obj.elWidth;
				send_size=false;
			}

			//obj.w > document.body.clientWidth
			// if(typeof obj.w !== 'undefined') {
				var widthAll = iFrameWidth[0] + iFrameWidth[1] + iFrameWidth[2];
				$('.page-container .bg').width(widthAll);
				$('.page-container .bg').height(Math.round(widthAll / 4));
				// $(debug).html('w'+obj.w);
			// }

			if (typeof obj.moveSlider !== 'undefined') {
				moveSlider=obj.moveSlider;
				send_size=false;
			}

			if (typeof obj.mousePos !== 'undefined' && moveSlider) {
				var mpos=obj.mousePos-iFrameWidth[0];
				$('.page-container').trigger('twentytwenty_move',[mpos]);
				// $(debug).html(mpos);
				send_size=false;
			}

			if (send_size) {
				obj={elWidth: window.innerWidth, elNum: 1};
				parent.postMessage(JSON.stringify(obj), '*');
			}
		} catch (e) {}
	}
}, false);


// video play

var vid1 = document.getElementById("myvideo");

$('.slide-1 .icon').click( function () {

  $('.slide-1 .icon').addClass('hide');
  $('.slide-1 .video video')[0].play();

  setTimeout( function () {
    $('.slide-1 .icon').removeClass('hide');
  }, (vid1.duration) * 1000)

})

var vid2 = document.getElementById("myvideo-2");

$('.slide-2 .icon').click( function () {

  $('.slide-2 .icon').addClass('hide');
  $('.slide-2 .video video')[0].play();

  setTimeout( function () {
    $('.slide-2 .icon').removeClass('hide');
  }, (vid2.duration) * 1000)

})
