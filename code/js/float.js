$(window).load(function(){
	var $win = $(window),
		$ad = $("#abgne_float_ad").css("opacity", 0).show(),	// 讓廣告區塊變透明且顯示出來
		_width = $ad.width(),
		_height = $ad.height(),
		_diffY = 0,	// 距離右及下方邊距
		_moveSpeed = 300;	// 移動的速度

		
	// 先把 #abgne_float_ad 移動到定點
	$ad.css({
		top: $(document).height(),
		left: 880,
		opacity: 1,
	});
	
	// 這邊取得 #footer 的座標
	var $footer = $("#footer").offset();
	// 幫網頁加上 scroll 及 resize 事件
	$win.bind("scroll resize", function(){
		var $this = $(this);
			_top = $this.scrollTop() + $this.height() - _height - _diffY, 
		// 控制 #abgne_float_ad 的移動
		$ad.stop().animate({
			top: _top > $footer.top - _height ? $footer.top - _height : _top,
		}, _moveSpeed);
	})
});