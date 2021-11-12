class Balas{
    constructor(x, y){
      this.x = x 
      this.y = y
    }

    Show(){
        fill(255)
        rect(this.x, this.y, 10, 10)
    }

    move(){
        this.y -= 10
    }
}    