
class Charakter{
    constructor(charakterX,charakterY,charakterId,satisfaction,day){
        this.charakterX=charakterX;
        this.charakterY=charakterY;

        this.charakterId=charakterId;
        this.satisfaction=satisfaction;

        this.day=day;
    }

    display(){
        // clour abhängig von globalSatisfaction
        clothes.colour(h,s,intensity);
        let intensity=satisfaction;

    }

    move(){
        // Charakter muss auf einer Stelle bleiben
        if(keyCode==39){
            this.charakterX++;
        }
        if(keyCode==37){
            this.charakterX--;
        }
    }

    thinkbubble(){
        if(charakterId["Name"]){
            if(this.day==1){

            }

        }
    }
    
    animation(){
     //charakter pngs als array und wird durchlaufen % array.length  
     // einzelne Funktionen für Bewegung
    }

    voice(){
        if(charakterId["Name"]){

        }
    }
}