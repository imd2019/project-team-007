
export default class Charakter{
    constructor(charakterX,charakterY,endScreen){
       
       
        this.endScreen = endScreen;
        this.charakter = {x: charakterX, y: charakterY, id: false}
       
        // this.charakterId=charakterId;
        // this.satisfaction=satisfaction;

        // this.day=day;
    }

    display(){
        push();
        rectMode(CENTER);
        fill("black");
        rect(this.charakter.x,this.charakter.y,90,200);
        pop();
        // clour abhängig von globalSatisfaction
        // clothes.colour(h,s,intensity);
        // let intensity=satisfaction;
        // console.log(this.endScreen);
        console.log(this.charakter.x);

    }

    move(){
        // Charakter muss auf einer Stelle bleiben
        if(keyIsDown(RIGHT_ARROW)){
            if(this.endScreen.Right){
            this.charakter.x+=3;
            }
        }
        if(keyIsDown(LEFT_ARROW)){
            if(this.endScreen.Left){
                this.charakter.x-=3;
            }
            
        }
        
    }

    // thinkbubble(){
    //     if(charakterId["Name"]){
    //         if(this.day==1){

    //         }

    //     }
    // }
    
    // animation(){
    // //  charakter pngs als array und wird durchlaufen % array.length  
    // //  einzelne Funktionen für Bewegung
    // }

    // voice(){
    //     if(charakterId["Name"]){

    //     }
    // }
}