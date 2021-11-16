class Carro {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    Show() {
        stroke(1);
        fill(255);
        rect(this.x, this.y, 30, 30, 2);
    }

    move(key) {
        if (key == 'ArrowRight') {
            this.x += 50
        }

        if (key == 'ArrowLeft') {
            this.x -= 50
        }
    }

    choque(enemigo){

        if (this.x >= enemigo.x && this.x <= enemigo.x + enemigo.ancho && this.y >= enemigo.y && this.y <= enemigo.y + enemigo.alto) {
            return true
        }
        return false
        }
    
}