
export default class Button {
  constructor(btnX, btnY, width, height) {
    this.btnX = btnX;
    this.btnY = btnY;
    this.width = width;
    this.height = height;
  }

  display() {
    push();
    noFill();
    noStroke();
    rect(this.btnX, this.btnY, this.width, this.height, 20);
    pop();
  }

 
  hitTest(x, y) {
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

}
