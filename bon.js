export default class Bon {
  constructor() {
    this.x = 30;
    this.y = -110;

    this.yVarBon = 0; // auch absatzStartVariableBon

    this.rectWidth = 180;
    this.rectHeight = 160;

    this.absatz = 26;

    this.absatzVarBon = 18;
    this.absatzStartFixedBon = this.y + this.rectHeight;
    this.rectHeightVarBon =
      this.yVarBon + this.absatzVarBon * window.moneyBill.length;

    this.bonShow = false;

    this.startColumnNames = this.x + this.rectWidth / 2;
    this.startColumnNumbers = this.x + this.rectWidth / 3;

    this.day = 1;
    this.doubles=[];
    this.occurences;
  }

  display() {
    this.update();
    this.fixedBon();
    if (this.bonShow == true) {
      this.variableBon();
    }
  }

  variableBon() {
    fill("lightgrey");
    rect(this.x, this.yVarBon, this.rectWidth, this.rectHeightVarBon);
    push();
    noStroke();
    rect(this.x + 1, this.rectHeightVarBon - 3, this.rectWidth - 1.8, 6);
    pop();
    fill("black");
    for (let e = 0; e < window.moneyBill.length; e++) {
            push();
            textAlign(RIGHT);
            textSize(12);
            text(
              window.moneyBill[e][1] + "€",
              this.startColumnNumbers,
              this.yVarBon + this.absatzVarBon * (e + 1)
            );
            pop();
            textSize(8);
            if(this.doubles.find(i=>i==e)){
                console.log(this.occurences[e]);
                text(this.occurences[e]+1+"x "+
                    window.moneyBill[e][0],
                    this.startColumnNames,
                    this.yVarBon + this.absatzVarBon * (e + 1)
                ); 
            }
            else{
            text(
              window.moneyBill[e][0],
              this.startColumnNames,
              this.yVarBon + this.absatzVarBon * (e + 1)
            );
            }
    }
  }

  fixedBon() {
    fill("lightgrey");
    rect(this.x, this.y, this.rectWidth, this.rectHeight);
    // console.log("globalMoney ",window.globalMoney);
    // console.log("dailyBudget ",window.globalDailyBudget);
    // console.log("InitialDailyBudget ",window.globalInitialDailyBudget);
    // console.log(this.day);
    textFont("Bakso Sapi");
    fill("black");
    this.moneyBundle(this.x + 45, window.globalMoney, "Gesamtbudget", 16);
    if (window.globalDailyBudget < 0) {
      push();
      fill("darkred");
      this.moneyBundle(
        this.x + this.rectWidth - 50,
        window.globalDailyBudget,
        "Tagesbudget",
        24
      );
      pop();
    } else {
      this.moneyBundle(
        this.x + this.rectWidth - 50,
        window.globalDailyBudget,
        "Tagesbudget",
        24
      );
    }
    strokeWeight(1.8);
    line(
      this.x + 10,
      this.absatzStartFixedBon - this.absatz * 3.7,
      this.x + this.rectWidth - 10,
      this.absatzStartFixedBon - this.absatz * 3.7
    );
    this.columnNamesFixed();
    this.columnNumbersFixed();
    line(
      this.x + 10,
      this.absatzStartFixedBon - this.absatz * 5.7,
      this.x + this.rectWidth - 10,
      this.absatzStartFixedBon - this.absatz * 5.7
    );
  }

  moneyBundle(x, parameter, parameterName, size) {
    push();
    textAlign(CENTER);
    textSize(size);
    text(parameter + "€", x, this.absatzStartFixedBon - this.absatz);
    textSize(size * 0.5);
    text(parameterName, x, this.absatzStartFixedBon - this.absatz / 3);
    pop();
  }

  columnNumbersFixed() {
    fill("black");
    textSize(15);
    push();
    textAlign(RIGHT);
    text(
      window.globalInitialDailyBudget + "€",
      this.startColumnNumbers,
      this.absatzStartFixedBon - this.absatz * 3
    );
    text(
      "÷   " + "30",
      this.startColumnNumbers,
      this.absatzStartFixedBon - this.absatz * 4
    );
    text(
      window.globalMoney + "€",
      this.startColumnNumbers,
      this.absatzStartFixedBon - this.absatz * 5
    );
    pop();
  }

  columnNamesFixed() {
    fill("black");
    textSize(10);
    text(
      "Tagesbudget",
      this.startColumnNames,
      this.absatzStartFixedBon - this.absatz * 3
    );
    text(
      "Tage",
      this.startColumnNames,
      this.absatzStartFixedBon - this.absatz * 4
    );
    text(
      "Gesamtbudget",
      this.startColumnNames,
      this.absatzStartFixedBon - this.absatz * 5
    );
  }

  hitTest(x, y) {
    if (
      x > this.x &&
      x < this.x + this.rectWidth &&
      y > this.y &&
      y < this.y + this.rectHeight
    ) {
      return true;
    } else {
      return false;
    }
  }

  mouseClicked() {
    if (this.hitTest(mouseX, mouseY)) {
      this.clicked();
    }
  }

  clicked() {
    if (this.bonShow == false) {
      this.y = this.rectHeightVarBon;
      this.absatzStartFixedBon = this.y + this.rectHeight;
      this.bonShow = true;
      console.log(window.moneyBill);

      return;
    }

    if (this.bonShow == true) {
      this.y = -110;
      this.absatzStartFixedBon = this.y + this.rectHeight;
      this.bonShow = false;
      return;
    }
  }

  getTimes(){
    this.occurences = {};
    for (let i = 0; i < this.doubles.length; i++){
      let num = this.doubles[i];
      this.occurences[num] = this.occurences [num] ? this.occurences[num] + 1 : 1;
    }
  }

  update() {
    if (window.globalTime.day == 1) {
      if (window.activateCounter && window.globalTime.hour==8&&window.globalTime.minute==0) {
        for (let e = 0; e < window.moneyBill.length; e++) {
          window.globalMoney = window.globalMoney + window.moneyBill[e][1];
        }
        window.globalDailyBudget =
          Math.round((window.globalMoney / 30) * 100) / 100;
        window.globalInitialDailyBudget = window.globalDailyBudget;
      }
    }

    this.rectHeightVarBon =
      this.yVarBon + this.absatzVarBon * window.moneyBill.length;

    if (this.day < window.globalTime.day) {
      window.globalMoney =
        window.globalMoney -
        window.globalInitialDailyBudget +
        window.globalDailyBudget;
      window.globalDailyBudget =
        Math.round((window.globalMoney / 30) * 100) / 100; //bcs .toFixed(2) gibt nen String heraus -.-
      window.globalInitialDailyBudget = window.globalDailyBudget;
      window.moneyBill = [];
      this.doubles=[];
      this.occurences={};
      this.day++;  
    }

    window.moneyBill.forEach((element) => {
        let indexE = window.moneyBill.indexOf(element);
        window.moneyBill.forEach((u) => {
          let indexU = window.moneyBill.indexOf(u);
          if (element[0] == u[0] && indexE != indexU && indexE < indexU) {
            let markedIndex=indexE;
            this.doubles.push(markedIndex);
            this.getTimes();
            console.log(indexE);
            window.moneyBill.splice(indexU, 1);
            window.moneyBill[indexE][1] =
              window.moneyBill[indexE][1] + 
              window.moneyBill[indexE][1] / this.occurences[indexE];
          } 
        });
      });
  }
}
