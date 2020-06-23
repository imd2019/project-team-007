// hier hab ich absolut kp wieso mouseClicked nicht weitergegeben wird, aber mit nur hittest funktioierts

export default class Button {
  constructor(btnX, btnY, width, height) {
    this.btnX = btnX;
    this.btnY = btnY;
    this.width = width;
    this.height = height;
  }

  display() {
    // var btnX = this.btnX;
    // var btnY = this.btnY;
    // var width = this.width;
    // var height = this.height;
    noFill();
    stroke(255, 0, 0);
    rect(this.btnX, this.btnY, this.width, this.height, 20);
  }

  // hitTest(x, y) {
  //   if (
  //     x > this.btnx &&
  //     x < this.btnx + this.btnwidth &&
  //     y > this.btny &&
  //     y < this.btny + this.btnheight
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  

  hitTest(x, y) {
    //type error
    
    if (
      x > this.btnX &&
      x < this.btnX + this.width &&
      y > this.btnY &&
      y < this.btnY + this.height
    ) {
      return true;
    } else {
      return false;
    }
  }

  // clicked() {
  //   console.log("was wiesooo");
  // }

  // mouseClicked() {
  //   if (this.hitTest(mouseX, mouseY)) {
  //     this.clicked();
  //   }
  // }
}
