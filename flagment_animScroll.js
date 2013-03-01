//-------------------------------------------------------------------------
//	ページ内リンクをクリックしたとき、アニメーションしながらスクロールする
//	（画面の1/17にくる仕様）
//	
//	動的に目標位置が変わっても対応できるよう、リンクをクリックする度に位置を再算出
//	
//	【 詳細 】
//	フラグメント'#'が付いているリンクを洗い出し、
//	フラグメントに対応するidが存在していれば、リンクにアニメーションイベントをバインド
//-------------------------------------------------------------------------
jQuery(function($){
	$('a').click(function(){
		var id = this.hash;
		var str;
		
		var SPEED	= 1000;
		var EASE	= 'easeInOutCirc';
		var BASE_LINE	= window.innerHeight/17;
		
		try{
			var GOAL_LINE	= $(id)[0].getBoundingClientRect().top;
		}catch(e){
			return;
		}
			
		var DIF = GOAL_LINE-BASE_LINE;
		if(DIF==0) return false;
		str  = DIF>0 ? '+=' : '-=';
		str += DIF;
		str += 'px';
		
		$('body, html').stop(true, true).animate({
			scrollTop: str
		}, SPEED, EASE);
		
		return false;
	});
	
});



