const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');


// Variables
let score;
let player;
let gravity;
let obstacles = [];
let gameSpeed;
let keys = {};
//declared variables


// Event Listeners
document.addEventListener('keydown', function (evt) {
    keys[evt.code] = true;
});
document.addEventListener('keyup', function (evt) {
    keys[evt.code] = false;
});
//The event listeners listen for when a key is pressed down or released and sets values to those keypresses correspondingly





//Player rules & values
class Player {
    constructor(x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.dy = 0;
        this.jumpForce = 11;

        this.grounded = false;
        this.jumpTimer = 0;
        this.image = new Image();
        this.image.src = "./Images/CharacterSprite/player.png";
        ctx.imageSmoothingEnabled = false; 
    }
    /*the constructor creates variables for Component such as x pos, y pos, width, height, and color
   This.dy property sets the direction of y's force
   This.jumpforce is the force of the jump
   this.grounded is 
   this.jumpTimer is 
   */


    Animate() {
        // Jump
        if (keys['Space']) {
            this.Jump();
        } else {
            this.jumpTimer = 0;
        }


        //adding value
        this.y += this.dy;
        //this will add the value of the this.dy to this.y


        // Gravity
        if (this.y + this.h < canvas.height) {
            this.dy += gravity;
            this.grounded = false;
        } else {
            this.dy = 0;
            this.grounded = true;
            this.y = canvas.height - this.h;
            this.image.src = "./Images/CharacterSprite/player.png";
        }

        this.Draw();
    }

    Jump() {
        if (this.grounded && this.jumpTimer == 0) {
            this.jumpTimer = 1;
            this.dy = -this.jumpForce;
            this.image.src =  "./Images/CharacterSprite/playerJump.png";
        } else if (this.jumpTimer > 0 && this.jumpTimer < 11) {
            this.jumpTimer++;
            this.dy = -this.jumpForce - (this.jumpTimer / 50);
        }
    }


    //Draws Square for player
    Draw() {
        ctx.beginPath();
        ctx.drawImage(this.image,this.x, this.y, this.w, this.h);
        ctx.closePath();
    }
}
/*A path is a list of points, connected by segments of lines that can be of different shapes, curved or not, of different width and of different color.
A fill rect draws a rect(angle) that is filled according to the current fillStyle
 this process of using ctx (context is great for game design because it gives us the ability to draw shapes.
...(I havent figured out how to implement that to my player just yet) */





//Obstacle rules & values
class Obstacle {
    constructor(x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.image = new Image();
        this.image.src = "./Images/CharacterSprite/player.png";
        this.dx = -gameSpeed;
    }
    /*It is the same as with player. (the constructor creates variables for Component such as x pos, y pos, width, height, and color
   This.dx property sets the direction of x's force = to - gamespeed so x can remain stationary */


    //Updates X
    Update() {
        this.x += this.dx;
        this.Draw();
        this.dx = -gameSpeed;
    }
    //this will Update values by adding the value of the this.dx to this.x, 
    //call draw which will draw a square, and then subtract the speed of the game from this.dx 


    //Draws Square for Obstacle (Turtle)
    Draw() {
        
        ctx.beginPath();
        ctx.drawImage(this.image,this.x, this.y-60, this.w*3, this.h*3);
        ctx.closePath();
    }
}
/*As with before, (A path is a list of points, connected by segments of lines that can be of different shapes, curved or not, of different width and of different color.
A fill rect draws a rect(angle) that is filled according to the current fillStyle
 this process of using ctx (context is great for game design because it gives us the ability to draw shapes.)
...(I also havent figured out how to implement that to my obstacle just yet) */






// Game Functions
function SpawnObstacle() {
    let size = 25;
    let obstacle = new Obstacle(canvas.width - size, canvas.height - size, 25, 25, 'green');
    obstacles.push(obstacle);
}

function Start() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    gameSpeed = 3;
    gravity = 1;

    player = new Player(25, 0, 100, 100, 'purple');

    

    requestAnimationFrame(Update);
}

let initialSpawnTimer = 200;
let spawnTimer = initialSpawnTimer;
function Update() {
    requestAnimationFrame(Update);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    spawnTimer--;
    if (spawnTimer <= 0) {
        SpawnObstacle();
        console.log(obstacles);
        spawnTimer = initialSpawnTimer - gameSpeed * 8;

        if (spawnTimer < 60) {
            spawnTimer = 60;
        }
    }






    // Spawn Enemies
    for (let i = 0; i < obstacles.length; i++) {
        let o = obstacles[i];

        if (o.x + o.w < 0) {
            obstacles.splice(i, 1);
        }

        if (
            player.x < o.x + o.w &&
            player.x + player.w > o.x &&
            player.y < o.y + o.h &&
            player.y + player.h > o.y
        ) {
            obstacles = [];
            score = 0;
            spawnTimer = initialSpawnTimer;
            gameSpeed = 3;
        }

        o.Update();
    }

    player.Animate();

    gameSpeed += 0.003;
    
}

Start();