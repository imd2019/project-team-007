//HIER GEHT DIE PARTY AB!!!


// Bilder hier preloaden 
// der Zwischenkommunikationsort aller Klassen
// globale Werte hier definiert
// Auswertung findet entweder hier oder in einer anderen Datei/Klasse statt

import MainScreen from "./MainScreen.js";

import {Kühlschrank} from "./activities.js";
import Charakter from "./character.js";
import FrontScreen from "./frontScreen.js";
import Time from "./parameters.js";
import {TV} from "./activities.js";
import {Door} from "./activities.js";
import {Fenster} from "./activities.js";
import {PC} from "./activities.js";
import {Bett} from "./activities.js";


// globalSatisfaction
// globalExhaustion
// globalMoney
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

let tvBtn=[];
let fridgeBtn=[];


function preload(){
  // <----Chantis Room ---->
  let chantisRoomImg=loadImage("Chantal_emptyRoom1.png");
  MainScreens.push(chantisRoomImg);

  let chantisFridgePng=loadImage("img/1x/Kuehlschrank.png");
  chantisFridgePng.id = "chantisFridge";
  fridges.push(chantisFridgePng);
  let chantisFrontElements=loadImage("img/1x/Element 2Sofa.png");
  frontElements.push(chantisFrontElements);
  let chantisTV=loadImage("img/1x/Fernseher.png");
  chantisTV.id="chantisTV";
  tvs.push(chantisTV);
  let chantisTür=loadImage("img/1x/Tuer.png");
  doors.push(chantisTür);
  let chantisAloeFenster=loadImage("img/1x/FensterAloe.png");
  windows.push(chantisAloeFenster);
  let chantisPC=loadImage("img/1x/PC.png");
  pcs.push(chantisPC);
  let chantisBett=loadImage("img/1x/Bett.png");
  beds.push(chantisBett);

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
  let Rtl2=loadImage("img/1x/Rtl2.png");
  Rtl2.id="Rtl2";
  let Filme=loadImage("img/1x/Filme.png");
  Filme.id="Filme";
  tvBtn.push(Rtl2,Filme);
  let Essen=loadImage("img/1x/Essen.png");
  Essen.id="Essen";
  fridgeBtn.push(Essen);

}
window.preload=preload;

console.log(fridges);


let Room=new MainScreen(0,0,MainScreens);

let fridge=new Kühlschrank(820,90,fridges,fridgeBtn);
let tv=new TV(560,200,tvs,tvBtn);
let door=new Door(55,97,doors);
let fenster= new Fenster(310,90,windows);
let pc= new PC(1055,198,pcs);
let bed= new Bett(1320,255,beds);

let Sofa= new FrontScreen(425,315,frontElements);
let Chanti=new Charakter(1920*0.4/2,290,chantiStand,chantiWalk,Room.endScreen);
let clock=new Time((1920*0.4)-120,5);


function draw(){
  Room.display();
  fridge.display(Chanti.charakter.x);
  tv.display(Chanti.charakter.x);
  door.display(Chanti.charakter.x);
  fenster.display();
  pc.display();
  bed.display();
  
  Chanti.display();
  Sofa.display();
  clock.display();  

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
}
window.mouseClicked=mouseClicked;

