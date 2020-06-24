import MainScreen from "./MainScreen.js";

export default class InteractiveObject extends MainScreen {
  constructor(
    x,
    y,
    zone,
    imgWidth,
    btnAx,
    btnAy,
    btnBx,
    btnBy,
    imgHeight,
    objectScale,
    btnA,
    btnB,
    btnScale,
    interactX,
    interactY
  ) {
    super(x,y);
    
    this.speed = 5;

    this.btnA = btnA;
    this.btnB = btnB;

    this.btnAx = btnAx;
    this.btnAy = btnAy;
    this.btnBx = btnBx;
    this.btnBy = btnBy;

    this.btnScale=btnScale;
    this.objectScale = objectScale;

    this.zone = zone;
    this.imgWidth = imgWidth;
    this.imgHeight = imgHeight;

    this.satisfaction;
    this.exhaustion;
    this.money;

    this.satisfactionRate = 1;
    this.exhaustionRate = 1;
    this.moneyRate = 1;
    
    this.activityId;
    this.interactX=interactX;
    this.interactY=interactY;

    this.interaction={A:false,B:false};

    this.animationScale=0.55;
    this.imageMode=CENTER;
    this.index=0;
    this.animationSpeed=0.2;

    this.counter=0;

    
  }

  move(screenMoving) {
    if (screenMoving.Right == true) {
      this.x -= this.speed;
    }
    if (screenMoving.Left == true) {
      this.x += this.speed;
    }
  }

  updateZone(object) {
    this.imgWidth = object.width * this.objectScale;
    this.imgHeight = object.height * this.objectScale;
    this.zone = this.x + this.imgWidth;
  }

  updateBtnPosition(offsetAx, offsetBx,btnOffset) {
    this.btnAx = this.x + offsetAx;
    this.btnAy = this.y - btnOffset;
    this.btnBx = this.x + offsetBx;
    this.btnBy = this.y - btnOffset;
  }

  hitTest(x, y, btnX,btnY,btn) { 
    if (
      x > btnX &&
      x < btnX + btn.width*this.btnScale &&
      y > btnY &&
      y < btnY + btn.height*this.btnScale
    ) {
      return true;
    } else {
      return false;
    }
  }

  hoverTest(x) {
    if (x > this.x && x < this.zone && window.globalTime.start) {
      return true;
    } else {
      return false;
    }
  }
  
  updateInteraction(objectButton) {
    if (window.globalSatisfaction <= 25) {
      this.activityId=objectButton+"InteractionLowest";
    } else if (
      window.globalSatisfaction >= 26 &&
      window.globalSatisfaction <= 50
    ) {
        this.activityId=objectButton+"InteractionLow";
    } else if (
      window.globalSatisfaction >= 51 &&
      window.globalSatisfaction <= 75
    ) {
        this.activityId=objectButton+"InteractionMiddle";
    } else if (
      window.globalSatisfaction >= 76 &&
      window.globalSatisfaction <= 90
    ) {
        this.activityId=objectButton+"InteractionHigh";
    } else if (window.globalSatisfaction >= 91) {
        this.activityId=objectButton+"InteractionVictory";
    }
}

  updateParameter() {
    this.satisfaction = window.globalSatisfaction;
    this.exhaustion = window.globalExhaustion;
    this.money = window.globalMoney;
    
    this.satisfaction = ceil(this.satisfaction * this.satisfactionRate);
    window.globalSatisfaction = this.satisfaction;

    this.exhaustion = ceil(this.exhaustion * this.exhaustionRate);
    window.globalExhaustion = this.exhaustion;

    this.money = ceil(this.money * this.moneyRate);
    window.globalMoney = this.money;
    
    let activityBundle=[];
    activityBundle.push(this.satisfactionRate,this.exhaustionRate,this.moneyRate);

    if(window.globalTime.day==1){
      window.globalActivityArray.day1.push(activityBundle);
    }
    if(window.globalTime.day==2){
      window.globalActivityArray.day2.push(activityBundle);
    }
    if(window.globalTime.day==3){
      window.globalActivityArray.day3.push(activityBundle);
    }
    if(window.globalTime.day==4){
      window.globalActivityArray.day4.push(activityBundle);
    }
    if(window.globalTime.day==5){
      window.globalActivityArray.day5.push(activityBundle);
    }

  }

  updateAnimationA(){
    window.activityAnimation=true;
    this.interaction.A=true;
  }

  updateAnimationB(){
    window.activityAnimation=true;
    this.interaction.B=true;
  }
  
  updateAnimationPosition(offsetX,offsetY){
    this.interactX = this.x + offsetX;
    this.interactY = this.y + offsetY;
  }

  activityAnimation(activityArray,activityId,delay){
    let activity=activityArray.find(x=>x.id===activityId);
    this.index += this.animationSpeed;
    let animation = floor(this.index) % activity.length;
    push();
    imageMode(this.imageMode);
    image(
      activity[animation],
      this.interactX,
      this.interactY,
      activity[animation].width * this.animationScale,
      activity[animation].height * this.animationScale
    );
    pop();
    this.counter++;
    
    if(this.counter==delay && this.interaction.A){
      this.interaction.A=false;
      window.activityAnimation=false;
      this.counter=0;
    }
    if(this.counter==delay && this.interaction.B){
      this.interaction.B=false;
      window.activityAnimation=false;
      this.counter=0;
    }
  }

  mouseClicked() {
    if (this.btnA!=undefined&&this.hitTest(mouseX, mouseY, this.btnAx, this.btnAy,this.btnA)) {
      this.clickedA();
    }
    if (this.btnB!=undefined && this.hitTest(mouseX, mouseY, this.btnBx, this.btnBy,this.btnB)) {
      this.clickedB();
    }
  }

}
