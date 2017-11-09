var x = 350;
var y = 250;

function capturaTeclado(event){
	//alert(event.which);
	if(event.which==38 || event.which==87)
		y -= 10;
	if(event.which==40 || event.which==83)
		y += 10;
	if(event.which==39 || event.which==68)
		x += 10;
	if(event.which==37 || event.which==65)
		x -= 10;
	x = (700 + x)%700;
	y = (500 + y)%500;
}