let sketch = new p5();
let width = windowWidth;
let height = windowHeight;

//canvas doesnt like us, pls help!!! we need him responsive
function setup() {
  sketch.createCanvas(4104, 1080);
  sketch.frameRate(30);
}
window.setup = setup;

function windowResized() {
  sketch.resizeCanvas(4104, 1080);
}
window.addEventListener("resize", windowResized);


