$(document).ready(function(){
	var altura = $('.menu_main').offset().top;

	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.menu_main').addClass('menu-fixed');
		} else {
			$('.menu_main').removeClass('menu-fixed');
		}
	});

});
