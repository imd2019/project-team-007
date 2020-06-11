import MainScreen from "./MainScreen.js";

export default class FrontScreen extends MainScreen{
    constructor(x,y,frontRoom){
        super(x,y);
        this.x=x;
        this.y=y; 
        this.frontRoom=frontRoom;
    }

    display(){
        image(this.frontRoom[0],this.x,this.y,this.frontRoom[0].width*0.5,this.frontRoom[0].height*0.5);
        console.log("frontElement:",this.screenMoving);
    }

    move(screenMoving){   
        
          if(screenMoving.Right==true){
            this.x-=5;
          }
        
        
          if(screenMoving.Left==true){
            this.x+=5;
          }
        
    }
}