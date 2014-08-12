var BasicGame = {};

var rightPaddleUp;
var rightPaddleDown;
var leftPaddleUp;
var leftPaddleDown;

var paddle1;
var paddle2;
var net;
var ball;

var leftScore = 0;
var rightScore = 0;
var leftScoreString = '';
var rightScoreString = '';
var leftScoreText;
var rightScoreText;
var introText;

var ballCheckText;

var paddleVelocity = 1000;

var winner = '';

BasicGame.Boot = function (game)
{
    
};

BasicGame.Boot.prototype = 
{
    preload: function()
    {
        //load assets for the loading screen
        //this.load.image('preloaderBackground', 'assets/preloadbck.png');
        this.load.image('preloadBar', 'assets/preloadbar.png');
    },
    
    create: function()
    {
        if (this.game.device.desktop)
        {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        }
        else
        {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.minWidth = 150;
            this.scale.minHeight = 250;
            
            this.scale.maxWidth = 600;
            this.scale.maxHeight = 800;
            this.scale.forceLandscape = false;
            this.scale.pageAlignHorizontally = true;
        }
        
        this.scale.setScreenSize(true);
        this.state.start('Preloader');
    }
};