//otherdisplay.js
//Used object for showing instructions on the left side of the page
var instructionsObj = {
    "instructionsArray": [
        "When you are ready to play the game, press the <strong>Start</strong> button",
        "The player can move <em>left, right, up</em> and <em>down</em> using the arrow-keys",
        "The enemies move in varying speeds on the paved block portion of the scene",
        "Once a player collides with an enemy, the player moves back to the start square",
        "The goal of the player is to reach the other side to the water. It <strong><em>fetches you 10 points</em></strong>",
        "In the given time period of <strong><em>" + game_duration_sec + " seconds</em></strong>, you have to maximise your score",
        "When the player collides with the enemy, you <strong><em>forfeit 5 points</em></strong> too (of course, if score is <strong><em>0</em></strong>, this rule does not apply) in addition to <strong><em>moving back to the start square</em></strong>",
        "You can restart the game by pressing the <strong>Visit Again</strong> button after completing a game",
        "So, go ahead and maximize your score...<strong>GOOD LUCK!</strong>"
    ],
    
    //Encapsulated the display function
    "display": function () {
        for (i = 0; i < instructionsObj.instructionsArray.length; i++) {
            var instructionsLine = "<span class='instructions-line'>" + instructionsObj.instructionsArray[i] + "</span>";
            $("#instructionsDiv:last").append(instructionsLine);
        }
    }
};

//Used this object for showing my other projects on the right side of page
var otherProjectsObj = {
    "otherProjectsArray": [
        "<em><a href='http://gvsrohita.github.io/OnlineResume/' target='_blank'>Online Resume </a></em>",
        "<em><a href='https://gvsrohita.github.io/PortfolioSite/' target='_blank'>Portfolio Site </a></em>",
        "<hr>",
        "Share <strong><em><a href='mailto:gvsrohita@gmail.com?Subject=Awesome!' target='_blank'>Your Experience!</a></em></strong>"
    ],
    
    //Encapsulated the display function
    "display": function () {
        for (i = 0; i < otherProjectsObj.otherProjectsArray.length; i++) {
            var instructionsLine = "<p>" + otherProjectsObj.otherProjectsArray[i] + "</p>";
            $("#otherProjectsDiv:last").append(instructionsLine);
        }
    }
};

//Using the encapsulated functions
instructionsObj.display();
otherProjectsObj.display();