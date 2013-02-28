
//-------------------------------------------------------------------------
//	.toast(value [,isFixed])
//	要素の左上に値を表示させるだけのプラグイン。地味に便利。
//	同要素から連続的にコールしても、値が書き換わるだけなので安心。
//	第二引数をtrueにするとfixedできちゃう。
//-------------------------------------------------------------------------
(function($){
	$.fn.toast = function(value, isFixed){
		var position = isFixed?'fixed':'absolute';
		return this.each(function(i){
			var $target = $(this), $toast;
			if($target.css('position')=='static')
				$target.css({position:'relative'});
			if($target.find('>div').is('.plugin-toast'))
				$toast = $target.find('.plugin-toast');
			else
				$toast = $('<div class="plugin-toast"></div>').appendTo($target).css({
					position: position, left: 0, top: 0,
					width: 100, height: 20,
					background: 'white', border: '1px solid black'
				});
			$toast.text(value);
		});
	}
})(jQuery);

