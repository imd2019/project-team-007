//HIER GEHT DIE PARTY AB!!!


// Hässlon preload-function ist hier
// der Zwischenkommunikationsort aller Klassen
// globale Werte hier definiert


import MainScreen from "./MainScreen.js";
import FrontScreen from "./frontScreen.js";
import Nachrichten from "./nachrichten.js";
import Charakter from "./character.js";


import {Kühlschrank} from "./activities.js";
import Time from "./parameters.js";
import {TV} from "./activities.js";
import {Door} from "./activities.js";
import {Fenster} from "./activities.js";
import {PC} from "./activities.js";
import {Bett} from "./activities.js";




//<------les variablos globalos------>
let globalSatisfaction = 60;
let globalExhaustion = 30;
let globalMoney = 100;

window.globalSatisfaction = globalSatisfaction;
window.globalExhaustion = globalExhaustion;
window.globalMoney = globalMoney;

let globalTime={day:1,start:true,hour:1,minute:0,news:false,sleepAnimation:false};
window.globalTime=globalTime;

// globalActivityArray=[]

let activityAnimation=false;
window.activityAnimation=activityAnimation;

//<--------------->




let mainScreens=[];
let frontElements=[];

let fridges=[];
let fridgeInteraction=[];

let tvs=[];
let tvBtnAInteraction=[];
let tvBtnBInteraction=[];

let doors=[];

let windows=[];

let pcs=[];
let pcInteraction=[];


let beds=[];
let bedInteraction=[];

let stand=[];
let walk=[];

let buttons=[];

let nachrichten=[];


function preload(){
  // in den ids wird chanti rausgeschmissen damit man für lena nur image-Pfade ändern muss und nicht nochmal alle ids
  // charakter.id wird ne variable in den img-Pfaden

  // <----Chantis Room ---->
  let Room=loadImage("img/Chantal/Objects/background.png");
  Room.id="chantisRoom";
  mainScreens.push(Room);

  let Fridge=loadImage("img/Chantal/Objects/Kühlschrank.png");
  Fridge.id = "chantisFridge";
  fridges.push(Fridge);

  let FrontElement=loadImage("img/Chantal/Objects/Sofa.png");
  FrontElement.id="chantisSofa";
  frontElements.push(FrontElement);

  let TV=loadImage("img/Chantal/Objects/Fernseher.png");
  TV.id="chantisTV";
  tvs.push(TV);

  let Door=loadImage("img/Chantal/Objects/Tür.png");
  Door.id="chantisTür";
  doors.push(Door);

  let Fenster=loadImage("img/Chantal/Objects/FensterA.png");
  Fenster.id="chantisFenster";
  windows.push(Fenster);

  let PC=loadImage("img/Chantal/Objects/TischNoChair.png");
  PC.id="chantisTisch";
  let Chair=loadImage("img/Chantal/Objects/Stuhl.png");
  Chair.id="chantisStuhl";
  pcs.push(PC,Chair);

  let Bett=loadImage("img/Chantal/Objects/Bett.png");
  Bett.id="chantisBett";
  beds.push(Bett);
  
  // <-----Chantis Walk----->
  let lowestStand=loadImage("img/Chantal/Poses/stand/5_lowest/stehen.png");
  lowestStand.id="chantiLowestStand";
  let lowestWalk1=loadImage("img/Chantal/Poses/walk/5_lowest/run1.png");
  let lowestWalk2=loadImage("img/Chantal/Poses/walk/5_lowest/run2.png");
  let lowestWalk3=loadImage("img/Chantal/Poses/walk/5_lowest/run3.png");
  let lowestWalk=[];
  lowestWalk.id="chantiLowestWalk";
  lowestWalk.push(lowestWalk1,lowestWalk2,lowestWalk3,lowestWalk2);

  let lowStand=loadImage("img/Chantal/Poses/stand/4_low/stehen.png");
  lowStand.id="chantiLowStand";
  let lowWalk1=loadImage("img/Chantal/Poses/walk/4_low/run1.png");
  let lowWalk2=loadImage("img/Chantal/Poses/walk/4_low/run2.png");
  let lowWalk3=loadImage("img/Chantal/Poses/walk/4_low/run3.png");
  let lowWalk=[];
  lowWalk.id="chantiLowWalk";
  lowWalk.push(lowWalk1,lowWalk2,lowWalk3,lowWalk2);

  let middleStand=loadImage("img/Chantal/Poses/stand/3_middle/stehen.png");
  middleStand.id="chantiMiddleStand";
  let middleWalk1=loadImage("img/Chantal/Poses/walk/3_middle/run1.png");
  let middleWalk2=loadImage("img/Chantal/Poses/walk/3_middle/run2.png");
  let middleWalk3=loadImage("img/Chantal/Poses/walk/3_middle/run3.png");
  let middleWalk=[];
  middleWalk.id="chantiMiddleWalk";
  middleWalk.push(middleWalk1,middleWalk2,middleWalk3,middleWalk2);

  let highStand=loadImage("img/Chantal/Poses/stand/2_high/stehen.png");
  highStand.id="chantiHighStand";
  let highWalk1=loadImage("img/Chantal/Poses/walk/2_high/run1.png");
  let highWalk2=loadImage("img/Chantal/Poses/walk/2_high/run2.png");
  let highWalk3=loadImage("img/Chantal/Poses/walk/2_high/run3.png");
  let highWalk=[];
  highWalk.id="chantiHighWalk";
  highWalk.push(highWalk1,highWalk2,highWalk3,highWalk2);

  let victoryStand=loadImage("img/Chantal/Poses/stand/1_victory/stehen.png");
  victoryStand.id="chantiVictoryStand";
  let victoryWalk1=loadImage("img/Chantal/Poses/walk/1_victory/run1.png");
  let victoryWalk2=loadImage("img/Chantal/Poses/walk/1_victory/run2.png");
  let victoryWalk3=loadImage("img/Chantal/Poses/walk/1_victory/run3.png");
  let victoryWalk=[];
  victoryWalk.id="chantiVictoryWalk";
  victoryWalk.push(victoryWalk1,victoryWalk2,victoryWalk3,victoryWalk2);
  
  
  stand.push(lowestStand,lowStand,middleStand,highStand,victoryStand);
  walk.push(lowestWalk,lowWalk,middleWalk,highWalk,victoryWalk);

  //<-----Global Buttons----->
   let Essen=loadImage("img/globals/buttons/fridge.png");
  Essen.id="Essen";
  let Window=loadImage("img/globals/buttons/window.png");
  Window.id="Fenster";
  let Schlafen=loadImage("img/globals/buttons/sleep.png");
  Schlafen.id="Schlafen";
  let PowerNap=loadImage("img/globals/buttons/powerNap.png");
  PowerNap.id="PowerNap";

  //<-----Chanti Buttons----->
  let tvBtnA=loadImage("img/Chantal/Buttons/TV_1.png");
  tvBtnA.id="Rtl2";
  let tvBtnB=loadImage("img/Chantal/Buttons/TV_2.png");
  tvBtnB.id="Filme";
  let pcBtnA=loadImage("img/Chantal/Buttons/PC_1.png");
  pcBtnA.id="Bewerben";
  let pcBtnB=loadImage("img/Chantal/Buttons/PC_2.png");
  pcBtnB.id="SocialMedia";
  let doorBtnA=loadImage("img/Chantal/Buttons/Tür_1.png");
  doorBtnA.id="Freunde";
  let doorBtnB=loadImage("img/Chantal/Buttons/Tür_2.png");
  doorBtnB.id="Arbeitsamt";
  buttons.push(tvBtnA,tvBtnB,Essen,Window,Schlafen,PowerNap,pcBtnA,pcBtnB,doorBtnA,doorBtnB);

  //<---------Nachrichten(ohne BGE)-------->
  let day1_1=loadImage("img/globals/news/noBGE/newsscreen-day1-1.png");
  day1_1.id="day1_1";
  let day1_2=loadImage("img/globals/news/noBGE/newsscreen-day1-2.png");
  day1_2.id="day1_2";
  let day2_1=loadImage("img/globals/news/noBGE/newsscreen-day2-1.png");
  day2_1.id="day2_1";
  let day2_2=loadImage("img/globals/news/noBGE/newsscreen-day2-2.png");
  day2_2.id="day2_2";
  let day3_1=loadImage("img/globals/news/noBGE/newsscreen-day3-1.png");
  day3_1.id="day3_1";
  let day3_2=loadImage("img/globals/news/noBGE/newsscreen-day3-2.png");
  day3_2.id="day3_2";
  let day4_1=loadImage("img/globals/news/noBGE/newsscreen-day4-1.png");
  day4_1.id="day4_1";
  let day4_2=loadImage("img/globals/news/noBGE/newsscreen-day4-2.png");
  day4_2.id="day4_2";
  let day5_1=loadImage("img/globals/news/noBGE/newsscreen-day5-1.png");
  day5_1.id="day5_1";
  let day5_2=loadImage("img/globals/news/noBGE/newsscreen-day5-2.png");
  day5_2.id="day5_2";
  nachrichten.push(day2_1,day2_2,day3_1,day3_2,day4_1,day4_2,day5_1,day5_2);

  //<-------Chanti Activity Animation ----->
  let fridgeInteractionMiddle1=loadImage("img/Chantal/Poses/interact/3_middle/fridge/eat1.png");
  let fridgeInteractionMiddle2=loadImage("img/Chantal/Poses/interact/3_middle/fridge/eat2.png");
  let fridgeInteractionMiddle3=loadImage("img/Chantal/Poses/interact/3_middle/fridge/eat3.png");
  let fridgeInteractionMiddle4=loadImage("img/Chantal/Poses/interact/3_middle/fridge/eat4.png");
  let fridgeInteractionMiddle=[];
  fridgeInteractionMiddle.id="chantiFridgeInteractionMiddle";
  fridgeInteractionMiddle.push(fridgeInteractionMiddle1,fridgeInteractionMiddle2,fridgeInteractionMiddle3,fridgeInteractionMiddle2,fridgeInteractionMiddle4,fridgeInteractionMiddle2);
  fridgeInteraction.push(fridgeInteractionMiddle);

  let tvBtnAInteractionMiddle1=loadImage("img/Chantal/Poses/interact/3_middle/tv/rtl1.png");
  let tvBtnAInteractionMiddle2=loadImage("img/Chantal/Poses/interact/3_middle/tv/rtl2.png");
  let tvBtnAInteractionMiddle=[];
  tvBtnAInteractionMiddle.id="chantiTvBtnAInteractionMiddle";
  tvBtnAInteractionMiddle.push(tvBtnAInteractionMiddle1,tvBtnAInteractionMiddle2);
  tvBtnAInteraction.push(tvBtnAInteractionMiddle);
  let tvBtnBInteractionMiddle1=loadImage("img/Chantal/Poses/interact/3_middle/tv/film1.png");
  let tvBtnBInteractionMiddle2=loadImage("img/Chantal/Poses/interact/3_middle/tv/film2.png");
  let tvBtnBInteractionMiddle3=loadImage("img/Chantal/Poses/interact/3_middle/tv/film3.png");
  let tvBtnBInteractionMiddle4=loadImage("img/Chantal/Poses/interact/3_middle/tv/film4.png");
  let tvBtnBInteractionMiddle=[];
  tvBtnBInteractionMiddle.id="chantiTvBtnBInteractionMiddle";
  tvBtnBInteractionMiddle.push(tvBtnBInteractionMiddle1,tvBtnBInteractionMiddle2,tvBtnBInteractionMiddle1,tvBtnBInteractionMiddle2,tvBtnBInteractionMiddle3,tvBtnBInteractionMiddle4);
  tvBtnBInteraction.push(tvBtnBInteractionMiddle);

  let pcInteractionMiddle1=loadImage("img/Chantal/Poses/interact/3_middle/pc/pc1.png");
  let pcInteractionMiddle2=loadImage("img/Chantal/Poses/interact/3_middle/pc/pc2.png");
  let pcInteractionMiddle=[];
  pcInteractionMiddle.id="chantiPcInteractionMiddle";
  pcInteractionMiddle.push(pcInteractionMiddle1,pcInteractionMiddle2);
  pcInteraction.push(pcInteractionMiddle);
  
  let bedInteractionMiddle1=loadImage("img/Chantal/Poses/interact/3_middle/bed/bed1.png");
  let bedInteractionMiddle2=loadImage("img/Chantal/Poses/interact/3_middle/bed/bed2.png");
  let bedInteractionMiddle=[];
  bedInteractionMiddle.id="chantiBedInteractionMiddle";
  bedInteractionMiddle.push(bedInteractionMiddle1,bedInteractionMiddle2);
  bedInteraction.push(bedInteractionMiddle);
}
window.preload=preload;


let Room=new MainScreen(mainScreens);

let fridge=new Kühlschrank(fridges,buttons,fridgeInteraction);
let tv=new TV(tvs,buttons,tvBtnAInteraction,tvBtnBInteraction);
let door=new Door(doors,buttons);
let fenster= new Fenster(windows,buttons);
let pc= new PC(pcs,buttons,pcInteraction);
let bed= new Bett(beds,buttons,bedInteraction);

let Sofa= new FrontScreen(frontElements);
let Chanti=new Charakter(stand,walk,Room.endScreen);
let clock=new Time((1920*0.4)-120,5);

let news= new Nachrichten(nachrichten);

function draw(){
  console.log(window.globalTime.start);
  console.log("activityAnimation",window.activityAnimation);
  if(!window.globalTime.news){
  Room.display();
  fridge.display(Chanti.charakter.x,Chanti.charakter.y);
  tv.display(Chanti.charakter.x);
  door.display(Chanti.charakter.x);
  fenster.display(Chanti.charakter.x);
  pc.display(Chanti.charakter.x);
  bed.display(Chanti.charakter.x);
  
  if(!window.activityAnimation){
  Chanti.display();
  }

  Sofa.display();
  clock.display();  

  Room.move(Chanti.charakter);
  Chanti.move(bed.x);
  Sofa.move(Room.screenMoving);
  fridge.move(Room.screenMoving); 
  tv.move(Room.screenMoving);
  door.move(Room.screenMoving);
  fenster.move(Room.screenMoving);
  pc.move(Room.screenMoving);
  bed.move(Room.screenMoving);
  }
  news.display();
  
}
window.draw=draw;

function mouseClicked(){
  if(!window.activityAnimation){
  tv.mouseClicked();
  fridge.mouseClicked(); 
  pc.mouseClicked();
  bed.mouseClicked();

  news.mouseClicked();
  }

  console.log("Satisfaction: " + window.globalSatisfaction);
  console.log("Exhaustion:" + window.globalExhaustion);
  console.log("Money: " + window.globalMoney);
}
window.mouseClicked=mouseClicked;

