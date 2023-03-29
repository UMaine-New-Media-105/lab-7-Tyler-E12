let xCoord = 25;
let yCoord = 27;
let offset = 50;
let colorChange = 1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let R = 100;
  let G = 150;
  let B = 230;

  for (let numRows = 0; numRows < 10; numRows++) {
    for (let numCols = 0; numCols < 10; numCols++) {
      drawSprite(numRows * offset + 25, numCols * offset + 27, R, G, B);
    }
  }
}

function drawSprite(x, y, a, b, c) {
  push();
  fill(a, b, c);
  ellipse(x, y, 50);
  pop();
}
