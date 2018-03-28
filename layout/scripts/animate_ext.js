$(document).ready(function(){
	var altura = $('.menu_main').offset().top;

	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.menu_main').addClass('menu-fixed');
		} else {
			$('.menu_main').removeClass('menu-fixed');
		}
	});
	/*SCROLL*/
	$('a[href^="#"]:not(a[href="#"])').click(function() {
		var destino = $(this.hash);
		if (destino.length == 0) {
			destino = $('a[name="' + this.hash.substr(1) + '"]');
		}
		if (destino.length == 0) {
			destino = $('html');
		}
		$('html, body').animate({ scrollTop: destino.offset().top }, 600);
		return false;
	});
	/*TOGGLE*/
	toggle_sec('#btn-toggle-pcinfo','.seccionToggle-pcinfo');
	toggle_sec('#btn-toggle-retama','.seccionToggle-retama');
	toggle_sec('#btn-toggle-ilogas','.seccionToggle-ilogas');
	toggle_sec('#btn-toggle-consultoria','.seccionToggle-consultoria');

	/*
	$(function() {
    $('li a').click(function() {
      $("li a.active").removeClass("active");
        $(this).addClass('active');
    });
  });*/
});
function toggle_sec(boton,section){
  var estado = false;
  $(boton).on('click',function(){
    $(section).slideToggle();
    if (estado == true) {
      $(this).text("Contactenos");
      $('body').css({
        "overflow": "auto"
      });
      estado = false;
    } else {
      $(this).text("Cerrar");
      $('body').css({
        "overflow": "hidden"
      });
      estado = true;
    }
  });
}
