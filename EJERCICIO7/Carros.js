class Carros {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.diry = 0.5

    }

    Show() {
        stroke(1);
        fill(255, 255, 0);
        rect(this.x, this.y, 30, 50, 2);
    }

    move() {
        this.y += 3 * this.diry
        

        
    }
}