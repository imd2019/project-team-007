// Ergebnisse vordefiniert,if schleifen für Ausgänge, Auswertungsprozess
// Restartbutton im Fazit,FazitScreens,...
// könnte von Screens erben

export default class Finale {
  constructor() {
    this.x = 0;
    this.y = 0;

    this.satisfaction;
    this.exhaustion;
    this.money;
  }

  monthCalculate(day) {
    let dayString="day"+day;
    this.satisfaction = window.globalSatisfaction;
    this.exhaustion = window.globalExhaustion;
    this.money = window.globalMoney;
    for (let i in window.globalActivityArray[dayString]) {
      this.satisfaction = ceil(
        this.satisfaction * window.globalActivityArray[dayString][i][0]
      );
      this.satisfaction=Math.max(0,Math.min(100,this.satisfaction));
      window.globalSatisfaction=this.satisfaction;
    }
  }

  auswertung() {
    for (let j =0;j<26;j++) {
      // console.log("das modulo-etwas: ",1+j%2); 
      this.monthCalculate(1+j%2);
      console.log(this.satisfaction);
    }
  }
}
