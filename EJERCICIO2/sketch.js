let pacman
let fantasmaN
let fantasmaR
let fantasmaRo
let fantasmaV
let fantasmas

function preload() {
  //img = loadImage("/assets/pacman.png")
  fanN = loadImage("/assets/fantasmaNaranja.png")
  fanR = loadImage("/assets/fantasmaRojo.png")
  fanRo = loadImage("/assets/fantasmaRosado.png")
  fanV = loadImage("/assets/fantasmaVerde.png")
}

function setup() {
  createCanvas(500, 500)
  pacman = new Pacman(random(400), random(400), 70, 70)
  fantasmas = []
  fantasmas.push(new Fantasmas(random(400), random(400), 40, 40, fanN))
  fantasmas.push(new Fantasmas(random(400), random(400), 40, 40, fanR))
  fantasmas.push(new Fantasmas(random(400), random(400), 40, 40, fanRo))
  fantasmas.push(new Fantasmas(random(400), random(400), 40, 40, fanV))
}

function draw() {
  background(220)
  pacman.show()

  for (let i = 0; i < fantasmas.length; i++) {
    fantasmas[i].show()
    fantasmas[i].move()
  }

  for (let i = 0; i < fantasmas.length; i++) {
    if (fantasmas[i].capturado(pacman)) {
      fantasmas.splice(i, 1)
    }
  }
}

function keyPressed() {
  pacman.moveTeclado()
  if (keyCode == 32 && pacman.mover == false) {
    pacman.mover = true
  }
}