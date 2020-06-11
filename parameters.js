// Frage ist ob das Sinn macht

// class Satisfaction{
//     constructor(){
//     }
// }


// class Money{
//     constructor(){

//     }
// }

// class Exhaustion{
//     constructor(){

//     }
    
// }

export default class Time{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.hour="08";
        this.minute="00";




    }

    display(){
        fill("lightgrey");
        rect(this.x,this.y,100,36,10);
        fill("black");
        textSize(25);
        if (this.minute==0 && this.hour>=10){
            text(this.hour+" : 0"+this.minute,this.x+12,this.y+7,100,50);
        }
        if(this.hour<10 && this.minute==0){
            text("0"+this.hour+" : 0"+this.minute,this.x+12,this.y+7,100,50);
        }
        if(this.hour<10 && this.minute!==0){
            text("0"+this.hour+" : "+this.minute,this.x+12,this.y+7,100,50);
        }
        else if(this.hour>=10 && this.minute!==0){
            text(this.hour+" : "+this.minute,this.x+12,this.y+7,100,50);
        }

    }    
    
}