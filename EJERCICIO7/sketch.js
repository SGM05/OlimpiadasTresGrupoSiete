let x;
let y;
let carro;
let carlist;
let lineas;




function setup() {
  createCanvas(370, 390);
  carlist = []
  lineasList = []
  for (let index = 0; index < 9; index++) {
    if (index < 2) {
      carlist.push(new Carros(100 + (100 * index), 30))
    } else if (index >= 2 && index < 4) {
      carlist.push(new Carros(145 + (100 * (index - 2)), 50 + (10)))
    } else if (index >= 4 && index < 5) {
      carlist.push(new Carros(200 + (100 * (index - 4)), 30 + (100)))
    } else if (index >= 5 && index < 7) {
      carlist.push(new Carros(145 + (100* (index - 5)), 30 + (190)))
    } else if (index >= 7 && index < 9) {
      carlist.push(new Carros(100 + (100* (index - 7)), 50 + (270)))
    }
  }

  for (let index = 0; index < 16; index++) {
    if (index < 4) {
      lineasList.push(new Carretera(135 + (50 * index), 30))
    } else if (index >= 4 && index < 8) {
      lineasList.push(new Carretera(135 + (50 * (index - 4)), 50 + (70)))
    } else if (index >= 8 && index < 12) {
      lineasList.push(new Carretera(135 + (50 * (index - 8)), 50 + (180)))
    } else if (index >= 12 && index < 16) {
      lineasList.push(new Carretera(135 + (50* (index - 12)), 50 + (270)))
    } 
  }
  carro = new Carro(10, 200);
  lineas = new Carretera(135,80);
}

function draw() {
  background(128, 128, 128);
    
  for (let index = 0; index < carlist.length; index++) {
    const cars = carlist[index];
    cars.Show()
    cars.move() 
    if(cars.y > 390){
      cars.y = -10
    }    
  }
  for (let index = 0; index < lineasList.length; index++) {
    const lineas = lineasList[index];
    lineas.Show()
  }  

  carro.Show()

}

function keyPressed() {
  carro.move(key)
}