class Jugador {
    constructor(x, y, ancho, alto) {
        this.x = x
        this.y = y
        this.ancho = ancho
        this.alto = alto
    }
    pintar() {
        fill(0,250,174)
        rect(this.x, this.y, this.ancho, this.alto)
    }
    chocar(pelota) {
        if (pelota.diry == 1) {
            if ((pelota.x - pelota.radio > this.x && pelota.x + pelota.radio < this.x + this.ancho && 
                pelota.y + pelota.radio > this.y && pelota.y + pelota.radio < this.y + this.alto)) {
                return true
            }
        }
        return false
    }
    mover() {
        if (keyCode == LEFT_ARROW) {
            this.x -= 15
        }
        if (keyCode == RIGHT_ARROW) {
            this.x += 15
        }
    }
}