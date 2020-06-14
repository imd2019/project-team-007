// Frage ist ob das Sinn macht

// class Satisfaction{
//     constructor(){
//     }
// }

export default class Time {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.hour = 8;
    this.minute = 0;
    this.dayStart = true;

    if (this.dayStart == true) {
      var minutes = setInterval(() => {
        this.minute = (this.minute + 30) % 60;
      }, 500);

      var hours = setInterval(() => {
        this.hour++;
        if (this.hour == 24) {
          this.hour = 0;
        }
        if (this.hour == 2) {
          clearInterval(minutes);
          clearInterval(hours);
          this.dayStart = false;
        }
      }, 1000);
    }
  }

  display() {
    fill("lightgrey");
    rect(this.x, this.y, 100, 36, 10);
    fill("black");
    textSize(25);
    text(
      nf(this.hour, 2) + " : " + nf(this.minute, 2),
      this.x + 12,
      this.y + 7,
      100,
      50
    );
    // console.log(this.hour);
    // console.log(this.dayStart);
  }
}
