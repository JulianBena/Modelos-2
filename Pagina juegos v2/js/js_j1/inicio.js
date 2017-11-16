var boton;
var Inicio = {
    preload: function(){
        juego.stage.backgroundColor = '#FFFFFF';
        juego.load.image('boton', 'img/img_j1/boton.png');
       
    },
    
    create: function(){
        
        
        boton = this.add.button(juego.width/2,juego.height/2, 'boton',this.iniciarJuego, this);
        boton.anchor.setTo(0.5);
        boton.scale.setTo(0.5);
        
        var txtIniciar = juego.add.text(juego.width/2, juego.height/2 -60, "Iniciar Juego", 
                                        {font: "bold 24px sans-serif", fill:"black", aling:"center"});
                                        txtIniciar.anchor.setTo(0.5);
        var txtTitulo = juego.add.text(juego.width/2, juego.height/2 -100, "EL GRAN SALTARIN", 
                                        {font: "bold 30px sans-serif", fill:"black", aling:"center"});
                                        txtTitulo.anchor.setTo(0.5);
    },
    
    iniciarJuego: function(){
        
        this.state.start('Juego');
    }
};