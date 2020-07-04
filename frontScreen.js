import InteractiveObject from "./interactiveObject.js";

export default class FrontScreen extends InteractiveObject {
  constructor(frontRoom, tvBtnAInteraction, tvBtnBInteraction,thinkBubbles) {
    super();
    if (window.charakterId == "Chantal") {
      this.x = 425;
      this.y = 310;
    }
    if (window.charakterId == "Lena") {
      this.x = 960;
      this.y = 310;
    }
    this.frontRoom = frontRoom;

    this.tvBtnAInteraction = tvBtnAInteraction;
    this.tvBtnBInteraction = tvBtnBInteraction;
    this.thinkBubbles=thinkBubbles;

    this.objectScale = 0.5;
    this.animationScale;

    this.speed = 5;
  }

  display(tvInteractionA, tvInteractionB) {
    if (window.charakterId === "Lena") {
     this.seatA(tvInteractionA);
     this.seatB(tvInteractionB);
    }
    else if (window.charakterId === "Chantal") {
      let frontElement = this.frontRoom.find((x) => x.id === "FrontElement");
      image(
        frontElement,
        this.x,
        this.y,
        frontElement.width * this.objectScale,
        frontElement.height * this.objectScale
      );
    }
  }

  move(screenMoving) {
    if (screenMoving.Right == true) {
      this.x -= this.speed;
    }

    if (screenMoving.Left == true) {
      this.x += this.speed;
    }
  }

  seatA(tvInteractionA){
    if (tvInteractionA) {
      this.updateInteraction("TvBtnA");
      this.updateAnimationPosition(125, 25);
      this.animationScale = 0.5;
      this.activityAnimation(this.tvBtnAInteraction, 90, 1);
      this.thinkBubble("tvBtnAThought",this.thinkBubbles,30,-250);
    } else {
      let frontElementA = this.frontRoom.find(
        (x) => x.id === "FrontElementA"
      );
      image(
        frontElementA,
        this.x,
        this.y,
        frontElementA.width * this.objectScale,
        frontElementA.height * this.objectScale
      );
    }
  }

  seatB(tvInteractionB){
    if (tvInteractionB) {
      this.updateInteraction("TvBtnB");
      this.updateAnimationPosition(315, 30);
      this.animationScale = 0.5;
      console.log(this.interactX);
      this.activityAnimation(this.tvBtnBInteraction, 90, 1);
    } else {
      let frontElementB = this.frontRoom.find(
        (x) => x.id === "FrontElementB"
      );
      image(
        frontElementB,
        this.x + 230,
        this.y,
        frontElementB.width * (this.objectScale + 0.02),
        frontElementB.height * (this.objectScale + 0.02)
      );
    }

  }
}

