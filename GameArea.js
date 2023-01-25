let MyGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
    /* start() method creates a <canvas> element and inserts it as the first childnode of the <body> element.*/
        this.canvas.width = 1525;
        this.canvas.height = 740;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(UpdateGameArea, 20);
        /* interval which runs the UpdateGameArea() function every 20th millisecond (50 times per second)*/
        window.addEventListener('keydown', function (e) {
            MyGameArea.keys = (MyGameArea.keys || []);
            MyGameArea.keys[e.keyCode] = true;})
            /*listen for when a key or a set of keys [whatever is in these brackets] is pressed down*/
        window.addEventListener('keyup', function (e) {MyGameArea.keys[e.keyCode] = false;})},
    clear: function () {this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);},
    /*listen for when a key or a set of keys [whatever is in these brackets] is lifted up*/
    stop: function () {clearInterval(this.interval);}
    /*stops game interval (updating block every 20 miliseconds) and therefore game stops*/
}

function UpdateGameArea() {
    /*calls the clear() and the Update() method*/
    MyGameArea.clear();
    myUpBtn.Update();
    myObstacle.Update();
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
    if (MyGameArea.keys && MyGameArea.keys[37]) { myGamePiece.speedX = -5; }
    if (MyGameArea.keys && MyGameArea.keys[39]) { myGamePiece.speedX = 5; }
    if (MyGameArea.keys && MyGameArea.keys[38]) { myGamePiece.speedY = -5; }
    if (MyGameArea.keys && MyGameArea.keys[40]) { myGamePiece.speedY = 5; }
    /*if a key is pressed and that key is arrow  left, right, up or down, then change the speed of x to -1, 1, or speed of Y to -1, 1 respectively.*/
    myGamePiece.NewPos();
    /*k with the players position*/
    myGamePiece.Update();
    /*Updates game with the players position*/
}