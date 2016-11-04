function stopGame() {
    location.reload(true);
}

function topMove() {
    var elem = document.getElementById("bugTop");
    var pos = 400;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos === 830) {
            clearInterval(id);
            topMove();
        } else {
            pos++;
            //elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}
function middleMove() {
    var elem = document.getElementById("bugMiddle");
    var pos = 400;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos === 830) {
            clearInterval(id);
            middleMove();
        } else {
            pos++;
            //elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

function bottomMove() {
    var elem = document.getElementById("bugBottom");
    var pos = 400;
    var id = setInterval(frame, 15);
    function frame() {
        if (pos === 830) {
            clearInterval(id);
            bottomMove();
        } else {
            pos++;
            //elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

function movePlayerRight() {
    var elem = document.getElementById("player");
    
    var x = getOffset(elem).left;
    x = x + 50 - 713;
    elem.style.left = x + "px";
}

function movePlayerLeft() {
    var elem = document.getElementById("player");
    
    var x = getOffset(elem).left;
    x = x - 50 - 713;
    elem.style.left = x + "px";
}

function movePlayerUp() {
    var elem = document.getElementById("player");

    var y = getOffset(elem).top;
    y = y - 80 - 476;
    elem.style.top = y + "px";
}

function movePlayerDown() {
    var elem = document.getElementById("player");

    var y = getOffset(elem).top;
    y = y + 80 - 476;
    elem.style.top = y + "px";
}

function startGame() {
    moveEnemyBugs();
}
function moveEnemyBugs() {
    topMove();
    middleMove();
    bottomMove();
}

function getOffset(el) {
    var _x = 0;
    var _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft;// - el.scrollLeft;
        _y += el.offsetTop;// - el.scrollTop;
        el = el.offsetParent;
    }
    return {top: _y, left: _x};
}
