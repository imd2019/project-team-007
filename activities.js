import InteractiveObject from "./interactiveObject.js";

export class Kühlschrank extends InteractiveObject {
    constructor(x,y,fridges){
        super(x,y);
        this.x=x;
        this.y=y;
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
        image(this.fridges[0],this.x,this.y,this.fridges[0].width*0.4,this.fridges[0].height*0.4);
        console.log("fridge: " + this.x);
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

export class TV extends InteractiveObject{
    constructor(x,y,tvs){
        super(x,y);
        this.x=x;
        this.y=y;

        this.tvs=tvs;
    }

    display(){
        image(this.tvs[0],this.x,this.y,this.tvs[0].width*0.4,this.tvs[0].height*0.4);
    }
}

export class Door extends InteractiveObject{
    constructor(x,y,doors){
        super(x,y);
        this.x=x;
        this.y=y;

        this.doors=doors;
    }

    display(){
        image(this.doors[0],this.x,this.y,this.doors[0].width*0.4,this.doors[0].height*0.4);
    }
}

export class Fenster extends InteractiveObject{
    constructor(x,y,windows){
        super(x,y);
        this.x=x;
        this.y=y;

        this.windows=windows;
    }

    display(){
        image(this.windows[0],this.x,this.y,this.windows[0].width*0.4,this.windows[0].height*0.4);
    }
}

export class PC extends InteractiveObject{
    constructor(x,y,pcs){
        super(x,y);
        this.x=x;
        this.y=y;

        this.pcs=pcs;
    }

    display(){
        image(this.pcs[0],this.x,this.y,this.pcs[0].width*0.42,this.pcs[0].height*0.42);
    }
}

export class Bett extends InteractiveObject{
    constructor(x,y,beds){
        super(x,y);
        this.x=x;
        this.y=y;

        this.beds=beds;
    }

    display(){
        image(this.beds[0],this.x,this.y,this.beds[0].width*0.4,this.beds[0].height*0.4);
    }
}