export default class Charakter {
  constructor(charakterX, charakterY, chantiStand, chantiWalk, endScreen) {
    this.charakter = { x: charakterX, y: charakterY, id: false };

    this.chantiStand = chantiStand;
    this.chantiWalk = chantiWalk;
    this.endScreen = endScreen;
    
    this.index = 0;
    this.animationSpeed = 0.2;

    this.speed = 5;

    this.charakterScale = 0.55;

    // this.charakterId=charakterId;
    // this.satisfaction=satisfaction;

    // this.day=day;
  }

  display() {
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(LEFT_ARROW)) {
      push();
      imageMode(CENTER);
      this.index += this.animationSpeed;
      let animation = floor(this.index) % this.chantiWalk[0].length;
      image(
        this.chantiWalk[0][animation],
        this.charakter.x,
        this.charakter.y,
        this.chantiWalk[0][animation].width * this.charakterScale,
        this.chantiWalk[0][animation].height * this.charakterScale
      );
      pop();
    } else {
      push();
      imageMode(CENTER);
      image(
        this.chantiStand[0],
        this.charakter.x,
        this.charakter.y,
        this.chantiStand[0].width * this.charakterScale,
        this.chantiStand[0].height * this.charakterScale
      );
      pop();
    }
    // console.log("charakter: "+this.charakter.x);
  }

  move() {
    if (keyIsDown(RIGHT_ARROW)) {
      if (this.endScreen.Right && this.charakter.x <= 1920 * 0.4 - 45) {
        this.charakter.x += this.speed;
      }
    }
    if (keyIsDown(LEFT_ARROW)) {
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
