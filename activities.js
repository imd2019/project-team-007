import InteractiveObject from "./interactiveObject.js";

export default class Kühlschrank extends InteractiveObject{
    constructor(x,y,fridges){
        super(x,y);
        // this.charakterId=charakterId;
        // this.charakterX=charakterX;
        // this.day=day;
        // this.ration=3;
        // this.use=0;
        this.fridges=fridges;


        // if (this.charakterId["Name"]){
        //     this.btnAx = this.x + "Wert";
        //     this.btnAy = this.y + "Wert";
        //     this.btnBx = this.x + "Wert";
        //     this.btnBy = this.y + "Wert";
        //     this.satisfaction="Wert";
        //     this.money="-Wert";
        //     this.exhaustion="-Wert";
        //     this.timeA=timeA;
        // }
        
        // this.messageA="Essen";
        // this.messageB="Nachfüllen";// i know it doesnt exist, Kühlschrank war ein madiges Beispiel für eine activity
    }

    display(){
        image(this.fridges[0],this.x,this.y,this.fridges[0].width*0.2,this.fridges[0].height*0.2);
        // if(this.charakterId["Name"]){
        //     img(fridge["Name"]);
        //     if(this.hoverTest(this.charakterX)){
        //         this.showButtons();
        //     }
        // }
    }

    // clickedA(){
    //     this.ration--;
    //     this.use++;
    //     if (this.use >= 4){
    //         this.satisfaction = "-Wert";
    //         this.exhaustion = "Wert";
    //     }
    //     //global Werte noch zur Diskussion
    //     globalSatisfaction += this.satisfaction;
    //     globalExhaustion +=this.exhaustion;  
    //     globalTime +=this.timeA;
    //     globalActivityArray.push(this.satisfaction[0],this.exhaustion[1]); 
    // }
    
    // // Clicked umschreiben, moneyflow ist anpassbar
    // clickedB(){
    //     this.ration=3;
    //     if(this.day>=4){
    //         this.money="Wert";
    //     }
    //     globalMoney += this.money;
    //     globalActivityArray.push(this.money);
    // }
}
