class Pelota {
    constructor(x, y, radio) {
        this.x = x
        this.y = y
        this.radio = radio
        this.dirX = 1
        this.dirY = 1
        this.vel = 5
        this.mover = false
    }
    pintar() {
        fill(255, 0, 0)
        circle(this.x, this.y, this.radio * 2)
    }
    move(jugador1, jugador2) {
        if (this.mover == true) {
            this.y += this.vel * this.dirY
            this.x += this.vel * this.dirX
            if (this.y > 600 - this.radio || this.y < 0 + 15) {
                this.dirY *= -1
            }
            if (this.x > jugador1.x &&
                this.x < jugador1.x + jugador1.ancho &&
                this.y > jugador1.y &&
                this.y < jugador1.y + jugador1.alto) {
                this.dirX *= -1
                this.x = jugador1.x + jugador1.ancho + this.radio
            }
            if (this.x > jugador2.x &&
                this.x < jugador2.x + jugador2.ancho &&
                this.y > jugador2.y &&
                this.y < jugador2.y + jugador2.alto) {
                this.dirX *= -1
                this.x = jugador2.x - jugador2.ancho + this.radio
            }
        }
    }
}