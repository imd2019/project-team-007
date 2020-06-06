
class Charakter{
    constructor(charakterX,charakterY,charakterId,satisfaction,day){
        this.charakterX=charakterX;
        this.charakterY=charakterY;

        this.charakterId=charakterId;
        this.satisfaction=satisfaction;

        this.day=day;
    }

    display(){
        clothes.colour(h,s,intensity);
        let intensity=satisfaction;

    }

    move(){
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
        
    }

    voice(){
        if(charakterId["Name"]){

        }
    }
}