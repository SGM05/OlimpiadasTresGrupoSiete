class Pelota{
    constructor(x,y,radio){
        this.x=x
        this.y=y
        this.radio=radio
        this.dirx=1
        this.diry=-1
        this.velocidad=5

    }
    pintar(){
        fill(255,0,255)
        circle(this.x, this.y, this.radio*2)
    }
    mover(){
        this.x+= this.velocidad*this.dirx
        this.y+= this.velocidad*this.diry

        if (this.x < this.radio || this.x > 700-this.radio){
            this.dirx *= -1
        }

        if (this.y < this.radio){
            this.diry *= -1
        }
    }
}