//HIER GEHT DIE PARTY AB!!!

// Bilder hier preloaden
// der Zwischenkommunikationsort aller Klassen
// globale Werte hier definiert
// Auswertung findet entweder hier oder in einer anderen Datei/Klasse statt

import Screen from "./screens.js";
import Kühlschrank from "./activities.js";
import Charakter from "./character.js";
import FrontScreen from "./frontScreen.js";
import Time from "./parameters.js";
import Startscreens from "./startscreen.js";

// globalSatisfaction
// globalExhaustion
// globalMoney
// globalTime
// globalActivityArray=[]

let start = false;

let MainScreens = [];
let fridges = [];
let frontElements = [];
let startscreenpic = loadImage("img/Startscreen/startscreen.png");
let infoscreenpic = loadImage("img/Startscreen/infoscreen.png");
let chosescreenpic = loadImage("img/Startscreen/chosescreen.png");
let newsscreenpic = loadImage("img/Startscreen/newsscreen.png");
let screens = [];
let fridges = [];

function preload() {
  let chantisRoomImg = loadImage("Chantal_emptyRoom1.png");
  MainScreens.push(chantisRoomImg);
  let chantisFridgePng = loadImage("img/Chantal/pngs/Kühlschrank.png");
  fridges.push(chantisFridgePng);
  let chantisFrontElements = loadImage("img/Chantal/pngs/Sofa.png");
  frontElements.push(chantisFrontElements);
}
window.preload = preload;

let Room = new MainScreen(0, 0, MainScreens);
let fridge = new Kühlschrank(790, 150, fridges);
let Sofa = new FrontScreen(438, 320, frontElements);
let rect = new Charakter((1920 * 0.4) / 2, 300, Room.endScreen);
let clock = new Time(1920 * 0.4 - 120, 5);
let startscreen = new Startscreens(
  0,
  0,
  startscreenpic,
  infoscreenpic,
  chosescreenpic,
  newsscreenpic
);

function mouseClicked() {
  startscreen.mouseClicked();
}
window.mouseClicked = mouseClicked;

function draw() {
  clear();
  if (start === false) {
    startscreen.display();
    if (startscreen.mainstart === true) {
      start = true;
    }
  }
  if (start === true) {
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
}
window.draw = draw;
