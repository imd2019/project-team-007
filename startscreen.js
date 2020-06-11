export default class Startscreens {
  constructor(x, y, pic1, pic2, pic3, pic4) {
    this.x = x;
    this.y = y;
    this.startscreen = true;
    this.pic1 = pic1;
    this.pic2 = pic2;
    this.pic3 = pic3;
    this.pic4 = pic4;
    this.chosescreen = false;
    this.infoscreen = false;
    this.newsscreen = false;
    this.back = false;
    this.back2 = false;
    this.mainstart = false;
  }

  display() {
    //image
    if (this.startscreen === true) {
      image(
        this.pic1,
        this.x,
        this.y,
        this.pic1.width / 10,
        this.pic1.height / 10
      );
    }
    if (this.infoscreen === true) {
      this.startscreen = false;
      image(
        this.pic2,
        this.x,
        this.y,
        this.pic2.width / 6,
        this.pic2.height / 6
      );
    }
    if (this.chosescreen === true) {
      this.startscreen = false;
      image(
        this.pic3,
        this.x,
        this.y,
        this.pic3.width / 10,
        this.pic3.height / 10
      );
      textSize(15);
      text("back", 0, 10);
    }
    if (this.newsscreen === true) {
      this.chosescreen = false;
      image(
        this.pic4,
        this.x,
        this.y,
        this.pic4.width / 10,
        this.pic4.height / 10
      );
      text("back", 0, 10);
    }
    if (this.back === true) {
      this.infoscreen = false;
      this.chosescreen = false;
      this.startscreen = true;
      this.back = false;
    }
    if (this.back2 === true) {
      this.newsscreen = false;
      this.chosescreen = true;
      this.back2 = false;
    }
  }

  mouseClicked() {
    // hier kann man buttons einfügen, dann hat man hitTest mit dabei :)
    console.log(mouseX);
    console.log(mouseY);
    if (
      mouseX >= 298 &&
      mouseX <= 470 &&
      mouseY >= 305 &&
      mouseY <= 354 &&
      this.startscreen === true
    ) {
      this.infoscreen = true;
    }
    if (
      mouseX >= 5 &&
      mouseX <= 103 &&
      mouseY >= 5 &&
      mouseY <= 42 &&
      this.infoscreen === true
    ) {
      this.back = true;
    }
    if (
      mouseX >= 298 &&
      mouseX <= 470 &&
      mouseY >= 233 &&
      mouseY <= 280 &&
      this.startscreen === true
    ) {
      this.chosescreen = true;
    }
    if (
      mouseX >= 0 &&
      mouseX <= 30 &&
      mouseY >= 0 &&
      mouseY <= 10 &&
      this.chosescreen === true
    ) {
      this.back = true;
    }
    if (
      mouseX >= 298 &&
      mouseX <= 485 &&
      mouseY >= 370 &&
      mouseY <= 417 &&
      this.chosescreen === true
    ) {
      this.newsscreen = true;
    }
    if (
      mouseX >= 0 &&
      mouseX <= 30 &&
      mouseY >= 0 &&
      mouseY <= 10 &&
      this.newsscreen === true
    ) {
      this.back2 = true;
    }
    if (
      mouseX >= 579 &&
      mouseX <= 638 &&
      mouseY >= 385 &&
      mouseY <= 410 &&
      this.newsscreen === true
    ) {
      this.mainstart = true;
    }
  }
}
