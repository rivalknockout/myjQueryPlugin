(function($){
	$(function(){
		var $pa = $('<img>').appendTo('body');
		var SPEED = 600;
		var EASE = 'easeInOutQuart';
		$pa.attr({
			src: 'https://raw.github.com/rivalknockout/myjQueryPlugin/master/pageup-applelike.png',
			width: 130, height: 130
		});
		$pa.css({
			display: 'block', position: 'fixed', right: 0, bottom: 0, cursor: 'pointer', zIndex: 99999
		});
		$pa.click(function(){
			$('body').animate({
				scrollTop: 0
			}, SPEED, EASE);
		});
	});
})(jQuery);