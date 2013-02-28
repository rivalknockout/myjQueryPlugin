(function($){
	var $pa = $('<img id="pageup-applelike">').appendTo('body');
	var SPEED = 600;
	var EASE = 'easeInOutQuart';
	$pa.attr({
		src: 'https://raw.github.com/rivalknockout/myjQueryPlugin/master/pageup-applelike.png',
		width: 130, height: 130
	});
	$pa.css({
		display: 'block', position: 'fixed', right: 0, bottom: 0, cursor: 'pointer', zIndex: 999999999999
	});
	$pa.click(function(){
		$(window).animate({
			scrollTop: 0
		}, SPEED, EASE);
	});
})(jQuery);