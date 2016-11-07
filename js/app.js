// Declaring the duration
var game_duration = 30000;
var game_duration_sec = game_duration / 1000;
var stopGame = true;
// Declaration of the start positions of player using x and y coordinates
var startX = 200;
var startY = 400;
// Declaration of the score in order to use it in the upcoming classes
var score = 0;
// Declaration for timer control
var timer;
$('#timer').text(game_duration_sec);
// Declaring the global variable

var allEnemies = [];

// Enemies our player must avoid
var Enemy = function (x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    //if the enemy reaches the last point(i.e. the whole width is covered)then 
    //make the enemy come back to the original place.
    if (this.x > 505) {
        this.reset();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// To reset the enemy position
Enemy.prototype.reset = function () {
    this.x = -200;
};

// The player function
var Player = function () {
    this.x = startX;
    this.y = startY;
    this.sprite = 'images/char-boy.png';
};

// Updating the player function
Player.prototype.update = function () {
    if (this.x < 0) {
        this.x = 0;
    } else if (this.x > 400) {
        this.x = 400;
    } else if (this.y > 400) {
        this.y = 400;
    } else if (this.y <= 0) {
        score += 10; //incrementing the score by 10 points if the player reaches water
        //pointsCounter(score);
        pointsCounter();
        this.reset(); // resetting the player to the original position
    }
};

// to reset the player back to the start coordinates
Player.prototype.reset = function () {
    this.x = startX;
    this.y = startY;
};

// Draws the player on the screen, required method for game
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Function initialised to handle the input through keypress
Player.prototype.handleInput = function (keyPress) {
    if (keyPress === 'left') {
        this.x -= 100;
    }
    if (keyPress === 'right') {
        this.x += 100;
    }
    if (keyPress === 'down') {
        this.y += 90;
    }
    if (keyPress === 'up') {
        this.y -= 90;
    }
};

//To check the player's collisions with enemies
function checkCollisions() {
    for (var i = 0; i < allEnemies.length; i++) {
        if ((allEnemies[i].x) <= player.x + 65 &&
                (allEnemies[i].x + 70) >= (player.x) &&
                (allEnemies[i].y) <= player.y + 35 &&
                (allEnemies[i].y + 35) >= (player.y)) {
            score -= 5;//to reduce the score
            //pointsCounter(score);
            pointsCounter();
            player.reset();//to reset the player
        } else if (score < 0) {
            score = 0;//not to reduce the score below value 
            //pointsCounter(score);
            pointsCounter();
        }
    }
}

// Function to display the score
function pointsCounter() {
    $('#points').text(score);
    $('#pointsModal').text(score);
}

//Placed all enemy objects in the array called allEnemies
for (var i = 0; i < 3; i++) {
    var enemyX = Math.floor(Math.random() * 30);
    var enemyY = 65 + 80 * i;
    var enemySpeed = Math.floor(Math.random() * 150) + 50;
    allEnemies.push(new Enemy(enemyX, enemyY, enemySpeed));
}

//Placed the player object in a variable called player
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    if (stopGame === false) {
        player.handleInput(allowedKeys[e.keyCode]);
    }
});
