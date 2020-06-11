// Frage ist ob das Sinn macht

class Satisfaction{
    constructor(){
    }
}

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
        
        
        

        

       
        // if(this.hour=2){
        //     clearInterval(minutes);
        //     clearInterval(hours);
        // }
      
    }
 
    display(){
        console.log(this.hour);
        fill("lightgrey");
        rect(this.x,this.y,100,36,10);
        fill("black");
        textSize(25);
        if (this.minute==0 && this.hour>=10){
    
}

class Time{
    constructor(){

    }
}