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
    this.day=1;
    this.newsTime=false;

    this.opacity=0;
    
    
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

  display() {  
   
    console.log("clock: ",this.dayStart);
    fill("lightgrey");
    rect(this.x, this.y, 100, 36, 10);
    fill("black");
    textSize(25);
    if (this.dayStart==true){
      if(frameCount%(3*5)==0){
        this.minute = (this.minute + 30) % 60;
      }
      if(frameCount%(3*10)==0){
        this.hour++;
        if(this.hour==24){
          this.hour=0;
        }
      }
      else if(this.hour==2){
        this.dayStart=false;
        this.day++;
        console.log(this.day);
      }
    }
    text(
      nf(this.hour, 2) + " : " + nf(this.minute, 2),
      this.x + 12,
      this.y + 7,
      100,
      50
    );
    if(this.dayStart==false){
      this.opacity+=5;
      fill(0,0,0,this.opacity);
      rect(0,0,1920,1080);
      
      if(this.opacity==355){
        this.newsTime=true;
        this.opacity=0;
      }
    }
    // console.log(this.hour);
    // console.log(this.dayStart);
  }
}
