export default class Charakter {
  constructor(stands, walks, endScreen) {
    this.charakter = { x: (1920 * 0.4) / 2 - 110, y: 290 };

    this.stands = stands;
    this.walks = walks;

    this.standId;
    this.walkId;

    this.endScreen = endScreen;

    this.index = 0;
    this.animationSpeed = 0.2;

    this.speed = 5;
    this.direction = { right: true, left: false };

    this.charakterScale = 0.55;

    // this.charakterId=charakterId;

    // this.day=day;
  }

  display() {
    this.update();
    if (keyIsDown(RIGHT_ARROW) || !window.globalTime.start) {
      this.direction.right = true;
      this.direction.left = false;
      push();
      imageMode(CENTER);
      let walk = this.walks.find((x) => x.id === this.walkId);
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
    } else if (this.direction.right == true) {
      push();
      imageMode(CENTER);
      let stand = this.stands.find((x) => x.id === this.standId);
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
      this.direction.right = false;
      this.direction.left = true;
      push();
      imageMode(CENTER);
      scale(-1, 1);
      let walk = this.walks.find((x) => x.id === this.walkId);
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
    } else if (this.direction.left == true) {
      push();
      imageMode(CENTER);
      scale(-1, 1);
      let stand = this.stands.find((x) => x.id === this.standId);
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

  update() {
    if (window.globalSatisfaction <= 25) {
      this.standId = "chantiLowestStand";
      this.walkId = "chantiLowestWalk";
    } else if (
      window.globalSatisfaction >= 26 &&
      window.globalSatisfaction <= 50
    ) {
      this.standId = "chantiLowStand";
      this.walkId = "chantiLowWalk";
    } else if (
      window.globalSatisfaction >= 51 &&
      window.globalSatisfaction <= 75
    ) {
      this.standId = "chantiMiddleStand";
      this.walkId = "chantiMiddleWalk";
    } else if (
      window.globalSatisfaction >= 76 &&
      window.globalSatisfaction <= 90
    ) {
      this.standId = "chantiHighStand";
      this.walkId = "chantiHighWalk";
    } else if (window.globalSatisfaction >= 91) {
      this.standId = "chantiVictoryStand";
      this.walkId = "chantiVictoryWalk";
    }
  }

  move(bedX) {
    if (this.endScreen.Right && this.charakter.x <= 1920 * 0.4 - 45) {
      if (keyIsDown(RIGHT_ARROW) && !window.activityAnimation) {
        this.charakter.x += this.speed;
      }
      if (!window.globalTime.start) {
        if (this.charakter.x <= bedX) {
          this.charakter.x += this.speed;
        }
      }
    }

    if (this.endScreen.Left && this.charakter.x >= 0 + 45) {
      if (keyIsDown(LEFT_ARROW) && !window.activityAnimation) {
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

  // voice(){
  //     if(charakterId["Name"]){

  //     }
  // }
}
