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
    if (x > this.x && x < this.zone) {
      return true;
    } else {
      return false;
    }
  }

  // showButtons() {
  //   //IMG von Buttons
  //   // rect(this.btnAx, this.btnAy, this.btnWidht, this.btnHeight, 10);
  //   // text(this.messageA, this.btnAx, this.btnAy, this.btnWidht);
  //   // rect(this.btnBx, this.btnBy, this.btnWidht, this.btnHeight, 10);
  //   // text(this.messageB, this.btnBx, this.btnBy, this.btnWidht);
  // }

  // display() {
  //   if (this.hoverTest(this.charakterX)) {
  //     this.showButtons();
  //   }
  // }

  mouseClicked() {
    if (this.hitTest(mouseX, mouseY, this.btnAx, this.btnAy,this.btnA)) {
      this.clickedA();
    }
    if (this.hitTest(mouseX, mouseY, this.btnBx, this.btnBy,this.btnB)) {
      this.clickedB();
    }
  }

  // update() {
  //   this.charakterX;
  // }
}
