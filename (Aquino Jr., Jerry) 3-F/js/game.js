
var w = 800,h = 600;
var player,enemy, btnreset, keyboard,platform2, platforms2, platform, platforms, score = 0, panyo1, panyo1s, scoreText, leftPlayer,goRight,gameOverText, lifeText, life = 3, time, timeText, bestText,platform3, platforms3,platform4, platforms4,platform5, platforms5,platform6, clock;
var btn_pause,menu,choiseLabel,pause_label,titlepage,preloadbar;
var btnUp,btnDown,btnRight,btnLeft;
var duration=60;
var proseso, toggleMenu,menuGroup,getScore;

var game = new Phaser.Game(w, h, Phaser.CANVAS, '');

game.state.add('bootGame',bootGame);
game.state.add('preloadGame',preloadGame);
game.state.add('menuGame',menuGame);
game.state.add('playGame',playGame);



game.state.start('bootGame');

