export default class interactiveObject{
    constructor(x,y,charakterX){
        this.x=x;
        this.y=y;

        this.btnAx=btnAx;
        this.btnAy=btnAy;
        this.btnBx=btnBx;
        this.btnBy=btnBy;
        this.btnWidht=btnWidth;
        this.btnHeight=btnHeight;

        this.zone=zone;
         
        this.charakterX=charakterX;
    }

    hitTest(x, y, btnX, btnY) {
        if (x > btnX&& x < btnX + this.btnWidth && y > btnY && y < btnY + this.btnHeight) {
          return true;
        } else {
          return false;
        }
    }

    hoverTest(x) {
        if (x > this.x - this.zone&& x < this.x + this.zone) {
          return true;
        } else {
          return false;
        }
    }

    display(){
        if(this.hoverTest(this.charakterX)){
            showButtons();
        }
    }
    
    mouseClicked() {
        if (this.hitTest(mouseX, mouseY,this.btnAx,this.btnAy)) {
          this.clickedA();
        }
        if (this.hitTest(mouseX, mouseY,this.btnBx,this.btnBy)) {
            this.clickedB();
        }
    }

    update(){
        this.charakterX;
    }
}