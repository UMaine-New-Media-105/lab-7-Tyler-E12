let xCoord = 30;
let yCoord = 30;
let offset = 30;
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
}

function drawSprite(x, y, color) {
  push();
  fill(color);
  ellipse(x, y, 60);
  pop();
}
