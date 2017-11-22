

var juego = new Phaser.Game(1070, 575, Phaser.CANVAS, 'bloque_juego');

juego.state.add('Inicio', Inicio);
juego.state.add('Juego', Juego);
juego.state.add('Fin', Fin);

juego.state.start('Inicio');





