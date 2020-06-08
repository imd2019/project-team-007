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




let Room=new Screen(0,0,screens);
let fridge=new Kühlschrank(790,150,fridges);
let rect=new Charakter(1920*0.4/2,300,Room.endScreen);


function draw(){
    Room.display();
    fridge.display();
    
    rect.display();
    rect.move();
    Room.move(rect.charakter);
    fridge.move(Room.screenMoving);
}
window.draw=draw;

