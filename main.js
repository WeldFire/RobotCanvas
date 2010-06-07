var game = {
	
	//window and canvas
	screen:{
		
		//the screen to render onto
		canvas:{},
		context:{},
		
		//draws a resource to the screen
		draw:function(params) {
			
			//TODO... 
			
		},
		
		//clear out images for the canvas
		clear:function() {
		},
		
		//prepare the screen
		init:function() {
			game.screen.canvas = document.getElementById("screen");
			game.screen.context = game.screen.canvas.getContext('2d');	
		}
		
	},
	
	//game resources and files
	resources:{
		
		//images in the game
		images:{},
		
		//loads an external resource
		loadImage:function(params) {
			var resource = new Image();
			resource.src = params.url;
			resource.onload = params.loaded;
			game.resources.images[params.name] = resource;
		}
	},
	
	//prepares the game screen
	init:function() {
		game.screen.init();
	}
	
};