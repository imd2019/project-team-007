export default class MainScreen {
  constructor(rooms) {
    this.x = 0;
    this.y = 0;
    this.rooms = rooms;
    this.roomId = "Room";

    this.screenMoving = { Right: false, Left: false };
    this.endScreen = { Right: false, Left: false };

    this.speed = 5;
  }

  display() {
   // console.log("positionxRaum", this.x);
    let room = this.rooms.find((x) => x.id === this.roomId);
    image(room, this.x, this.y, room.width * 0.4, room.height * 0.4);
  }

  checkMoving(charakter) {
    if (this.x <= -4104 * 0.4 - this.x || charakter.x < (1920 * 0.4) / 2) {
      this.endScreen.Right = true;
      this.screenMoving.Right = false;
    } else {
      this.endScreen.Right = false;
    }
    if (this.x >= 0 || charakter.x > (1920 * 0.4) / 2) {
      this.endScreen.Left = true;
      this.screenMoving.Left = false;
    } else {
      this.endScreen.Left = false;
    }
  }

  move(charakter, pcX, pcWidth) {
    this.checkMoving(charakter);
    // console.log("screenmoving: ",this.screenMoving);
    // console.log("charakter.x ",charakter.x);
    // console.log("pcX+width/2 ",pcX+pcWidth/2);
    if (
      keyIsDown(LEFT_ARROW) &&
      !window.activityAnimation &&
      window.globalTime.start &&
      !window.forcedToPc.ToRight &&
      !window.forcedToPc.ToLeft
    ) {
      if (this.endScreen.Left == false) {
        this.screenMoving.Left = true;
        this.x += this.speed;
      }
    } else if (window.forcedToDoor) {
      if (this.endScreen.Left == false) {
        this.screenMoving.Left = true;
        this.x += this.speed;
      }
    } else if (window.forcedToPc.ToLeft && charakter.x >= pcX + pcWidth / 2) {
      if (this.endScreen.Left == false) {
        this.screenMoving.Left = true;
        this.x += this.speed;
      }
    } else {
      this.screenMoving.Left = false;
    }
    if (
      keyIsDown(RIGHT_ARROW) &&
      !window.activityAnimation &&
      !window.forcedToDoor &&
      !window.forcedToPc.ToRight &&
      !window.forcedToPc.ToLeft
    ) {
      if (this.endScreen.Right == false) {
        this.screenMoving.Right = true;
        this.x -= this.speed;
      }
    } else if (!window.globalTime.start) {
      if (this.endScreen.Right == false) {
        this.screenMoving.Right = true;
        this.x -= this.speed;
      }
    } else if (window.forcedToPc.ToRight && charakter.x <= pcX + pcWidth / 2) {
      if (this.endScreen.Right == false) {
        this.screenMoving.Right = true;
        this.x -= this.speed;
      }
    } else {
      this.screenMoving.Right = false;
    }
  }
}
