//HIER GEHT DIE PARTY AB!!!


// Bilder hier preloaden 
// der Zwischenkommunikationsort aller Klassen
// globale Werte hier definiert
// Auswertung findet entweder hier oder in einer anderen Datei/Klasse statt

import Screen from "./screens.js";
import Kühlschrank from "./activities.js";
import Charakter from "./character.js";

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
  let chantisFridgePng=loadImage("img/Chantal/pngs/Kühlschrank.png");
  fridges.push(chantisFridgePng);

}
window.preload=preload;


let fridge=new Kühlschrank(910,260,fridges);

let Room=new Screen(0,0,screens);
let rect=new Charakter((windowWidth*0.6)/2,300,Room.endScreen);


function draw(){
    Room.display();
    // fridge.display();
    
    rect.display();
    rect.move();
    Room.move(rect.charakter);
    // fridge.move(rect.charakter);
}
window.draw=draw;

