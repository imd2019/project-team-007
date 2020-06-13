import MainScreen from "./MainScreen.js";

export default class InteractiveObject extends MainScreen {
  constructor(x, y) {
    super(x,y);
    this.speed=5;
    // this.btnAx = btnAx;
    // this.btnAy = btnAy;
    // this.btnBx = btnBx;
    // this.btnBy = btnBy;
    
    // wird ersetzt durch loadImg
    // this.btnWidth = btnWidth;
    // this.btnHeight = btnHeight;

    // this.messageA = messageA;
    // this.messageB = messageB;

    // this.zone = zone;

    // this.charakterX = charakterX;
  }

  move(screenMoving){   
      if(screenMoving.Right==true){
        this.x-=this.speed;
      }
      if(screenMoving.Left==true){
        this.x+=this.speed;
      }
    
  }

  // hitTest(x, y, btnX, btnY) {
  //   if (
  //     x > btnX &&
  //     x < btnX + this.btnWidthIMG &&
  //     y > btnY &&
  //     y < btnY + this.btnHeightIMG
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // hoverTest(x) {
  //   if (x > this.x - this.zone && x < this.x + this.zone) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

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

  // mouseClicked() {
  //   if (this.hitTest(mouseX, mouseY, this.btnAx, this.btnAy)) {
  //     this.clickedA();
  //   }
  //   if (this.hitTest(mouseX, mouseY, this.btnBx, this.btnBy)) {
  //     this.clickedB();
  //   }
  // }

  // update() {
  //   this.charakterX;
  // }
}
