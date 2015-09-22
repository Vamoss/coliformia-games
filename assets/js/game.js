// Init Phaser
var game = new Phaser.Game(800, 600, Phaser.AUTO, '');

// Define states
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('gameover', gameoverState);

// Start the "boot" state
game.state.start('boot');