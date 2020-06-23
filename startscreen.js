import Button from "./button.js";

export default class Startscreens extends Button {
  constructor(
    x,
    y,
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    startbutton,
    infobutton,
    backbutton,
    letsgobutton,
    backbutton2,
    skipbutton
  ) {
    super();
    this.x = x;
    this.y = y;

    this.pic1 = pic1;
    this.pic2 = pic2;
    this.pic3 = pic3;
    this.pic4 = pic4;
    this.pic5 = pic5;

    this.startscreen = true;
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
    // buttons werden erst auf den jeweiligen screens displayt, wenn die roten ränder wegkommen braucht man das display auch nicht mehr
    if (this.startscreen) {
      image(this.pic1, this.x, this.y, this.width, this.height);
      this.startbutton.display();
      this.infobutton.display();
    }
    if (this.infoscreen) {
      image(this.pic2, this.x, this.y, this.width, this.height);
      this.backbutton.display();
    }
    if (this.chosescreen) {
      image(this.pic3, this.x, this.y, this.width, this.height);
      this.backbutton.display();
      this.letsgobutton.display();
    }
    if (this.newsscreen) {
      image(this.pic4, this.x, this.y, this.width, this.height);
      this.backbutton2.display();
      this.skipbutton.display();
    }
    if (this.back) {
      this.infoscreen = false;
      this.chosescreen = false;
      this.startscreen = true;
      this.back = false;
    }
    if (this.back2) {
      this.newsscreen = false;
      this.chosescreen = true;
      this.back2 = false;
    }
  }

  mouseClicked() {
    if (this.infobutton.hitTest(mouseX, mouseY) && this.startscreen) {
      this.startscreen = false;
      this.infoscreen = true;
    }
    if (this.startbutton.hitTest(mouseX, mouseY) && this.startscreen) {
      clear();
      this.startscreen = false;
      this.chosescreen = true;
    }
    if (
      this.backbutton.hitTest(mouseX, mouseY) &&
      (this.infoscreen || this.chosescreen)
    ) {
      clear();
      this.back = true;
    }

    // hier wird Bedingung noch geändert
    // character-Id und BGE-Mode einfügen :) dann sollte es bug-frei funktionieren, sonst switcht es instant zu choosescreen=true
    if (this.letsgobutton.hitTest(mouseX, mouseY) && this.chosescreen) {
      clear();
      this.chosescreen = false;
      this.newsscreen = true;
    }
    if (this.backbutton2.hitTest(mouseX, mouseY) && this.newsscreen) {
      clear();
      this.back2 = true;
    }
    if (this.skipbutton.hitTest(mouseX, mouseY) && this.newsscreen) {
      // wenn man auf skip drückt kommt 2. newsscreen bild und wenn man dann nochmal auf skip drückt ist mainstart true
      this.mainstart = true;
    }
  }
}
