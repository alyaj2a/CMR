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
$(document).ready(function()  {
 $("a[class='btn_main']").click(function() {
		//Busca todos los elementos del nav que tengan la clase active y los elimina
	 $(this).closest("#mainav").find('a').removeClass('active');
		//Al elemento seleccionado agrega la clase active
				$(this).addClass('active');
		});
});
