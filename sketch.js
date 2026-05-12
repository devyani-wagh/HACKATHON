let startButtonHover = false;
let buttonPulse = 0;

function setup() {
  createCanvas(1200, 750);
  textAlign(CENTER, CENTER);
  textFont("Georgia");
}

function draw() {
  drawSky();
  drawSun();
  drawClouds();
  drawMountains();
  drawGround();
  drawHeroText();
  drawInfoPanel();
  drawStartButton();
}

function drawSky() {
  for (let y = 0; y < height; y++) {
    let t = y / height;

    let c;
    if (t < 0.45) {
      c = lerpColor(color(18, 42, 92), color(92, 90, 180), t / 0.45);
    } else {
      c = lerpColor(color(92, 90, 180), color(255, 155, 95), (t - 0.45) / 0.55);
    }

    stroke(c);
    line(0, y, width, y);
  }

  noStroke();
  fill(20, 12, 45, 45);
  rect(0, 0, width, height);
}

function drawSun() {
  noStroke();
  fill(255, 190, 85, 55);
  ellipse(990, 145, 230);

  fill(255, 218, 105);
  ellipse(990, 145, 135);
}

function drawClouds() {
  drawCloud(160 + sin(frameCount * 0.01) * 24, 115, 1);
  drawCloud(430 + sin(frameCount * 0.008) * 30, 175, 0.78);
  drawCloud(850 + sin(frameCount * 0.012) * 26, 95, 0.9);
}

function drawCloud(x, y, s) {
  noStroke();
  fill(255, 230);

  ellipse(x, y, 75 * s, 46 * s);
  ellipse(x + 42 * s, y + 2 * s, 78 * s, 48 * s);
  ellipse(x + 22 * s, y - 22 * s, 72 * s, 50 * s);
}

function drawMountains() {
  noStroke();

  fill(42, 72, 78, 210);
  triangle(-80, 520, 230, 275, 540, 520);
  triangle(320, 520, 620, 250, 940, 520);
  triangle(760, 520, 1080, 270, 1320, 520);

  fill(58, 112, 80);
  triangle(-120, 560, 190, 350, 520, 560);
  triangle(420, 560, 760, 315, 1110, 560);
  triangle(850, 560, 1160, 365, 1370, 560);
}

function drawGround() {
  noStroke();

  fill(37, 125, 78);
  rect(0, 520, width, 230);

  fill(30, 95, 65);
  rect(0, 650, width, 100);

  fill(235, 170, 75, 170);
  beginShape();
  vertex(470, 750);
  vertex(560, 520);
  vertex(640, 520);
  vertex(735, 750);
  endShape(CLOSE);
}

function drawHeroText() {
  noStroke();

  textStyle(BOLD);
  textSize(78);

  fill(0, 95);
  text("EXPLORE MP", width / 2 + 5, 137);

  fill(255, 226, 170);
  text("EXPLORE MP", width / 2 + 2, 134);

  fill(255);
  text("EXPLORE MP", width / 2, 132);

  textStyle(ITALIC);
  textSize(30);
  fill(255, 235, 205);
  text("The Heart of India", width / 2, 198);

  stroke(255, 205, 120, 210);
  strokeWeight(3);
  line(width / 2 - 155, 238, width / 2 + 155, 238);

  stroke(255, 255, 255, 130);
  strokeWeight(1);
  line(width / 2 - 95, 247, width / 2 + 95, 247);

  noStroke();
  textStyle(NORMAL);
}

function drawInfoPanel() {
  let panelX = width / 2 - 385;
  let panelY = 285;
  let panelW = 770;
  let panelH = 122;

  noStroke();

  fill(15, 20, 45, 90);
  rect(panelX + 10, panelY + 12, panelW, panelH, 26);

  fill(255, 248, 232, 228);
  rect(panelX, panelY, panelW, panelH, 26);

  stroke(255, 255, 255, 145);
  strokeWeight(2);
  noFill();
  rect(panelX + 5, panelY + 5, panelW - 10, panelH - 10, 22);

  noStroke();
  fill(42, 35, 28);
  textSize(26);
  textStyle(ITALIC);
  text(
    "Discover forts, temples, waterfalls,\nheritage sites and culture across Madhya Pradesh",
    width / 2,
    panelY + panelH / 2
  );

  textStyle(NORMAL);
}

function drawStartButton() {
  let bx = width / 2 - 160;
  let by = 462;
  let bw = 320;
  let bh = 82;

  startButtonHover =
    mouseX > bx &&
    mouseX < bx + bw &&
    mouseY > by &&
    mouseY < by + bh;

  buttonPulse = sin(frameCount * 0.06) * 2.5;

  noStroke();

  fill(20, 12, 30, 95);
  rect(bx + 9, by + 12, bw, bh, 22);

  if (startButtonHover) {
    fill(255, 198, 78);
    cursor(HAND);
  } else {
    fill(218, 94, 45);
    cursor(ARROW);
  }

  rect(bx, by - buttonPulse, bw, bh, 22);

  fill(255, 230, 150, 120);
  rect(bx + 8, by + 8 - buttonPulse, bw - 16, 18, 12);

  fill(255);
  textSize(29);
  textStyle(BOLD);
  text("START JOURNEY", width / 2, by + bh / 2 - buttonPulse);

  textStyle(NORMAL);
}

function mousePressed() {
  let bx = width / 2 - 160;
  let by = 462;
  let bw = 320;
  let bh = 82;

  if (mouseX > bx && mouseX < bx + bw && mouseY > by && mouseY < by + bh) {
    console.log("START APP");
  }
}