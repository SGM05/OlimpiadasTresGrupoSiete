let img;
let listaEnemigos;
let jugador;
let pantalla;

function preload() {
    img = loadImage('carretera.jpg')
}


function setup() {
    createCanvas(850, 500);
    pantalla = 0;
    listaEnemigos = []
    jugador = new Jugador(400, 85, 90, 40)


}

function draw() {
    background(150)
    image(img, 0, 0)
    if (pantalla == 0) {
        if (frameCount % 60 == 0) {
            listaEnemigos.push(new Enemigo(0, 80 + 100 * Math.floor(random(0, 4)), 100, 50))
            console.log(listaEnemigos[listaEnemigos.length - 1].y)
        }
        for (let index = 0; index < listaEnemigos.length; index++) {
            const e = listaEnemigos[index];
            e.pintar()
            e.mover()
        }
        for (let index = 0; index < listaEnemigos.length; index++) {
            const e = listaEnemigos[index];
            if (jugador.choque(e)) {
                console.log("choque")
                pantalla = 1;
            }
        }
        jugador.pintar()
    } else {
        textSize(50)
        fill(255)
        textAlign(CENTER, CENTER)
        text("Perdiste", 420, 200)
    }
}

function keyPressed() {
    jugador.mover()
}