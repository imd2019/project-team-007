import MainScreen from "./MainScreen.js";

export default class FrontScreen extends MainScreen{
    constructor(x,y,frontRoom){
        super(x,y);
        this.x=x;
        this.y=y; 
        this.frontRoom=frontRoom;
        this.speed=5;
    }

    display(){
        image(this.frontRoom[0],this.x,this.y,this.frontRoom[0].width*0.45,this.frontRoom[0].height*0.45);
        // console.log("frontElement:",this.screenMoving);
    }

    move(screenMoving){   
        
          if(screenMoving.Right==true){
            this.x-=this.speed;
          }
        
          if(screenMoving.Left==true){
            this.x+=this.speed;
          }
        
    }
}