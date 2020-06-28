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
        this.satisfactionRate=0.7;
        
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
            this.activityAnimation(this.fridgeInteraction,90,0.75);    
        } 
    }
    
    clickedA(){
        if(this.use>=3){
            if(this.ration==0){
            this.ration=3;
            this.moneyRate=-15;
            console.log("u out of food");
            }
            else{this.moneyRate=0;}
            this.satisfactionRate = 0.6;      
        }
        this.use++;
        this.ration--;
        this.updateInteraction("Fridge");
        this.updateParameter();
        this.getActivityBundle("Essen");
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
            this.activityAnimation(this.tvBtnAInteraction,90,1);
        } 
        if(this.interaction.B){
            this.updateAnimationPosition(50,170);
            this.activityAnimation(this.tvBtnBInteraction,90,2);
        } 
    }

    clickedA(){
        this.satisfactionRate = 1.6;
        this.exhaustionRate = 0.8;
        this.moneyRate=-20;
        this.updateInteraction("TvBtnA");
        this.updateParameter();
        if(window.charakterId=="Chantal"){
        this.getActivityBundle("RTL 2");
        }
        if(window.charakterId=="Lena"){
            this.getActivityBundle("Filme");
        }
        this.updateAnimationA();
    }

    clickedB(){
        this.satisfactionRate=1.2;
        this.moneyRate=-15;//<-------------------------umbedingt beachten, sonst werden Werte von anderer Aktion genommen!!!
        this.updateInteraction("TvBtnB");
        this.updateParameter();
        if(window.charakterId=="Chantal"){
            this.getActivityBundle("Filme");
            }
            if(window.charakterId=="Lena"){
                this.getActivityBundle("Gaming");
            }
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
    constructor(windows,Buttons,windowInteraction,windowAussicht){
        super();
        this.x=310;
        this.y=55;

        this.windows=windows;
        this.objectScale=0.42;

        this.Buttons=Buttons;
        this.btnScale=0.4;

        this.windowInteraction=windowInteraction;
        this.windowAussicht=windowAussicht;

        this.opacity=0;
        this.counterOpacity=0;
        this.aussichtOn=false;
        this.ausssichtEnd=300-26;
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

    display(x,y){
        // console.log(this.opacity);
        console.log("aussichtEnd: ",this.ausssichtEnd);
        console.log("counterOpacity ",this.counterOpacity);
        let fenster = this.windows.find(x => x.id === "Fenster");
        this.updateZone(fenster);
        this.updateBtnPosition(0,50,50);
        image(fenster,this.x,this.y,this.imgWidth,this.imgHeight);
        if(this.hoverTest(x)){
            this.showButtons("Fenster");
        } 
        if(this.interaction.B){
            this.updateAnimationPosition(90,y-this.y-20);
            this.activityAnimation(this.windowInteraction,this.ausssichtEnd+26);
            let aussicht=this.windowAussicht.find(x=>x.id==="day"+window.globalTime.day);
            push();
            tint(255,this.opacity);
            if(this.counterOpacity<=26){
              this.opacity+=10;  
            }
            this.counterOpacity++;
            if(this.opacity>=260){
                this.opacity=260;
                this.aussichtOn=true;

            }
            if(this.counterOpacity>=this.ausssichtEnd){
                this.opacity-=10;
                this.aussichtOn=false;
            }
            if(this.counterOpacity==30*10 || this.counterOpacity==this.ausssichtEnd+26){
                this.opacity=0;
                this.counterOpacity=0;
                this.ausssichtEnd=300-26;
            }
            image(aussicht,0,0,aussicht.width*0.4,aussicht.height*0.4);
            pop();
        }   
    }
    
    clickedB(){
        this.updateInteraction("Window");
        this.updateAnimationB();
    }
    
    clickedWindow(){
        if(this.aussichtOn){
            console.log("penis");
            this.ausssichtEnd=this.counterOpacity;
        }
    }
}

export class PC extends InteractiveObject{
    constructor(pcs,Buttons,pcBtnAInteraction,pcBtnBInteraction){
        super();
        this.x=1055;
        this.y=185;

        this.pcs=pcs;
        this.objectScale=0.42;

        this.Buttons=Buttons;
        this.btnScale=0.4;

        this.pcBtnAInteraction=pcBtnAInteraction;
        this.pcBtnBInteraction=pcBtnBInteraction;
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
            this.activityAnimation(this.pcBtnAInteraction,90,2);
        }
        else if(this.interaction.B && window.charakterId=="Lena"){
            this.updateAnimationPosition(100,100);
            this.activityAnimation(this.pcBtnBInteraction,90,2);
        }
        else{
        let chair=this.pcs.find(x=>x.id==="Stuhl");
        image(chair,this.x+60,this.y+53,chair.width*(this.objectScale+0.025),chair.height*(this.objectScale+0.025)); 
        }      
    }

    clickedA(){
        this.satisfactionRate = 1.6;
        this.exhaustionRate = 0.8;
        this.updateInteraction("PcBtnA");
        this.updateParameter();
        if(window.charakterId=="Chantal"){
            this.getActivityBundle("Bewerben");
            }
            if(window.charakterId=="Lena"){
                this.getActivityBundle("Editen");
            }
        this.updateAnimationA();
    }

    clickedB(){
        this.satisfactionRate=1.2;
        this.updateParameter();
        if(window.charakterId=="Chantal"){
        this.updateInteraction("PcBtnA");
        this.getActivityBundle("Social Media");   
        this.updateAnimationA();
        }
        if(window.charakterId=="Lena"){
        this.updateInteraction("PcBtnB"); 
        this.getActivityBundle("Lernen");  
        this.updateAnimationB();
        }
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
            window.globalTime.sleepAnimation=true;
            this.updateInteraction("Bed");
            this.updateAnimationA();// wenn darkenScreenRate eine Andere ist, spingt es nach Ablauf dieser animation auf interaction.A zurück
            this.updateAnimationPosition(-10,-54);
            this.activityAnimation(this.bedInteraction,355/window.darkenScreenRate,0);//counter muss an Zeit zum globalTime.news=true angepasst werden
            
           
        } 
        else if(this.interaction.A){
            
            this.updateAnimationPosition(-10,-54);
            this.activityAnimation(this.bedInteraction,90,3);  
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
        this.updateInteraction("Bed");
        this.updateParameter();
        this.getActivityBundle("Schlafen");
        this.updateAnimationA();
    }

    clickedB(){
        this.satisfactionRate=1.2;
        this.updateInteraction("Bed");
        this.updateParameter();
        this.getActivityBundle("Power-Nap");
        this.updateAnimationA();
    } 
}