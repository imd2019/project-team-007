export default class Nachrichten {
    constructor(nachrichten){
        this.x=-1;
        this.y=-1;

        this.nachrichten=nachrichten;
        this.sheet=1;
        this.count=1;
    }

    display(newsTime,day){
        if(newsTime==true){
            let news=this.nachrichten.find(x=>x.id==="day"+day+"_"+this.sheet);
            image(news,this.x,this.y,news.width*0.41,news.height*0.41);
            // console.log(news);   
        }
        
         
    }

    mouseClicked(dayStart){
        console.log("news: ",dayStart);
        if(this.count>=2){
            dayStart=true;
        }
        this.sheet=2;
        this.count++;
    }
}