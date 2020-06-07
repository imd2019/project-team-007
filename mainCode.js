//HIER GEHT DIE PARTY AB!!!


// Bilder hier preloaden 
// der Zwischenkommunikationsort aller Klassen
// globale Werte hier definiert
// Auswertung findet entweder hier oder in einer anderen Datei/Klasse statt

import Screen from "./screens.js";
import Kühlschrank from "./activities.js";

// globalSatisfaction
// globalExhaustion
// globalMoney
// globalTime
// globalActivityArray=[]

let screens=[];
let fridges=[];

function preload(){
  let chantisRoomImg=loadImage("Chantal_emptyRoom1.png");
  screens.push(chantisRoomImg);
  let chantisFridgeSvg=loadImage("img/Chantal/pngs/Kühlschrank.png");
  fridges.push(chantisFridgeSvg);

}
window.preload=preload;

let Room=new Screen(0,0,screens);
let fridge=new Kühlschrank(2025,260,fridges);

// var chantisRoom=loadImage("Chantal_emptyRoom2.png");

function draw(){
    Room.display();
    fridge.display();
    // Room.move();
}
window.draw=draw;

