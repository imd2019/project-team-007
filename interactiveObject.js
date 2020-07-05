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
    super(x, y);

    this.speed = 5;

    this.btnA = btnA;
    this.btnB = btnB;

    this.btnAx = btnAx;
    this.btnAy = btnAy;
    this.btnBx = btnBx;
    this.btnBy = btnBy;

    this.btnScale = btnScale;
    this.objectScale = objectScale;

    this.zone = zone;
    this.imgWidth = imgWidth;
    this.imgHeight = imgHeight;

    this.satisfaction;
    this.exhaustion;
    this.money;

    this.satisfactionRate = 1;
    this.exhaustionRate = 1;
    this.moneyRate = 0;

    this.activityId;
    this.interactX = interactX;
    this.interactY = interactY;

    this.interaction = { A: false, B: false };

    this.animationScale = 0.55;
    this.imageMode = CENTER;
    this.index = 0;
    this.animationSpeed = 0.2;

    this.counter = 0;

    this.btnShowActive = false;

    this.charakterFadeOut = false;
    this.fade=260;

    this.useCounter={A:0,B:0};

    this.flipflopCount=0;

    this.bannerFade=0;
    this.bannerCounter=0;
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

  updateBtnPosition(offsetAx, offsetBx, btnOffset) {
    this.btnAx = this.x + offsetAx;
    this.btnAy = this.y - btnOffset;
    this.btnBx = this.x + offsetBx;
    this.btnBy = this.y - btnOffset;
  }

  hitTest(x, y, btnX, btnY, btn) {
    if (
      x > btnX &&
      x < btnX + btn.width * this.btnScale &&
      y > btnY &&
      y < btnY + btn.height * this.btnScale &&
      this.btnShowActive
    ) {
      return true;
    } else {
      return false;
    }
  }

  hoverTest(x) {
    if (
      x > this.x &&
      x < this.zone &&
      window.globalTime.start &&
      !window.activityAnimation && !window.forcedToDoor && !window.forcedToPc.ToLeft && !window.forcedToPc.ToRight
    ) {
      this.btnShowActive = true;
      return true;
    } else {
      this.btnShowActive = false;
      return false;
    }
  }

  updateInteraction(objectButton) {
    if (window.globalSatisfaction <= 25) {
      this.activityId = objectButton + "InteractionLowest";
    } else if (
      window.globalSatisfaction >= 26 &&
      window.globalSatisfaction <= 50
    ) {
      this.activityId = objectButton + "InteractionLow";
    } else if (
      window.globalSatisfaction >= 51 &&
      window.globalSatisfaction <= 75
    ) {
      this.activityId = objectButton + "InteractionMiddle";
    } else if (
      window.globalSatisfaction >= 76 &&
      window.globalSatisfaction <= 90
    ) {
      this.activityId = objectButton + "InteractionHigh";
    } else if (window.globalSatisfaction >= 91) {
      this.activityId = objectButton + "InteractionVictory";
    }
  }

  updateParameter() {
    this.satisfaction = window.globalSatisfaction;
    this.exhaustion = window.globalExhaustion;
    this.money = window.globalDailyBudget;

    if (window.bgeMode == "withBGE") {
      if(window.globalExhaustion>75){
        this.satisfaction = ceil(this.satisfaction *(this.satisfactionRate*0.75));
      }
      else{
      this.satisfaction = ceil(this.satisfaction *this.satisfactionRate);
      } 
      window.globalSatisfaction = this.satisfaction;
      window.globalSatisfaction = Math.max(0, Math.min(100, window.globalSatisfaction));
    }
    if(window.bgeMode=="noBGE"){
      if(window.globalExhaustion>75){
        this.satisfaction = floor(this.satisfaction *(this.satisfactionRate*0.5));
      }
      else if(window.globalExhaustion>90){
        this.satisfaction = floor(this.satisfaction *(this.satisfactionRate*0.2));//glaube das ist dann schon zu hart
      }
      else{
      this.satisfaction = floor( this.satisfaction *this.satisfactionRate);
      }
      window.globalSatisfaction = this.satisfaction;
      window.globalSatisfaction = Math.max(0, Math.min(75, window.globalSatisfaction));
    }

    this.exhaustion = ceil(this.exhaustion * this.exhaustionRate); // Auslegungssache von Erschöpfung
    window.globalExhaustion = this.exhaustion;
    window.globalExhaustion=Math.max(0,Math.min(100,window.globalExhaustion));

    this.money = this.money + this.moneyRate;
    window.globalDailyBudget = this.money;
  }

  getActivityBundle(activityName) {
    let activityBundle = [];
    activityBundle.id = activityName;
    activityBundle.push(
      this.satisfactionRate,
      this.exhaustionRate,
      this.moneyRate
    );

    if (this.moneyRate != 0) {
      let billBundle = [activityName, this.moneyRate];

      window.moneyBill.push(billBundle);
    }

    if (window.globalTime.day == 1) {
      window.globalActivityArray.day1.push(activityBundle);
    }
    if (window.globalTime.day == 2) {
      window.globalActivityArray.day2.push(activityBundle);
    }
    if (window.globalTime.day == 3) {
      window.globalActivityArray.day3.push(activityBundle);
    }
    if (window.globalTime.day == 4) {
      window.globalActivityArray.day4.push(activityBundle);
    }
    if (window.globalTime.day == 5) {
      window.globalActivityArray.day5.push(activityBundle);
    }
  }

  updateAnimationA() {
    window.activityAnimation = true;
    this.interaction.A = true;
  }

  updateAnimationB() {
    window.activityAnimation = true;
    this.interaction.B = true;
  }

  updateAnimationPosition(offsetX, offsetY) {
    this.interactX = this.x + offsetX;
    this.interactY = this.y + offsetY;
  }

  activityAnimation(activityArray, delay, timeNeeded) {
    this.counter++;
    let activity = activityArray.find((x) => x.id === this.activityId);
    this.index += this.animationSpeed;
    let animation = floor(this.index) % activity.length;
    push();
    imageMode(this.imageMode);
    if (this.charakterFadeOut) {
      push();
      tint(255,this.fade);
      if(this.counter<=13){
        this.fade-=20;  
      }
      if(this.fade<=0){
        this.fade=0;
      }
      if(this.counter>=delay-13){
        this.fade+=20;
      }
      image(
        activity[animation],
        this.interactX,
        this.interactY,
        activity[animation].width * this.animationScale,
        activity[animation].height * this.animationScale
      );
    pop();
    } 
    else {
      image(
        activity[animation],
        this.interactX,
        this.interactY,
        activity[animation].width * this.animationScale,
        activity[animation].height * this.animationScale
      );
    }
    pop();

    
    let msDelay = delay / 30;
    

    if (timeNeeded != 0) {
      window.globalTime.Delta = (msDelay * 1000) / ((timeNeeded * 60) / 15);
    }
    if((!window.globalTime.start&&!window.globalTime.sleepAnimation)||window.forcedToPc.ToLeft||window.forcedToDoor||window.forcedToPc.ToRight){
      this.charakterFadeOut=false;
      this.fade=260;
      this.interaction.A = false;
      this.interaction.B = false;
      window.activityAnimation = false;
      window.globalTime.Delta = 2500;
      this.counter = 0;
    }
    if (this.counter == delay && this.interaction.A) {
      this.charakterFadeOut=false;
      this.fade=260;
      this.interaction.A = false;
      window.activityAnimation = false;
      window.globalTime.Delta = 2500;
      this.counter = 0;
    }
    if (this.counter == delay && this.interaction.B) {
      this.interaction.B = false;
      window.activityAnimation = false;
      window.globalTime.Delta = 2500;
      this.counter = 0;
    }
  }

  forcedInteractionsBanner(bannerId,array,bannerDelay){
    // console.log("Forced Animation: ",this.counter);
    let banner=array.find((x)=>x.id==bannerId);
    push();
    tint(255,this.bannerFade);
    if(this.counter<=26){
      this.bannerFade+=10;
    }
    if(this.bannerFade>=260){
      this.bannerFade=260;
    }
    if(this.counter>=bannerDelay-26){
      this.bannerFade-=10;
    }
    if(this.counter>=bannerDelay){
      this.bannerFade=0;
    }
    image(banner,0,0,banner.width,banner.height);
    pop();
  }

  thinkBubble(thinkBubble,array,offsetX,offsetY){
    let bubble=array.find((x) => x.id === thinkBubble);
    image(bubble,this.interactX+offsetX,this.interactY+offsetY,bubble.width*this.animationScale,bubble.height*this.animationScale);
  }

  toMuchBubble(array){
    if(this.useCounter.A>3 && !this.interaction.B){
      this.thinkBubble("tooMuchThought",array,30,-250);
    }
    if(this.useCounter.B>3 && !this.interaction.A){
      this.thinkBubble("tooMuchThought",array,30,-250);
    }
    if(!window.globalTime.start){
      this.useCounter.A=0;
      this.useCounter.B=0;
    }
  }

  mouseClicked() {
    if (
      this.btnA != undefined &&
      this.hitTest(mouseX, mouseY, this.btnAx, this.btnAy, this.btnA)
    ) {
      this.clickedA();
    }
    if (
      this.btnB != undefined &&
      this.hitTest(mouseX, mouseY, this.btnBx, this.btnBy, this.btnB)
    ) {
      this.clickedB();
    }
  }
}
