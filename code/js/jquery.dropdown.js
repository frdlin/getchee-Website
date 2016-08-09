$(document).ready(function() {
	$('#dropdown').dropdown();
});
var ie = $.browser.msie && $.browser.version < 8.0;
$.fn.dropdown = function() {
	$(this).find('li').each(function() {
		if ($(this).find('> ul').size() > 0) {
			$(this).addClass('has_child');
		}
	});
	
	var closeTimer = null;
	var dropdownItem = null;

	function cancelTimer() {
		if (closeTimer) {
			window.clearTimeout(closeTimer);
			closeTimer = null;
		}
	}

	function close() {
		$(dropdownItem).find('> ul ul').hide();
		ie ? $(dropdownItem).find('> ul').fadeOut() : $(dropdownItem).find('> ul').slideUp(0);
		dropdownItem = null;
	}

	$(this).find('li').hover(function() {
		cancelTimer();

		var parent = false;
		$(this).parents('li').each(function() { 
			if (this == dropdownItem) parent = true;
		});
		if (dropdownItem != this && !parent) close();

		$(this).addClass('hover');
		ie ? $(this).find('> ul').fadeIn() : $(this).find('> ul').slideDown(0);
	}, function() {
		$(this).removeClass('hover');
		dropdownItem = this;
		cancelTimer();
		closeTimer = window.setTimeout(close, 500);
	});

	if (ie) {
		$(this).find('ul a').css('display', 'inline-block');
		$(this).find('ul ul').css('top', '0');
	}
}