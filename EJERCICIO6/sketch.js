let x;
let y;
let aliensList;
let defensor;
let balasList;


function setup() {
  createCanvas(400, 400);
  aliensList = []
  balasList = []
  for (let index = 0; index < 18; index++) {
    if (index < 6) {
      aliensList.push(new Aliens(50 + (35 * index), 60))
    } else if (index >= 6 && index < 12) {
      aliensList.push(new Aliens(50 + (35 * (index - 6)), 60 + (35)))
    } else if (index >= 12 && index < 18) {
      aliensList.push(new Aliens(50 + (35 * (index - 12)), 60 + (70 )))
    }
  }
  defensor = new Defensor(200, 300)
}

function draw() {
  background(220);
  for (let index = 0; index < aliensList.length; index++) {
    const alien = aliensList[index];
    alien.Show()
    alien.move()
  }
  console.log(aliensList.length)
  if (aliensList.length > 0) {
    if (aliensList[aliensList.length - 1].x > 400 - 35) {
      for (let index = 0; index < aliensList.length; index++) {
        const alien = aliensList[index];
        alien.dirx *= -1
      }
    }
    if (aliensList[0].x < 0) {
      for (let index = 0; index < aliensList.length; index++) {
        const alien = aliensList[index];
        alien.dirx *= -1
      }
    }
    if (frameCount % 70 == 0) {
      for (let index = 0; index < aliensList.length; index++) {
        const alien = aliensList[index];
        alien.y += 5
      }
    }
  }
 defensor.Show()
  for (let index = 0; index < balasList.length; index++) {
    const bala = balasList[index];
    bala.Show()
    bala.move()
  }
  for (let index = 0; index < balasList.length; index++) {
    const bala = balasList[index];
    if (bala.y < 10) {
      balasList.splice(index, 1)
    }

  }
  for (let i = 0; i < balasList.length; i++) {
    const bala = balasList[i];
    for (let j = 0; j < aliensList.length; j++) {
      const alien = aliensList[j];
      if (bala.x > alien.x && bala.x < alien.x + 30 && bala.y > alien.y &&
        bala.y < alien.y + 30) {
        aliensList.splice(j, 1)
        balasList.splice(i, 1)
      }
    }
  }
}

function keyPressed() {
  console.log(key);
  defensor.move(key)

  if (keyCode == 32) {
    balasList.push(new Balas(defensor.x, defensor.y))
  }

}

