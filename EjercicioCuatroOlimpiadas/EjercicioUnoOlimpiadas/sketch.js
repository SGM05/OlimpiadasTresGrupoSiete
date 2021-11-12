let personas;
let botonIzquierda;
let botonDerecha;
let personaIndex;
let randomIndex;

function setup() {
  personas = [];
  personaIndex = 0
  for (let i = 0; i < 8; i++) {
    let nuevo = (new Persona(250, 250, 250, "Avatar" + (i + 1)))
    nuevo.cargarImagen()
    personas.push(nuevo)
  }
  createCanvas(500, 500);
  botonIzquierda = new Boton(100, 250, 25)
  botonDerecha = new Boton(400, 250, 25)
}

function draw() {
  background(59, 131, 189);
  personas[personaIndex].pintar()
  botonIzquierda.pintar()
  botonDerecha.pintar()
  triangle(393,240, 393, 260, 412,250);
  triangle(107,240, 107,260,  87,250);

}

function mousePressed() {
  if (botonIzquierda.click(mouseX, mouseY)) {
    randomIndex = Math.floor(random(0, 8))
    personaIndex = randomIndex
    console.log("izquierda")
  }
  if (botonDerecha.click(mouseX, mouseY)) {
    randomIndex = Math.floor(random(0, 8))
    personaIndex = randomIndex
    console.log("derecha")
  }

}