// Frage ist ob das Sinn macht

// class Satisfaction{
//     constructor(){
//     }
// }

export default class Time{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.hour=8;
        this.minute=0;
       
        setInterval(() => {
          this.minute = (this.minute + 30) % 60;
        }, 5000);

        setInterval(() => {
          this.hour++;
        }, 10000);
        
    }
 
    display(){
        console.log(this.hour);
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