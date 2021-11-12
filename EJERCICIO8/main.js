let bloques
let jugador
let pelota

function setup() {
    createCanvas(700,600)
    bloques= []

    for (let index = 0; index < 24; index++) {
        let nuevoBloque
        if (index<6) {
           nuevoBloque = new Bloque(10+110*index,10,100,40)   
        }
        else if (index >= 6 && index<12){
            nuevoBloque = new Bloque(10+110*(index-6),60,100,40) 

        }

        else if (index >= 12 && index<18){
            nuevoBloque = new Bloque(10+110*(index-12),110,100,40)  
        }

        else if (index >= 18 && index<24){
            nuevoBloque = new Bloque(10+110*(index-18),160,100,40)  
        }
            
        bloques.push(nuevoBloque)

    }

    jugador= new Jugador(300,500,200,40)

    pelota= new Pelota(400,400,15)
}

function draw (){
    background (150)
    for (let index = 0; index < bloques.length; index++) {
        const bloque = bloques[index];
        bloque.pintar()
    }
    jugador.pintar()
    pelota.pintar()
    pelota.mover()
    
     for (let index = 0; index < bloques.length; index++) {
         const bloque = bloques[index];
         
         if (bloque.chocar(pelota.x , pelota.y, pelota.radio)){
             bloques.splice(index,1)
             pelota.diry *=-1
         }
     }

     if (jugador.chocar(pelota)){
        pelota.diry *=-1
    }
    
}
function keyPressed(){
    jugador.mover()
}