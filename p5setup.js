let sketch = new p5();
let width = windowWidth;
let height = windowHeight;

//canvas doesnt like us, pls help!!! we need him responsive
function setup() {
  sketch.createCanvas(windowWidth*0.6, windowHeight*0.8);
  sketch.frameRate(30);
}
window.setup = setup;

function windowResized() {
  sketch.resizeCanvas(windowWidth*0.6, windowHeight*0.8);
}
window.addEventListener("resize", windowResized);


