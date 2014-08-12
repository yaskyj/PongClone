BasicGame.Preloader = function (game)
{
    //this.background = null;
    this.preloadBar = null;
    
    this.ready = false;
};

BasicGame.Preloader.prototype = 
{
    preload: function()
    {
        //loading screen sprite
        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloadBar');
        this.preloadBar.anchor.setTo(0, 0.5);
        this.preloadBar.scale.setTo(0.5, 1);
        this.preloadBar.x = this.world.centerX - this.preloadBar.width/2;
        
        //state sets the loading bar to represent the actual percentage of data loaded
        this.load.setPreloadSprite(this.preloadBar);
        
        //load all required assets
    	this.load.image('ball', 'assets/ball.png');
	    this.load.image('block', 'assets/block.png');
    },
    
    create: function()
    {
        this.preloadBar.cropEnabled = false;
    },
    
    update: function()
    {
        this.state.start('MainMenu');
    }
};