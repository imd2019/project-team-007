export default class Time {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.opacity = 0;

    this.counter = 0;

    this.timeStart = Date.now();

    this.countTime = this.countTime.bind(this);

    this.requestId = 0;
  }

  // countTime() {
  //   if (window.globalTime.start) {
  //     window.globalTime.sleepAnimation=false;
  //     this.counter++;
  //     if (this.counter % (30 * 2.5) == 0) {
  //       window.globalTime.minute = (window.globalTime.minute + 15) % 60;
  //     }
  //     if (this.counter % (30 * 10) == 0) {
  //       window.globalTime.hour++;
  //       if (window.globalTime.hour == 24) {
  //         window.globalTime.hour = 0;
  //       }
  //     } else if (window.globalTime.hour == 2) {
  //       window.globalTime.start = false;
  //       this.counter=0;

  //     }
  //   }
  // }

  countTime() {
    if (window.globalTime.start && !window.forcedToDoor && !window.forcedToPc.ToRight &&!window.forcedToPc.ToLeft) {
      let now = Date.now();
      let delta = now - this.timeStart;
      if (delta >= window.globalTime.Delta) {
        // console.log("delta & expectedDelta: ", delta,window.globalTime.Delta);
        if (window.globalTime.minute == 45) {
          window.globalTime.hour++;
          if (window.globalTime.hour == 2) {
            window.globalTime.start = false;
          }
          if (window.globalTime.hour == 24) {
            window.globalTime.hour = 0;
          }
        }
        window.globalTime.minute = (window.globalTime.minute + 15) % 60;
        this.timeStart = Date.now();
      }
      this.requestId = window.requestAnimationFrame(this.countTime);
    }
  }

  dayEnd() {
    this.opacity += window.darkenScreenRate;
    fill(0, 0, 0, this.opacity);
    rect(0, 0, 1920, 1080);

    if (this.opacity >= 355) {
      clear();
      window.globalTime.news = true;
      window.activityAnimation = false;
      this.opacity = 0;
      window.globalTime.sleepAnimation = false;
      window.globalTime.day++;
      console.log(window.globalTime.day);
    }
  }

  display() {
    fill("lightgrey");
    if(window.charakterId=="Lena"){
    rect(this.x, this.y, 100, 36, 10);
    }
    if(window.charakterId=="Chantal"){
      quad(this.x,this.y+4,this.x+100,this.y-4,this.x+110,this.y+30,this.x-2,this.y+40);
    }
    fill("black");
    textSize(25);
    if (window.activateCounter) {
      this.timeStart = Date.now();
      this.countTime();
      window.activateCounter = false;
    }
    text(
      nf(window.globalTime.hour, 2) + " : " + nf(window.globalTime.minute, 2),
      this.x + 12,
      this.y + 8,
      100,
      50
    );
    if (window.globalTime.sleepAnimation && (window.globalTime.hour == 2 || window.globalTime.hour<2 || window.globalTime.hour>9)) {
      this.dayEnd();
    }
  }
}
