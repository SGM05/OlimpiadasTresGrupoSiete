class Bloque{
    constructor(x,y,ancho, alto){
        this.x=x
        this.y=y
        this.ancho=ancho
        this.alto=alto
    }
    pintar(){
        fill(255,255,0)
        rect(this.x, this.y, this.ancho, this.alto)
    }

    chocar(pelotax,pelotay,radio){
        if (pelotax - radio> this.x && pelotax + radio< this.x + this.ancho && pelotay - radio> this.y && pelotay + radio< this.y + this.alto){
            return true
        }
            return false
    }

    
}