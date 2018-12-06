class Game{
	constructor() {
		console.log('lorem dec 6');

		this.canvas = document.getElementById('game-canvas');
		this.stage = new createjs.Stage(this.canvas);

		createjs.Ticker.setFPS(60);
		createjs.Ticker.on("tick", this.stage);

		//testing code
		var circle = new createjs.Shape();
		circle.graphics.beginFill("red").drawCircle(0,0,40);
		circle.x = circle.y = 100;
		this.stage.addChild(circle);

	}
	version(){
		return '1.0.0';
	}
}

var game = new Game();