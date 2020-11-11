$(function(){
	
	var scene = document.getElementById('scene');
	var parallax = new Parallax(scene, {
    relativeInput: true,
    clipRelativeInput: true,
    frictionX: 0.2,
    frictionY: 0.2,
    scalarY: 5.0,
    scalarX: 5.0,
    pointerEvents: true
	});

  var stopanimation = false;



  $('.hover').mouseover(function(){
    const nomer = $(this).data('h');
    if (!stopanimation){
    	$('.aphex[data-a="'+nomer+'"]').addClass('active');
/*      stopanimation = true;*/
      setTimeout(function(){
/*         stopanimation = false;*/
         $('.aphex[data-a="'+nomer+'"]').removeClass('active');
      }, 2000);
    }
  });

});