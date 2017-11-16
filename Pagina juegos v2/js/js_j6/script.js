var x = 350;
var y = 250;
var puntos = 0;
var duracion = 1000;
var rotacion = 0;
var clic=false;
var durClic=0;
var contacto=false;
var ast = [aleatorio(700),aleatorio(500)];
var option = 1;

$(document).ready(inicio);
$(document).mousemove(capturaMouse);
$(document).click(clickOn);
$(document).mouseup(clickOff);

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
	contextoBuffer.fillText("Witch Hunt!", 180, 200);
	contextoBuffer.fillStyle = "#ff0000"; 
	contextoBuffer.font = "bold 30px sans-serif";
	contexto.clearRect(0,0,700,500);
	contexto.drawImage(buffer, 0, 0);
	$('#brisa')[0].play();
	$('#iniciar').click(function(){	
		x = 350;
		y = 250;	
		duracion = 1000;
		run();		
		puntos=0;
	});
	
}

function aleatorio(tope){
	return Math.floor((Math.random() * tope) + 1);
} 

function capturaMouse(event){
	//alert(event.which);
x = event.clientX-182;
y = event.clientY-65;
	
}

function clickOn(event){
	clic=true;
	durClic=9;
}

function clickOff(event){
	durClic=0;
	clic=false;
}

function Mira(){
	this.img = $("#mira")[0];
	
	
	this.dibujar = function(ctx){
		var img = this.img;
		ctx.drawImage(img, x, y);
		ctx.save();
		
		
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

function Bruja(){
	this.img = [$("#bruja")[0],$("#explosion")[0]];			
	this.dibujar = function(ctx, x1, y1,i){
		
		var img = this.img[i];
		ctx.save();
		ctx.translate(x1,y1);
		
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
	if(duracion >= 0){  		
		duracion-=0.5;
		
			
		var objMira = new Mira();
		var objBruja = new Bruja(); 
		contextoBuffer.clearRect(0,0,700,500);

		contextoBuffer.font = "bold 25px sans-serif";
		contextoBuffer.fillText("puntos = "+puntos, 25, 25);
		contextoBuffer.fillText("Tiempo: "+parseInt(duracion/10), 250, 25);
		objMira.dibujar(contextoBuffer,0);
		rotacion -= 5;
			
			if(clic){
				durClic=10;
				if(objMira.colision(ast[0],ast[1])){

					
					objMira.dibujar(contextoBuffer);
					$('#explode')[0].play();
					contacto=true;
				}
				clic=false;
				
			}
			
			
			if(!contacto){
				switch(option){
					case 1:
						ast[0]+=5;
						ast[1]-=3;
						break;
					case 2:
						ast[0]-=5;
						ast[1]+=3;
						break;
					case 3:
						ast[0]+=5;
						ast[1]+=3;
						break;
					case 4:
						ast[0]-=5;
						ast[1]-=3;
						break;
					case 5:
						ast[0]+=6;
						break;
					case 6:
						ast[1]-=6;
						break;
					case 7:
						ast[0]-=6;
						break;
					case 8:
						ast[1]+=6;
						break;
					default:
						ast[0]+=5;
						ast[1]-=3;				
				}
				ast[0] = (700 + ast[0])%700;
				ast[1] = (500 + ast[1])%500;
				objBruja.dibujar(contextoBuffer,ast[0],ast[1],0);
			}else{
				option = aleatorio(8);
				puntos++;
				ast[0]=aleatorio(700);
				ast[1]=aleatorio(500);
				ast[0] = (700 + ast[0])%700;
				ast[1] = (500 + ast[1])%500;
				objBruja.dibujar(contextoBuffer,ast[0],ast[1],1);
			}
			contacto=false;
		contexto.clearRect(0,0,700,500);
		contexto.drawImage(buffer, 0, 0);
		setTimeout("run()",20);
		$('#iniciar').css("display","none");
	}else{
		$('#brisa')[0].pause();
		
		contextoBuffer.clearRect(0,0,700,500);

		contextoBuffer.font = "bold 50px sans-serif";
		contextoBuffer.fillText("JUEGO TERMINADO", 180, 200);
		contextoBuffer.font = "bold 30px sans-serif";
		contextoBuffer.fillText("puntos = "+puntos, 25, 25);
		//contextoBuffer.fillText(parseInt(duracion/10)+" pts", 250, 250);
		contexto.clearRect(0,0,700,500);
		contexto.drawImage(buffer, 0, 0);
		$('#iniciar').css("display","inline");
		
	}
}


