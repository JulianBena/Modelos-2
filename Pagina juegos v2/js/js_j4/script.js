var x = 350;
var y = 250;
var vida = 0;
var duracion = 0;
var rotacion = 0;
var msg = 0;
var ast = [[aleatorio(700),aleatorio(500)],
		   [aleatorio(700),aleatorio(500)],
		   [aleatorio(700),aleatorio(500)],
		   [aleatorio(700),aleatorio(500)],
		   [aleatorio(700),aleatorio(500)],
		   [aleatorio(700),aleatorio(500)],
		   [aleatorio(700),aleatorio(500)],
		   [aleatorio(700),aleatorio(500)],
		   [aleatorio(700),aleatorio(500)],
		   [aleatorio(700),aleatorio(500)]];

$(document).ready(inicio);
$(document).keydown(capturaTeclado);

function inicio(){
	var lienzo = $("#lienzo")[0];
	var contexto = lienzo.getContext("2d");
	var buffer = document.createElement("canvas");
	buffer.width = lienzo.width;
	buffer.height = lienzo.height;
	contextoBuffer = buffer.getContext("2d");
	contextoBuffer.fillStyle = "#ffffff"; 
	contextoBuffer.clearRect(0,0,700,500);
	contextoBuffer.font = "bold 50px sans-serif";
	contextoBuffer.fillText("BIENVENIDO", 180, 200);
	contextoBuffer.fillStyle = "#ff0000"; 
	contextoBuffer.font = "bold 30px sans-serif";
	contextoBuffer.fillText("Juega Elude Asteroids", 170, 230);
	contexto.clearRect(0,0,700,500);
	contexto.drawImage(buffer, 0, 0);
	$('#brisa')[0].play();
	$("button").click(function(){	
		x = 350;
		y = 250;	
		vida = 100;
		duracion = 0;
		run();		
	});
	$("#recomendaciones").load("recomendaciones.html");
}

function aleatorio(tope){
	return Math.floor((Math.random() * tope) + 1);
} 

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

function Nave(){
	this.img = [$("#ship")[0],$("#explosion")[0]];
	this.msgs = ["verifca el frente", "cuidado al lado", "mejor moverse", 
	             "ojo alrededor", "cuidado con el asteroide", "evita los asteroides",
	             "acelera","no puedes colisionar mas","debes mantener la vida",
	             "atiende los controles"];
	
	this.dibujar = function(ctx,i){
		var img = this.img[i];
		ctx.drawImage(img, x, y);
		ctx.save();
		ctx.fillStyle = "#aaaaff";
		ctx.font = "10px sans-serif";
		ctx.fillText("pos x: "+ x + " pos y: " + y, x - 25, y + 50);
		ctx.fillStyle = "#ff8888";
		ctx.fillText(this.msgs[msg], x - 25, y + 60);
		ctx.restore();
	}
	
	this.colision = function(xx,yy){
		var distancia=0;
		distancia=Math.sqrt( Math.pow( (xx-x), 2)+Math.pow( (yy-y),2));
		if(distancia>40)
		   return false;
		else
		   return true;	
	}
}

function Asteroid(){
	this.img = $("#asteroid")[0];			
	this.dibujar = function(ctx, x1, y1){
		var img = this.img;
		ctx.save();
		ctx.translate(x1,y1);
		ctx.rotate(rotacion*Math.PI/180);
		ctx.drawImage(img,-img.width/2,-img.height/2);
		ctx.restore();
	}
}

function run(){ 
	var lienzo = $("#lienzo")[0];
	var contexto = lienzo.getContext("2d");
	var buffer = document.createElement("canvas");
	buffer.width = lienzo.width;
	buffer.height = lienzo.height;
	contextoBuffer = buffer.getContext("2d");
	contextoBuffer.fillStyle = "#ffffff"; 
	if(vida >= 0){  		
		duracion++;
		if(duracion % 50 == 0)
			msg = aleatorio(9);
		var objnave = new Nave();
		var objasteroid = [new Asteroid(),new Asteroid(),new Asteroid(),
						   new Asteroid(),new Asteroid(),new Asteroid(),
						   new Asteroid(),new Asteroid(),new Asteroid(),
						   new Asteroid()]; 
		contextoBuffer.clearRect(0,0,700,500);

		contextoBuffer.font = "bold 25px sans-serif";
		contextoBuffer.fillText("vida = "+vida, 25, 25);
		contextoBuffer.fillText("puntos = "+parseInt(duracion/10), 250, 25);
		objnave.dibujar(contextoBuffer,0);
		rotacion -= 5;
		for(i=0;i<10;i++){
			
			objasteroid[i].dibujar(contextoBuffer,ast[i][0],ast[i][1]);
			if(objnave.colision(ast[i][0],ast[i][1])){
				vida -=1;
				objnave.dibujar(contextoBuffer,1);
				$('#explode')[0].play();
			}
			ast[i][0]-=5;
			ast[i][1]+=3;
			ast[i][0] = (700 + ast[i][0])%700;
			ast[i][1] = (500 + ast[i][1])%500;
		}
		contexto.clearRect(0,0,700,500);
		contexto.drawImage(buffer, 0, 0);
		setTimeout("run()",20);
		$("button").css("display","none");
	}else{
		$('#brisa')[0].pause();
		
		contextoBuffer.clearRect(0,0,700,500);

		contextoBuffer.font = "bold 50px sans-serif";
		contextoBuffer.fillText("GAME OVER", 180, 200);
		contextoBuffer.fillText(parseInt(duracion/10)+" pts", 250, 250);
		contexto.clearRect(0,0,700,500);
		contexto.drawImage(buffer, 0, 0);
		$("button").css("display","inline");
		
	}
}


