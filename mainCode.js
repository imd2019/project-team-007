//HIER GEHT DIE PARTY AB!!!


// Bilder hier preloaden 
// der Zwischenkommunikationsort aller Klassen
// globale Werte hier definiert
// Auswertung findet entweder hier oder in einer anderen Datei/Klasse statt

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


let globalSatisfaction = 26;
let globalExhaustion = 30;
let globalMoney = 100;

window.globalSatisfaction = globalSatisfaction;
window.globalExhaustion = globalExhaustion;
window.globalMoney = globalMoney;
// globalTime
// globalActivityArray=[]



let mainScreens=[];
let frontElements=[];

let fridges=[];
let tvs=[];
let doors=[];
let windows=[];
let pcs=[];
let beds=[];

let stand=[];
let walk=[];

let buttons=[];

let nachrichten=[];


function preload(){
  // <----Chantis Room ---->
  let Room=loadImage("img/Chantal/Objects/emptyRoom.png");
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

  let PC=loadImage("img/Chantal/Objects/Tisch.png");
  PC.id="chantisPC";
  pcs.push(PC);

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


  let middleStand=loadImage("img/Chantal/Poses/stand/3_middle/stehen.png");
  middleStand.id="chantiMiddleStand";
  let middleWalk1=loadImage("img/Chantal/Poses/walk/3_middle/run1.png");
  let middleWalk2=loadImage("img/Chantal/Poses/walk/3_middle/run2.png");
  let middleWalk3=loadImage("img/Chantal/Poses/walk/3_middle/run3.png");
  let middleWalk=[];
  middleWalk.id="chantiMiddleWalk";
  middleWalk.push(middleWalk1,middleWalk2,middleWalk3,middleWalk2);
  

  stand.push(lowestStand,middleStand);
  walk.push(lowestWalk,middleWalk);
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
}
window.preload=preload;


let Room=new MainScreen(0,0,mainScreens);

let fridge=new Kühlschrank(820,90,fridges,buttons);
let tv=new TV(560,200,tvs,buttons);
let door=new Door(55,97,doors,buttons);
let fenster= new Fenster(310,90,windows,buttons);
let pc= new PC(1055,198,pcs,buttons);
let bed= new Bett(1320,255,beds,buttons);

let Sofa= new FrontScreen(425,315,frontElements);
let Chanti=new Charakter((1920*0.4/2)-110,290,stand,walk,Room.endScreen);
let clock=new Time((1920*0.4)-120,5);

let news= new Nachrichten(nachrichten);


function draw(){
  Room.display();
  fridge.display(Chanti.charakter.x);
  tv.display(Chanti.charakter.x);
  door.display(Chanti.charakter.x);
  fenster.display(Chanti.charakter.x);
  pc.display(Chanti.charakter.x);
  bed.display(Chanti.charakter.x);
  
  Chanti.display();
  Sofa.display();
  clock.display();  

  news.display(clock.newsTime,clock.day);

  Room.move(Chanti.charakter);
  Chanti.move();
  Sofa.move(Room.screenMoving);
  fridge.move(Room.screenMoving); 
  tv.move(Room.screenMoving);
  door.move(Room.screenMoving);
  fenster.move(Room.screenMoving);
  pc.move(Room.screenMoving);
  bed.move(Room.screenMoving);
  
}
window.draw=draw;

function mouseClicked(){
  tv.mouseClicked();
  fridge.mouseClicked(); 
  news.mouseClicked(clock.dayStart);
  console.log("Satisfaction: " + window.globalSatisfaction);
  console.log("Exhaustion:" + window.globalExhaustion);
  console.log("Money: " + window.globalMoney);
}
window.mouseClicked=mouseClicked;

