let bloques
let turno

function setup() {
  bloques = []
  for (let i = 0; i < 9; i++) {
    if (i < 3) {
      bloques.push(new Bloque(50 + 100 * i, 50, 100))
    } else if (i >= 3 && i < 6) {
      bloques.push(new Bloque(50 + 100 * (i - 3), 150, 100))
    } else if (i >= 6) {
      bloques.push(new Bloque(50 + 100 * (i - 6), 250, 100))
    }
  }
  turno = "O"
  createCanvas(500, 500);
}

function draw() {
  background(59,131,89);
  for (let i = 0; i < bloques.length; i++) {
    bloques[i].pintar()
  }
  fill(180,0,0);
  circle(420,420,70)
  fill(0)
  textSize(20);
  text("Reset", 420, 420);
  noFill()
  fill(255);
  text("CLICK TO PLAY",130,422);
  
  
}

function mousePressed() {
  for (let i = 0; i < bloques.length; i++) {
    if (bloques[i].click(mouseX, mouseY) && bloques[i].seleccionado == false) {
      bloques[i].turno = turno
      bloques[i].seleccionado = true
      if (turno == "O") {
        turno = "X"
      } else {
        turno = "O"
      }
    }

  }
  if(dist(mouseX,mouseY,420,420)<35){
    for (let i = 0; i < bloques.length; i++) {
      bloques[i].seleccionado = false
      bloques[i].turno = ""
    }
  }
}