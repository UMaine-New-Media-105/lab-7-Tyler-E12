let xCoord = 30;
let x2Coord = 370;
let yCoord = 30;
let y2Coord = 30
let offset = 30;
let offset2 = -30
arrayOfColors = ["red", "gold", "maroon"];
function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(220);
  let offset = 30;

  for (let i = 0; i < 15; i++) {
    let randomColor = random(arrayOfColors);
    drawSprite(xCoord, yCoord, randomColor);
    xCoord += offset;
    yCoord += offset;
  }
  for (let i = 0; i < 15; i++) {
    let randomColor = random(arrayOfColors);
   drawSprite(x2Coord,y2Coord, randomColor)
    x2Coord += offset2
    y2Coord -= offset2
    
  }
  
  
}

function drawSprite(x, y, color) {
  push();
  fill(color);
  ellipse(x, y, 60);
  pop();
}
