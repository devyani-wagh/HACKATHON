function setup() {
  createCanvas(800, 600);
  background(220);
}

function draw() {
  background(220);

  // circle
  fill(255, 100, 100);
  ellipse(400, 300, 100, 100);

  // rectangle
  fill(100, 150, 255);
  rect(150, 200, 120, 80);

  // line
  stroke(0);
  line(0, 0, mouseX, mouseY);

  // text
  noStroke();
  fill(0);
  textSize(24);
  text("Hello p5.js!", 320, 50);
}