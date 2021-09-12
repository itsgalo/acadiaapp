//BUILDING WEB-BASED DRAWING INSTRUMENTS TEMPLATE
//BY GALO CANIZARES

var lowresCanvas;
var lineStorage = [];
var tempLineData = {
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0
}
var remapX;
var remapY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  lowresCanvas = createGraphics(32, 32);
  noSmooth();
  lowresCanvas.noSmooth();

  remapX = map(mouseX, 0, windowWidth, 0, 32);
  remapY = map(mouseY, 0, windowHeight, 0, 32);
}

function draw() {
  background(220);
  lowresCanvas.background(220);
  for(var i = 0; i < lineStorage.length; i++) {
    lineStorage[i].render();
  }
  if(mouseIsPressed) {
    lowresCanvas.line(tempLineData.x1, tempLineData.y1, map(mouseX, 0, windowWidth, 0, 32), map(mouseY, 0, windowHeight, 0, 32));
  }
  image(lowresCanvas, 0, 0, windowWidth, windowHeight);
}

function myLine(startX, startY, endX, endY, r, g, b) {
  this.x1 = startX;
  this.y1 = startY;
  this.x2 = endX;
  this.y2 = endY;
  this.r = r;
  this.g = g;
  this.b = b;

  this.render = function() {
    lowresCanvas.stroke(this.r, this.g, this.b);
    lowresCanvas.strokeWeight(1);
    lowresCanvas.line(this.x1, this.y1, this.x2, this.y2);
  }
}

function mousePressed() {

  tempLineData.x1 = map(mouseX, 0, windowWidth, 0, 32);
  tempLineData.y1 = map(mouseY, 0, windowHeight, 0, 32);
}

function mouseReleased() {
  tempLineData.x2 = map(mouseX, 0, windowWidth, 0, 32);;
  tempLineData.y2 = map(mouseY, 0, windowHeight, 0, 32);
  lineStorage.push(new myLine(tempLineData.x1, tempLineData.y1, tempLineData.x2, tempLineData.y2, random(255), random(255), random(255)));
}

function windowResized() {
  resizeCanvas(window.windowWidth, window.windowHeight);
  resetCanvas();
}
