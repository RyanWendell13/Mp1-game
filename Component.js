class Component {
    constructor(width, height, color, x, y){
        /*creates variables for Component*/
        this.width = width;
        this.height = height;
        this.speedX = 0;
        /*This property changes the component's left right position.*/
        this.speedY = 0;
        /*This property changes the component's up down position.*/
        this.x = x;
        this.y = y;
        this.ctx = myGameArea.context;
        this.color = color;
    }

    Update() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    
    NewPos() {
        /*newPos(), which uses the speedX and speedy*/
        this.x += this.speedX;
        this.y += this.speedY;
    }
}