import MainScreen from "./MainScreen.js";

export default class FrontScreen extends MainScreen{
    constructor(frontRoom){
        super();
        this.x=425;
        this.y=310; 
        this.frontRoom=frontRoom;

        this.objectScale=0.45;

        this.speed=5;
    }

    display(){
      let frontElement=this.frontRoom.find(x=>x.id==="FrontElement");
      image(frontElement,this.x,this.y,frontElement.width*this.objectScale,frontElement.height*this.objectScale);
        
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