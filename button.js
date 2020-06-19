export default class Button {
  constructor(btnX, btnY, width, height) {
    this.btnX = btnX;
    this.btnY = btnY;
    this.width = width;
    this.height = height;
  }

  display() {
    var btnX = this.btnX;
    var btnY = this.btnY;
    var width = this.width;
    var height = this.height;
    noFill();
    stroke(255, 0, 0);
    rect(btnX, btnY, width, height, 20);
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

  updateBtnPosition(offsetx, btnOffset) {
    this.btnX = this.x + offsetx;
    this.btnY = this.y - btnOffset;
  }

  hitTest(x, y, btnX, btnY) {
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

  clicked() {
    console.log("was wiesooo");
  }

  mouseClicked() {
    if (this.hitTest(mouseX, mouseY, this.btnX, this.btnY)) {
      this.clicked();
    }
  }
}
