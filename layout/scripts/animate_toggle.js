$(document).ready(function(){
  var estado = false;

  $('#btn-toggle-pcinfo').on('click',function(){

    $('.seccionToggle-pcinfo').slideToggle();

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
});
$(document).ready(function(){
  var estado = false;

  $('#btn-toggle-retama').on('click',function(){

    $('.seccionToggle-retama').slideToggle();

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
});
$(document).ready(function(){
  var estado = false;

  $('#btn-toggle-ilogas').on('click',function(){

    $('.seccionToggle-ilogas').slideToggle();

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
});
$(document).ready(function(){
  var estado = false;

  $('#btn-toggle-consultoria').on('click',function(){

    $('.seccionToggle-consultoria').slideToggle();

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
});
