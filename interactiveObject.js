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
    btnScale
  ) {
    super(x, y);
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

  hitTest(x, y, btnX,btnY,btn) { //type error
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
    if (x > this.x && x < this.zone) {
      return true;
    } else {
      return false;
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
