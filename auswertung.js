// Ergebnisse vordefiniert,if schleifen für Ausgänge, Auswertungsprozess
// Restartbutton im Fazit,FazitScreens,...
// könnte von Screens erben

export default class Finale{
constructor(fazits,calendarAnimation,restartButton){
this.x=0;
this.y=0;

this.rectWidth=400;

this.satisfaction;
this.exhaustion;
this.money;

this.steps=5;

this.fazits=fazits;
this.fazitId;

this.calendarAnimation=calendarAnimation;
this.index=0;
this.animationSpeed=5;

this.loadingBar=2;
this.loadingSpeed=1;

this.fazitDisplay=false;
this.opacity=0;

this.flipflopCount=0;

this.restartButton=restartButton;
this.btnX=((1920*0.4)/2)-((this.restartButton.width*0.4)/2);
this.btnY=(1080*0.4)+80;
this.btnCounter=0;
}

display(){
  if(window.globalTime.day==5 &&(window.globalTime.hour<=2 ||window.globalTime.hour>8)&&window.globalTime.sleepAnimation){
    this.auswertung();
  }
  if(window.globalTime.day>5){
    this.loadingScreen();
    console.log("FinalSatisfaction",window.globalSatisfaction);
    console.log("FinalExhaustion",window.globalExhaustion);
    console.log("FinalMoney :",window.globalMoney);
    if(this.fazitDisplay){
    this.update();
    let fazit=this.fazits.find((x)=>x.id==this.fazitId);
    push();
    tint(255,this.opacity);
    this.opacity+=10;
    if(this.opacity>=260){
      this.opacity=260;
    }
    image(fazit,this.x,this.y,fazit.width*0.4,fazit.height*0.4);
    this.restart();
    pop();
    }
  }
}

loadingScreen(){
  push();
  imageMode(CENTER);
  this.index += this.animationSpeed;
  this.animationSpeed-=0.032;//-0.035 is good,-0,032 is better
  let animation = floor(this.index) % this.calendarAnimation.length;
  image(this.calendarAnimation[animation],(1920*0.4)/2,170,this.calendarAnimation[animation].width*0.6,this.calendarAnimation[animation].height*0.6);
  pop();
  fill("#fbbb13");
  rect(((1920*0.4)-this.rectWidth)/2,280,this.loadingBar,30,20);
  this.loadingSpeed-=0.006;
  if(this.loadingBar>=this.rectWidth){
    this.loadingBar=400;
    this.fazitDisplay=true;
    this.animationSpeed=0;
  }
  else{
    this.loadingBar+=5*this.loadingSpeed;
  }
  noFill();
  stroke("white");
  strokeWeight(5);
  rect(((1920*0.4)-this.rectWidth)/2,280,this.rectWidth,30,20);
  
}

restart(){
  push();
  this.btnCounter++;
  if(this.btnCounter>=90){
    this.btnY-=2;
    
  }
  if(this.btnY<=(1080*0.4)-65){
      this.btnY=(1080*0.4)-65;
  }
  
  image(this.restartButton,this.btnX,this.btnY,this.restartButton.width*0.4,this.restartButton.height*0.4);
  pop();
}

hittest(x,y){
  if (
    x > this.btnX &&
    x < this.btnX + this.restartButton.width*0.4 &&
    y > this.btnY &&
    y < this.btnY + this.restartButton.height*0.4
  ) 
  {
    return true;
  } 
  else {
    return false;
  }
}

 update() {
  if (window.globalSatisfaction <= 25) {
    this.fazitId = "BadestFazit";
  } else if (
    window.globalSatisfaction >= 26 &&
    window.globalSatisfaction <= 50
  ) {
    this.fazitId = "BadFazit";
  } else if (
    window.globalSatisfaction >= 51 &&
    window.globalSatisfaction <= 75
  ) {
    this.fazitId = "MediumFazit";
  } else if (
    window.globalSatisfaction >= 76 &&
    window.globalSatisfaction <= 90
  ) {
    this.fazitId = "HighFazit";
  } else if (window.globalSatisfaction >= 91) {
    this.fazitId = "HighestFazit";
  }  
}

 monthCalculate(day) {
    let dayString="day"+day;
    this.satisfaction = window.globalSatisfaction;
    this.exhaustion = window.globalExhaustion;
    this.money = window.globalMoney;
    for (let i in window.globalActivityArray[dayString]) {
      if(window.bgeMode=="noBGE"){
        if(window.globalExhaustion>75){
          this.satisfaction = this.satisfaction +(this.steps*window.globalActivityArray[dayString][i][0])-4;
        }
        else if(window.globalExhaustion>90){
          this.satisfaction = this.satisfaction +(this.steps*window.globalActivityArray[dayString][i][0])-6;
        }
        else{this.satisfaction = this.satisfaction +(this.steps* window.globalActivityArray[dayString][i][0]);
        }
        this.satisfaction=Math.max(0,Math.min(75,this.satisfaction));
      }
      if(window.bgeMode=="withBGE"){
        if(window.globalExhaustion>75){
          this.satisfaction = this.satisfaction +(this.steps*window.globalActivityArray[dayString][i][0])-3;
        }
        else{
        this.satisfaction = this.satisfaction +(this.steps* window.globalActivityArray[dayString][i][0]);
        }
        this.satisfaction=Math.max(0,Math.min(100,this.satisfaction));
      }
     
      this.exhaustion = this.exhaustion +(this.steps* window.globalActivityArray[dayString][i][1]);
      this.exhaustion=Math.max(0,Math.min(100,this.exhaustion));

      this.money = this.money + window.globalActivityArray[dayString][i][2];
      window.globalSatisfaction=this.satisfaction;
      window.globalExhaustion=this.exhaustion;
      window.globalMoney=this.money;
    }
  }

 auswertung() {
    if(this.flipflopCount<1){
    for (let j =0;j<26;j++) {
      // console.log("das modulo-etwas: ",1+j%2); 
      this.monthCalculate(4+j%2);
      console.log("satisfaction",window.globalSatisfaction);
      console.log("exhaustion",window.globalExhaustion);
      console.log("money :",window.globalMoney);
      
    }
    console.log(this.flipflopCount);
    
    if(window.charakterId=="Chantal"){
    if(window.globalMoney<=-50){
      if(window.globalMoney<=-150){
      window.globalSatisfaction-=75;
      }
      else{
      window.globalSatisfaction-=20;
      }
     }
    }

    if(window.charakterId=="Lena"){
      if(window.globalMoney<=(-150)){
        window.globalSatisfaction-=30;
      }
    }
    
    
    if(window.globalExhaustion>90 ){
      if(window.globalSatisfaction>75){
      window.globalSatisfaction-=36;}
    }
    this.flipflopCount++;
    }
    
  }

 mouseClicked(){
  if(this.hittest(mouseX,mouseY)){
    this.clicked();
  }
 }
 clicked(){
   location.reload();
 }
}