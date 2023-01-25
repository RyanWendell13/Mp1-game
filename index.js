let myGamePiece;
let myObstacle;
let myUpBtn;

function startGame() {
    myGameArea.start();
    myGamePiece = new Component(100, 100, "yellow", 0, 544);
    myObstacle = new Component(25, 25, "silver", 300, 619);
    myUpBtn = new Component(350, 35, "brown", 1000, 500);
    /*myUpBtn = new Component(350, 35, "brown", 1200, 500);*/
    /*passed back width, height, color starting x value, starting y value (canvasHeight-blockHeight)*/
}

let myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        /* start() method creates a <canvas> element and inserts it as the first childnode of the <body> element.*/
        this.canvas.width = 1430;
        this.canvas.height = 644;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(UpdateGameArea, 20);
        /* interval which runs the UpdateGameArea() function every 20th millisecond (50 times per second)*/
        window.addEventListener('keydown', function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = true;
            /*listen for when a key or a set of keys [whatever is in these brackets] is pressed down*/
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = false;
        })
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    /*listen for when a key or a set of keys [whatever is in these brackets] is lifted up*/
    stop: function () {
        clearInterval(this.interval);
    }
    /*stops game interval (updating block every 20 miliseconds) and therefore game stops*/
}


function UpdateGameArea() {
    /*calls the clear() and the Update() method*/
    myGameArea.clear();
    myUpBtn.Update();
    myObstacle.Update();
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
    if (myGameArea.keys && myGameArea.keys[37]) { myGamePiece.speedX = -5; }
    if (myGameArea.keys && myGameArea.keys[39]) { myGamePiece.speedX = 5; }
    if (myGameArea.keys && myGameArea.keys[38]) { myGamePiece.speedY = -5; }
    if (myGameArea.keys && myGameArea.keys[40]) { myGamePiece.speedY = 5; }
    /*if a key is pressed and that key is arrow  left, right, up or down, then change the speed of x to -1, 1, or speed of Y to -1, 1 respectively.*/
    myGamePiece.NewPos();
    /*Updates game with the players position*/
    myGamePiece.Update();
}
function moveup() {
    myGamePiece.speedY -= 5;
}

function movedown() {
    myGamePiece.speedY += 5;
}

function moveleft() {
    myGamePiece.speedX -= 5;
}

function moveright() {
    myGamePiece.speedX += 5;
}
function stopMove() {
    /*sets the speed indicators to 0*/
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
}