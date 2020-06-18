export default class Nachrichten {
    constructor(nachrichten){
        this.x=-1;
        this.y=-1;

        this.nachrichten=nachrichten;
        this.day=3;
        this.sheet=1;
    }

    display(dayStart){
        console.log("news: ",dayStart);
        if(dayStart==false){
            let news=this.nachrichten.find(x=>x.id==="day"+this.day+"_"+this.sheet);
            image(news,this.x,this.y,news.width*0.41,news.height*0.41);
            console.log(news);
        }  
    }
}