export default class Charakter {
  constructor(charakterX, charakterY, stands, walks, endScreen) {
    this.charakter = { x: charakterX, y: charakterY, id: false };

    this.stands = stands;
    this.walks = walks;
    
    this.standId="chantiMiddleStand";
    this.walkId="chantiMiddleWalk";
    
    this.endScreen = endScreen;
    
    this.index = 0;
    this.animationSpeed = 0.2;

    this.speed = 5;
    this.direction={right: true, left: false};
    

    this.charakterScale = 0.55;

    // this.charakterId=charakterId;
    // this.satisfaction=satisfaction;

    // this.day=day;
  }

  display() {
    
    if (keyIsDown(RIGHT_ARROW)) {
      this.direction.right=true;
      this.direction.left=false;
      push();
      imageMode(CENTER);
      let walk=this.walks.find(x=>x.id===this.walkId);
      this.index += this.animationSpeed;
      let animation = floor(this.index) % walk.length;
      image(
        walk[animation],
        this.charakter.x,
        this.charakter.y,
        walk[animation].width * this.charakterScale,
        walk[animation].height * this.charakterScale
      );
      pop();
    }
    else if(this.direction.right==true){
      push();
      imageMode(CENTER);
      let stand=this.stands.find(x=>x.id===this.standId);
      image(
        stand,
        this.charakter.x,
        this.charakter.y,
        stand.width * this.charakterScale,
        stand.height * this.charakterScale
      );
      pop();
    }

    if (keyIsDown(LEFT_ARROW)) {
      this.direction.right=false;
      this.direction.left=true;
      push();
      imageMode(CENTER);
      scale(-1,1);
      let walk=this.walks.find(x=>x.id===this.walkId);
      this.index += this.animationSpeed;
      let animation = floor(this.index) % walk.length;
      image(
        walk[animation],
        -this.charakter.x,
        this.charakter.y,
        walk[animation].width * this.charakterScale,
        walk[animation].height * this.charakterScale
      );
      pop();
    } 
    else if(this.direction.left==true){
      push();
      imageMode(CENTER);
      scale(-1,1);
      let stand=this.stands.find(x=>x.id===this.standId);
      image(
        stand,
        -this.charakter.x,
        this.charakter.y,
        stand.width * this.charakterScale,
        stand.height * this.charakterScale
      );
      pop();
    }
    
  }

  move() {
    if (keyIsDown(RIGHT_ARROW) && !window.activityAnimation) {
      if (this.endScreen.Right && this.charakter.x <= 1920 * 0.4 - 45) {
        this.charakter.x += this.speed;
      }
    }
    if (keyIsDown(LEFT_ARROW) && !window.activityAnimation) {
      if (this.endScreen.Left && this.charakter.x >= 0 + 45) {
        this.charakter.x -= this.speed;
      }
    }
  }

  // thinkbubble(){
  //     if(charakterId["Name"]){
  //         if(this.day==1){

  //         }

  //     }
  // }

  // animation(){
  // //  charakter pngs als array und wird durchlaufen % array.length im Zusammnehang von screen movement
  // //  einzelne Funktionen für Bewegung
  // }

  // voice(){
  //     if(charakterId["Name"]){

  //     }
  // }
}
