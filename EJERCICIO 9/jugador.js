class Jugador{

    constructor(x,y,ancho,alto){
        this.x= x
        this.y= y
        this.ancho= ancho
        this.alto= alto
        this.carro_jugador= loadImage('carro_jugador.png')
        

    }

    pintar(){
        image(this.carro_jugador,this.x,this.y, this.ancho, this.alto)
    }
   
    mover(){
      
        if (keyCode== UP_ARROW) {
            this.y -=100
            
        
        }

        else if (keyCode== DOWN_ARROW) {
            this.y +=100
            
        }
    
    }

    choque(enemigo){

    if (this.x > enemigo.x && this.x < enemigo.x + enemigo.ancho && this.y > enemigo.y && this.y < enemigo.y + enemigo.alto) {
        return true
    }
    return false
    }

}