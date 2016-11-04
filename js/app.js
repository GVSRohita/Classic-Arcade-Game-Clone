var game_duration = 20000;
var game_duration_sec = game_duration/1000;
$('#timer').text(game_duration_sec);
//$('#modalDiv').toggle();
window.stopGame = false;
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

Enemy.prototype.reset = function () {
    this.x = -200;
};


//initialise x and y positions
var startX = 200;
var startY = 400;
var score = 0;
var timerEl = document.getElementById('timer');
var timer;

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function () {
    this.x = startX;
    this.y = startY;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function () {
    if (this.x < 0) {
        this.x = 0;
    } else if (this.x > 400) {
        this.x = 400;
    } else if (this.y > 400) {
        this.y = 400;
    } else if (this.y <= 0) {
        score += 10;
        pointsCounter(score);
        this.reset();
    }
};

// reset function sets the player back to the start coordinates
Player.prototype.reset = function () {
    this.x = startX;
    this.y = startY;
};

function pointsCounter() {
    var pointContainer1 = document.getElementById("points");
    var pointContainer2 = document.getElementById("pointsModal");
    pointContainer1.innerHTML = score;
    pointContainer2.innerHTML = score;
}

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
//if(gameStart()){
for (var i = 0; i < 3; i++) {
    var enemyX = Math.floor(Math.random() * 30);
    var enemyY = 65 + 80 * i;
    var enemySpeed = Math.floor(Math.random() * 150) + 50;
    allEnemies.push(new Enemy(enemyX, enemyY, enemySpeed));
}
//}else if (gameStop()){
//   enemySpeed = 0;
//}
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
    if (window.stopGame === false) {
        player.handleInput(allowedKeys[e.keyCode]);
    }
});

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

function checkCollisions() {
    for (var i = 0; i < allEnemies.length; i++) {
        if ((allEnemies[i].x) <= player.x + 65 &&
                (allEnemies[i].x + 70) >= (player.x) &&
                (allEnemies[i].y) <= player.y + 35 &&
                (allEnemies[i].y + 35) >= (player.y)) {
            score -= 5;
            pointsCounter(score);
            player.reset();
        } else if (score < 0) {
            score = 0;
            pointsCounter(score);
        }
    }
}

function gameStart() {
    score = 0;
    pointsCounter(score);
    console.log("Game start");
    timer = game_duration / 1000;
    timerEl.innerHTML = timer;
    gameInterval = setInterval(function () {
        timer -= 1;
        if (timer <= 0) {
            //alert('Game Over');
            gameStop();
            $('#modalDiv').removeClass('display-none');
            $('#modalDiv').addClass('display-block');
        }
        timerEl.innerHTML = timer;
    }, 1000);
    window.stopGame = false;
}

function gameStop() {
    console.log("Game over");
    timerEl.innerHTML = 0;
    clearInterval(gameInterval); // stop timer
    player.reset(0); // move player to start position
    window.stopGame = true;
}

