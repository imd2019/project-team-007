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
        this.objectScale = 0.4;
       

        // if (this.charakterId["Name"]){
            // this.btnAx = this.x + "Wert";
            // this.btnAy = this.y + "Wert";
            // this.btnBx = this.x + "Wert";
            // this.btnBy = this.y + "Wert";
        //     this.satisfaction="Wert";
        //     this.money="-Wert";
        //     this.exhaustion="-Wert";
        //     this.timeA=timeA;
        // }
        
        // this.messageA="Essen";
        // this.messageB="Nachfüllen";// i know it doesnt exist, Kühlschrank war ein madiges Beispiel für eine activity
    }

    display(x){
        let fridge = this.fridges.find(x => x.id === "chantisFridge");
        this.updateZone(fridge);
        image(fridge,this.x,this.y,this.imgWidth,this.imgHeight); 
        if(this.hoverTest(x)){
            console.log("lolololo");
            fill("white");
            rect(this.x,this.y,100,40,10);
            fill("black");
            textSize(15);
            text("what about fries u fatty?",this.x,this.y,100);
        }
        
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
    constructor(x,y,tvs,tvBtn){
        super(x,y);
        this.x=x;
        this.y=y;

        this.tvs=tvs;
        this.objectScale=0.4;

        this.tvBtn=tvBtn;
        this.btnScale=0.4;
    }
    
    showButtons(btnAId,btnBId){
        this.btnA = this.tvBtn.find(x => x.id === btnAId);
         if (this.hitTest(mouseX,mouseY,this.btnAx,this.btnAy,this.btnA)){
            push();
            angleMode(DEGREES);
            imageMode(CENTER);
            translate(this.btnAx+(this.btnA.width*this.btnScale)/2,this.btnAy+(this.btnA.height*this.btnScale)/2);
            rotate(18);
            image(this.btnA,0,0,this.btnA.width*this.btnScale,this.btnA.height*this.btnScale);
            pop();   
        }
        else{
            image(this.btnA,this.btnAx,this.btnAy,this.btnA.width*this.btnScale,this.btnA.height*this.btnScale);
        } 
        
        this.btnB =this.tvBtn.find(x => x.id === btnBId);
        if (this.hitTest(mouseX,mouseY,this.btnBx,this.btnBy,this.btnB)){
            push();
            angleMode(DEGREES);
            imageMode(CENTER);
            translate(this.btnBx+(this.btnB.width*this.btnScale)/2,this.btnBy+(this.btnB.height*this.btnScale)/2);
            rotate(-18);
            image(this.btnB,0,0,this.btnB.width*this.btnScale,this.btnB.height*this.btnScale);
            pop();   
        }
        else{ 
            image(this.btnB,this.btnBx,this.btnBy,this.btnB.width*this.btnScale,this.btnB.height*this.btnScale);
        }

        
    }

    // hoverButtons(){  
    // }

    display(x,y){
        let tv = this.tvs.find(x => x.id === "chantisTV");
        this.updateZone(tv);
        this.updateBtnPosition(-20,115, y);
        image(tv,this.x,this.y,this.imgWidth,this.imgHeight);
        if(this.hoverTest(x)){
            this.showButtons("Rtl2","Filme");
        }
    }

    clickedA(){
        console.log("Rtl2");
    }

    clickedB(){
        console.log("Filme");
    }  
}



export class Door extends InteractiveObject{
    constructor(x,y,doors){
        super(x,y);
        this.x=x;
        this.y=y;

        this.doors=doors;
    }

    display(x){
        this.imgWidth=this.doors[0].width*0.4;
        this.zone=this.x+this.imgWidth;
        image(this.doors[0],this.x,this.y,this.doors[0].width*0.4,this.doors[0].height*0.4);
        if(this.hoverTest(x)){
            console.log("lolololo");
            fill("white");
            rect(this.x,this.y,100,40,10);
            fill("black");
            textSize(15);
            text("u want a burger?",this.x,this.y,100);
        }
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