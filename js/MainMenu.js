BasicGame.MainMenu = function (game)
{
    
};

BasicGame.MainMenu.prototype = 
{
    create: function()
    {
        this.introText = this.add.text(this.world.centerX, this.world.centerY, 'Click to Start', { font: "60px Arial", fill: "#0091ff"});
        this.introText.anchor.setTo(0.5, 0.5);
        
        this.introText.inputEnabled = true;
        this.introText.events.onInputDown.add(this.startGame, this);
    },
    
    startGame: function(pointer)
    {
        this.state.start('Game');
    }
};

BasicGame.EndScreen = function (game)
{

};

BasicGame.EndScreen.prototype = 
{
    create: function()
    {
        this.winnerText = this.add.text(this.world.centerX, this.world.centerY, winner + ' Wins!', { font: "60px Arial", fill: "#0091ff"});
        this.winnerText.anchor.setTo(0.5, 0.5);
        
        this.endText = this.add.text(this.world.centerX, this.world.centerY + 60, 'Play Again?', { font: "60px Arial", fill: "#0091ff"});
        this.endText.anchor.setTo(0.5, 0.5);      
        this.endText.inputEnabled = true;
        this.endText.events.onInputDown.add(this.startGame, this);
    },
    
    startGame: function(pointer)
    {
        this.state.start('Game');
    }
};
