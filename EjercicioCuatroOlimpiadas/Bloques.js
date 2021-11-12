class Bloque{
    constructor(posX,posY,tam){
        this.posX= posX
        this.posY= posY
        this.tam= tam
        this.seleccionado = false
        this.turno = ""
    }
    pintar(){
        fill(255);
        rect(this.posX, this.posY,this.tam);
        fill(0);
        textSize(55)
        textAlign(CENTER, CENTER)
        text(this.turno, this.posX + this.tam/2, this.posY + this.tam/2)
    }
    click(mx,my){
        if(mx>this.posX && mx < this.posX + this.tam && my>this.posY && my < this.posY + this.tam){
            return true
        }
        return false
    }
}