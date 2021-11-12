class Boton{
    constructor(posX, posY, radio) {
        this.posX = posX
        this.posY = posY
        this.radio = radio
    }
    pintar(){
        fill(180,0,0);
        circle(this.posX, this.posY, this.radio*2)
        fill(255);
        textSize(25);
        textAlign(CENTER);
        text ("SELECCIONA TU AVATAR", 250,110);
        
    }
    click(mx,my){
        if (dist(mx,my, this.posX, this.posY)<this.radio){
            return true
        }
        return false
    }
}