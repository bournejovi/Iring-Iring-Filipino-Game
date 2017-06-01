playGame = {
	
	create: function(){
		        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		        game.world.width = window.screen.width;
		        game.world.height = window.screen.height;
		        width = window.screen.width;
		        height = window.screen.height;
		        game.scale.refresh();
				
				game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
				game.scale.forceLandscape = true;
				game.scale.pageAlignHorizontally = true;
				game.scale.pageAlignVertically = true;
				//game.scale.setScreenSize= true;
				game.add.sprite(0,0,"bg");
				//game.add.sprite(650,540,"quit");
				//game.add.sprite(540,540,"mute");
	
	

	
	

    platform = game.add.group();
    platform.enableBody = true;
    platforms = platform.create(150,h/2-200,"platform");
	

	this.createPanyo1s(5000);
	panyo1 = game.add.group();
    panyo1.enableBody = true;
	game.physics.arcade.enable(panyo1);
	game.physics.enable(panyo1, Phaser.Physics.ARCADE);

    
   	//this.time(1000,duration);

	  
    platforms.scale.x =1.2;
	platforms.scale.y =0.6;

    platforms.body.immovable = true;
	
	platform2 = game.add.group();
	platform2.enableBody = true;
    platforms2 = platform.create(150,490,"platform2");
	  
    platforms2.scale.x =0.63;
	platforms2.scale.y =0.6;

    platforms2.body.immovable = true;
	
	platform6 = game.add.group();
	platform6.enableBody = true;
    platforms6 = platform.create(400,490,"platform6");
	  
    platforms6.scale.x =0.57;
	platforms6.scale.y =0.6;

    platforms6.body.immovable = true;	
   
   
    platform1 = game.add.group();
    platform1.enableBody = true;
    platforms1 = platform.create(150,100,"platform1");
	platforms1.scale.x =0.3;
	platforms1.scale.y = 0.5;
    platforms1.body.immovable = true;
 
	platform4 = game.add.group();
    platform4.enableBody = true;
    platforms4 = platform.create(614,110,"platform4");
	platforms4.scale.x =0.3;
	platforms4.scale.y = 0.5;
    platforms4.body.immovable = true;

	
    player = game.add.sprite(w/2-160,(h/2)+300,"player");	

	player.animations.add('down', [4, 5, 6], 11, true);
    player.animations.add('left', [16, 17, 18], 11, true);
    player.animations.add('right', [28, 29, 30], 11, true);
    player.animations.add('up', [40, 41, 42], 11, true);

	player.scale.x=1.5;
	player.scale.y=1.5;
   
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
	


	
	enemy1 = game.add.sprite(370,100,"enemy1");
	enemy1.animations.add('down', [9, 10, 11], 11, true);
	enemy1.animations.add('up', [45, 46, 47], 11, true);
	enemy1.scale.x=1.5;
	enemy1.scale.y=1.5;
	game.physics.arcade.enable(enemy1);
    enemy1.body.collideWorldBounds = true;
	

	enemy2 = game.add.sprite(150,460,"enemy2");
	enemy2.animations.add('left', [63, 64, 65], 11, true);
	enemy2.animations.add('right', [75, 76, 77], 11, true);

	enemy2.scale.x=1.5;
	enemy2.scale.y=1.5;
   
	game.physics.arcade.enable(enemy2);
    enemy2.body.collideWorldBounds = true;
	
	enemy3 = game.add.sprite(150,h/2-230,"enemy3");
	enemy3.animations.add('left', [66, 67, 68], 11, true);
	enemy3.animations.add('right', [78, 79, 80], 11, true);

	enemy3.scale.x=1.5;
	enemy3.scale.y=1.5;

	
   
	game.physics.arcade.enable(enemy3);
    enemy3.body.collideWorldBounds = true;
	

	timer=game.time.events.loop(Phaser.Timer.SECOND * 2,this.enemy1MoveDown);

	//timer=game.time.events.loop(Phaser.Timer.SECOND * 1,this.enemyMoveRight);
	timer=game.time.events.loop(Phaser.Timer.SECOND * 2,this.enemy2MoveRight);
	timer=game.time.events.loop(Phaser.Timer.SECOND * 1.5,this.enemy3MoveRight);

	timer=game.time.events.loop(Phaser.Timer.SECOND * 1.5,this.enemy1MoveUp);
//	timer=game.time.events.loop(Phaser.Timer.SECOND * 2,this.enemyMoveLeft);
	timer=game.time.events.loop(Phaser.Timer.SECOND * 1.5,this.enemy2MoveLeft);
	timer=game.time.events.loop(Phaser.Timer.SECOND * 2,this.enemy3MoveLeft);

	scoreText = game.add.text(10,0,"Score: 0",{font: "27px Cooper Black",fill:'white',align: "center"});
    bestText = game.add.text(10,25,"Best: "+this.getScore(),{font: "27px Cooper Black",fill:'white'});
	//timeText = game.add.text(360,0,"0:"+duration,{font: "27px Snap ITC ",fill:'white'});
    gameOverText = game.add.text(w/2-250,h/2-20,"",{ font: "35px Cooper Black",fill:'black',align: "center"});
  	btnreset = game.add.button(690,20,"btnreset",this.reset);
	


				button_Left = game.add.button(100,510,"btnRight",this.goLeft);
				button_Right = game.add.button(0,510,"btnLeft",this.goRight);
	
				button_Up = game.add.button(700,440,"btnUp",this.goUp);
				button_Down = game.add.button(700,520,"btnDown",this.goDown);

		bgmusic = game.add.audio("bgmusic");
		bgmusic.loop = true;
		bgmusic.play()
/*
	game.add.sprite(100,510,"btnRight",this.rightPlayer);
	game.add.sprite(0,510,"btnLeft",this.leftPlayer);
	game.add.sprite(700,440,"btnUp",this.upPlayer);
	game.add.sprite(700,520,"btnDown",this.downPlayer);

*/

	btnreset.scale.x =.7;
	btnreset.scale.y =.7; 	
	

	
        pause_label = game.add.button(740,10, 'btn_pause');
		pause_label.inputEnabled = true;
		pause_label.events.onInputUp.add(function (){
		game.paused = true;
		menu = game.add.text(w/2,h/2,'GAME PAUSED!',{ font: "45px Cooper Black",fill:'white',align: "center"});
		menu.anchor.setTo(0.5,0.5);
		choiseLabel = game.add.text (w/2,h-240, 'Click screen to resume',{font: "40px Bernard MT Condensed" , fill: 'red'});
		choiseLabel.anchor.setTo(0.5,0.5);
			 });
		
		game.input.onDown.add(unpause,self);
		function unpause(event){
		if(game.paused){
			menu.destroy();
			choiseLabel.destroy();
			game.paused = false;
			
		}
		}
},


update:function () {
	
	game.physics.arcade.collide(player,platforms);
	game.physics.arcade.collide(player, platforms1);
	game.physics.arcade.collide(player, platforms2);
	game.physics.arcade.collide(player, platforms4);
	game.physics.arcade.collide(player, platforms5);
	game.physics.arcade.collide(player,platforms6);
	game.physics.arcade.collide(panyo1,platforms);
	game.physics.arcade.collide(panyo1, platforms1);
	game.physics.arcade.collide(panyo1, platforms2);
	game.physics.arcade.collide(panyo1, platforms4);
	game.physics.arcade.collide(panyo1, platforms5);
	game.physics.arcade.collide(panyo1,platforms6);
//	game.physics.arcade.collide(enemy,platforms1);
//	game.physics.arcade.collide(enemy,platforms4);
	game.physics.arcade.overlap(enemy1,platforms);
	game.physics.arcade.overlap(enemy1,platforms6);
	game.physics.arcade.overlap(enemy2,platforms1);
	game.physics.arcade.overlap(enemy2,platforms4);
	game.physics.arcade.overlap(enemy3,platforms1);
	game.physics.arcade.overlap(enemy3,platforms4);
	game.physics.arcade.collide(player, panyo1, this.goalPlayer);
//	game.physics.arcade.collide(player,enemy,this.killPlayer);
	game.physics.arcade.overlap(player,enemy1,this.killPlayer);
	game.physics.arcade.overlap(player,enemy2,this.killPlayer);
	game.physics.arcade.overlap(player,enemy3,this.killPlayer);




	},

unpause: function(event){   
		if(game.paused){
			game.paused = false;
		}
	},	
		loopAudio: function(time){
			setInterval(function(){
				bg.play();
			
			
		}, time);
	},
	


enemy1MoveDown:function () {
    
		enemy1.body.velocity.y = -400;
		enemy1.animations.play('down');

     },
enemy1MoveUp:function () {
    
		enemy1.body.velocity.y =400;
		enemy1.animations.play('up');

     },
enemyMoveRight:function () {
    
		//	enemy.body.velocity.x = 500;
        //    enemy.animations.play('right');

     },
enemyMoveLeft:function () {
    
		//	enemy.body.velocity.x = -500;
      //      enemy.animations.play('left');

     },
enemy2MoveLeft:function () {
    
			enemy2.body.velocity.x = -400;
            enemy2.animations.play('left');

     },
enemy2MoveRight:function () {
    
			enemy2.body.velocity.x = 400;
            enemy2.animations.play('right');

     },
 enemy3MoveRight:function() {
    
			enemy3.body.velocity.x = 400;
            enemy3.animations.play('right');

     },
enemy3MoveLeft:function () {
    
			enemy3.body.velocity.x = -400;
            enemy3.animations.play('left');

     },
	 
 goalPlayer:function (player,panyo1){
	//bg.play(); 
     panyo1.kill();
    score = score + 1;
    scoreText.text = "Score: "+score;


//var x = 0;
},

killPlayer:function (){
	player.kill();
	
    gameOverText.text = "OPPONENT TAGGED YOU!\n GAME OVER!\nYour Score: "+score;
   // game._paused = true;
},
saveScore:function (score){
    localStorage.setItem("gameData",score);
},
getScore:function(){
    return (localStorage.getItem("gameData") == null || localStorage.getItem("gameData") == "")?0:
    localStorage.getItem("gameData");

//var x = 0;
},

 reset:function(){
     window.location.href=window.location.href;
 
},



goRight:function (){
        player.animations.play('walk-right');
        player.body.velocity.x = -500;
    	player.animations.add('right', [16, 17, 18], 11, true);
		button_Right.frame = 0;

    setTimeout(function(){
       button_Right.frame = 1;

    },100);


		
},


goLeft:function (){
        player.animations.play('walk-left');
        player.body.velocity.x = 500;
        player.animations.add('left', [28, 29, 30], 11, true);
   
        button_Left.frame = 0;

    setTimeout(function(){
        button_Left.frame = 1;

    },100);

},

goUp:function (){

        player.animations.play('walk-up');
        player.body.velocity.y = -500;
    	player.animations.add('up', [40, 41, 42], 11, true);

        button_Up.frame = 0;

    setTimeout(function(){
       button_Up.frame = 1;

    },100);


        
},

goDown:function (){
        player.animations.play('walk-down');
        player.body.velocity.y = 500;
        player.animations.add('down', [4, 5, 6], 11, true);    
        button_Down.frame = 0;

    setTimeout(function(){
        button_Down.frame = 1;

    },100);

},

loopAudio: function(time){
		setInterval(function(){
				bgmusic.play();
			
			
		}, time);
       
      },

 createPanyo1s:function(time){
    setInterval(function(){
        panyo1s = panyo1.create(Math.random()*w,30, "panyo1");
        panyo1s.body.gravity.y = 2000;
        panyo1s.scale.y = .7;
        panyo1s.scale.x = .7;
        panyo1s.body.collideWorldBounds = true;
        
    },time);
},


/*
time:function (time,duration){
    setInterval(function(){
        if(duration<=0){
			player.kill();
            gameOverText.text = "OUT OF TIME! \n GAME IS OVER !";
			//game.paused = true;
        
	}
	 else{
            if(timeText.text != "time: 0"){
                duration--;
			
			}
            timeText.text = "0:"+duration;            
        }
    },time);
}
*/	}


