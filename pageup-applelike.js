(function($){
	$(function(){
		var $pa = $('<img>').appendTo('body');
		var SPEED = 600;
		var EASE = 'easeInOutQuart';
		var SHOW_Y = 200;
		//ini
		$pa.attr({
			src: 'https://raw.github.com/rivalknockout/myjQueryPlugin/master/pageup-applelike.png',
			width: 130, height: 130
		});
		$pa.css({
			display: 'none', position: 'fixed', right: 0, bottom: 0, cursor: 'pointer', zIndex: 99999
		});
		//observe the body scroll to fadeIn and fadeOut the corner arrow img.
		$(window).scroll(function(){
			if(window.scrollY>SHOW_Y)
				$pa.fadeIn(500);
			else if(window.scrollY<SHOW_Y)
				$pa.fadeOut(500);
		});
		//event
		$pa.click(function(){
			$('body').stop(true, true).animate({
				scrollTop: 0
			}, SPEED, EASE);
		});
	});
})(jQuery);