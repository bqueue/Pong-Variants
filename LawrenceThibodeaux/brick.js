console.log("hello");
var brickWidth = 10;
var brickHeight = 50;
var brickSpacing = 25;
var Brick = function(brickX, brickY) {
    this.brickX = brickX;
    this.brickY = brickY;
    this.isVisible = true;

    this.draw = function() {
      if (this.isVisible) {
        ctx.beginPath();
        ctx.fillStyle='white';
        ctx.fillRect(brickX, brickY, brickWidth, brickHeight);
      }
    }

    this.checkCollision = function() {
      if (this.isVisible) {
        if (ballX > brickX && ballX < brickX + brickWidth
         && ballY > brickY && ballY < brickY + brickHeight) {
           ballDX = -ballDX;
           this.isVisible = false;
           if (isPlayersBall) {
             playerScore++;
           } else {
             compScore++;
           }
         }
      }
    }

    this.reset = function() {
      this.isVisible = true;
    }
}