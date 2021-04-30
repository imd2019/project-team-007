let sketch = new p5();
let width = windowWidth;
let height = windowHeight;

//canvas doesnt like us, pls help!!! we need him responsive
function setup() {
  sketch.createCanvas(1920*0.4,1080*0.4);
  sketch.frameRate(30);
}
window.setup = setup;

// function windowResized() {
//   sketch.resizeCanvas(windowWidth, windowHeight);
// }
// window.addEventListener("resize", windowResized);


