//gamecontrolobjects.js
// Using object and encapsulation for game control
var gameObj = {

    //To initialize the game
    "gameInitialize": function () {
        stopGame = true;// Changing the value of the global variable
        score = 0;// Reinitialising the score to 0
        pointsCounter(score);
        $("#timer").text(game_duration_sec);
        console.log("Game initialised"); // Code debugging
    },

    //To start the game
    "gameStart": function () {
        score = 0;
        pointsCounter(score);
        console.log("Game start"); // Code debugging
        timer = game_duration_sec;
        $("#timer").text(timer);
        gameInterval = setInterval(function () {
            timer -= 1; //reducing the time by 1 second
            if (timer <= 0) {
                gameObj.gameStop(); // to stop the game
                $("#modalDiv").removeClass("display-none"); // Not to display the present div
                $("#modalDiv").addClass("display-block"); // To display a new div after the whole count down of the timer
            }
            $("#timer").text(timer);
        }, 1000);
        stopGame = false; //changing the value of the global variable
    },
    
    //To stop the game
    "gameStop": function () {
        console.log("Game over"); // Code debugging
        $("#timer").text("0");
        clearInterval(gameInterval); // stop timer
        player.reset(0); // move player to start position
        stopGame = true; // Changing the value of the global variable
    }
};
