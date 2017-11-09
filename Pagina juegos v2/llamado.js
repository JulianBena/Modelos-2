var botones = document.getElementsByTagName("button");
var iframe = document.getElementById("vistaActual");
var sizeBotones = botones.length;
	
for (i = 0; i < sizeBotones; i++){
    botones[i].addEventListener("click", function(){
    	iframe.src=this.id;
    }, false);
}