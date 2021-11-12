class Jugador {
    constructor(x, y, ancho, alto) {
        this.x = x
        this.y = y
        this.ancho = ancho
        this.alto = alto
    }
    pintar() {
        fill(0, 255, 0)
        rect(this.x, this.y, this.ancho, this.alto)
    }
    moveTeclado() {
        if (keyCode == UP_ARROW) {
            this.y -= 40
        }
        if (keyCode == DOWN_ARROW) {
            this.y += 40
        }
    }
    capturado(mX, mY) {
        if (mX > this.x &&
            mX < this.x + this.ancho &&
            mY > this.y &&
            mY < this.y + this.alto) {
            return true
        }
        return false
    }
}