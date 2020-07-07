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
    this.satisfactionRate = 2;
    this.exhaustionRate=-4;
    }
    if(window.charakterId=="Lena"){
      this.satisfactionRate = 0;
      this.exhaustionRate=-4;
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
    // console.log("fridgeA:",this.useCounter.A);
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
      this.ration=0;
      this.useCounter.A=0;
    }
  }

  clickedA() {
    if (this.use >= 3) { 
      this.satisfactionRate = 0;
      this.exhaustionRate=2;
    }
    if (this.ration === 0) {
        this.ration = 3;
        if(window.charakterId=="Chantal"){
          if(window.bgeMode=="noBGE"){
            this.moneyRate = -12;
          }
          if(window.bgeMode=="withBGE"){
            this.moneyRate = -15;
          }
        }
        if(window.charakterId=="Lena"){
          if(window.bgeMode=="noBGE"){
            this.moneyRate = -9;
          }
          if(window.bgeMode=="withBGE"){
            this.moneyRate = -15;
          }
        }
      } 
      else {
        this.moneyRate = 0;
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
      
      }
      if (window.charakterId == "Lena") {
      this.updateAnimationPosition(0, 400);
      this.activityAnimation(this.tvBtnAInteraction, 90, 1);
      }
      if(this.useCounter.A<=3){
      this.thinkBubble("tvBtnAThought", this.thinkBubbles, 30, -250);}
      if(this.useCounter.A>3){
        this.toMuchBubble(this.thinkBubbles);
      }
      
    }
    if (this.interaction.B) {
      if(window.charakterId=="Chantal"){
      this.updateAnimationPosition(50, 170);
      this.activityAnimation(this.tvBtnBInteraction, 90, 3);
      }
      if (window.charakterId == "Lena") {
      this.updateAnimationPosition(0, 400);
      this.activityAnimation(this.tvBtnBInteraction, 90, 2);
      }
      if(this.useCounter.B>3){
        this.toMuchBubble(this.thinkBubbles);
      }
    }
    if(!window.globalTime.start){
      this.useCounter.A=0;
      this.useCounter.B=0;
    }
  }

  clickedA() {
    this.updateInteraction("TvBtnA");
    if (window.charakterId == "Chantal") {
      this.satisfactionRate = 1;
      this.exhaustionRate=-2;
      if(this.useCounter.A>3){
        this.satisfactionRate=0;
        this.exhaustionRate=1;
      }
      this.getActivityBundle("RTL 2");
    }
    if (window.charakterId == "Lena") {
      this.satisfactionRate = 0;
      this.exhaustionRate=-2;
      this.getActivityBundle("Filme");
    }
    this.updateParameter();
    this.updateAnimationA();
    this.useCounter.A++;
  }

  clickedB() {
    this.updateInteraction("TvBtnB");
    this.updateParameter();
    if (window.charakterId == "Chantal") {
      this.getActivityBundle("Filme");
      this.satisfactionRate = 0;
      this.exhaustionRate=-1;
    }
    if (window.charakterId == "Lena") {
      this.getActivityBundle("Gaming");
      this.satisfactionRate = 1;
      this.exhaustionRate=-3;
    }
    this.updateParameter();
    this.updateAnimationB();
    this.useCounter.B++;
  }
}

export class Door extends InteractiveObject {
  constructor(doors, Buttons, doorInteraction,forcedInteractions) {
    super();
    if (window.charakterId === "Chantal") {
      this.x = 40;
      this.y = 86;
      this.objectScale = 0.39;
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
    this.forcedInteractions=forcedInteractions;
    
    this.ChantalAmt=false;
    this.ChantalWorkshop=false;

    this.LenaWork = false;
    this.LenaUni = false;
  }

  showButtons(btnAId, btnBId) {
    this.btnA = this.Buttons.find((x) => x.id === btnAId);
    if (this.hitTest(mouseX, mouseY, this.btnAx, this.btnAy, this.btnA) && window.globalTime.day<4) {
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
    } 
    else if(window.globalTime.day>=4){
      this.btnA.filter(GRAY);
      image(
        this.btnA,
        this.btnAx,
        this.btnAy,
        this.btnA.width * this.btnScale,
        this.btnA.height * this.btnScale
      );
    }
    else {
      image(
        this.btnA,
        this.btnAx,
        this.btnAy,
        this.btnA.width * this.btnScale,
        this.btnA.height * this.btnScale
      );
    }

    this.btnB = this.Buttons.find((x) => x.id === btnBId);
    if (this.hitTest(mouseX, mouseY, this.btnBx, this.btnBy, this.btnB) && window.globalTime.day<4) {
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
    } 
    else if(window.globalTime.day>=4){
      this.btnB.filter(GRAY);
      image(
        this.btnB,
        this.btnBx,
        this.btnBy,
        this.btnB.width * this.btnScale,
        this.btnB.height * this.btnScale
      );     
    }
    else {
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
    // console.log("Door-FlipFlop: ",this.flipflopCount);
    // console.log("Chantal: ",this.ChantalAmt,this.ChantalWorkshop);
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
        if (this.ChantalAmt) {
          this.forcedInteractionsBanner("AmtPflicht",this.forcedInteractions,120);
          this.activityAnimation(this.doorInteraction, 120, 2.25);
          if (this.counter == 0) {
            this.ChantalAmt = false;
          }
        }
        else if(this.ChantalWorkshop){
          this.forcedInteractionsBanner("WorkshopPflicht",this.forcedInteractions,120);
          this.activityAnimation(this.doorInteraction, 120, 2.25);
          if (this.counter == 0) {
            this.ChantalWorkshop = false;
          }
        }
        else{
        this.activityAnimation(this.doorInteraction, 90, 3);
        }

      }
      if (window.charakterId == "Lena") {
        if (this.LenaWork) {
          this.forcedInteractionsBanner("ArbeitPflicht",this.forcedInteractions,120);
          this.activityAnimation(this.doorInteraction, 120, 3.75);
          if (this.counter == 0) {
            this.LenaWork = false;
          }
        } 
        else if (this.LenaUni) {
          this.forcedInteractionsBanner("UniPflicht",this.forcedInteractions,210);
          this.activityAnimation(this.doorInteraction, 210, 8.25);
          if (this.counter == 0) {
          this.LenaUni = false;
          }
        }
        else{
          this.activityAnimation(this.doorInteraction, 90, 4);
        }
      }
    }
    
  }

  clickedA() {
    if(window.globalTime.day>=4){
      return;
    }
    this.updateInteraction("Door");
    if (window.charakterId == "Chantal") {
      this.exhaustionRate=-3;
      this.satisfactionRate=3;
      this.moneyRate=0;
      this.getActivityBundle("Freunde");
    }
    if (window.charakterId == "Lena") {
      this.exhaustionRate=-3;
      this.satisfactionRate=2;
      this.moneyRate=0;
      this.getActivityBundle("Freunde");
    }
    this.updateParameter();
    this.updateAnimationA();
  }

  clickedB() {
    if(window.globalTime.day>=4){
      return;
    }
    this.updateInteraction("Door");
    if (window.charakterId == "Chantal") {
      this.exhaustionRate=-4;
      this.satisfactionRate=3;
      this.moneyRate=-10;
      this.getActivityBundle("Streetfood");
    }
    if (window.charakterId == "Lena") {
      this.exhaustionRate=-3;
      this.satisfactionRate=3;
      this.moneyRate=0;
      this.getActivityBundle("Tierheim");
    }
    this.updateParameter();
    this.updateAnimationA();
  }
  
  update(x) {
    if (window.charakterId == "Chantal" && (window.globalTime.day ==2 ||window.globalTime.day==3)) {
      if (
        window.globalTime.hour == 8 &&
        window.globalTime.minute == 30 &&
        !this.interaction.A && window.bgeMode=="noBGE"
      ) {
        window.forcedToDoor = true;
        this.ChantalAmt=true;
        if(this.flipflopCount<1){
          this.satisfactionRate=-4;
          this.exhaustionRate=4;
          this.moneyRate=0;
          this.updateParameter();
          this.getActivityBundle("Arbeitsamt Pflicht");
        }
        this.flipflopCount++;
      }
      if (window.globalTime.hour == 12 && !this.interaction.A) {
        window.forcedToDoor = true;
        this.ChantalWorkshop=true;
        if(this.flipflopCount<1){
          this.satisfactionRate=-1.5;
          this.exhaustionRate=2;
          this.moneyRate=0;
          this.updateParameter();
          this.getActivityBundle("Workshop Pflicht");
        }
        this.flipflopCount++;
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
        if(this.flipflopCount<1){
          this.satisfactionRate=0;
          this.exhaustionRate=1;
          this.moneyRate=0;
          this.updateParameter();
          this.getActivityBundle("Uni Pflicht");
        }
        this.flipflopCount++;
      }
      if (window.globalTime.hour == 22 && !this.interaction.A && window.bgeMode=="noBGE") {
        window.forcedToDoor = true;
        this.LenaWork = true;
        if(this.flipflopCount<1){
          this.satisfactionRate=-4;
          this.exhaustionRate=3;
          this.moneyRate=0;
          this.updateParameter();
          this.getActivityBundle("Arbeit Pflicht");
        }
        this.flipflopCount++;
      }
    }
    if (window.forcedToDoor && x <= this.x + 70) {
      this.updateInteraction("Door");
      window.activateCounter = true;
      this.updateAnimationA();
      window.forcedToDoor = false;
      this.flipflopCount=0;
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
        //rect unterm text am besten rotatet
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
  
        rectMode(CENTER);
        noStroke();
        fill("rgba(200,200,200,0.7)");
        rect((1920 * 0.4) / 2, 400,220,30);
        fill("#00b7d9");
        push();
        
        angleMode(DEGREES);
        translate((1920 * 0.4) / 2, 400)
        rotate(-3)
        rect(0, 0,200,10);
        pop();
        fill("black");
        textAlign(CENTER);
        textSize(12);
        text("Klicke, um zurückzukommen", (1920 * 0.4) / 2, 400);
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
    thinkBubbles,
    forcedInteractions
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

    this.forcedInteractions=forcedInteractions;
    
    this.LenaUni = false;
    this.ChantalAmt=false;
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
    if(!window.globalTime.start){
      this.useCounter.A=0;
      this.useCounter.B=0;
    }

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
    if(window.charakterId=="Chantal"){
      this.updateAnimationPosition(100, 100);
      }
    if (this.interaction.A) {
      if(window.charakterId=="Chantal"){
      this.activityAnimation(this.pcBtnAInteraction, 90, 2.25);
      if(this.useCounter.A<=3){
        this.thinkBubble("BewerbungThought",this.thinkBubbles,40,-160);}
      if(this.useCounter.A>3){
      this.toMuchBubble(this.thinkBubbles);
      }   
      if(this.ChantalAmt){
        this.forcedInteractionsBanner("AmtPflicht",this.forcedInteractions,90);
      } 
      if (this.counter == 0) {
        this.ChantalAmt = false;
      }
      }
      if(window.charakterId=="Lena"){  
      this.activityAnimation(this.pcBtnAInteraction, 90, 2);
      if(this.useCounter.A>4){
        this.toMuchBubble(this.thinkBubbles);
        }   
      }
    } 
    else if (this.interaction.B) {
      if (window.charakterId == "Lena") {
        if (this.LenaUni) {
          this.activityAnimation(this.pcBtnBInteraction, 210, 8.25);
          this.forcedInteractionsBanner("UniPflicht",this.forcedInteractions,210);
          
        } 
        else if(!this.LenaUni){
          this.activityAnimation(this.pcBtnBInteraction, 90, 2);
          if (window.globalTime.hour > 20 && window.globalTime.hour < 2) {
            this.thinkBubble("learnLateThought", this.thinkBubbles, 40, -180);
          } 
          else if(this.useCounter.B>=3){
            this.toMuchBubble(this.thinkBubbles);
          }
          else {
            this.thinkBubble("pcBtnBThought", this.thinkBubbles, 40, -180);
          }
          
        }
        if (this.counter == 0) {
            this.LenaUni = false;
        }
      }
      if (window.charakterId == "Chantal") {
        this.activityAnimation(this.pcBtnBInteraction, 90, 2);
        // this.thinkBubble("pcBtnBThought", this.thinkBubbles, 40, -180);
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
  }

  clickedA() {
    this.updateInteraction("PcBtnA");
    if (window.charakterId == "Chantal") {
      this.exhaustionRate=4;
      this.satisfactionRate=-3;
      this.getActivityBundle("Bewerben");
    }
    if (window.charakterId == "Lena") {
      this.exhaustionRate = -1;
      this.satisfactionRate = 2;
      this.getActivityBundle("Editen");
    }
    this.updateParameter();
    this.updateAnimationA();
    this.useCounter.A++;
  }

  clickedB() {
    if (window.charakterId == "Chantal") {
      this.updateInteraction("PcBtnB");
      this.satisfactionRate = 2;
      this.exhaustionRate=-2;
      this.getActivityBundle("Social Media");
    }
    if (window.charakterId == "Lena") {
      this.updateInteraction("PcBtnB");
      if (window.globalTime.hour > 20 && window.globalTime.hour < 2) {
      this.exhaustionRate=3;
      }
      else{
      this.exhaustionRate=1;
      }
      this.satisfactionRate=-2;
      this.getActivityBundle("Lernen");
    }
    this.updateParameter();
    this.updateAnimationB();
    this.useCounter.B++;
  }

  update(x) {
    if (window.charakterId == "Chantal" && window.globalTime.day >= 4 && window.bgeMode=="noBGE") {
      if ((window.globalTime.hour == 8) && (window.globalTime.minute == 30)) {
        if (
          x < floor(this.x + this.imgWidth / 2) &&
          !window.forcedToPc.ToLeft &&
          !this.interaction.A
        ) {
          window.forcedToPc.ToRight = true;
          this.ChantalAmt=true;
          if(this.flipflopCount<1){
            this.satisfactionRate=-4;
            this.exhaustionRate=2;
            this.updateParameter();
            this.getActivityBundle("Arbeitsamt Pflicht");
          }
          this.flipflopCount++;
        }
        if (
          x > ceil(this.x + this.imgWidth / 2) &&
          !window.forcedToPc.ToRight &&
          !this.interaction.A
        ) {
          window.forcedToPc.ToLeft = true;
          this.ChantalAmt=true;
          if(this.flipflopCount<1){
            this.satisfactionRate=-4;
            this.exhaustionRate=2;
            this.updateParameter();
            this.getActivityBundle("Arbeitsamt Pflicht");
          }
          this.flipflopCount++;
        }
      }
      if (window.forcedToPc.ToRight && x >= this.x + this.imgWidth / 2) {
        this.updateInteraction("PcBtnA");
        window.activateCounter = true;
        this.updateAnimationA();
        window.forcedToPc.ToRight = false;
        this.flipflopCount=0;
        
      }
      if (window.forcedToPc.ToLeft && x <= this.x + this.imgWidth / 2) {
        this.updateInteraction("PcBtnA");
        window.activateCounter = true;
        this.updateAnimationA();
        window.forcedToPc.ToLeft = false;
        this.flipflopCount=0;
        
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
          if(this.flipflopCount<1){
            this.satisfactionRate=0;
            this.exhaustionRate=2;
            this.updateParameter();
            this.getActivityBundle("Uni Pflicht");
          }
          this.flipflopCount++;
        }
        if (
          x > this.x + this.imgWidth / 2 &&
          !window.forcedToPc.ToRight &&
          !this.interaction.B
        ) {
          window.forcedToPc.ToLeft = true;
          this.LenaUni = true;
          if(this.flipflopCount<1){
            this.satisfactionRate=0;
            this.exhaustionRate=2;
            this.updateParameter();
            this.getActivityBundle("Uni Pflicht");
          }
          this.flipflopCount++;
        }
      }
      if (window.forcedToPc.ToRight && x >= this.x + this.imgWidth / 2) {
        this.updateInteraction("PcBtnB");
        window.activateCounter = true;
        this.updateAnimationB();
        window.forcedToPc.ToRight = false;
        this.flipflopCount=0;
      }
      if (window.forcedToPc.ToLeft && x <= this.x + this.imgWidth / 2) {
        this.updateInteraction("PcBtnB");
        window.activateCounter = true;
        this.updateAnimationB();
        window.forcedToPc.ToLeft = false;
        this.flipflopCount=0;
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
    if (this.hitTest(mouseX, mouseY, this.btnAx, this.btnAy, this.btnA)&&!(window.charakterId=="Lena" && window.bgeMode=="noBGE"&&(window.globalTime.day==2||window.globalTime.day==3))) {
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
    } 
    else {
      image(
        this.btnA,
        this.btnAx,
        this.btnAy,
        this.btnA.width * this.btnScale,
        this.btnA.height * this.btnScale
      );
    }
    if(window.charakterId=="Lena"&& (window.globalTime.day==2 || window.globalTime.day==3)&&window.bgeMode=="noBGE"){
      push();
      this.btnA.filter(GRAY);
      image(
        this.btnA,
        this.btnAx,
        this.btnAy,
        this.btnA.width * this.btnScale,
        this.btnA.height * this.btnScale
      );
      pop();
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
    if(window.charakterId=="Chantal"){
    this.updateAnimationPosition(-10, -54);
    }
    if(window.charakterId=="Lena"){
      this.updateAnimationPosition(0, -35);
    }
    if (!window.globalTime.start && (x >= this.x ||this.goSleep) && !window.globalTime.news) {
      window.globalTime.sleepAnimation = true;
      if(!this.goSleep){
        if(this.flipflopCount<1){
          this.satisfactionRate=0;
          this.exhaustionRate=-4;
          this.updateParameter();
          // this.getActivityBundle("Schlaf Pflicht");
        }
        this.flipflopCount++;
      }
      this.updateInteraction("Bed"); 
      this.activityAnimation(
        this.bedInteraction,
        355 / window.darkenScreenRate,
        0
      );
      //counter muss an Zeit zum globalTime.news=true angepasst werden
    } 
    else if (this.interaction.B) {
      this.activityAnimation(this.bedInteraction, 90, 1.25);
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
      this.flipflopCount=0;
      if(window.globalTime.hour==8 && window.globalTime.minute==0){
        this.counter=0;
      }
    }
    if(!window.globalTime.start){
      this.useCounter.B=0;
    }

  }

  clickedA() {
    if(window.charakterId=="Lena" && window.bgeMode=="noBGE"&&(window.globalTime.day==2||window.globalTime.day==3)&&window.bgeMode=="noBGE"){
      return;
    }
    this.exhaustionRate = -10;
    this.satisfactionRate=1;
    window.globalTime.start=false;
    this.updateInteraction("Bed");
    this.updateParameter();
    this.getActivityBundle("Schlafen");
    this.goSleep=true;
  }

  clickedB() {
    if(this.useCounter.B>=3){
      this.satisfactionRate = -2;
      this.exhaustionRate = -1;
    }
    else{
    this.satisfactionRate = 0;
    this.exhaustionRate = -3;
    }
    this.updateInteraction("Bed");
    this.updateParameter();
    this.getActivityBundle("Power-Nap");
    this.updateAnimationB();
    this.useCounter.B++;
  }
}
