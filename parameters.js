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
        text(this.hour+" : "+this.minute,this.x+12,this.y+7,100,50);
    }

    clock(){
        
    }
}