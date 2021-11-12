class Pacman {
    constructor(x, y, ancho, alto) {
        this.x = x
        this.y = y
        this.ancho = ancho
        this.alto = alto
        this.imageRight = loadImage("/assets/pacman.png")
        this.imageLeft = loadImage("/assets/fantasmaRojo.png")
        this.imageUp = loadImage("/assets/fantasmaRosado.png")
        this.imageDown = loadImage("/assets/fantasmaVerde.png")
        this.direction = "right"
    }
    show() {
        switch (this.direction) {
            case "right":
                image(this.imageRight, this.x, this.y, this.ancho, this.alto)
                break;
            case "left":
                image(this.imageLeft, this.x, this.y, this.ancho, this.alto)
                break;
            case "up":
                image(this.imageUp, this.x, this.y, this.ancho, this.alto)
                break;
            case "down":
                image(this.imageDown, this.x, this.y, this.ancho, this.alto)
                break;
        }
    }
    moveTeclado() {
        if (keyCode == UP_ARROW) {
            this.y -= 50
            this.direction = "up"
        }
        if (keyCode == DOWN_ARROW) {
            this.y += 50
            this.direction = "down"
        }
        if (keyCode == RIGHT_ARROW) {
            this.x += 50
            this.direction = "right"
        }
        if (keyCode == LEFT_ARROW) {
            this.x -= 50
            this.direction = "left"
        }
    }
}