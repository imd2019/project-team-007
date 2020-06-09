
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
        console.log("charakter: "+this.charakter.x);

    }

    move(){
        // Charakter muss auf einer Stelle bleiben
        if(keyIsDown(RIGHT_ARROW)){
            if(this.endScreen.Right && this.charakter.x<=(1920*0.4)-45){
            this.charakter.x+=5;
            }
        }
        if(keyIsDown(LEFT_ARROW)){
            if(this.endScreen.Left && this.charakter.x>=0+45){
                this.charakter.x-=5;
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
    // //  charakter pngs als array und wird durchlaufen % array.length im Zusammnehang von screen movement
    // //  einzelne Funktionen für Bewegung
    // }

    // voice(){
    //     if(charakterId["Name"]){

    //     }
    // }
}