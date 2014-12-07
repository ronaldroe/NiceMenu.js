/* 
 * Requires jQuery.
 * Performs a function similar to meanmenu, but combines multiple menus into one mobile menu.
 * Parameters:
 * [selectors] (string) *required - jQuery-style, comma-separated selectors in a single string. Pass selectors as the parent of the <ul> that contains
 *   the menu items. Works best if the parent is <nav>.
 * [winSize] (integer) *optional - Integer-based viewport max width in pixels. Default: 640
 *
 * Include script plus included CSS. Call the function using both $(window).load() and $(window).resize(). $(document).ready() is not currently
 *   supported.
 */

function niceMenu(selectors, winSize){
	var viewport = [];
	viewport.height = $(window).outerHeight(true);
	viewport.width = $(window).outerWidth(true);
	
	if(typeof hasNiceMenu === 'undefined'){
		hasNiceMenu = false;
	}
	var menus = document.querySelectorAll(selectors),
		newMenu = document.createElement('nav');
	newMenu.className = 'niceMenu';

	function createMenu(){
		document.body.insertBefore(newMenu, document.body.firstChild);
		$(newMenu).append('<div class="button">&equiv;</div>');

		for(i = 0; i < menus.length; i++){
			$(menus[i]).find('ul').each(function(index, el) {
				var liChild = $(this).clone();
				$(newMenu).append(liChild);
			});
		}
		$(selectors).hide();
		$('body').addClass('hasNiceMenu');
	}

	function deleteMenu(){
		$('nav.niceMenu').remove();
		$(selectors).show();
		$('body').removeClass('hasNiceMenu');
	}

	if(viewport.width <= (winSize || 640) && !hasNiceMenu){
		createMenu();
		hasNiceMenu = true;
	} else if (viewport.width <= (winSize || 640) && hasNiceMenu){
		return false;
	} else {
		deleteMenu();
		hasNiceMenu = false;
	}

	$('.niceMenu .button').click(function(){
		var isOpen = $(this).hasClass('open');
		if(!isOpen){
			$('.niceMenu').addClass('open');
			$(this).addClass('open');
		} else {
			$('.niceMenu').removeClass('open');
			$(this).removeClass('open');
		}
	});
}