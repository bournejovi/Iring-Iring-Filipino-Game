menuGame = {
		create: function(){
	
			
			bg = game.add.image(0,0,"bg1");
			bg.scale.y = 3.6;
			bg.scale.x = 2.7;	


			startButton = game.add.button(game.width/2.4,game.height/2, 'buttonplay', this.buttonPlay);
			startButton.scale.x=.4;
			startButton.scale.y = .4;

			aboutButton = game.add.button(game.width/2,game.height/1.3, 'aboutbutton', this.about);
			aboutButton.anchor.set(0.6)
			aboutButton.scale.x=1;
			aboutButton.scale.y = 1;


			headText=  game.add.text(game.width/2-280,game.height/3.1,"The Filipino Traditional Game",{"fill":"red"});
			headText.scale.x=1.5;
			headText.scale.y=1.5;
			titleText = game.add.text(game.width/2-140,game.height/2.5,"IRING-IRING",{"fill":"black"});
			titleText.scale.x = 1.8;
			titleText.scale.y = 1.8;

			
		
			

		},
			update: function(){

},

			buttonPlay:function(){

				game.state.start("playGame");
			},




			about: function(){
            about=game.add.image(0,0,"about2");
          	 about.scale.y = 1;
			 about.scale.x = 1;
		
			
            restartButton=game.add.button(370,5,"menu2",restartB,this);
            function restartB() {
           
            restartButton.destroy();
            game.state.start("menuGame");
            }

            },


                ins: function(){
            about=game.add.image(0,0,"ins");
            about.scale.set(3.2);
			

            restartButton=game.add.button(0,5,"menu2",restartB,this);
            function restartB() {
            restartButton.destroy();

            game.state.start("menuGame");

            }

            },
   

		//	aboutPage:function(){

//				game.state.start("aboutPage");
//			},
		
}
