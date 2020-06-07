export default class Screen {
    constructor(x,y,rooms){
        this.x=x;
        this.y=y; 
        this.rooms=rooms;
        
        // this.img=img;
        
        // this.characterId=characterId;
    }
    

    display(){
        image(this.rooms[0],this.x,this.y);

        // // abhängig von globalTime, aber kp wie Informationsweitergabe
        // if(charakterId["Name"]){

        // }
    }

    move(){
        if(this.x>=0){
        if(charakter.moveRight==true){
            this.x--;
        }
        if(chrakter.moveLeft==true){
            this.x++;
        }
        }
    }

}