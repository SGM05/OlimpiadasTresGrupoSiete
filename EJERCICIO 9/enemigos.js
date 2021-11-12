class Enemigo{

    constructor(x,y,ancho,alto){
        this.x= x
        this.y= y
        this.ancho= ancho
        this.alto= alto
        this.enemigo_morado= loadImage('enemigo_morado.png')
      

    }

    pintar(){
        image(this.enemigo_morado,this.x,this.y, this.ancho, this.alto)
    }
   
    mover(){
        this.x += 5
    }
}