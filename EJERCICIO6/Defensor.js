class Defensor{
  constructor(x, y){
    this.x = x 
    this.y = y
  }
  Show(){
    fill(0,255,0);
    rect(this.x, this.y, 10, 30, 5);

  }

  move(key){
    if(key == 'ArrowRight'){
        this.x += 30
      }
    
      if(key == 'ArrowLeft'){
        this.x -= 30
      }
  }

}