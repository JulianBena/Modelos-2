var boton;
var Fin = {
    
    preload: function(){
        juego.stage.backgroundColor = '#FFFFFF';
        
    },
    
    create: function(){
        boton = this.add.button(juego.width/2,juego.height/2, 'boton',this.iniciarJuego, this);
        boton.anchor.setTo(0.5);
        boton.scale.setTo(0.5);
        
        var txtEtiqueta = juego.add.text(juego.width/2 -10, juego.height/2 -55, "Puntos:", 
                                        {font: "bold 24px sans-serif", fill:"black", aling:"center"});
                                        txtEtiqueta.anchor.setTo(0.5);
        var txtPuntosVal = juego.add.text(juego.width/2 +50, juego.height/2 -55, puntos.toString(), 
                                        {font: "bold 24px sans-serif", fill:"black", aling:"center"});
                                        txtPuntosVal.anchor.setTo(0.5);
        var txtTitulo = juego.add.text(juego.width/2, juego.height/2 -100, "GAME OVER", 
                                        {font: "bold 30px sans-serif", fill:"black", aling:"center"});
                                        txtTitulo.anchor.setTo(0.5);
    },
    
    iniciarJuego: function(){
        
        this.state.start('Juego');
    }
}