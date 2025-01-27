const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const quoteScoreElement = document.getElementById('quoteScore');

const wordElemets = [document.getElementById('words1'),document.getElementById('words2'),document.getElementById('words3')]
console.log (wordElemets)
// Variables
let score = 0;
let quoteScore = 0;
let player;
let quotes;
let gravity = 20;
let obstacles = [];
let gameSpeed;
let keys = {};
let wordIndex = 0;
let timerMax = 300;
let timer = 0;

//declared variables

document.getElementById('Form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    quotes.check()
  });

// Event Listeners
document.addEventListener('keydown', function (evt) {
    keys[evt.code] = true;
});
document.addEventListener('keyup', function (evt) {
    keys[evt.code] = false;
});
//The event listeners listen for when a key is pressed down or released and sets values to those keypresses correspondingly

let lastFrameTime = performance.now();
let currentTime;
let deltaTime;



//Player rules & values
class Player {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.dy = 0;
        this.jumpForce = 9;
        this.grounded = false;
        this.jumpTimer = 0;
        this.image = new Image();
        this.image.src = "./Images/Walker/Walker1.png";
        ctx.imageSmoothingEnabled = false; 
        this.imageLinks = ["./Images/Walker/Walker1.png","./Images/Walker/Walker2.png","./Images/Walker/Walker3.png"]
        this.imageIndex = 0;
        this.imageIndexRev = false;
        this.framesPassed = 0;
        this.repenting = false
    }
    /*the constructor creates variables for Component such as x pos, y pos, width, height, and color
   This.dy property sets the direction of y's force
   This.jumpforce is the force of the jump
   this.grounded is 
   this.jumpTimer is 
   */


    Animate() {
        this.framesPassed+=1

        // Jump
        

        if (this.repenting == true){
            score -= 1
        }
        else{
            score+=1
        }

        if(keys['KeyB']){
            this.repenting = true
            console.log("BNICE")
        }
        else if (keys['Space']) {
            this.Jump();
        } else {
            this.jumpTimer = 0;
        }
        if (this.framesPassed > 6){
            wordElemets[wordIndex].classList.toggle('hidden')
            wordIndex += 1
            if (wordIndex == wordElemets.length){
                wordIndex = 0;
            }
            wordElemets[wordIndex].classList.toggle('hidden')
            if (!this.repenting){
                this.image.src =  this.imageLinks[this.imageIndex]

            }
            this.framesPassed = 0
            if(!keys['KeyB']){
                this.repenting = false
            }
        }
        else{
            if (this.repenting == true) {
                this.image.src = "./Images/Walker/WalkerRepent.png"
            }
            if (this.imageIndex <= 0) {
                this.imageIndexRev = false
            }
            if (this.imageIndex >= this.imageLinks.length-1) {
                this.imageIndexRev = true
    
            }
            if (this.imageIndexRev == false) {
            
                this.imageIndex+=1;
            }
            else {
            
                this.imageIndex-=1;
            }
        }

        //adding value
        this.y += this.dy;
        //this will add the value of the this.dy to this.y


        // Gravity
        if (this.y + this.h < canvas.height) {
            this.dy += gravity * deltaTime;
            this.grounded = false;
            this.image.src = "./Images/Walker/Walker3.png"
        } else {
            this.dy = 0;
            this.grounded = true;
            this.y = canvas.height - this.h;
        }

        

        this.Draw();
    }

    Jump() {
        if (this.grounded && this.jumpTimer == 0) {
            this.jumpTimer = 1;
            this.dy = -this.jumpForce;
        } else if (this.jumpTimer > 0 && this.jumpTimer < 1) {
            this.jumpTimer += deltaTime;
            this.dy = -this.jumpForce - (this.jumpTimer / 50) * deltaTime;
        }
    }
    

    //Draws Square for player
    Draw() {
        ctx.beginPath();
        ctx.drawImage(this.image,this.x-this.w, this.y, this.w, this.h);
        ctx.closePath();
    }
}
/*A path is a list of points, connected by segments of lines that can be of different shapes, curved or not, of different width and of different color.
A fill rect draws a rect(angle) that is filled according to the current fillStyle
 this process of using ctx (context is great for game design because it gives us the ability to draw shapes.
...(I havent figured out how to implement that to my player just yet) */

class Quotes{
    constructor(){



        this.timerObj = document.getElementById('Bar')
        this.QuestionObj = document.getElementById("Question")
        this.timerMax = 1
        this.timer = 0
        this.question = ["Jeremiah 29:11","Deuteronomy 31:6","Proverbs 3:5-6","Lamentations 3:22-23","Psalm 34:8","Isaiah 41:10"]
        //this.answer = ["test","test","test","test","test","test"] USE FOR TESTING CORRECT ANSWERS
        this.answer = ["For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.",
        "Be strong and courageous. Do not fear or be in dread of them, for it is the Lord your God who goes with you. He will not leave you or forsake you.",
        "Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.",
        "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.",
        "Oh, taste and see that the Lord is good! Blessed is the man who takes refuge in him!",
        "Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand."]
        this.currentIndex = Math.floor(Math.random() * this.question.length)
        this.QuestionObj.innerHTML = this.question[this.currentIndex]
        
    }

    run() {
        if (this.timer >= this.timerMax) {
            this.timer = 0
            this.currentIndex = Math.floor(Math.random() * this.question.length)
            this.QuestionObj.innerHTML = this.question[this.currentIndex]
            quoteScore -= 1;
        }
        else{
            this.timer += deltaTime
        }

        this.timerObj.style.width = `${(this.timer/this.timerMax)*100}` + "%"
    }
    check(){
        console.log("HELLOOO")
        if (document.getElementById('Form').elements.Quote.value != this.answer[this.currentIndex]){
            document.getElementById('bibleQuotes').style.borderColor = "red"
            quoteScore -= 5
        }
        else{
            document.getElementById('bibleQuotes').style.borderColor = "green"
            quoteScore += 1
        }
    }
}





//Obstacle rules & values
class Obstacle {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.image = new Image();
        this.image.src = "./Images/Commandments.png";
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
        ctx.drawImage(this.image,this.x, this.y-20, this.w, this.h);
        ctx.closePath();
    }
}
/*As with before, (A path is a list of points, connected by segments of lines that can be of different shapes, curved or not, of different width and of different color.
A fill rect draws a rect(angle) that is filled according to the current fillStyle
 this process of using ctx (context is great for game design because it gives us the ability to draw shapes.)
...(I also havent figured out how to implement that to my obstacle just yet) */






// Game Functions
function SpawnObstacle() {
    let size = 0;
    let obstacle = new Obstacle(canvas.width - size, canvas.height - 50, 75, 75);
    obstacles.push(obstacle);
}

function Start() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight/1.5;

    gameSpeed = 5;

    player = new Player(canvas.width/3, 0, 100, 100);
    quotes = new Quotes()
    

    requestAnimationFrame(Update);
}

let initialSpawnTimer = 1;
let spawnTimer = initialSpawnTimer;
function Update() {

    currentTime = performance.now();
    deltaTime = (currentTime - lastFrameTime) / 1000; 

    quotes.run()
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    scoreElement.innerHTML = "SINS AGAINST GOD: " + score;
    quoteScoreElement.innerHTML = "GOD'S LOVE: " + quoteScore;


    spawnTimer-= deltaTime;
    if (spawnTimer <= 0) {
        SpawnObstacle();
        console.log(obstacles);
        spawnTimer = initialSpawnTimer - gameSpeed * 8 * deltaTime;

        if (spawnTimer < 2) {
            spawnTimer = 2;
        }
    }

    lastFrameTime = currentTime;



    // Spawn Enemies
    for (let i = 0; i < obstacles.length; i++) {
        let o = obstacles[i];

        if (o.x + o.w < 0) {
            obstacles.splice(i, 1);
        }

        if (
            player.x < o.x + o.w+ 60 &&
            player.x-120 + player.w > o.x &&
            player.y < o.y + o.h &&
            player.y + player.h > o.y
        ) {
            obstacles = [];
            score = 0;
            quoteScore = 0;
            spawnTimer = initialSpawnTimer;
            gameSpeed = 5
        }

        o.Update();
    }

    player.Animate();

    gameSpeed += 0.003;
    

    requestAnimationFrame(Update);

}


Start();
