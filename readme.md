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