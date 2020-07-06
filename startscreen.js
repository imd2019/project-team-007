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
    skipbutton,
    pic6,
    bgebutton,
    pic7,
    pic8,
    chantibutton,
    lenabutton
  ) {
    super();
    this.x = x;
    this.y = y;

    this.pic1 = pic1;
    this.pic2 = pic2;
    this.pic3 = pic3;
    this.pic4 = pic4;
    this.pic5 = pic5;
    this.pic6 = pic6;
    this.pic7=pic7;
    this.pic8=pic8;

    this.startscreen = true;
    this.choosescreenOff = false;
    this.choosescreenOn=false;
    this.infoscreen = false;
    this.newsscreen1 = false;
    this.newsscreen2=false;
    this.back = false;
    this.back2 = false;
    this.mainstart = false;
    this.chanti=false;
    this.lena=false;

    this.width = 1920 * 0.4;
    this.height = 1080 * 0.4;

    this.infobutton = infobutton;
    this.startbutton = startbutton;
    this.backbutton = backbutton;
    this.letsgobutton = letsgobutton;
    this.backbutton2 = backbutton2;
    this.skipbutton = skipbutton;
    this.bgebutton=bgebutton;
    this.chantibutton=chantibutton;
    this.lenabutton=lenabutton;

    this.counter=0;
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
    if (this.choosescreenOff) {
      image(this.pic3, this.x, this.y, this.width, this.height);
      this.backbutton.display();
      this.bgebutton.display();
      this.letsgobutton.display();
      this.lenabutton.display();
      this.chantibutton.display();
      push();
      if(this.chanti){
        noFill();
        stroke("#00b7d9");
        strokeWeight(4);
        quad(201,10,375,25,372,297,210,300);
      }
      if(this.lena){
        noFill();
        stroke("#00b7d9");
        strokeWeight(4);
        quad(411,28,550,4,582,285,378,294);
      }
      pop();
    }
    if (this.choosescreenOn) {
      image(this.pic5, this.x, this.y, this.width, this.height);
      this.backbutton.display();
      this.bgebutton.display();
      this.letsgobutton.display();
      this.lenabutton.display();
      this.chantibutton.display();
      push();
      if(this.chanti){
        noFill();
        stroke("#00b7d9");
        strokeWeight(4);
        quad(201,10,375,25,372,297,210,300);
      }
      if(this.lena){
        noFill();
        stroke("#00b7d9");
        strokeWeight(4);
        quad(411,28,550,4,582,285,378,294);
      }
      pop();
    }
    if (this.newsscreen1) {
      if(window.bgeMode=="noBGE"){
      image(this.pic4, this.x, this.y, this.width, this.height);
      }
      if(window.bgeMode=="withBGE"){
      image(this.pic7, this.x, this.y, this.width, this.height);
      }
      this.backbutton2.display();
      this.skipbutton.display();
    }
    if (this.newsscreen2) {
      if(window.bgeMode=="noBGE"){
      image(this.pic6, this.x, this.y, this.width, this.height);
      }
      if(window.bgeMode=="withBGE"){
        image(this.pic8, this.x, this.y, this.width, this.height);
      }
      this.skipbutton.display();
      this.counter++;
    }


    if (this.back) {
      this.infoscreen = false;
      this.choosescreenOff = false;
      this.choosescreenOn=false;
      this.lena=false;
      this.chanti=false;
      this.startscreen = true;
      this.back = false;
    }
    if (this.back2) {
      this.newsscreen1 = false;
      if(window.bgeMode=="noBGE"){
      this.choosescreenOff = true;
      }
      if(window.bgeMode=="withBGE"){
        this.choosescreenOn = true;
      }
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
      this.choosescreenOff = true;
    }
    if (
      this.backbutton.hitTest(mouseX, mouseY) &&
      (this.infoscreen || this.choosescreenOff||this.choosescreenOn)
    ) {
      clear();
      this.back = true;
    }
    if(this.bgebutton.hitTest(mouseX,mouseY)&&this.choosescreenOff){
      this.choosescreenOn=true;
      this.choosescreenOff=false;
      window.bgeMode="withBGE";
      return;
    }
    if(this.bgebutton.hitTest(mouseX,mouseY)&&this.choosescreenOn){
      this.choosescreenOn=false;
      this.choosescreenOff=true;
      window.bgeMode="noBGE";
      return;
    }
    // hier wird Bedingung noch geändert
    // character-Id und BGE-Mode einfügen :) dann sollte es bug-frei funktionieren, sonst switcht es instant zu choosescreen=true
    if (this.letsgobutton.hitTest(mouseX, mouseY) && (this.choosescreenOff || this.choosescreenOn)&&(this.lena||this.chanti)) {
      clear();
      this.choosescreenOff = false;
      this.choosescreenOn=false;
      this.newsscreen1 = true;
      window.updateParameters=true;
    }
    if (this.backbutton2.hitTest(mouseX, mouseY) && this.newsscreen1) {
      clear();
      this.back2 = true;
    }
    if (this.skipbutton.hitTest(mouseX, mouseY) && this.newsscreen1) {
      this.newsscreen2 = true;
    }
    if (this.skipbutton.hitTest(mouseX, mouseY) && this.newsscreen2&&this.counter>=30) {
      this.mainstart = true;
    }
    if(this.chantibutton.hitTest(mouseX,mouseY)&& (this.choosescreenOn || this.choosescreenOff)){
      this.chanti=true;
      this.lena=false;
      window.charakterId="Chantal";
    }
    if(this.lenabutton.hitTest(mouseX,mouseY)&& (this.choosescreenOn || this.choosescreenOff)){
      this.chanti=false;
      this.lena=true;
      window.charakterId="Lena";
    }
  }
}
