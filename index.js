let Player;
let Constructor;
let Sun;

function StartGame() {
    MyGameArea.start()
    Player = new Component(100, 100, "purple", 50, 550);
    Constructor = new Component(25, 25, "green", 1450, 625);
    Sun = new Component(50, 25, "yellow",685, 320);
    /*myUpBtn = new Component(350, 35, "brown", 1200, 500);*/
    /*passed back width, height, color starting x value, starting y value (canvasHeight-blockHeight)*/
}

function moveup() {
    Player.speedY -= 5;
}

/*function movedown() {
    Player.speedY += 5;
}

function moveleft() {
    Player.speedX -= 5;
}

function moveright() {
    Player.speedX += 5;
}
function stopMove() {
    sets the speed indicators to 0
    Player.speedX = 0;
    Player.speedY = 0;
}
*/