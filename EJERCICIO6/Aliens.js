class Aliens {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dirx = 0.5
    }

    Show() {
        fill(255,255,255);
        rect(this.x, this.y, 30, 30);
    }

    move(){
        this.x += 2* this.dirx

    }

}