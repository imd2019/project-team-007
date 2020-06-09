import Screen from "./screens.js";

export default class InteractiveObject extends Screen {
  constructor(x, y) {
    super(x,y);
    
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
    if(keyIsDown(RIGHT_ARROW)){
      if(screenMoving.Right==true){
        this.x-=5;
      }
    }
    if(keyIsDown(LEFT_ARROW)){
      if(screenMoving.Left==true){
        this.x+=5;
      }
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

  display() {
    if (this.hoverTest(this.charakterX)) {
      this.showButtons();
    }
  }

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
