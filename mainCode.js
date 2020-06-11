//HIER GEHT DIE PARTY AB!!!


// Bilder hier preloaden 
// der Zwischenkommunikationsort aller Klassen
// globale Werte hier definiert
// Auswertung findet entweder hier oder in einer anderen Datei/Klasse statt

import MainScreen from "./MainScreen.js";
import Kühlschrank from "./activities.js";
import Charakter from "./character.js";
import FrontScreen from "./frontScreen.js";
import Time from "./parameters.js";

// globalSatisfaction
// globalExhaustion
// globalMoney
// globalTime
// globalActivityArray=[]



let MainScreens=[];
let fridges=[];
let frontElements=[];

function preload(){
  let chantisRoomImg=loadImage("Chantal_emptyRoom1.png");
  MainScreens.push(chantisRoomImg);
  let chantisFridgePng=loadImage("img/Chantal/pngs/Kühlschrank.png");
  fridges.push(chantisFridgePng);
  let chantisFrontElements=loadImage("img/Chantal/pngs/Sofa.png");
  frontElements.push(chantisFrontElements);
}
window.preload=preload;




let Room=new MainScreen(0,0,MainScreens);

let fridge=new Kühlschrank(790,150,fridges);
let Sofa= new FrontScreen(438,320,frontElements);
let rect=new Charakter(1920*0.4/2,300,Room.endScreen);
let clock=new Time((1920*0.4)-120,5);



function draw(){
    
  Room.display();
  fridge.display();
  rect.display();
  Sofa.display();
  clock.display();  

  Room.move(rect.charakter);
  rect.move();
  Sofa.move(Room.screenMoving);
  fridge.move(Room.screenMoving); 
    
}
window.draw=draw;

