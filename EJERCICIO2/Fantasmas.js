class Fantasmas {
    constructor(x, y, ancho, alto, image) {
        this.x = x
        this.y = y
        this.ancho = ancho
        this.alto = alto
        this.image = image
        this.dirx = 1
        this.diry = 1
        this.velocidad = 5
        this.mover = true
    }

    show() {
        image(this.image, this.x, this.y, this.ancho, this.alto)
    }

    move() {
        this.x += this.velocidad * this.dirx
        if (this.x > 500 || this.x < 0) {
            this.dirx *= -1
        }
    }

    capturado(pacman) {
        if (this.x > pacman.x && this.x < pacman.x + pacman.ancho && this.y > pacman.y && this.y < pacman.y + pacman.alto) {
            return true
        }
        return false
    }
}