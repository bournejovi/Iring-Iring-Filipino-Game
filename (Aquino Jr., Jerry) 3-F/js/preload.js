preloadGame = {
	
	preload: function(){
	
	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	game.scale.pageAlignHorizontally = true;
	game.scale.pageAlignVertically = true;
    game.load.image('platform','img/platform.png');
	game.load.image('platform1','img/platform1.png');
	game.load.image('platform2','img/platform2.png');
	//game.load.image('platform3','img/platform3.png');
	game.load.image('platform4','img/platform4.png');
	game.load.image('platform6','img/platform2.png');
	game.load.image('panyo1','img/panyo1.png');
    game.load.image('bg','img/background.png');
    game.load.image("buttonplay","img/play2.png");
    game.load.image("aboutbutton","img/about.png");
	game.load.audio('bgmusic','sounds/opening.ogg');
	game.load.audio('effect','sounds/gold.wav');
	game.load.image('about2','img/aboutpic.png');
	game.load.image("menu2","img/back1.png");


	//game.load.image('quit','img/quit.png');
	//game.load.image('mute','img/mute.png');
    game.load.image('bg1','img/menu.jpg');
	game.load.audio("bg", "sounds/opening.ogg");

	game.load.spritesheet('btn_pause', 'img/pauseplay.png',50,50);
	game.load.spritesheet('btnUp', 'img/uparrow1.png',70,75);
	game.load.spritesheet('btnDown', 'img/downarrow1.png',70,75);
	game.load.spritesheet('btnLeft', 'img/leftarrow.png',100,100);
	game.load.spritesheet('btnRight', 'img/rightarrow.png',100,100);
	game.load.spritesheet('btnreset','img/reset.png',65,54);
	
	game.load.spritesheet('player', 'img/1char.png', 32, 32);
	game.load.spritesheet('enemy2', 'img/1char.png', 32, 32);
	game.load.spritesheet('enemy3', 'img/1char.png', 32, 32);
	game.load.spritesheet('enemy1', 'img/1char.png', 32, 32);
  
	},
	create: function(){
		game.state.start("playGame");
		game.state.start("menuGame");		
//		game.state.start("aboutPage");

		
		
	}
	
	
}
