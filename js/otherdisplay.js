var instructionsObj = {
    "instructionsArray": [
        "When you are ready to play the game press the <strong>Start</strong> button",
        "The player can move <em>left, right, up</em> and <em>down</em> using the arrow-keys",
        "The enemies move in varying speeds on the paved block portion of the scene",
        "Once a player collides with an enemy the player moves back to the start square",
        "The goal of the player is to reach the other side to the water, it <strong><em>fetches 10 points</em></strong>",
        "And, In the given time period of <strong><em>30 seconds</em></strong>, you have to maximise your score",
        "When the player collides with the enemy bug, you have to <strong><em>forfeit 5 points</em></strong> too in addition to <strong><em>returning to the original position</em></strong>",
        "You can restart the game by pressing the <strong>Visit Again</strong> button after completing the present game",
        "So, go ahead and maximize your score...<strong>GOOD LUCK!</strong>"
    ],
    "display": function () {
        for (i = 0; i < instructionsObj.instructionsArray.length; i++) {
            var instructionsLine = "<span class='instructions-line'>" + instructionsObj.instructionsArray[i] + "</span>";
            $('#instructionsDiv:last').append(instructionsLine);
        }
    }
};

var otherProjectsObj = {
    "otherProjectsArray": [
        "<i><a href='http://gvsrohita.github.io/OnlineResume/' target='_blank'>Online Resume </a></i>",
        "<i><a href='https://gvsrohita.github.io/PortfolioSite/' target='_blank'>Portfolio Site </a></i>",
        "Share <i><a href='mailto:gvsrohita@gmail.com?Subject=Awesome!' target='_blank'>Your Experience!</a></i>"
    ],
    "display": function () {
        for (i = 0; i < otherProjectsObj.otherProjectsArray.length; i++) {
            var instructionsLine = "<p>" + otherProjectsObj.otherProjectsArray[i] + "</p>";
            $('#otherProjectsDiv:last').append(instructionsLine);
        }
    }
};

instructionsObj.display();
otherProjectsObj.display();
