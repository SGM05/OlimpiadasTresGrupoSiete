let pelota
let jugador1
let jugador2
let atrapado
let puntaje1
let puntaje2

function setup() {
  createCanvas(800, 600)
  pelota = new Pelota(385, 285, 15)
  jugador1 = new Jugador(70, 180, 30, 250) //mover con flechas
  jugador2 = new Jugador(690, 180, 30, 250) //mover con mouse
  atrapado = null
  puntaje1 = 0
  puntaje2 = 0
}

function draw() {
  background(150)
  pelota.pintar()
  jugador1.pintar()
  jugador2.pintar()
  pelota.move(jugador1, jugador2)
  fill(255)
  textSize(25)
  text(puntaje1, 50, 550)
  text(puntaje2, 730, 550)
  if (pelota.x > 800) {
    puntaje1 += 1
    pelota.x = 385
    pelota.y = 285
    pelota.dirX *= -1
    pelota.mover = false
  } else if (pelota.x < 0) {
    puntaje2 += 1
    pelota.x = 385
    pelota.y = 285
    pelota.dirX *= -1
    pelota.mover = false
  }
}

function keyPressed() {
  jugador1.moveTeclado()
  if (keyCode == 32 && pelota.mover == false) {
    pelota.mover = true
  }
}

function mousePressed() {
  if (jugador2.capturado(mouseX, mouseY) && atrapado == null) {
    atrapado = jugador2
  }
}

function mouseDragged() {
  if (atrapado != null) {
    atrapado.y = mouseY - atrapado.alto / 2
  }
}

function mouseReleased() {
  if (atrapado != null) {
    atrapado = null
  }
}