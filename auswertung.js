// Ergebnisse vordefiniert,if schleifen für Ausgänge, Auswertungsprozess
// Restartbutton im Fazit,FazitScreens,...
// könnte von Screens erben

export default class Finale{
constructor(){
this.x=0;
this.y=0;

this.satisfaction;
this.exhaustion;
this.money;

}

monthCalculate(){
    this.satisfaction=window.globalSatisfaction;
    this.exhaustion = window.globalExhaustion;
    this.money = window.globalMoney;
        for(let i in window.globalActivityArray.day1){
            this.satisfaction=ceil(this.satisfaction * window.globalActivityArray.day1[i][0]); 
            console.log(this.satisfaction);
            if(i > window.globalActivityArray.day1){
                for(let j in window.globalActivityArray.day2){
                    this.satisfaction=ceil(this.satisfaction * window.globalActivityArray.day1[i][0]); 
                    console.log(this.satisfaction);
                }
            }
        }
        // window.globalSatisfaction = this.satisfaction;   
}

auswertung(){
    for(let j = 0; j < 5; j++){
        this.monthCalculate();
    }
    
}

}