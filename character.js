export default class Charakter {
  constructor(stands, walks, endScreen,thinkBubbles) {
    if(window.charakterId=="Chantal"){
    this.charakter = { x: (1920 * 0.4) / 2 - 110, y: 290 };
    }
    if(window.charakterId=="Lena"){
      this.charakter = { x: (1920 * 0.4) / 2 - 110, y: 280 };
    }

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
    
    

    this.thinkBubbles=thinkBubbles;

  }

  display(bedX,fridgeUse) {
    this.thinkbubble(fridgeUse);
    // console.log(window.forcedToPc);
    this.update();
    if ( !(keyIsDown(RIGHT_ARROW)&&keyIsDown(LEFT_ARROW))&&keyIsDown(RIGHT_ARROW) && !window.forcedToDoor&&!window.forcedToPc.ToRight&&!window.forcedToPc.ToLeft ||!window.globalTime.start||window.forcedToPc.ToRight) {
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

    if (!(keyIsDown(RIGHT_ARROW)&&keyIsDown(LEFT_ARROW))&&keyIsDown(LEFT_ARROW) && window.globalTime.start &&!window.forcedToPc.ToRight&&!window.forcedToPc.ToLeft||window.forcedToDoor||window.forcedToPc.ToLeft) {
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
    if(window.moveNextToBed){ 
      this.direction.right=false;
      this.direction.left=true;
      console.log(this.direction);
      this.charakter.x=bedX-5;
      window.moveNextToBed=false;
    }
    
  }

  update() {
    if (window.globalSatisfaction <= 25) {
      this.standId = "LowestStand";
      this.walkId = "LowestWalk";
    } else if (
      window.globalSatisfaction >= 26 &&
      window.globalSatisfaction <= 50
    ) {
      this.standId = "LowStand";
      this.walkId = "LowWalk";
    } else if (
      window.globalSatisfaction >= 51 &&
      window.globalSatisfaction <= 75
    ) {
      this.standId = "MiddleStand";
      this.walkId = "MiddleWalk";
    } else if (
      window.globalSatisfaction >= 76 &&
      window.globalSatisfaction <= 90
    ) {
      this.standId = "HighStand";
      this.walkId = "HighWalk";
    } else if (window.globalSatisfaction >= 91) {
      this.standId = "VictoryStand";
      this.walkId = "VictoryWalk";
    }  
  }

  move(bedX,doorX,pcX,pcWidth) {
   
    if (this.endScreen.Right && this.charakter.x <= 1920 * 0.4 - 70) {
      if (keyIsDown(RIGHT_ARROW) && !window.activityAnimation && window.globalTime.start && !window.forcedToDoor && !window.forcedToPc.ToLeft && !window.forcedToPc.ToRight) {
        this.charakter.x += this.speed;
      }
      if (!window.globalTime.start) {
        if (this.charakter.x <= bedX) {
          this.charakter.x += this.speed;
        }
      }
      if (window.forcedToPc.ToRight) {
        if (this.charakter.x <= pcX+pcWidth/2) {
          this.charakter.x += this.speed;
        }
      }
    }

    if (this.endScreen.Left && this.charakter.x >= 0 + 70) {
      if (keyIsDown(LEFT_ARROW) && !window.activityAnimation && window.globalTime.start && !window.forcedToDoor && !window.forcedToPc.ToLeft && !window.forcedToPc.ToRight) {
        this.charakter.x -= this.speed;
      }
      if(window.forcedToDoor){
        if(this.charakter.x>=doorX+70){
        this.charakter.x -= this.speed; 
        }
      }
      if (window.forcedToPc.ToLeft) {
        if (this.charakter.x >= pcX+pcWidth/2) {
          this.charakter.x -= this.speed;
        }
      }
    }

    
  }

  thinkbubble(fridgeUse){
      if(window.globalTime.hour==2){
        this.thinkBubbleDraw("sleepThought");
      }
      if(fridgeUse<1&&window.globalTime.hour>=17){
        this.thinkBubbleDraw("hungerThought");
      }
      if(fridgeUse<2&&window.globalTime.hour<2){
        this.thinkBubbleDraw("hungerThought");
      }
      if(window.bgeMode=="withBGE"&&window.globalTime.day==5 && window.globalTime.hour==20 && window.globalSatisfaction>=76){
        this.thinkBubbleDraw("victoryBGE");
      }
      if(window.bgeMode=="noBGE"&&window.globalTime.day==5 && window.globalTime.hour==20 && window.globalSatisfaction<76){
        this.thinkBubbleDraw("noBgeVictory");
      }
  }
  
  thinkBubbleDraw(thinkBubble){
    let bubble=this.thinkBubbles.find((x) => x.id === thinkBubble);
    image(bubble,this.charakter.x+50,this.charakter.y-bubble.height+15,bubble.width*this.charakterScale,bubble.height*this.charakterScale);
  }
  // voice(){
  //     if(charakterId["Name"]){

  //     }
  // }
}
