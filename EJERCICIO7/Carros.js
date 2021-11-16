class Carros {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.diry = 0.5

    }

    Show() {
        stroke(1);
        fill(255, 255, 0);
        rect(this.x, this.y, 30, 50, 2);
    }

    move() {
        this.y += 5 * this.diry
              

        
    }
    choque(carro){
        if(carro.x >= this.x && carro.x <= this.x +30 && 
            carro.y >= this.y && carro.y <= this.y + 50){
                return true
            } return false 

    
    }

}