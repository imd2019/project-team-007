export default class Screen {
    constructor(x,y,rooms){
        this.x=x;
        this.y=y; 
        this.rooms=rooms;
    
        this.endScreen= {Right: false, Left: false};
        // this.img=img;
        
        // this.characterId=characterId;
    }
    

    display(){
        this.rooms[0].width=4104*0.4;
        this.rooms[0].height=1080*0.4;
        image(this.rooms[0],this.x,this.y);
        console.log("rooms: "+this.x);
        
        // // abhängig von globalTime, aber kp wie Informationsweitergabe
        // if(charakterId["Name"]){

        // }
    }

    move(charakter){   
            if (this.x <= -4104*0.4 - this.x  || charakter.x < 1920*0.4/2){
                this.endScreen.Right = true;
            } else {
                this.endScreen.Right = false;
            }
            if (this.x >= 0 || charakter.x > 1920*0.4/2){
                this.endScreen.Left = true;
            } else {
                this.endScreen.Left = false;
            }
            if(keyIsDown(RIGHT_ARROW)){
                if (this.endScreen.Right == false){
                  this.x-=5;
                }   
            }
            if(keyIsDown(LEFT_ARROW)){
                if(this.endScreen.Left == false ){
                this.x+=5;
                }   
            }
         
            // console.log(charakter);
        
    }

}