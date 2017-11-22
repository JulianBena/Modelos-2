var fondoJ;
var person;
var obs;
var salto;
var timer;
var puntos;
var txtPuntos;

var Juego = {    
    
    preload: function(){
        
        juego.load.image('fondo', 'img/img_j1/giphy.jpg');
        juego.load.image('personaje', 'img/img_j1/personaje1.png');
        juego.load.image('obstaculo', 'img/img_j1/obstaculo.png');        
        
        juego.forceSingleUpdate = true;
    },
    
    create: function(){
        
        fondoJ = juego.add.tileSprite(0, 0, 1070, 575, 'fondo');     
        person = juego.add.sprite(50 , 500, 'personaje');
            person.scale.setTo(0.3);
        juego.physics.startSystem(Phaser.Physics.ARCADE);
            juego.physics.arcade.enable(person);
            person.body.collideWorldBounds = true;
            person.body.gravity.y = 2000;
            obs = juego.add.group();
            obs.enableBody = true;
            obs.createMultiple(1000, 'obstaculo');
        salto = juego.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            salto.onDown.add(this.saltar, this);
        
        timer = juego.time.events.loop(700, this.crearObstaculos, this);
        
        puntos = -1;
        txtPuntos =juego.add.text(20, 20, "0", {font: "30px Arial", fill: "#FFF"});
       
    },
    
    update: function(){        
        fondoJ.tilePosition.x -= 1;
        juego.physics.arcade.overlap(person, obs, this.tocoObstaculo, null, this);
    },
    
    saltar: function(){
        person.body.velocity.y = -400;
    },
    
    
    crearObstaculos: function(){
        
        for( var i = 0; i < 1; i++){
            
            this.crearUnObstaculo(1000, i+Math.floor((Math.random()*470))+10);
        }
        
        puntos += 1;
        txtPuntos.text = puntos;
    },
    
    crearUnObstaculo: function(x, y){
        var obstaculo = obs.getFirstDead();
        
        obstaculo.reset(x, y);
        obstaculo.body.velocity.x = -180;
        obstaculo.checkWorldBounds = true;
        obstaculo.outOfBoundsKill = true;    
    },
    
    tocoObstaculo: function(){
        if(person.alive == false)
            return;
        person.alive = false;
        juego.time.events.remove(timer);
        
        obs.forEachAlive(function(o){
            o.body.velocity.x = 0;
        }, this);
        this.state.start('Fin');
    }
};