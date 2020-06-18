export default class Startscreens {
  constructor(
    x,
    y,
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    infobutton,
    startbutton,
    backbutton,
    letsgobutton,
    backbutton2,
    skipbutton
  ) {
    this.x = x;
    this.y = y;
    this.startscreen = true;
    this.pic1 = pic1;
    this.pic2 = pic2;
    this.pic3 = pic3;
    this.pic4 = pic4;
    this.pic5 = pic5;
    this.chosescreen = false;
    this.infoscreen = false;
    this.newsscreen = false;
    this.back = false;
    this.back2 = false;
    this.mainstart = false;
    this.width = 1920 * 0.4;
    this.height = 1080 * 0.4;
    this.infobutton = infobutton;
    this.startbutton = startbutton;
    this.backbutton = backbutton;
    this.letsgobutton = letsgobutton;
    this.backbutton2 = backbutton2;
    this.skipbutton = skipbutton;
  }

  display() {
    //image
    if (this.startscreen === true) {
      image(this.pic1, this.x, this.y, this.width, this.height);
    }
    if (this.infoscreen === true) {
      this.startscreen = false;
      image(this.pic2, this.x, this.y, this.width, this.height);
    }
    if (this.chosescreen === true) {
      this.startscreen = false;
      image(this.pic3, this.x, this.y, this.width, this.height);
      textSize(15);
      text("back", 0, 10);
    }
    if (this.newsscreen === true) {
      this.chosescreen = false;
      image(this.pic4, this.x, this.y, this.width, this.height);
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

  clicked() {
    // hier kann man buttons einfügen, dann hat man hitTest mit dabei :)
    if (this.infobutton.mouseClicked() && this.startscreen === true) {
      this.infoscreen = true;
    }
    if (this.backbutton.mouseClicked() && this.infoscreen === true) {
      this.back = true;
    }
    if (this.startbutton.mouseClicked() && this.startscreen === true) {
      this.chosescreen = true;
    }
    if (this.backbutton.mouseClicked() && this.chosescreen === true) {
      this.back = true;
    }
    if (this.letsgobutton.mouseClicked() && this.chosescreen === true) {
      this.newsscreen = true;
    }
    if (this.backbutton2.mouseClicked() && this.newsscreen === true) {
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
