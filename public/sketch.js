var myslider;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  myslider=createSlider(100,2000,100)
  myslider.position(10,10)
  background(240, 152, 98);
}

function draw() {
  //background(240, 152, 98);
  var val = myslider.value();

  fill(mouseY, random(250), mouseY);
  //stroke(65, 145, 140);
  noStroke();
  push();
  translate(mouseX-200, 0, mouseY);
  rotateZ(mouseX/100);
  rotateY(mouseY/100);
  torus(val/4);


  pop();
}

function windowResized() {
  resizeCanvas(window.windowWidth, window.windowHeight);
  resetCanvas();
}
