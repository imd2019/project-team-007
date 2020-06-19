export default class Button {
  constructor(btnx, btny, btnwidth, btnheight) {
    this.btnx = btnx;
    this.btny = btny;
    this.btnwidth = btnwidth;
    this.btnheight = btnheight;
  }

  display() {
    var btnx = this.btnx;
    var btny = this.btny;
    var btnwidth = this.btnwidth;
    var btnheight = this.btnheight;
    noFill();
    stroke(255, 0, 0);
    rect(btnx, btny, btnwidth, btnheight, 20);
  }

  hitTest(x, y) {
    if (
      x > this.btnx &&
      x < this.btnx + this.btnwidth &&
      y > this.btny &&
      y < this.btny + this.btnheight
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
    if (this.hitTest(mouseX, mouseY)) {
      this.clicked();
    }
  }
}
