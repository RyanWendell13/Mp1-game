var myGamePiece;
var myObstacle;
var myUpBtn;

function startGame() {
    myGameArea.start();
    myGamePiece = new component(100, 100, "yellow", 0, 544);
    myObstacle = new component(25, 25, "silver", 300, 619);
    myUpBtn = new component(350, 35, "brown", 1000, 500);
    /*myUpBtn = new component(350, 35, "brown", 1200, 500);*/
    /*passed back width, height, color starting x value, starting y value (canvasHeight-blockHeight)*/
}

var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        /* start() method creates a <canvas> element and inserts it as the first childnode of the <body> element.*/
        this.canvas.width = 1430;
        this.canvas.height = 644;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        /* interval which runs the updateGameArea() function every 20th millisecond (50 times per second)*/
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

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    /*This property changes the component's left right position.*/
    this.speedY = 0;
    /*This property changes the component's up down position.*/
    this.x = x;
    this.y = y;
    this.update = function () {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function () {
        /*newPos(), which uses the speedX and speedY*/
        this.x += this.speedX;
        this.y += this.speedY;
    }
}


function updateGameArea() {
    /*calls the clear() and the update() method*/
    myGameArea.clear();
    myUpBtn.update();
    myObstacle.update();
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
    if (myGameArea.keys && myGameArea.keys[37]) { myGamePiece.speedX = -5; }
    if (myGameArea.keys && myGameArea.keys[39]) { myGamePiece.speedX = 5; }
    if (myGameArea.keys && myGameArea.keys[38]) { myGamePiece.speedY = -5; }
    if (myGameArea.keys && myGameArea.keys[40]) { myGamePiece.speedY = 5; }
    /*if a key is pressed and that key is arrow  left, right, up or down, then change the speed of x to -1, 1, or speed of Y to -1, 1 respectively.*/
    myGamePiece.newPos();
    /*updates game with the players position*/
    myGamePiece.update();
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









































/*<div class= page>
<div class="playerArea">
<div class="ground1">
<div class="ground2">*/

            stop: function () {
                clearInterval(this.interval);
            }
            /*stops game interval (updating block every 20 miliseconds) and therefore game stops*/
        }

    <img src = "images\sprites\characters\player.png"/>

<canvas id="canvas" width="1430" height="644" style="background-color: navy; border:1px solid black; border-width: 3em;"></canvas>

  if (myGamePiece.crashWith(myObstacle)) {
        myGamePeice.stop();

            }
            myGamePeice.stop(){
                myGamePiece.speedX = 0;
            myGamePiece.speedY = 0;
            }

        background-color: rgba(40, 48, 56, 0.25);

                    if (myGamePiece.crashWith(myObstacle)) {
    myGameArea.stop();
    /*stops the game when there is a crash*/
  } else {

    <button onmousedown="moveup()" onmouseup="stopMove()" ontouchstart="moveup()">UP</button>
    <button onmousedown="movedown()" onmouseup="stopMove()" ontouchstart="movedown()">DOWN</button>
    <button onmousedown="moveleft()" onmouseup="stopMove()" ontouchstart="moveleft()">LEFT</button>
    <button onmousedown="moveright()" onmouseup="stopMove()" ontouchstart="moveright()">RIGHT</button>

.playerArea {

    margin-left: auto;
    margin-right: auto;
    width: 1400px;
    height: 650px;
    background: navy;
    border-radius: 25px;
    box-shadow: 10 px;
}

.ground1 {

    background: brown;
    width: 300px;
    height: 20px;
    top: 80%;
    left: 75%;
    border-radius: 25px;
    box-shadow: 10px;
}

.ground2 {
    background: brown;
    width: 300px;
    height: 20px;
    top: 50%;
    left: 65%;
    border-radius: 25px;
    box-shadow: 10px;
}

   <canvas id="coin" width="50" height="100"></canvas>
    <script id="coin">
        var coin = document.getElementById("coin");
        var ctx = coin.getContext("2d");
        var radius = coin.height / 2;
        ctx.translate(radius, radius);
        radius = radius * 0.90

        drawClock();
        function drawClock() {
        drawFace(ctx, radius);
        }       

  function drawFace(ctx, radius) {
    ctx.fillStyle = 'orange';
    ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
    grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
    ctx.fill();
}

   function colorRadius(ctx, radius) {

        }

    </script>