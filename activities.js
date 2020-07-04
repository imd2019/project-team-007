import InteractiveObject from "./interactiveObject.js";

export class Kühlschrank extends InteractiveObject {
  constructor(fridges, Buttons, fridgeInteraction,thinkBubbles) {
    super();
    if (window.charakterId === "Chantal") {
      this.x = 810;
      this.y = 75;
      this.objectScale = 0.4;
    }
    if (window.charakterId === "Lena") {
      this.x = 615;
      this.y = 220;
      this.objectScale = 0.44;
      this.animationScale=0.52;
    }
    this.ration = 3;
    this.use = 0;

    this.fridges = fridges;

    this.Buttons = Buttons;
    this.btnScale = 0.4;

    this.fridgeInteraction = fridgeInteraction;
    if(window.charakterId=="Chantal"){
    this.satisfactionRate = 1.2;
    this.exhaustionRate=0.9
    }
    if(window.charakterId=="Lena"){
      this.satisfactionRate = 1.1;
      this.exhaustionRate=0.9;
    }

    this.thinkBubbles=thinkBubbles;
  }

  showButtons(btnAId) {
    this.btnA = this.Buttons.find((x) => x.id === btnAId);
    if (this.hitTest(mouseX, mouseY, this.btnAx, this.btnAy, this.btnA)) {
      push();
      angleMode(DEGREES);
      imageMode(CENTER);
      translate(
        this.btnAx + (this.btnA.width * this.btnScale) / 2,
        this.btnAy + (this.btnA.height * this.btnScale) / 2
      );
      rotate(18);
      image(
        this.btnA,
        0,
        0,
        this.btnA.width * this.btnScale,
        this.btnA.height * this.btnScale
      );
      pop();
    } else {
      image(
        this.btnA,
        this.btnAx,
        this.btnAy,
        this.btnA.width * this.btnScale,
        this.btnA.height * this.btnScale
      );
    }
  }

  display(x, y) {
    let fridge = this.fridges.find((x) => x.id === "Fridge");
    this.updateZone(fridge);
    if(window.charakterId=="Chantal"){
    this.updateBtnPosition(20, 0, 45);
    }
    if(window.charakterId=="Lena"){
      this.updateBtnPosition(20, 0, 130);
    }
    image(fridge, this.x, this.y, this.imgWidth, this.imgHeight);
    if (this.hoverTest(x)) {
      this.showButtons("Essen");
    }
    if (this.interaction.A) {
      this.updateAnimationPosition(70, y - this.y - 10);
      this.activityAnimation(this.fridgeInteraction, 90, 0.75);
      if(this.useCounter.A>4){
      this.toMuchBubble(this.thinkBubbles);
      }
    }
    if (!window.globalTime.start) {
      this.use = 0;
    }
  }

  clickedA() {
    if (this.use >= 3) {
      if (this.ration == 0) {
        this.ration = 3;
        this.moneyRate = -15;
        console.log("u out of food");
      } else {
        this.moneyRate = 0;
      }
      this.satisfactionRate = 0.8;
      this.exhaustionRate=1.2;
    }
    this.use++;
    this.ration--;
    this.updateInteraction("Fridge");
    this.updateParameter();
    this.getActivityBundle("Essen");
    this.updateAnimationA();
    console.log("ration & use: ", this.ration, this.use);
    this.useCounter.A++;
  }
}

export class TV extends InteractiveObject {
  constructor(
    tvs,
    Buttons,
    tvBtnAInteraction,
    tvBtnBInteraction,
    thinkBubbles
  ) {
    super();
    if (window.charakterId === "Chantal") {
      this.x = 520;
      this.y = 190;
    }
    if (window.charakterId === "Lena") {
      this.x = 1100;
      this.y = 245;
    }

    this.tvs = tvs;
    this.objectScale = 0.4;

    this.Buttons = Buttons;
    this.btnScale = 0.4;

    this.tvBtnAInteraction = tvBtnAInteraction;
    this.tvBtnBInteraction = tvBtnBInteraction;

    this.animationSpeed = 0.15;

    this.thinkBubbles = thinkBubbles;
  }

  showButtons(btnAId, btnBId) {
    this.btnA = this.Buttons.find((x) => x.id === btnAId);
    if (this.hitTest(mouseX, mouseY, this.btnAx, this.btnAy, this.btnA)) {
      push();
      angleMode(DEGREES);
      imageMode(CENTER);
      translate(
        this.btnAx + (this.btnA.width * this.btnScale) / 2,
        this.btnAy + (this.btnA.height * this.btnScale) / 2
      );
      rotate(18);
      image(
        this.btnA,
        0,
        0,
        this.btnA.width * this.btnScale,
        this.btnA.height * this.btnScale
      );
      pop();
    } else {
      image(
        this.btnA,
        this.btnAx,
        this.btnAy,
        this.btnA.width * this.btnScale,
        this.btnA.height * this.btnScale
      );
    }

    this.btnB = this.Buttons.find((x) => x.id === btnBId);
    if (this.hitTest(mouseX, mouseY, this.btnBx, this.btnBy, this.btnB)) {
      push();
      angleMode(DEGREES);
      imageMode(CENTER);
      translate(
        this.btnBx + (this.btnB.width * this.btnScale) / 2,
        this.btnBy + (this.btnB.height * this.btnScale) / 2
      );
      rotate(-18);
      image(
        this.btnB,
        0,
        0,
        this.btnB.width * this.btnScale,
        this.btnB.height * this.btnScale
      );
      pop();
    } else {
      image(
        this.btnB,
        this.btnBx,
        this.btnBy,
        this.btnB.width * this.btnScale,
        this.btnB.height * this.btnScale
      );
    }
  }

  display(x) {
    let tv = this.tvs.find((x) => x.id === "TV");
    this.updateZone(tv);
    
    if(window.charakterId=="Chantal"){
    this.updateBtnPosition(15, 160, 75);
    }
    if(window.charakterId=="Lena"){
      this.updateBtnPosition(-35, 135, 130);
    }
    image(tv, this.x, this.y, this.imgWidth, this.imgHeight);
    if (this.hoverTest(x)) {
      this.showButtons("TvBtnA", "TvBtnB");
    }
    if (this.interaction.A) {
      if(window.charakterId=="Chantal"){
      this.updateAnimationPosition(50, 170);
      this.activityAnimation(this.tvBtnAInteraction, 110, 1);
      this.thinkBubble("tvBtnAThought", this.thinkBubbles, 30, -250);
      }
      if (window.charakterId == "Lena") {
      this.updateAnimationPosition(0, 400);
      this.activityAnimation(this.tvBtnAInteraction, 90, 1);
      }
      if(this.useCounter.A>3){
        this.toMuchBubble(this.thinkBubbles);
      }
      
    }
    if (this.interaction.B) {
      if(window.charakterId=="Chantal"){
      this.updateAnimationPosition(50, 170);
      this.activityAnimation(this.tvBtnBInteraction, 90, 2);
      }
      if (window.charakterId == "Lena") {
      this.updateAnimationPosition(0, 400);
      this.activityAnimation(this.tvBtnBInteraction, 90, 1);
      }
      this.toMuchBubble(this.thinkBubbles);
    }
  }

  clickedA() {
    
    this.moneyRate = -20;
    this.updateInteraction("TvBtnA");
    
    if (window.charakterId == "Chantal") {
      this.getActivityBundle("RTL 2");
      this.satisfactionRate = 1.2;
      if(this.useCounter>3){
        this.satisfactionRate=0.9;
        this.exhaustionRate=1.2;
      }
    }
    if (window.charakterId == "Lena") {
      this.getActivityBundle("Filme");
      this.satisfactionRate = 1.2;
      this.exhaustionRate=0.9;
    }
    this.updateParameter();
    this.updateAnimationA();
    this.useCounter.A++;
  }

  clickedB() {
    
    this.moneyRate = -15; //<-------------------------umbedingt beachten, sonst werden Werte von anderer Aktion genommen!!!
    this.updateInteraction("TvBtnB");
    this.updateParameter();
    if (window.charakterId == "Chantal") {
      this.getActivityBundle("Filme");
      this.satisfactionRate = 1.05;
    }
    if (window.charakterId == "Lena") {
      this.getActivityBundle("Gaming");
      this.satisfactionRate = 1.2;
      this.exhaustionRate=0.8;
    }
    this.updateParameter();
    this.updateAnimationB();
    this.useCounter.B++;
  }
}

export class Door extends InteractiveObject {
  constructor(doors, Buttons, doorInteraction) {
    super();
    if (window.charakterId === "Chantal") {
      this.x = 40;
      this.y = 78;
      this.objectScale = 0.4;
    }
    if (window.charakterId === "Lena") {
      this.x = 40;
      this.y = 86;
      this.objectScale=0.43;
    }

    this.doors = doors;
    

    this.Buttons = Buttons;
    this.btnScale = 0.4;

    this.doorInteraction = doorInteraction;

    this.LenaWork = false;
    this.LenaUni = false;
  }

  showButtons(btnAId, btnBId) {
    this.btnA = this.Buttons.find((x) => x.id === btnAId);
    if (this.hitTest(mouseX, mouseY, this.btnAx, this.btnAy, this.btnA)) {
      push();
      angleMode(DEGREES);
      imageMode(CENTER);
      translate(
        this.btnAx + (this.btnA.width * this.btnScale) / 2,
        this.btnAy + (this.btnA.height * this.btnScale) / 2
      );
      rotate(18);
      image(
        this.btnA,
        0,
        0,
        this.btnA.width * this.btnScale,
        this.btnA.height * this.btnScale
      );
      pop();
    } else {
      image(
        this.btnA,
        this.btnAx,
        this.btnAy,
        this.btnA.width * this.btnScale,
        this.btnA.height * this.btnScale
      );
    }

    this.btnB = this.Buttons.find((x) => x.id === btnBId);
    if (this.hitTest(mouseX, mouseY, this.btnBx, this.btnBy, this.btnB)) {
      push();
      angleMode(DEGREES);
      imageMode(CENTER);
      translate(
        this.btnBx + (this.btnB.width * this.btnScale) / 2,
        this.btnBy + (this.btnB.height * this.btnScale) / 2
      );
      rotate(-18);
      image(
        this.btnB,
        0,
        0,
        this.btnB.width * this.btnScale,
        this.btnB.height * this.btnScale
      );
      pop();
    } else {
      image(
        this.btnB,
        this.btnBx,
        this.btnBy,
        this.btnB.width * this.btnScale,
        this.btnB.height * this.btnScale
      );
    }
  }

  display(x, y) {
    // console.log("LenaUni: ",this.LenaUni);
    // console.log("LenaWork: ",this.LenaWork);
    let door = this.doors.find((x) => x.id === "Tür");
    this.updateZone(door);
    this.updateBtnPosition(-20, 115, 20);
    if (this.charakterFadeOut) {
      push();
      tint(0, 0, 0, 255);
      image(door, this.x, this.y, this.imgWidth, this.imgHeight);
      pop();
      fill("#00b7d9");
      if (window.charakterId == "Lena") {
        rect(this.x - 15, this.y, 15, this.imgHeight, 10);
      }
      if (window.charakterId == "Chantal") {
        quad(
          this.x - 15,
          this.y + 7,
          this.x,
          this.y + 2,
          this.x,
          this.y + this.imgHeight - 1,
          this.x - 15,
          this.y + this.imgHeight
        );
      }
    } else {
      image(door, this.x, this.y, this.imgWidth, this.imgHeight);
    }
    if (this.hoverTest(x)) {
      this.showButtons("DoorBtnA", "DoorBtnB");
    }
    this.update(x);

    if (this.interaction.A) {
      this.charakterFadeOut = true;
      this.updateAnimationPosition(100, y - this.y - 20);
      if (window.charakterId == "Chantal") {
        this.activityAnimation(this.doorInteraction, 90, 2);
      }
      if (window.charakterId == "Lena") {
        if (this.LenaWork) {
          this.activityAnimation(this.doorInteraction, 120, 3.5);
        } else if (this.LenaUni) {
          this.activityAnimation(this.doorInteraction, 210, 8.25);
        }
        else{
          this.activityAnimation(this.doorInteraction, 90, 2);
        }
      }
    }
    if (this.counter == 0) {
      this.LenaUni = false;
      this.LenaWork = false;
    }
  }

  clickedA() {
    this.updateInteraction("Door");
    
    if (window.charakterId == "Chantal") {
      this.getActivityBundle("Freunde");
      this.exhaustionRate=0.7;
      this.satisfactionRate=1.3;
    }
    if (window.charakterId == "Lena") {
      this.getActivityBundle("Fotografieren?");
      this.exhaustionRate=0.6;
      this.satisfactionRate=1.4;
    }
    this.updateParameter();
    this.updateAnimationA();
  }

  clickedB() {
    
    this.updateInteraction("Door");
    if (window.charakterId == "Chantal") {
      this.getActivityBundle("Arbeitsamt");
      this.exhaustionRate=1.3;
      this.satisfactionRate=0.8;
    }
    if (window.charakterId == "Lena") {
      this.getActivityBundle("Uni");
      this.exhaustionRate=1.2;
    }
    this.updateParameter();
    this.updateAnimationA();
  }

  update(x) {
    if (window.charakterId == "Chantal" && (window.globalTime.day ==2 ||window.globalTime.day==3)) {
      if (
        window.globalTime.hour == 8 &&
        window.globalTime.minute == 30 &&
        !this.interaction.A
      ) {
        window.forcedToDoor = true;
      }
      if (window.globalTime.hour == 12 && !this.interaction.A) {
        window.forcedToDoor = true;
      }
    }
    if (window.charakterId == "Lena" && (window.globalTime.day ==2 || window.globalTime.day==3)) {
      if (
        window.globalTime.hour == 8 &&
        window.globalTime.minute == 30 &&
        !this.interaction.A
      ) {
        window.forcedToDoor = true;
        this.LenaUni = true;
      }
      if (window.globalTime.hour == 22 && !this.interaction.A) {
        window.forcedToDoor = true;
        this.LenaWork = true;
      }
    }
    if (window.forcedToDoor && x <= this.x + 70) {
      this.updateInteraction("Door");
      window.activateCounter = true;
      this.updateAnimationA();
      window.forcedToDoor = false;
    }
  }
}

export class Fenster extends InteractiveObject {
  constructor(windows, Buttons, windowInteraction, windowAussicht) {
    super();
    if (window.charakterId === "Chantal") {
      this.x = 310;
      this.y = 55;
      this.objectScale = 0.42;
    }
    if (window.charakterId === "Lena") {
      this.x = 770;
      this.y = 78;
      this.objectScale = 0.4;
      this.animationScale=0.53;
    }

    this.windows = windows;

    this.Buttons = Buttons;
    this.btnScale = 0.4;

    this.windowInteraction = windowInteraction;
    this.windowAussicht = windowAussicht;

    this.opacity = 0;
    this.counterOpacity = 0;
    this.aussichtOn = false;
    this.ausssichtEnd = 300 - 26;
  }

  showButtons(btnBId) {
    this.btnB = this.Buttons.find((x) => x.id === btnBId);
    if (this.hitTest(mouseX, mouseY, this.btnBx, this.btnBy, this.btnB)) {
      push();
      angleMode(DEGREES);
      imageMode(CENTER);
      translate(
        this.btnBx + (this.btnB.width * this.btnScale) / 2,
        this.btnBy + (this.btnB.height * this.btnScale) / 2
      );
      rotate(-18);
      image(
        this.btnB,
        0,
        0,
        this.btnB.width * this.btnScale,
        this.btnB.height * this.btnScale
      );
      pop();
    } else {
      image(
        this.btnB,
        this.btnBx,
        this.btnBy,
        this.btnB.width * this.btnScale,
        this.btnB.height * this.btnScale
      );
    }
  }

  display(x, y) {
    // console.log(this.opacity);
    // console.log("aussichtEnd: ",this.ausssichtEnd);
    // console.log("counterOpacity ",this.counterOpacity);
    let fenster = this.windows.find((x) => x.id === "Fenster");
    this.updateZone(fenster);
    this.updateBtnPosition(0, 50, 50);
    image(fenster, this.x, this.y, this.imgWidth, this.imgHeight);
    if (this.hoverTest(x)) {
      this.showButtons("Fenster");
    }
    if (this.interaction.B) {
      this.updateAnimationPosition(90, y - this.y - 20);
      this.activityAnimation(this.windowInteraction, this.ausssichtEnd + 26);
      let aussicht = this.windowAussicht.find(
        (x) => x.id === "day" + window.globalTime.day
      );
      push();
      tint(255, this.opacity);
      this.counterOpacity++;
      if (this.counterOpacity <= 26) {
        this.opacity += 10;
      }
      if (this.opacity >= 260) {
        this.opacity = 260;
        this.aussichtOn = true;
        fill("black");
        textAlign(CENTER);
        textSize(28);
        text("Klicke, um zurückzukommen", (1920 * 0.4) / 2, 50);
      }
      if (this.counterOpacity >= this.ausssichtEnd) {
        this.opacity -= 10;
        this.aussichtOn = false;
      }
      if (
        this.counterOpacity == 30 * 10 ||
        this.counterOpacity == this.ausssichtEnd + 26
      ) {
        this.opacity = 0;
        this.counterOpacity = 0;
        this.ausssichtEnd = 300 - 26;
      }
      image(aussicht, 0, 0, aussicht.width * 0.4, aussicht.height * 0.4);
      if (this.aussichtOn) {
        fill("black");
        textAlign(CENTER);
        textSize(16);
        text("Klicke, um zurückzukommen", (1920 * 0.4) / 2, 80);
      }
      pop();
    }
  }

  clickedB() {
    this.updateInteraction("Window");
    this.updateAnimationB();
  }

  clickedWindow() {
    if (this.aussichtOn) {
      this.ausssichtEnd = this.counterOpacity;
    }
  }
}

export class PC extends InteractiveObject {
  constructor(
    pcs,
    Buttons,
    pcBtnAInteraction,
    pcBtnBInteraction,
    thinkBubbles
  ) {
    super();
    if (window.charakterId === "Chantal") {
      this.x = 1055;
      this.y = 185;
      this.objectScale = 0.42;
      this.animationScale = 0.5;
    }
    if (window.charakterId === "Lena") {
      this.x = 350;
      this.y = 205;
      this.objectScale=0.46;
      this.animationScale=0.48;
    }

    this.pcs = pcs;
    

    this.Buttons = Buttons;
    this.btnScale = 0.4;

    this.pcBtnAInteraction = pcBtnAInteraction;
    this.pcBtnBInteraction = pcBtnBInteraction;
    

    this.LenaUni = false;
    this.thinkBubbles = thinkBubbles;
  }

  showButtons(btnAId, btnBId) {
    this.btnA = this.Buttons.find((x) => x.id === btnAId);
    if (this.hitTest(mouseX, mouseY, this.btnAx, this.btnAy, this.btnA)) {
      push();
      angleMode(DEGREES);
      imageMode(CENTER);
      translate(
        this.btnAx + (this.btnA.width * this.btnScale) / 2,
        this.btnAy + (this.btnA.height * this.btnScale) / 2
      );
      rotate(18);
      image(
        this.btnA,
        0,
        0,
        this.btnA.width * this.btnScale,
        this.btnA.height * this.btnScale
      );
      pop();
    } else {
      image(
        this.btnA,
        this.btnAx,
        this.btnAy,
        this.btnA.width * this.btnScale,
        this.btnA.height * this.btnScale
      );
    }

    this.btnB = this.Buttons.find((x) => x.id === btnBId);
    if (this.hitTest(mouseX, mouseY, this.btnBx, this.btnBy, this.btnB)) {
      push();
      angleMode(DEGREES);
      imageMode(CENTER);
      translate(
        this.btnBx + (this.btnB.width * this.btnScale) / 2,
        this.btnBy + (this.btnB.height * this.btnScale) / 2
      );
      rotate(-18);
      image(
        this.btnB,
        0,
        0,
        this.btnB.width * this.btnScale,
        this.btnB.height * this.btnScale
      );
      pop();
    } else {
      image(
        this.btnB,
        this.btnBx,
        this.btnBy,
        this.btnB.width * this.btnScale,
        this.btnB.height * this.btnScale
      );
    }
  }

  display(x) {
    this.update(x);
    let pc = this.pcs.find((x) => x.id === "Tisch");
    this.updateZone(pc);
    if(window.charakterId=="Chantal"){
    this.updateBtnPosition(-5, 150, 70);
    }
    if(window.charakterId=="Lena"){
      this.updateBtnPosition(-5, 155, 100);
    }
    image(pc, this.x, this.y, this.imgWidth, this.imgHeight);
    if (this.hoverTest(x)) {
      this.showButtons("PcBtnA", "PcBtnB");
    }
    
    if(window.charakterId=="Lena"){
      this.updateAnimationPosition(120, 80);
    }
    if (this.interaction.A) {
      if(window.charakterId=="Chantal"){
      this.updateAnimationPosition(100, 100);
      this.thinkBubble("BewerbungThought",this.thinkBubbles,40,-160)
      }
      this.activityAnimation(this.pcBtnAInteraction, 90, 2);
      this.toMuchBubble(this.thinkBubbles);
    } 
    else if (this.interaction.B) {
      if (window.charakterId == "Lena") {
        if (this.LenaUni) {
          this.activityAnimation(this.pcBtnBInteraction, 210, 8.25);
        } else {
          
          if (window.globalTime.hour > 20 && window.globalTime.hour < 2) {
            this.thinkBubble("learnLateThought", this.thinkBubbles, 40, -180);
          } else {
            this.thinkBubble("pcBtnBThought", this.thinkBubbles, 40, -180);
          }
          this.activityAnimation(this.pcBtnBInteraction, 90, 2);
        }
      }
      if (window.charakterId == "Chantal") {
        this.activityAnimation(this.pcBtnAInteraction, 90, 2);
        this.thinkBubble("pcBtnBThought", this.thinkBubbles, 40, -180);
      }
      
    } 
    else {
      let chair = this.pcs.find((x) => x.id === "Stuhl");
      image(
        chair,
        this.x + 60,
        this.y + 53,
        chair.width * (this.objectScale + 0.025),
        chair.height * (this.objectScale + 0.025)
      );
    }
    // if(this.counter==0){
    //   this.LenaUni=false;
    // }
  }

  clickedA() {
    
    
    this.updateInteraction("PcBtnA");
    if (window.charakterId == "Chantal") {
      this.getActivityBundle("Bewerben");
      this.exhaustionRate=1.2;
      this.satisfactionRate=0.8;
    }
    if (window.charakterId == "Lena") {
      this.getActivityBundle("Editen");
      this.exhaustionRate = 0.9;
      this.satisfactionRate = 1.2;
    }
    this.updateParameter();
    this.updateAnimationA();
    this.useCounter.A++;
  }

  clickedB() {
    
    
    if (window.charakterId == "Chantal") {
      this.updateInteraction("PcBtnA");
      this.getActivityBundle("Social Media");
      this.satisfactionRate = 1.4;
      this.exhaustionRate=1;
    }
    if (window.charakterId == "Lena") {
      this.updateInteraction("PcBtnB");
      this.getActivityBundle("Lernen");
      this.exhaustionRate=1.4;
      this.satisfactionRate=1;
    }
    this.updateParameter();
    this.updateAnimationB();
    this.useCounter.B++;
  }

  update(x) {
    if (window.charakterId == "Chantal" && window.globalTime.day >= 4) {
      if ((window.globalTime.hour == 8) & (window.globalTime.minute == 30)) {
        if (
          x < floor(this.x + this.imgWidth / 2) &&
          !window.forcedToPc.ToLeft &&
          !this.interaction.A
        ) {
          window.forcedToPc.ToRight = true;
        }
        if (
          x > ceil(this.x + this.imgWidth / 2) &&
          !window.forcedToPc.ToRight &&
          !this.interaction.A
        ) {
          window.forcedToPc.ToLeft = true;
        }
      }
      if (window.forcedToPc.ToRight && x >= this.x + this.imgWidth / 2) {
        this.updateInteraction("PcBtnA");
        window.activateCounter = true;
        this.updateAnimationA();
        window.forcedToPc.ToRight = false;
        return;
      }
      if (window.forcedToPc.ToLeft && x <= this.x + this.imgWidth / 2) {
        debugger;
        this.updateInteraction("PcBtnA");
        window.activateCounter = true;
        this.updateAnimationA();
        window.forcedToPc.ToLeft = false;
        return;
      }
    }
    if (window.charakterId == "Lena" && window.globalTime.day >= 4) {
      if (window.globalTime.hour == 8 && window.globalTime.minute == 30) {
        if (
          x < this.x + this.imgWidth / 2 &&
          !window.forcedToPc.ToLeft &&
          !this.interaction.B
        ) {
          window.forcedToPc.ToRight = true;
          this.LenaUni = true;
        }
        if (
          x > this.x + this.imgWidth / 2 &&
          !window.forcedToPc.ToRight &&
          !this.interaction.B
        ) {
          window.forcedToPc.ToLeft = true;
          this.LenaUni = true;
        }
      }
      if (window.forcedToPc.ToRight && x >= this.x + this.imgWidth / 2) {
        this.updateInteraction("PcBtnB");
        window.activateCounter = true;
        this.updateAnimationB();
        window.forcedToPc.ToRight = false;
      }
      if (window.forcedToPc.ToLeft && x <= this.x + this.imgWidth / 2) {
        debugger;
        this.updateInteraction("PcBtnB");
        window.activateCounter = true;
        this.updateAnimationB();
        window.forcedToPc.ToLeft = false;
      }
    }
  }
}

export class Bett extends InteractiveObject {
  constructor(beds, Buttons, bedInteraction, frontElements) {
    super();
    if (window.charakterId === "Chantal") {
      this.x = 1320;
      this.y = 245;
      this.objectScale = 0.4;
      this.animationScale=0.4;
    }
    if (window.charakterId === "Lena") {
      this.x = 1340;
      this.y = 235;
      this.objectScale=0.42;
      this.animationScale=0.428;
    }

    this.beds = beds;
    

    this.Buttons = Buttons;
    this.btnScale = 0.4;
    
    this.bedInteraction = bedInteraction;
    this.frontElements = frontElements;
    this.imageMode = CORNER;

    this.goSleep=false;
  }

  showButtons(btnAId, btnBId) {
    this.btnA = this.Buttons.find((x) => x.id === btnAId);
    if (this.hitTest(mouseX, mouseY, this.btnAx, this.btnAy, this.btnA)) {
      push();
      angleMode(DEGREES);
      imageMode(CENTER);
      translate(
        this.btnAx + (this.btnA.width * this.btnScale) / 2,
        this.btnAy + (this.btnA.height * this.btnScale) / 2
      );
      rotate(18);
      image(
        this.btnA,
        0,
        0,
        this.btnA.width * this.btnScale,
        this.btnA.height * this.btnScale
      );
      pop();
    } else {
      image(
        this.btnA,
        this.btnAx,
        this.btnAy,
        this.btnA.width * this.btnScale,
        this.btnA.height * this.btnScale
      );
    }

    this.btnB = this.Buttons.find((x) => x.id === btnBId);
    if (this.hitTest(mouseX, mouseY, this.btnBx, this.btnBy, this.btnB)) {
      push();
      angleMode(DEGREES);
      imageMode(CENTER);
      translate(
        this.btnBx + (this.btnB.width * this.btnScale) / 2,
        this.btnBy + (this.btnB.height * this.btnScale) / 2
      );
      rotate(-18);
      image(
        this.btnB,
        0,
        0,
        this.btnB.width * this.btnScale,
        this.btnB.height * this.btnScale
      );
      pop();
    } else {
      image(
        this.btnB,
        this.btnBx,
        this.btnBy,
        this.btnB.width * this.btnScale,
        this.btnB.height * this.btnScale
      );
    }
  }

  display(x) {
    console.log(this.goSleep);
    if(window.charakterId=="Chantal"){
    this.updateAnimationPosition(-10, -54);
    }
    if(window.charakterId=="Lena"){
      this.updateAnimationPosition(0, -35);
    }
    if (!window.globalTime.start && (x >= this.x ||this.goSleep) && !window.globalTime.news) {
      window.globalTime.sleepAnimation = true;
      this.updateInteraction("Bed");
      // this.updateAnimationA(); 
      this.activityAnimation(
        this.bedInteraction,
        355 / window.darkenScreenRate,
        0
      ); //counter muss an Zeit zum globalTime.news=true angepasst werden
    } 
    else if (this.interaction.B) {
      this.activityAnimation(this.bedInteraction, 90, 2);
    } 
    else {
      let bett = this.beds.find((x) => x.id === "Bett");
      this.updateZone(bett);
      this.updateBtnPosition(10, 160, 130);
      image(bett, this.x, this.y, this.imgWidth, this.imgHeight);
    }
    if (window.charakterId === "Lena") {
      let deco = this.frontElements.find((x) => x.id === "FrontDeco");
      image(
        deco,
        this.x -40,
        this.y - 200,
        deco.width * (this.objectScale-0.03),
        deco.height * (this.objectScale-0.03)
      );
    }
    if (this.hoverTest(x)) {
      this.showButtons("Schlafen", "PowerNap");
    }
    if(window.globalTime.start){
      this.goSleep=false;
    }
  }

  clickedA() {
    this.exhaustionRate = 0.6;
    window.globalTime.start=false;
    this.updateInteraction("Bed");
    this.updateParameter();
    this.getActivityBundle("Schlafen");
    this.goSleep=true;
  }

  clickedB() {
    this.satisfactionRate = 0.9;
    this.updateInteraction("Bed");
    this.updateParameter();
    this.getActivityBundle("Power-Nap");
    this.updateAnimationB();
  }
}
