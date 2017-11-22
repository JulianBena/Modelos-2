//Almacenar Slider en una variable
var slider = $('#slider');
//Almacenar botones del slider
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');

//Mover ultima imagen al primer lugar
$('#slider section:last').insertBefore('#slider section:first');

//Mostrar la primera imagen con un margen de -100%
slider.css('margin-left', '-'+100+'%');

function moverDerecha() {
	slider.animate({marginLeft:'-'+200+'%'},700 
		,function(){
			$('#slider section:first').insertAfter('#slider section:last');
			slider.css('margin-left', '-'+100+'%');
		});

}

function moverIzquierda() {
	slider.animate({marginLeft:0},700 
		,function(){
			$('#slider section:last').insertBefore('#slider section:first');
			slider.css('margin-left', '-'+100+'%');
		});

}

siguiente.on('click', function() {
	moverDerecha();
});

anterior.on('click', function() {
	moverIzquierda();
});

function autoPlay() {
	interval = setInterval(function(){
		moverDerecha();
	}, 5000);
}

autoPlay();