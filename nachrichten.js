export default class Nachrichten {
    constructor(nachrichten){
        this.x=-1;
        this.y=-1;

        this.nachrichten=nachrichten;
        this.sheet=1;
        this.count=1;

        this.opacity=0;
        this.newsTimeEnd=false;
    }

    display(){
        if(window.globalTime.news){
            if(window.globalTime.day>5){
                fill(0,0,0);
                rect(0,0,1920,1080);
                fill("white");
                textSize(60);
                text("The End...",30,30,1920*0.4,1080*0.4);
            }else{
            let news=this.nachrichten.find(x=>x.id==="day"+window.globalTime.day+"_"+this.sheet);
            image(news,this.x,this.y,news.width*0.41,news.height*0.41); 
            }
        }  
        else if(this.newsTimeEnd){
        this.dayStart(); }
    }
    
    dayStart(){
        this.opacity -= window.darkenScreenRate;
        fill(0, 0, 0, this.opacity);
        rect(0, 0, 1920, 1080);
        if (this.opacity <= 0) {
          window.globalTime.start = true;
          window.globalTime.sleepAnimation = false;
          window.activateCounter=true;
          this.newsTimeEnd=false;
          this.opacity=0;
        }   
    }


    mouseClicked(){
       if(window.globalTime.news && window.globalTime.day<=5){
        if(this.count>=2){
            this.newsTimeEnd=true;
            window.moveNextToBed=true;
            window.globalTime.hour=0;
            window.globalTime.minute=0;
            window.globalTime.news=false;
            this.count=1;
            this.sheet=1;
            this.opacity = 355;

        }
        else{
        this.sheet=2;
        this.count++;
        }
        }
    }
}