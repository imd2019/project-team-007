// Frage ist ob das Sinn macht

// class Satisfaction{
//     constructor(){
//     }
// }

export default class Time {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.opacity = 0;
    
    this.counter=0;

    // this.timeStart;

    //requestAnimationFrame?

    // if (this.dayStart == true) {
    //   var minutes = setInterval(() => {
    //     this.minute = (this.minute + 30) % 60;
    //   }, 5000);

    //   var hours = setInterval(() => {
    //     this.hour++;
    //     if (this.hour == 24) {
    //       this.hour = 0;
    //     }
    //     if (this.hour == 2) {
    //       clearInterval(minutes);
    //       clearInterval(hours);
    //       this.dayStart = false;
    //     }
    //   }, 10000);
    // }
  }

  countTime() {
    if (window.globalTime.start) {
      window.globalTime.sleepAnimation=false;
      this.counter++;
      if (this.counter % (30 * 2.5) == 0) {
        window.globalTime.minute = (window.globalTime.minute + 15) % 60;
      }
      if (this.counter % (30 * 10) == 0) {
        window.globalTime.hour++;
        if (window.globalTime.hour == 24) {
          window.globalTime.hour = 0;
        }
      } else if (window.globalTime.hour == 2) {
        window.globalTime.start = false;
        this.counter=0;
        
      }
    }
  }

  

  // countTime(){
  //   if (this.timeStart === undefined){
  //   this.timeStart = Date.now();
  //   }
  //   let now=Date.now();
  //   let delta=now-this.timeStart;
  //   if(delta>2500){
  //   window.globalTime.minute = (window.globalTime.minute + 15) % 60;
  //   this.timeStart=Date.now(); 
  //   }
  //   if(delta>10000){
  //     window.globalTime.hour++;
  //     this.timeStart=Date.now();
  //   }
  //    window.requestAnimationFrame(this.countTime);
  //   }


  dayEnd() {
    this.opacity += 5;
    fill(0, 0, 0, this.opacity);
    rect(0, 0, 1920, 1080);

    if (this.opacity == 355) {
      clear();
      window.globalTime.news = true;
      window.activityAnimation=false;
      this.opacity = 0;
      window.globalTime.sleepAnimation=false;
      window.globalTime.day++;
      console.log(window.globalTime.day);
    }
  }

  display() {
    fill("lightgrey");
    rect(this.x, this.y, 100, 36, 10);
    fill("black");
    textSize(25);
    this.countTime();
    text(
      nf(window.globalTime.hour, 2) + " : " + nf(window.globalTime.minute, 2),
      this.x + 12,
      this.y + 7,
      100,
      50
    );
    if (window.globalTime.sleepAnimation && window.globalTime.hour == 2) {
      this.dayEnd();
    }

    // console.log(this.hour);
    // console.log(this.dayStart);
  }
}
