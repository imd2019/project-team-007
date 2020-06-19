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



let MainScreens=[];
let fridges=[];
let frontElements=[];

let tvs=[];
let doors=[];
let windows=[];
let pcs=[];
let beds=[];

let chantiStand=[];
let chantiWalk=[];

let Buttons=[];

let nachrichten=[];


function preload(){
  // <----Chantis Room ---->
  let Room=loadImage("Chantal_emptyRoom1.png");
  MainScreens.push(Room);

  let Fridge=loadImage("img/1x/Kuehlschrank.png");
  Fridge.id = "chantisFridge";
  fridges.push(Fridge);

  let FrontElement=loadImage("img/1x/Element 2Sofa.png");
  FrontElement.id="chantisSofa";
  frontElements.push(FrontElement);

  let TV=loadImage("img/1x/Fernseher.png");
  TV.id="chantisTV";
  tvs.push(TV);

  let Door=loadImage("img/1x/Tuer.png");
  Door.id="chantisTür";
  doors.push(Door);

  let Fenster=loadImage("img/1x/FensterAloe.png");
  Fenster.id="chantisFenster";
  windows.push(Fenster);

  let PC=loadImage("img/1x/PC.png");
  PC.id="chantisPC";
  pcs.push(PC);

  let Bett=loadImage("img/1x/Bett.png");
  Bett.id="chantisBett";
  beds.push(Bett);

  // <----Chantis Walk----->
  let chantiStandNormal=loadImage("img/ChantalPoses/2_stehen.png");
  chantiStand.push(chantiStandNormal);
  let chantiWalkNormal1=loadImage("img/ChantalPoses/3_stehen_gehen.png");
  let chantiWalkNormal2=loadImage("img/ChantalPoses/4_stehen_gehen.png");
  let chantiWalkNormal3=loadImage("img/ChantalPoses/5_stehen_gehen.png");
  let chantiWalkNormal4=loadImage("img/ChantalPoses/6_stehen_gehen.png");
  let chantiWalkNormal=[];
  chantiWalkNormal.push(chantiWalkNormal4,chantiWalkNormal3,chantiWalkNormal2,chantiWalkNormal1);
  chantiWalk.push(chantiWalkNormal);

  //<-----Chanti Buttons----->
  let tvBtnA=loadImage("img/ChantiButtons/ChantiTV_one.png");
  tvBtnA.id="Rtl2";
  let tvBtnB=loadImage("img/ChantiButtons/ChantiTV_two.png");
  tvBtnB.id="Filme";
  let Essen=loadImage("img/ChantiButtons/Chanti_Kuhlschrank.png");
  Essen.id="Essen";
  let Window=loadImage("img/ChantiButtons/Chanti_Fenster.png");
  Window.id="Fenster";
  let Schlafen=loadImage("img/ChantiButtons/ChantiBett_one.png");
  Schlafen.id="Schlafen";
  let PowerNap=loadImage("img/ChantiButtons/ChantiBett_two.png");
  PowerNap.id="PowerNap";
  let pcBtnA=loadImage("img/ChantiButtons/ChantiPC_one.png");
  pcBtnA.id="Bewerben";
  let pcBtnB=loadImage("img/ChantiButtons/ChantiPC_two.png");
  pcBtnB.id="SocialMedia";
  let doorBtnA=loadImage("img/ChantiButtons/ChantiTür_one.png");
  doorBtnA.id="Freunde";
  let doorBtnB=loadImage("img/ChantiButtons/ChantiTür_two.png");
  doorBtnB.id="Arbeitsamt";
  Buttons.push(tvBtnA,tvBtnB,Essen,Window,Schlafen,PowerNap,pcBtnA,pcBtnB,doorBtnA,doorBtnB);

  //<---------Nachrichten(ohne BGE)-------->
  let day2_1=loadImage("img/Nachrichten/newsscreen-day2-1.png");
  day2_1.id="day2_1";
  let day2_2=loadImage("img/Nachrichten/newsscreen-day2-2.png");
  day2_2.id="day2_2";
  let day3_1=loadImage("img/Nachrichten/newsscreen-day3-1.png");
  day3_1.id="day3_1";
  let day3_2=loadImage("img/Nachrichten/newsscreen-day3-2.png");
  day3_2.id="day3_2";
  let day4_1=loadImage("img/Nachrichten/newsscreen-day4-1.png");
  day4_1.id="day4_1";
  let day4_2=loadImage("img/Nachrichten/newsscreen-day4-2.png");
  day4_2.id="day4_2";
  let day5_1=loadImage("img/Nachrichten/newsscreen-day5-1.png");
  day5_1.id="day5_1";
  let day5_2=loadImage("img/Nachrichten/newsscreen-day5-2.png");
  day5_2.id="day5_2";
  nachrichten.push(day2_1,day2_2,day3_1,day3_2,day4_1,day4_2,day5_1,day5_2);
}
window.preload=preload;


let Room=new MainScreen(0,0,MainScreens);

let fridge=new Kühlschrank(820,90,fridges,Buttons);
let tv=new TV(560,200,tvs,Buttons);
let door=new Door(55,97,doors,Buttons);
let fenster= new Fenster(310,90,windows,Buttons);
let pc= new PC(1055,198,pcs,Buttons);
let bed= new Bett(1320,255,beds,Buttons);

let Sofa= new FrontScreen(425,315,frontElements);
let Chanti=new Charakter((1920*0.4/2)-110,290,chantiStand,chantiWalk,Room.endScreen);
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

