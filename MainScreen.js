export default class MainScreen {
    constructor(x,y,rooms){
        this.x=x;
        this.y=y; 
        this.rooms=rooms;
        this.screenMoving={Right:false,Left:false};

        this.endScreen={Right:false,Left:false};

        this.speed=5;  
        // this.img=img;


        // this.characterId=characterId;
    }
    

    display(){
        this.rooms[0].width=4104*0.4;
        this.rooms[0].height=1080*0.4;
        image(this.rooms[0],this.x,this.y);

        // console.log("rooms: "+this.x);
        // console.log("screenMoving: " ,this.screenMoving);
        // console.log("endScreen: ",this.endScreen);


        // // abhängig von globalTime, aber kp wie Informationsweitergabe
        // if(charakterId["Name"]){

        // }
    }

    checkMoving(charakter){
        if (this.x <= -4104*0.4 - this.x  || charakter.x < 1920*0.4/2){
            this.endScreen.Right = true;
            this.screenMoving.Right=false;
        } 
        else {
            this.endScreen.Right = false;
            
        }
        if (this.x >=0  || charakter.x > 1920*0.4/2){
            this.endScreen.Left = true;
            this.screenMoving.Left=false;
        } else {
            this.endScreen.Left = false;
            
        }
    }

    move(charakter){ 
        this.checkMoving(charakter);
            if(keyIsDown(LEFT_ARROW)&& !window.activityAnimation){
                if(this.endScreen.Left == false){
                this.screenMoving.Left=true;    

                this.x+=this.speed;

                }   
            }   
            else{
                this.screenMoving.Left=false;
            }  
            if(keyIsDown(RIGHT_ARROW)&& !window.activityAnimation){
                if (this.endScreen.Right == false){
                  this.screenMoving.Right=true;  

                  this.x-=this.speed;

                }   
            }
            else{
                this.screenMoving.Right=false;
            }  
            
           
         
            // console.log(charakter);
        
    }

}

