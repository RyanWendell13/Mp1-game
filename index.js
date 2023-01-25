let myGamePiece;
let myObstacle;
let myUpBtn;

function StartGame() {
    MyGameArea.start()
    myGamePiece = new Component(100, 100, "purple", 20, 580);
    myObstacle = new Component(25, 25, "green", 1450, 655);
    myUpBtn = new Component(50, 25, "yellow",685, 307);
    /*myUpBtn = new Component(350, 35, "brown", 1200, 500);*/
    /*passed back width, height, color starting x value, starting y value (canvasHeight-blockHeight)*/
}

function moveup() {
    myGamePiece.speedY -= 5;
}

/*function movedown() {
    myGamePiece.speedY += 5;
}

function moveleft() {
    myGamePiece.speedX -= 5;
}

function moveright() {
    myGamePiece.speedX += 5;
}*/
function stopMove() {
    /*sets the speed indicators to 0*/
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
}