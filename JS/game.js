    limiteArriba=innerHeight/3;
    limiteAbajo=innerHeight-10;  
    let b = new Ball(innerWidth/2, innerHeight/2,30,4,limiteArriba,limiteAbajo);
    let jugador1 = new player(1,limiteAbajo/2,300,1000,limiteArriba,limiteAbajo);
    let jugador2 = new player(2,limiteAbajo/2,300,1000,limiteArriba,limiteAbajo);
class Game{
    constructor(){
       
    }

    display(){
        fill('#c35B50');
        rect(300,limiteArriba,710,limiteAbajo-10);
        fill('black');

        this.mostrarPuntaje();
        this.mostrarIntrucciones();
        b.display();
		jugador1.display();
		jugador2.display();
        this.puntuacion();
    }

    mostrarPuntaje(){
        textSize(30);
        text(jugador1.getPuntaje(), 300, 30);
        text(jugador2.getPuntaje(), 1000, 30);
    }

    mostrarIntrucciones(){
        textSize(20);
        text('W',250,300);
        text('S',250,600);
        text('Controles jugador 1',0,450);

        textSize(20);
        text('Flecha arriba',1050,300);
        text('Flecha abajo',1050,600);
        text('Controles jugador 2',1100,450);


    }

    puntuacion(){
            if(b.getX()<jugador1.getX()){
                jugador2.setPuntaje(1);
                this.reiniciar();
            }
           if(b.getX()>jugador2.getX()){
                jugador1.setPuntaje(1);
                this.reiniciar();
            }    
    }
    reiniciar(){
    b.setX(innerWidth/2);
    b.setY(innerHeight/2);
    jugador1.posicion();
    jugador2.posicion();
    }   
}