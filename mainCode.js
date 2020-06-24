//HIER GEHT DIE PARTY AB!!!

// Hässlon preload-function ist hier
// der Zwischenkommunikationsort aller Klassen
// globale Werte hier definiert

import MainScreen from "./MainScreen.js";
import FrontScreen from "./frontScreen.js";
import Nachrichten from "./nachrichten.js";
import Charakter from "./character.js";
import { Kühlschrank } from "./activities.js";
import Time from "./parameters.js";
import { TV } from "./activities.js";
import { Door } from "./activities.js";
import { Fenster } from "./activities.js";
import { PC } from "./activities.js";
import { Bett } from "./activities.js";


//<------les variablos globalos------>
let globalSatisfaction = 20;
let globalExhaustion = 30;
let globalMoney = 100;

window.globalSatisfaction = globalSatisfaction;
window.globalExhaustion = globalExhaustion;
window.globalMoney = globalMoney;

let globalTime = {
  day: 1,
  start: true,
  hour: 1,
  minute: 0,
  news: false,
  sleepAnimation: false
};
window.globalTime = globalTime;

let globalActivityArray = { day1: [], day2: [], day3: [], day4: [], day5: [] };

window.globalActivityArray = globalActivityArray;

let activityAnimation = false;
window.activityAnimation = activityAnimation;

let charakterId = "Chantal"; //Chantal oder Lena
window.charakterId = charakterId;

let bgeMode = "noBGE"; //noBGE or withBGE
window.bgeMode = bgeMode;

//<--------------->

let mainScreens = [];
let frontElements = [];

let fridges = [];
let fridgeInteraction = [];

let tvs = [];
let tvBtnAInteraction = [];
let tvBtnBInteraction = [];

let doors = [];
let doorInteraction=[];

let windows = [];
let windowInteraction=[];

let pcs = [];
let pcBtnAInteraction = [];
let pcBtnBInteraction = [];

let beds = [];
let bedInteraction = [];

let stand = [];
let walk = [];

let buttons = [];

let nachrichten = [];

function preload() {
  // in den ids wird chanti rausgeschmissen damit man für lena nur image-Pfade ändern muss und nicht nochmal alle ids
  // charakter.id wird ne variable in den img-Pfaden

  // <----Room ---->
  let Room = loadImage("img/" + charakterId + "/Objects/background.png");
  Room.id = "Room";
  mainScreens.push(Room);

  let FrontElement = loadImage(
    "img/" + charakterId + "/Objects/frontElement.png"
  );
  FrontElement.id = "FrontElement";
  frontElements.push(FrontElement);

  let Fridge = loadImage("img/" + charakterId + "/Objects/fridge.png");
  Fridge.id = "Fridge";
  fridges.push(Fridge);

  let TV = loadImage("img/" + charakterId + "/Objects/tv.png");
  TV.id = "TV";
  tvs.push(TV);

  let Door = loadImage("img/" + charakterId + "/Objects/door.png");
  Door.id = "Tür";
  doors.push(Door);

  let Fenster = loadImage("img/" + charakterId + "/Objects/windowActive.png");
  Fenster.id = "Fenster";
  windows.push(Fenster);

  let PC = loadImage("img/" + charakterId + "/Objects/table.png");
  PC.id = "Tisch";
  let Chair = loadImage("img/" + charakterId + "/Objects/chair.png");
  Chair.id = "Stuhl";
  pcs.push(PC, Chair);

  let Bett = loadImage("img/" + charakterId + "/Objects/bed.png");
  Bett.id = "Bett";
  beds.push(Bett);

  // <-----Stand & Walk----->
  let lowestStand = loadImage(
    "img/" + charakterId + "/Poses/stand/5_lowest/lowest.png"
  );
  lowestStand.id = "LowestStand";
  let lowestWalk1 = loadImage(
    "img/" + charakterId + "/Poses/walk/5_lowest/walk1.png"
  );
  let lowestWalk2 = loadImage(
    "img/" + charakterId + "/Poses/walk/5_lowest/walk2.png"
  );
  let lowestWalk3 = loadImage(
    "img/" + charakterId + "/Poses/walk/5_lowest/walk3.png"
  );
  let lowestWalk = [];
  lowestWalk.id = "LowestWalk";
  lowestWalk.push(lowestWalk1, lowestWalk2, lowestWalk3, lowestWalk2);

  let lowStand = loadImage("img/" + charakterId + "/Poses/stand/4_low/low.png");
  lowStand.id = "LowStand";
  let lowWalk1 = loadImage(
    "img/" + charakterId + "/Poses/walk/4_low/walk1.png"
  );
  let lowWalk2 = loadImage(
    "img/" + charakterId + "/Poses/walk/4_low/walk2.png"
  );
  let lowWalk3 = loadImage(
    "img/" + charakterId + "/Poses/walk/4_low/walk3.png"
  );
  let lowWalk = [];
  lowWalk.id = "LowWalk";
  lowWalk.push(lowWalk1, lowWalk2, lowWalk3, lowWalk2);

  let middleStand = loadImage(
    "img/" + charakterId + "/Poses/stand/3_middle/middle.png"
  );
  middleStand.id = "MiddleStand";
  let middleWalk1 = loadImage(
    "img/" + charakterId + "/Poses/walk/3_middle/walk1.png"
  );
  let middleWalk2 = loadImage(
    "img/" + charakterId + "/Poses/walk/3_middle/walk2.png"
  );
  let middleWalk3 = loadImage(
    "img/" + charakterId + "/Poses/walk/3_middle/walk3.png"
  );
  let middleWalk = [];
  middleWalk.id = "MiddleWalk";
  middleWalk.push(middleWalk1, middleWalk2, middleWalk3, middleWalk2);

  let highStand = loadImage(
    "img/" + charakterId + "/Poses/stand/2_high/high.png"
  );
  highStand.id = "HighStand";
  let highWalk1 = loadImage(
    "img/" + charakterId + "/Poses/walk/2_high/walk1.png"
  );
  let highWalk2 = loadImage(
    "img/" + charakterId + "/Poses/walk/2_high/walk2.png"
  );
  let highWalk3 = loadImage(
    "img/" + charakterId + "/Poses/walk/2_high/walk3.png"
  );
  let highWalk = [];
  highWalk.id = "HighWalk";
  highWalk.push(highWalk1, highWalk2, highWalk3, highWalk2);

  let victoryStand = loadImage(
    "img/" + charakterId + "/Poses/stand/1_victory/victory.png"
  );
  victoryStand.id = "VictoryStand";
  let victoryWalk1 = loadImage(
    "img/" + charakterId + "/Poses/walk/1_victory/walk1.png"
  );
  let victoryWalk2 = loadImage(
    "img/" + charakterId + "/Poses/walk/1_victory/walk2.png"
  );
  let victoryWalk3 = loadImage(
    "img/" + charakterId + "/Poses/walk/1_victory/walk3.png"
  );
  let victoryWalk = [];
  victoryWalk.id = "VictoryWalk";
  victoryWalk.push(victoryWalk1, victoryWalk2, victoryWalk3, victoryWalk2);

  stand.push(lowestStand, lowStand, middleStand, highStand, victoryStand);
  walk.push(lowestWalk, lowWalk, middleWalk, highWalk, victoryWalk);

  //<-----Global Buttons----->
  let Essen = loadImage("img/globals/buttons/fridge.png");
  Essen.id = "Essen";
  let Window = loadImage("img/globals/buttons/window.png");
  Window.id = "Fenster";
  let Schlafen = loadImage("img/globals/buttons/sleep.png");
  Schlafen.id = "Schlafen";
  let PowerNap = loadImage("img/globals/buttons/powerNap.png");
  PowerNap.id = "PowerNap";

  //<-----Chanti Buttons----->
  let tvBtnA = loadImage("img/Chantal/Buttons/TV_1.png");
  tvBtnA.id = "Rtl2";
  let tvBtnB = loadImage("img/Chantal/Buttons/TV_2.png");
  tvBtnB.id = "Filme";
  let pcBtnA = loadImage("img/Chantal/Buttons/PC_1.png");
  pcBtnA.id = "Bewerben";
  let pcBtnB = loadImage("img/Chantal/Buttons/PC_2.png");
  pcBtnB.id = "SocialMedia";
  let doorBtnA = loadImage("img/Chantal/Buttons/Tür_1.png");
  doorBtnA.id = "Freunde";
  let doorBtnB = loadImage("img/Chantal/Buttons/Tür_2.png");
  doorBtnB.id = "Arbeitsamt";
  buttons.push(
    tvBtnA,
    tvBtnB,
    Essen,
    Window,
    Schlafen,
    PowerNap,
    pcBtnA,
    pcBtnB,
    doorBtnA,
    doorBtnB
  );

  //<---------Nachrichten(ohne BGE)-------->
  let day1_1 = loadImage(
    "img/globals/news/" + bgeMode + "/newsscreen-day1-1.png"
  );
  day1_1.id = "day1_1";
  let day1_2 = loadImage(
    "img/globals/news/" + bgeMode + "/newsscreen-day1-2.png"
  );
  day1_2.id = "day1_2";
  let day2_1 = loadImage(
    "img/globals/news/" + bgeMode + "/newsscreen-day2-1.png"
  );
  day2_1.id = "day2_1";
  let day2_2 = loadImage(
    "img/globals/news/" + bgeMode + "/newsscreen-day2-2.png"
  );
  day2_2.id = "day2_2";
  let day3_1 = loadImage(
    "img/globals/news/" + bgeMode + "/newsscreen-day3-1.png"
  );
  day3_1.id = "day3_1";
  let day3_2 = loadImage(
    "img/globals/news/" + bgeMode + "/newsscreen-day3-2.png"
  );
  day3_2.id = "day3_2";
  let day4_1 = loadImage(
    "img/globals/news/" + bgeMode + "/newsscreen-day4-1.png"
  );
  day4_1.id = "day4_1";
  let day4_2 = loadImage(
    "img/globals/news/" + bgeMode + "/newsscreen-day4-2.png"
  );
  day4_2.id = "day4_2";
  let day5_1 = loadImage(
    "img/globals/news/" + bgeMode + "/newsscreen-day5-1.png"
  );
  day5_1.id = "day5_1";
  let day5_2 = loadImage(
    "img/globals/news/" + bgeMode + "/newsscreen-day5-2.png"
  );
  day5_2.id = "day5_2";
  nachrichten.push(
    day2_1,
    day2_2,
    day3_1,
    day3_2,
    day4_1,
    day4_2,
    day5_1,
    day5_2
  );

  //<-------Activity Animation ----->

  //<------Fridge Animation-------->
  let fridgeInteractionLowest1 = loadImage(
    "img/" + charakterId + "/Poses/interact/5_lowest/fridge/eat1.png"
  );
  let fridgeInteractionLowest2 = loadImage(
    "img/" + charakterId + "/Poses/interact/5_lowest/fridge/eat2.png"
  );
  let fridgeInteractionLowest3 = loadImage(
    "img/" + charakterId + "/Poses/interact/5_lowest/fridge/eat3.png"
  );
  let fridgeInteractionLowest4 = loadImage(
    "img/" + charakterId + "/Poses/interact/5_lowest/fridge/eat4.png"
  );
  let fridgeInteractionLowest5 = loadImage(
    "img/Lena/Poses/interact/5_lowest/fridge/drink1.png"
  );
  let fridgeInteractionLowest6 = loadImage(
    "img/Lena/Poses/interact/5_lowest/fridge/drink2.png"
  );
  let fridgeInteractionLowest = [];
  fridgeInteractionLowest.id = "FridgeInteractionLowest";
  if (charakterId == "Chantal") {
    fridgeInteractionLowest.push(
      fridgeInteractionLowest1,
      fridgeInteractionLowest2,
      fridgeInteractionLowest3,
      fridgeInteractionLowest2,
      fridgeInteractionLowest4,
      fridgeInteractionLowest2
    );
  }
  if (charakterId == "Lena") {
    fridgeInteractionLowest.push(
      fridgeInteractionLowest1,
      fridgeInteractionLowest2,
      fridgeInteractionLowest3,
      fridgeInteractionLowest2,
      fridgeInteractionLowest4,
      fridgeInteractionLowest2,
      fridgeInteractionLowest1,
      fridgeInteractionLowest5,
      fridgeInteractionLowest6
    );
  }

  let fridgeInteractionLow1 = loadImage(
    "img/" + charakterId + "/Poses/interact/4_low/fridge/eat1.png"
  );
  let fridgeInteractionLow2 = loadImage(
    "img/" + charakterId + "/Poses/interact/4_low/fridge/eat2.png"
  );
  let fridgeInteractionLow3 = loadImage(
    "img/" + charakterId + "/Poses/interact/4_low/fridge/eat3.png"
  );
  let fridgeInteractionLow4 = loadImage(
    "img/" + charakterId + "/Poses/interact/4_low/fridge/eat4.png"
  );
  let fridgeInteractionLow5 = loadImage(
    "img/Lena/Poses/interact/4_low/fridge/drink1.png"
  );
  let fridgeInteractionLow6 = loadImage(
    "img/Lena/Poses/interact/4_low/fridge/drink2.png"
  );
  let fridgeInteractionLow = [];
  fridgeInteractionLow.id = "FridgeInteractionLow";
  if (charakterId == "Chantal") {
    fridgeInteractionLow.push(
      fridgeInteractionLow1,
      fridgeInteractionLow2,
      fridgeInteractionLow3,
      fridgeInteractionLow2,
      fridgeInteractionLow4,
      fridgeInteractionLow2
    );
  }
  if (charakterId == "Lena") {
    fridgeInteractionLow.push(
      fridgeInteractionLow1,
      fridgeInteractionLow2,
      fridgeInteractionLow3,
      fridgeInteractionLow2,
      fridgeInteractionLow4,
      fridgeInteractionLow2,
      fridgeInteractionLow1,
      fridgeInteractionLow5,
      fridgeInteractionLow6
    );
  }

  let fridgeInteractionMiddle1 = loadImage(
    "img/" + charakterId + "/Poses/interact/3_middle/fridge/eat1.png"
  );
  let fridgeInteractionMiddle2 = loadImage(
    "img/" + charakterId + "/Poses/interact/3_middle/fridge/eat2.png"
  );
  let fridgeInteractionMiddle3 = loadImage(
    "img/" + charakterId + "/Poses/interact/3_middle/fridge/eat3.png"
  );
  let fridgeInteractionMiddle4 = loadImage(
    "img/" + charakterId + "/Poses/interact/3_middle/fridge/eat4.png"
  );
  let fridgeInteractionMiddle5 = loadImage(
    "img/Lena/Poses/interact/3_middle/fridge/drink1.png"
  );
  let fridgeInteractionMiddle6 = loadImage(
    "img/Lena/Poses/interact/3_middle/fridge/drink2.png"
  );
  let fridgeInteractionMiddle = [];
  fridgeInteractionMiddle.id = "FridgeInteractionMiddle";
  if (charakterId == "Chantal") {
    fridgeInteractionMiddle.push(
      fridgeInteractionMiddle1,
      fridgeInteractionMiddle2,
      fridgeInteractionMiddle3,
      fridgeInteractionMiddle2,
      fridgeInteractionMiddle4,
      fridgeInteractionMiddle2
    );
  }
  if (charakterId == "Lena") {
    fridgeInteractionMiddle.push(
      fridgeInteractionMiddle1,
      fridgeInteractionMiddle2,
      fridgeInteractionMiddle3,
      fridgeInteractionMiddle2,
      fridgeInteractionMiddle4,
      fridgeInteractionMiddle2,
      fridgeInteractionMiddle1,
      fridgeInteractionMiddle5,
      fridgeInteractionMiddle6
    );
  }

  let fridgeInteractionHigh1 = loadImage(
    "img/" + charakterId + "/Poses/interact/2_high/fridge/eat1.png"
  );
  let fridgeInteractionHigh2 = loadImage(
    "img/" + charakterId + "/Poses/interact/2_high/fridge/eat2.png"
  );
  let fridgeInteractionHigh3 = loadImage(
    "img/" + charakterId + "/Poses/interact/2_high/fridge/eat3.png"
  );
  let fridgeInteractionHigh4 = loadImage(
    "img/" + charakterId + "/Poses/interact/2_high/fridge/eat4.png"
  );
  let fridgeInteractionHigh5 = loadImage(
    "img/Lena/Poses/interact/2_high/fridge/drink1.png"
  );
  let fridgeInteractionHigh6 = loadImage(
    "img/Lena/Poses/interact/2_high/fridge/drink2.png"
  );
  let fridgeInteractionHigh = [];
  fridgeInteractionHigh.id = "FridgeInteractionHigh";
  if (charakterId == "Chantal") {
    fridgeInteractionHigh.push(
      fridgeInteractionHigh1,
      fridgeInteractionHigh2,
      fridgeInteractionHigh3,
      fridgeInteractionHigh2,
      fridgeInteractionHigh4,
      fridgeInteractionHigh2
    );
  }
  if (charakterId == "Lena") {
    fridgeInteractionHigh.push(
      fridgeInteractionHigh1,
      fridgeInteractionHigh2,
      fridgeInteractionHigh3,
      fridgeInteractionHigh2,
      fridgeInteractionHigh4,
      fridgeInteractionHigh2,
      fridgeInteractionHigh1,
      fridgeInteractionHigh5,
      fridgeInteractionHigh6
    );
  }

  let fridgeInteractionVictory1 = loadImage(
    "img/" + charakterId + "/Poses/interact/1_victory/fridge/eat1.png"
  );
  let fridgeInteractionVictory2 = loadImage(
    "img/" + charakterId + "/Poses/interact/1_victory/fridge/eat2.png"
  );
  let fridgeInteractionVictory3 = loadImage(
    "img/" + charakterId + "/Poses/interact/1_victory/fridge/eat3.png"
  );
  let fridgeInteractionVictory4 = loadImage(
    "img/" + charakterId + "/Poses/interact/1_victory/fridge/eat4.png"
  );
  let fridgeInteractionVictory5 = loadImage(
    "img/Lena/Poses/interact/1_victory/fridge/drink1.png"
  );
  let fridgeInteractionVictory6 = loadImage(
    "img/Lena/Poses/interact/1_victory/fridge/drink2.png"
  );
  let fridgeInteractionVictory = [];
  fridgeInteractionVictory.id = "FridgeInteractionVictory";
  if (charakterId == "Chantal") {
    fridgeInteractionVictory.push(
      fridgeInteractionVictory1,
      fridgeInteractionVictory2,
      fridgeInteractionVictory3,
      fridgeInteractionVictory2,
      fridgeInteractionVictory4,
      fridgeInteractionVictory2
    );
  }
  if (charakterId == "Lena") {
    fridgeInteractionVictory.push(
      fridgeInteractionVictory1,
      fridgeInteractionVictory2,
      fridgeInteractionVictory3,
      fridgeInteractionVictory2,
      fridgeInteractionVictory4,
      fridgeInteractionVictory2,
      fridgeInteractionVictory1,
      fridgeInteractionVictory5,
      fridgeInteractionVictory6
    );
  }

  fridgeInteraction.push(
    fridgeInteractionLowest,
    fridgeInteractionLow,
    fridgeInteractionMiddle,
    fridgeInteractionHigh,
    fridgeInteractionVictory
  );

  //<----------Tv-Animation---------->

  let tvBtnAInteractionMiddle1 = loadImage(
    "img/Chantal/Poses/interact/3_middle/tv/rtl1.png"
  );
  let tvBtnAInteractionMiddle2 = loadImage(
    "img/Chantal/Poses/interact/3_middle/tv/rtl2.png"
  );
  let tvBtnAInteractionMiddle = [];
  tvBtnAInteractionMiddle.id = "TvBtnAInteractionMiddle";
  tvBtnAInteractionMiddle.push(
    tvBtnAInteractionMiddle1,
    tvBtnAInteractionMiddle2
  );
  tvBtnAInteraction.push(tvBtnAInteractionMiddle);
  let tvBtnBInteractionMiddle1 = loadImage(
    "img/Chantal/Poses/interact/3_middle/tv/film1.png"
  );
  let tvBtnBInteractionMiddle2 = loadImage(
    "img/Chantal/Poses/interact/3_middle/tv/film2.png"
  );
  let tvBtnBInteractionMiddle3 = loadImage(
    "img/Chantal/Poses/interact/3_middle/tv/film3.png"
  );
  let tvBtnBInteractionMiddle4 = loadImage(
    "img/Chantal/Poses/interact/3_middle/tv/film4.png"
  );
  let tvBtnBInteractionMiddle = [];
  tvBtnBInteractionMiddle.id = "TvBtnBInteractionMiddle";
  tvBtnBInteractionMiddle.push(
    tvBtnBInteractionMiddle1,
    tvBtnBInteractionMiddle2,
    tvBtnBInteractionMiddle1,
    tvBtnBInteractionMiddle2,
    tvBtnBInteractionMiddle3,
    tvBtnBInteractionMiddle4
  );
  tvBtnBInteraction.push(tvBtnBInteractionMiddle);

  //<-----------PC-interaction--------->
  //<----------PcBtnA-------------->
  let pcBtnAInteractionLowest1 = loadImage(
    "img/" + charakterId + "/Poses/interact/5_lowest/pc/pc1.png"
  );
  let pcBtnAInteractionLowest2 = loadImage(
    "img/" + charakterId + "/Poses/interact/5_lowest/pc/pc2.png"
  );
  let pcBtnAInteractionLowest = [];
  pcBtnAInteractionLowest.id = "PcBtnAInteractionLowest";
  pcBtnAInteractionLowest.push(
    pcBtnAInteractionLowest1,
    pcBtnAInteractionLowest2
  );

  let pcBtnAInteractionLow1 = loadImage(
    "img/" + charakterId + "/Poses/interact/4_low/pc/pc1.png"
  );
  let pcBtnAInteractionLow2 = loadImage(
    "img/" + charakterId + "/Poses/interact/4_low/pc/pc2.png"
  );
  let pcBtnAInteractionLow = [];
  pcBtnAInteractionLow.id = "PcBtnAInteractionLow";
  pcBtnAInteractionLow.push(pcBtnAInteractionLow1, pcBtnAInteractionLow2);

  let pcBtnAInteractionMiddle1 = loadImage(
    "img/" + charakterId + "/Poses/interact/3_middle/pc/pc1.png"
  );
  let pcBtnAInteractionMiddle2 = loadImage(
    "img/" + charakterId + "/Poses/interact/3_middle/pc/pc2.png"
  );
  let pcBtnAInteractionMiddle = [];
  pcBtnAInteractionMiddle.id = "PcBtnAInteractionMiddle";
  pcBtnAInteractionMiddle.push(
    pcBtnAInteractionMiddle1,
    pcBtnAInteractionMiddle2
  );

  let pcBtnAInteractionHigh1 = loadImage(
    "img/" + charakterId + "/Poses/interact/2_high/pc/pc1.png"
  );
  let pcBtnAInteractionHigh2 = loadImage(
    "img/" + charakterId + "/Poses/interact/2_high/pc/pc2.png"
  );
  let pcBtnAInteractionHigh = [];
  pcBtnAInteractionHigh.id = "PcBtnAInteractionHigh";
  pcBtnAInteractionHigh.push(pcBtnAInteractionHigh1, pcBtnAInteractionHigh2);

  let pcBtnAInteractionVictory1 = loadImage(
    "img/" + charakterId + "/Poses/interact/1_victory/pc/pc1.png"
  );
  let pcBtnAInteractionVictory2 = loadImage(
    "img/" + charakterId + "/Poses/interact/1_victory/pc/pc2.png"
  );
  let pcBtnAInteractionVictory = [];
  pcBtnAInteractionVictory.id = "PcBtnAInteractionVictory";
  pcBtnAInteractionVictory.push(
    pcBtnAInteractionVictory1,
    pcBtnAInteractionVictory2
  );

  pcBtnAInteraction.push(
    pcBtnAInteractionLowest,
    pcBtnAInteractionLow,
    pcBtnAInteractionMiddle,
    pcBtnAInteractionHigh,
    pcBtnAInteractionVictory
  );

  if (charakterId == "Lena") {
    let pcBtnBInteractionLowest1 = loadImage(
      "img/" + charakterId + "/Poses/interact/5_lowest/pc/learn1.png"
    );
    let pcBtnBInteractionLowest2 = loadImage(
      "img/" + charakterId + "/Poses/interact/5_lowest/pc/learn2.png"
    );
    let pcBtnBInteractionLowest = [];
    pcBtnBInteractionLowest.id = "PcBtnBInteractionLowest";
    pcBtnBInteractionLowest.push(
      pcBtnBInteractionLowest1,
      pcBtnBInteractionLowest2
    );

    let pcBtnBInteractionLow1 = loadImage(
      "img/" + charakterId + "/Poses/interact/4_low/pc/learn1.png"
    );
    let pcBtnBInteractionLow2 = loadImage(
      "img/" + charakterId + "/Poses/interact/4_low/pc/learn2.png"
    );
    let pcBtnBInteractionLow = [];
    pcBtnBInteractionLow.id = "PcBtnBInteractionLow";
    pcBtnBInteractionLow.push(pcBtnBInteractionLow1, pcBtnBInteractionLow2);

    let pcBtnBInteractionMiddle1 = loadImage(
      "img/" + charakterId + "/Poses/interact/3_middle/pc/learn1.png"
    );
    let pcBtnBInteractionMiddle2 = loadImage(
      "img/" + charakterId + "/Poses/interact/3_middle/pc/learn2.png"
    );
    let pcBtnBInteractionMiddle = [];
    pcBtnBInteractionMiddle.id = "PcBtnAInteractionMiddle";
    pcBtnBInteractionMiddle.push(
      pcBtnBInteractionMiddle1,
      pcBtnBInteractionMiddle2
    );

    let pcBtnBInteractionHigh1 = loadImage(
      "img/" + charakterId + "/Poses/interact/2_high/pc/learn1.png"
    );
    let pcBtnBInteractionHigh2 = loadImage(
      "img/" + charakterId + "/Poses/interact/2_high/pc/learn2.png"
    );
    let pcBtnBInteractionHigh = [];
    pcBtnBInteractionHigh.id = "PcBtnBInteractionHigh";
    pcBtnBInteractionHigh.push(pcBtnBInteractionHigh1, pcBtnBInteractionHigh2);

    let pcBtnBInteractionVictory1 = loadImage(
      "img/" + charakterId + "/Poses/interact/1_victory/pc/learn1.png"
    );
    let pcBtnBInteractionVictory2 = loadImage(
      "img/" + charakterId + "/Poses/interact/1_victory/pc/learn2.png"
    );
    let pcBtnBInteractionVictory = [];
    pcBtnBInteractionVictory.id = "PcBtnBInteractionVictory";
    pcBtnBInteractionVictory.push(
      pcBtnBInteractionVictory1,
      pcBtnBInteractionVictory2
    );

    pcBtnBInteraction.push(
      pcBtnBInteractionLowest,
      pcBtnBInteractionLow,
      pcBtnBInteractionMiddle,
      pcBtnBInteractionHigh,
      pcBtnBInteractionVictory
    );
  }

  //<---------Bed Interaction------->
  let bedInteractionVictory1 = loadImage(
    "img/" + charakterId + "/Poses/interact/1_victory/bed/sleep1.png"
  );
  let bedInteractionVictory2 = loadImage(
    "img/" + charakterId + "/Poses/interact/1_victory/bed/sleep2.png"
  );
  let bedInteractionVictory = [];
  bedInteractionVictory.id = "BedInteractionVictory";
  bedInteractionVictory.push(bedInteractionVictory1, bedInteractionVictory2);

  let bedInteractionHigh1 = loadImage(
    "img/" + charakterId + "/Poses/interact/2_high/bed/sleep1.png"
  );
  let bedInteractionHigh2 = loadImage(
    "img/" + charakterId + "/Poses/interact/2_high/bed/sleep2.png"
  );
  let bedInteractionHigh = [];
  bedInteractionHigh.id = "BedInteractionHigh";
  bedInteractionHigh.push(bedInteractionHigh1, bedInteractionHigh2);

  let bedInteractionMiddle = [];
  bedInteractionMiddle.id = "BedInteractionMiddle";
  if (charakterId == "Chantal") {
    bedInteractionMiddle.push(bedInteractionHigh1, bedInteractionHigh2);
  }
  if (charakterId == "Lena") {
    bedInteractionMiddle.push(bedInteractionHigh1, bedInteractionHigh2);
  }

  let bedInteractionLow1 = loadImage(
    "img/Lena/Poses/interact/4_low/bed/sleep1.png"
  );
  let bedInteractionLow2 = loadImage(
    "img/Lena/Poses/interact/4_low/bed/sleep2.png"
  );
  let bedInteractionLow = [];
  bedInteractionLow.id = "BedInteractionLow";
  if (charakterId == "Chantal") {
    bedInteractionLow.push(bedInteractionHigh1, bedInteractionHigh2);
  }
  if (charakterId == "Lena") {
    bedInteractionLow.push(bedInteractionLow1, bedInteractionLow2);
  }

  let bedInteractionLowest1 = loadImage(
    "img/" + charakterId + "/Poses/interact/5_lowest/bed/sleep1.png"
  );
  let bedInteractionLowest2 = loadImage(
    "img/" + charakterId + "/Poses/interact/5_lowest/bed/sleep2.png"
  );
  let bedInteractionLowest = [];
  bedInteractionLowest.id = "BedInteractionLowest";
  bedInteractionLowest.push(bedInteractionLowest1, bedInteractionLowest2);

  bedInteraction.push(
    bedInteractionLowest,
    bedInteractionLow,
    bedInteractionMiddle,
    bedInteractionHigh,
    bedInteractionVictory
  );
}
window.preload = preload;

let Room = new MainScreen(mainScreens);

let fridge = new Kühlschrank(fridges, buttons, fridgeInteraction);
let tv = new TV(tvs, buttons, tvBtnAInteraction, tvBtnBInteraction);
let door = new Door(doors, buttons);
let fenster = new Fenster(windows, buttons);
let pc = new PC(pcs, buttons, pcBtnAInteraction, pcBtnBInteraction);
let bed = new Bett(beds, buttons, bedInteraction);

let frontElement = new FrontScreen(frontElements,tvBtnAInteraction,tvBtnBInteraction);
let Person = new Charakter(stand, walk, Room.endScreen);
let clock = new Time(1920 * 0.4 - 120, 5);

let news = new Nachrichten(nachrichten);


// clock.countTime;


function draw() {
  console.log(window.globalTime.start);
 
  if (!window.globalTime.news) {
    Room.display();
    fridge.display(Person.charakter.x, Person.charakter.y);
    tv.display(Person.charakter.x);
    door.display(Person.charakter.x);
    fenster.display(Person.charakter.x);
    pc.display(Person.charakter.x);
    bed.display(Person.charakter.x);

    if (!window.activityAnimation) {
      Person.display();
    }

    frontElement.display();
    clock.display();

    Room.move(Person.charakter);

    frontElement.move(Room.screenMoving);
    fridge.move(Room.screenMoving);
    tv.move(Room.screenMoving);
    door.move(Room.screenMoving);
    fenster.move(Room.screenMoving);
    pc.move(Room.screenMoving);
    bed.move(Room.screenMoving);
  }
  Person.move(bed.x);
  news.display();
}
window.draw = draw;

 

function mouseClicked() {
  if (!window.activityAnimation && window.globalTime.start) {
    tv.mouseClicked();
    fridge.mouseClicked();
    pc.mouseClicked();
    bed.mouseClicked();
  }
  if (window.globalTime.news) {
    news.mouseClicked();
  }
  console.log("Satisfaction: " + window.globalSatisfaction);
  console.log("Exhaustion:" + window.globalExhaustion);
  console.log("Money: " + window.globalMoney);
}
window.mouseClicked = mouseClicked;
