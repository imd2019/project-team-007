import InteractiveObject from "./interactiveObject.js";

export class Kühlschrank extends InteractiveObject {
    constructor(x,y,fridges,Buttons){
        super(x,y);
        this.x=x;
        this.y=y;
        
        // this.charakterId=charakterId;
        // this.charakterX=charakterX;
        // this.day=day;
        this.ration=3;
        this.use=0;

        this.fridges=fridges;
        this.objectScale = 0.4;

        this.Buttons=Buttons;
        this.btnScale=0.4;

        this.satisfactionRate=1.1;
    
        // if (this.charakterId["Name"]){
        //     this.satisfaction="Wert";
        //     this.money="-Wert";
        //     this.exhaustion="-Wert";
        //     this.timeA=timeA;
        // }
        
    }

    showButtons(btnAId){
        this.btnA = this.Buttons.find(x => x.id === btnAId);
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
    }

    display(x){
        let fridge = this.fridges.find(x => x.id === "chantisFridge");
        this.updateZone(fridge);
        this.updateBtnPosition(20,0,45);
        image(fridge,this.x,this.y,this.imgWidth,this.imgHeight); 
        if(this.hoverTest(x)){
            this.showButtons("Essen");
        }  
    }
    
    clickedA(){
        if(this.use>=3){
            this.ration=3;
            this.satisfactionRate = 0.8;
            this.moneyRate=0.9;
            console.log("u out of food");
        }
        this.use++;
        this.ration--;
        this.updateParameter();
        console.log("ration & use: ",this.ration,this.use);
        
        // globalTime +=this.timeA;
        // globalActivityArray.push(this.satisfaction[0],this.exhaustion[1]); 

    }
    
}

export class TV extends InteractiveObject{
    constructor(x,y,tvs,Buttons){
        super(x,y);
        this.x=x;
        this.y=y;

        this.tvs=tvs;
        this.objectScale=0.4;

        this.Buttons=Buttons;
        this.btnScale=0.4;

    }
    
    showButtons(btnAId,btnBId){
        this.btnA = this.Buttons.find(x => x.id === btnAId);
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
        
        this.btnB =this.Buttons.find(x => x.id === btnBId);
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

   
    display(x){
        let tv = this.tvs.find(x => x.id === "chantisTV");
        this.updateZone(tv);
        this.updateBtnPosition(-20,115,75);
        image(tv,this.x,this.y,this.imgWidth,this.imgHeight);
        if(this.hoverTest(x)){
            this.showButtons("Rtl2","Filme");
        }
    }

    clickedA(){
        this.satisfactionRate = 1.6;
        this.exhaustionRate = 0.8;
        this.updateParameter();
    }

    clickedB(){
        console.log("Filme");
    }  
}

export class Door extends InteractiveObject{
    constructor(x,y,doors,Buttons){
        super(x,y);
        this.x=x;
        this.y=y;

        this.doors=doors;
        this.objectScale=0.4;

        this.Buttons=Buttons;
        this.btnScale=0.4;
    }
    
    showButtons(btnAId,btnBId){
        this.btnA = this.Buttons.find(x => x.id === btnAId);
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
        
        this.btnB =this.Buttons.find(x => x.id === btnBId);
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

    display(x){
        let door = this.doors.find(x => x.id === "chantisTür");
        this.updateZone(door);
        this.updateBtnPosition(-20,115,55);
        image(door,this.x,this.y,this.imgWidth,this.imgHeight);
        if(this.hoverTest(x)){
            this.showButtons("Freunde","Arbeitsamt");
        }
    }
}

export class Fenster extends InteractiveObject{
    constructor(x,y,windows,Buttons){
        super(x,y);
        this.x=x;
        this.y=y;

        this.windows=windows;
        this.objectScale=0.4;

        this.Buttons=Buttons;
        this.btnScale=0.4;
    }

    showButtons(btnBId){
        this.btnB =this.Buttons.find(x => x.id === btnBId);
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

    display(x){
        let fenster = this.windows.find(x => x.id === "chantisFenster");
        this.updateZone(fenster);
        this.updateBtnPosition(0,50,60);
        image(fenster,this.x,this.y,this.imgWidth,this.imgHeight);
        if(this.hoverTest(x)){
            this.showButtons("Fenster");
        }    
    }
}

export class PC extends InteractiveObject{
    constructor(x,y,pcs,Buttons){
        super(x,y);
        this.x=x;
        this.y=y;

        this.pcs=pcs;
        this.objectScale=0.43;

        this.Buttons=Buttons;
        this.btnScale=0.4;
    }

    showButtons(btnAId,btnBId){
        this.btnA = this.Buttons.find(x => x.id === btnAId);
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
        
        this.btnB =this.Buttons.find(x => x.id === btnBId);
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

    display(x){
        let pc = this.pcs.find(x => x.id === "chantisPC");
        this.updateZone(pc);
        this.updateBtnPosition(-5,150,70);
        image(pc,this.x,this.y,this.imgWidth,this.imgHeight);
        if(this.hoverTest(x)){
            this.showButtons("Bewerben","SocialMedia");
        }       
    }
}

export class Bett extends InteractiveObject{
    constructor(x,y,beds,Buttons){
        super(x,y);
        this.x=x;
        this.y=y;

        this.beds=beds;
        this.objectScale=0.4;

        this.Buttons=Buttons;
        this.btnScale=0.4;
    }

    showButtons(btnAId,btnBId){
        this.btnA = this.Buttons.find(x => x.id === btnAId);
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
        
        this.btnB =this.Buttons.find(x => x.id === btnBId);
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

    display(x){
        let bett = this.beds.find(x => x.id === "chantisBett");
        this.updateZone(bett);
        this.updateBtnPosition(10,160,130);
        image(bett,this.x,this.y,this.imgWidth,this.imgHeight);
        if(this.hoverTest(x)){
            this.showButtons("Schlafen","PowerNap");
        } 
    }
}