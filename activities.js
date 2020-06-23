import InteractiveObject from "./interactiveObject.js";

export class Kühlschrank extends InteractiveObject {
    constructor(fridges,Buttons,fridgeInteraction){
        super();
        this.x=810;
        this.y=75;
        
        this.ration=3;
        this.use=0;

        this.fridges=fridges;
        this.objectScale = 0.4;

        this.Buttons=Buttons;
        this.btnScale=0.4;
        
        this.fridgeInteraction=fridgeInteraction;
        this.satisfactionRate=1.1;
        
        
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

    

    display(x,y){
        // console.log(this.counter);
        let fridge = this.fridges.find(x => x.id === "Fridge");
        this.updateZone(fridge);
        this.updateBtnPosition(20,0,45);
        image(fridge,this.x,this.y,this.imgWidth,this.imgHeight); 
        if(this.hoverTest(x)){
            this.showButtons("Essen");
            
        } 
        if(this.interaction.A){
            this.updateAnimationPosition(70,y-this.y-10);
            this.activityAnimation(this.fridgeInteraction,this.activityId,90);    
        } 
    }
    
    clickedA(){
        if(this.use>=3){
            if(this.ration==0){
            this.ration=3;
            this.moneyRate=0.9;
            console.log("u out of food");
            }
            else{this.moneyRate=1;}
            this.satisfactionRate = 0.8;      
        }
        this.use++;
        this.ration--;
        this.updateInteraction("Fridge");
        this.updateParameter();
        this.updateAnimationA();
        console.log("ration & use: ",this.ration,this.use);
    }
    
}

export class TV extends InteractiveObject{
    constructor(tvs,Buttons,tvBtnAInteraction,tvBtnBInteraction){
        super();
        this.x=520;
        this.y=190;

        this.tvs=tvs;
        this.objectScale=0.4;

        this.Buttons=Buttons;
        this.btnScale=0.4;

        this.tvBtnAInteraction=tvBtnAInteraction;
        this.tvBtnBInteraction=tvBtnBInteraction;

        this.animationSpeed=0.15;
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
        let tv = this.tvs.find(x => x.id === "TV");
        this.updateZone(tv);
        this.updateBtnPosition(15,160,75);
        image(tv,this.x,this.y,this.imgWidth,this.imgHeight);
        if(this.hoverTest(x)){
            this.showButtons("Rtl2","Filme");
        }
        if(this.interaction.A){
            this.updateAnimationPosition(50,170);
            this.activityAnimation(this.tvBtnAInteraction,"TvBtnAInteractionMiddle",90);
        } 
        if(this.interaction.B){
            this.updateAnimationPosition(50,170);
            this.activityAnimation(this.tvBtnBInteraction,"TvBtnBInteractionMiddle",90);
        } 
    }

    clickedA(){
        this.satisfactionRate = 1.6;
        this.exhaustionRate = 0.8;
        this.updateParameter();
        this.updateAnimationA();
    }

    clickedB(){
        this.satisfactionRate=1.2;
        this.updateParameter();
        this.updateAnimationB();
    }  
}

export class Door extends InteractiveObject{
    constructor(doors,Buttons){
        super();
        this.x=40;
        this.y=78;

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
        let door = this.doors.find(x => x.id === "Tür");
        this.updateZone(door);
        this.updateBtnPosition(-20,115,55);
        image(door,this.x,this.y,this.imgWidth,this.imgHeight);
        if(this.hoverTest(x)){
            this.showButtons("Freunde","Arbeitsamt");
        }
    }
}

export class Fenster extends InteractiveObject{
    constructor(windows,Buttons){
        super();
        this.x=310;
        this.y=55;

        this.windows=windows;
        this.objectScale=0.42;

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
        let fenster = this.windows.find(x => x.id === "Fenster");
        this.updateZone(fenster);
        this.updateBtnPosition(0,50,50);
        image(fenster,this.x,this.y,this.imgWidth,this.imgHeight);
        if(this.hoverTest(x)){
            this.showButtons("Fenster");
        }    
    }
}

export class PC extends InteractiveObject{
    constructor(pcs,Buttons,pcInteraction){
        super();
        this.x=1055;
        this.y=185;

        this.pcs=pcs;
        this.objectScale=0.42;

        this.Buttons=Buttons;
        this.btnScale=0.4;

        this.pcInteraction=pcInteraction;
        this.animationScale=0.5;
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
        let pc = this.pcs.find(x => x.id === "Tisch");
        this.updateZone(pc);
        this.updateBtnPosition(-5,150,70);
        image(pc,this.x,this.y,this.imgWidth,this.imgHeight);
        if(this.hoverTest(x)){
            this.showButtons("Bewerben","SocialMedia");
        }
        if(this.interaction.A){
            this.updateAnimationPosition(100,100);
            this.activityAnimation(this.pcInteraction,"PcInteractionMiddle",90);
        }
        else{
        let chair=this.pcs.find(x=>x.id==="Stuhl");
        image(chair,this.x+60,this.y+53,chair.width*(this.objectScale+0.025),chair.height*(this.objectScale+0.025)); 
        }      
    }

    clickedA(){
        this.satisfactionRate = 1.6;
        this.exhaustionRate = 0.8;
        this.updateParameter();
        this.updateAnimationA();
    }

    clickedB(){
        this.satisfactionRate=1.2;
        this.updateParameter();
        this.updateAnimationA();
    } 
}

export class Bett extends InteractiveObject{
    constructor(beds,Buttons,bedInteraction){
        super();
        this.x=1320;
        this.y=245;

        this.beds=beds;
        this.objectScale=0.4;

        this.Buttons=Buttons;
        this.btnScale=0.4;

        this.bedInteraction=bedInteraction;
        this.imageMode=CORNER;
        this.animationScale=0.4;
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
        if(!window.globalTime.start && x>=this.x && !window.globalTime.news){
            this.updateAnimationA();
            this.updateAnimationPosition(-10,-54);
            this.activityAnimation(this.bedInteraction,"BedInteractionMiddle",71,10);//counter muss an Zeit zum globalTime.news=true angepasst werden
            window.globalTime.sleepAnimation=true;
           
        } 
        else if(this.interaction.A){
            this.updateAnimationPosition(-10,-54);
            this.activityAnimation(this.bedInteraction,"BedInteractionMiddle",90);  
        }
        else{
        let bett = this.beds.find(x => x.id === "Bett");
        this.updateZone(bett);
        this.updateBtnPosition(10,160,130);
        image(bett,this.x,this.y,this.imgWidth,this.imgHeight);
        }
        if(this.hoverTest(x)){
            this.showButtons("Schlafen","PowerNap");
        } 
    }

    clickedA(){
        this.satisfactionRate = 1.6;
        this.exhaustionRate = 1.4;
        this.updateParameter();
        this.updateAnimationA();
    }

    clickedB(){
        this.satisfactionRate=1.2;
        this.updateParameter();
        this.updateAnimationA();
    } 
}