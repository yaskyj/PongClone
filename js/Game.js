BasicGame.Game = function (game)
{
	
};

BasicGame.Game.prototype =
{
	create: function() 
	{
        leftScore = 0;
        rightScore = 0;

		winner = null;

	    this.physics.startSystem(Phaser.Physics.ARCADE);
		this.world.setBounds(0, 0, 800, 600);
	    this.physics.arcade.checkCollision.left = false;
	    this.physics.arcade.checkCollision.right = false;
	
		//Set background color
		this.stage.backgroundColor = 0x333333;
		
		//adding keys
		rightPaddleUp = this.input.keyboard.addKey([Phaser.Keyboard.UP]);
		rightPaddleDown = this.input.keyboard.addKey([Phaser.Keyboard.DOWN]);
		leftPaddleUp = this.input.keyboard.addKey([Phaser.Keyboard.W]);
		leftPaddleDown = this.input.keyboard.addKey([Phaser.Keyboard.S]);

		//adding the paddles
		paddle1 = this.add.sprite(24, this.world.centerY, 'block');
		paddle1.anchor.set(0.5);
	    paddle1.scale.x = 0.40;
	    paddle1.scale.y = 2.5;
		this.physics.enable(paddle1, Phaser.Physics.ARCADE);
		paddle1.body.collideWorldBounds = true;
		paddle1.body.immovable = true;
		paddle1.body.bounce.set(1);
	
		paddle2 = this.add.sprite(this.world.width - 24, this.world.centerY, 'block');
		paddle2.anchor.set(0.5);
	    paddle2.scale.x = 0.40;
	    paddle2.scale.y = 2.5;
		this.physics.enable(paddle2, Phaser.Physics.ARCADE);
		paddle2.body.collideWorldBounds = true;
		paddle2.body.immovable = true;
		paddle2.body.bounce.set(1);
	
		//adding net
		net = this.add.sprite(this.world.centerX, this.world.centerY, 'block');
		this.physics.enable(net, Phaser.Physics.ARCADE);
		net.anchor.set(0.5);
		net.scale.x = .5;
		net.scale.y = 18.75;
	
		//create scores
		leftScoreText = this.add.text(300, 20, leftScoreString + leftScore, {font: "50px Arial", fill: "#ffffff", align: "left"});
		rightScoreText = this.add.text(465, 20, rightScoreString + rightScore, {font: "50px Arial", fill: "#ffffff", align: "left"});
		
		//add initial ball
		this.createBall(this.rnd.integerInRange(1, 2));
	},

	createBall: function(num)
	{
		//adding the ball along with the velocity
		ball = this.add.sprite(this.world.centerX, this.world.centerY, 'ball');
		ball.anchor.set(0.5);
		ball.scale.set(0.5);
		this.physics.enable(ball, Phaser.Physics.ARCADE);
		ball.body.bounce.set(1);
		if (num === 1)
		{
			if (this.rnd.integerInRange(1, 2) === 1)
			{
				ball.angle = this.rnd.integerInRange(-45, 0);
			}
			else
			{
				ball.angle = this.rnd.integerInRange(0, 45);
			}
		}
		else
		{
			if (this.rnd.integerInRange(1, 2) === 1)
			{
				ball.angle = this.rnd.integerInRange(135, 180);
			}
			else
			{
				ball.angle = this.rnd.integerInRange(-135, -180);
			}
		}
		ball.body.collideWorldBounds = true;
	    this.physics.arcade.accelerationFromRotation(ball.rotation, 600, ball.body.velocity);
		ball.body.maxVelocity = 1000;
	},
	
	update: function() 
	{
		//if movement keys are not pressed paddles are set to 0 velocity
		paddle1.body.velocity.setTo(0, 0);
		paddle2.body.velocity.setTo(0, 0);
	
		//this is to move the paddles up and down if the appropriate keys are pressed
		if (leftPaddleUp.isDown) 
		{
			paddle1.body.velocity.y = -paddleVelocity;
		}
		else if (leftPaddleDown.isDown)
		{
			paddle1.body.velocity.y = paddleVelocity;
		}
		if (rightPaddleUp.isDown)
		{
			paddle2.body.velocity.y = -paddleVelocity;
		}
		else if (rightPaddleDown.isDown)
		{
			paddle2.body.velocity.y = paddleVelocity;
		}
		
		this.physics.arcade.collide(ball, paddle1);
		this.physics.arcade.collide(ball, paddle2);
	
		if (ball.x > this.world.width) 
		{
			this.leftScoreSet();
		}
		else if (ball.x < 0)
		{
			this.rightScoreSet();
		}

		if ((leftScore >= 10) || (rightScore >= 10))
		{
			if (leftScore > rightScore)
			{
				winner = "Left Player";
			}
			else
			{
				winner = "Right Player";
			}
			this.state.start('EndScreen');
		}
	},

	leftScoreSet: function()
	{
		leftScore += 1;
		leftScoreText.text = '' + leftScore;
		this.createBall(2);
	},
	
	rightScoreSet: function()
	{
		rightScore += 1;
		rightScoreText.text = '' + rightScore;
		this.createBall(1);
	}	
};