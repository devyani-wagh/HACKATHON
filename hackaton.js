let gameState = "home";
let startButtonHover = false;
let buttonPulse = 0;
var gwaliorFort, jaiVilas, orchha, sanchi, bhimbetka, dhuandhar, marble, ujjain, omkareshwar;
function preload() {
  gwaliorFort = loadImage("assets/gwaliorfort.jpeg"), 
  jaiVilas = loadImage("assets/jaivilas.jpeg"),
  orchha = loadImage("assets/orchha.jpeg"),
  sanchi = loadImage("assets/sanchi.jpeg"),
  bhimbetka = loadImage("assets/bhimbetka.jpeg"),
  dhuandhar = loadImage("assets/dhuandhar.jpeg"),
  marble = loadImage("assets/marble.jpeg"),
  ujjain = loadImage("assets/ujjain.jpeg"),
  omkareshwar = loadImage("assets/omkareshwar.jpeg");
    () => console.log("image loaded!"),
    () => console.log("image FAILED to load")
  
}
function setup() {
  createCanvas(1200, 750);
  textAlign(CENTER, CENTER);
  textFont("Georgia");
}

function draw() {
  if (gameState === "home") drawHomeScreen();
  else if (gameState === "map") drawMapScreen();
  else if (gameState === "gwalior") drawGwaliorRegion();
  else if (gameState === "bhopal") drawBhopalRegion();
  else if (gameState === "jabalpur") drawJabalpurRegion();
  else if (gameState === "malwa") drawMalwaRegion();
}

// HOME SCREEN

function drawHomeScreen() {
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

    if (t < 0.5) {
      c = lerpColor(color(12, 30, 70), color(74, 92, 170), t / 0.5);
    } else {
      c = lerpColor(color(74, 92, 170), color(255, 174, 105), (t - 0.5) / 0.5);
    }

    stroke(c);
    line(0, y, width, y);
  }

  noStroke();
  fill(255, 190, 100, 24);
  ellipse(880, 150, 520, 220);

  fill(10, 15, 45, 35);
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
  let speed = frameCount * 0.01;

  drawCloud(160 + sin(speed) * 24, 115, 1);
  drawCloud(430 + sin(speed * 0.8) * 30, 175, 0.78);
  drawCloud(850 + sin(speed * 1.2) * 26, 95, 0.9);
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
  textStyle(BOLD);
  textSize(76);

  fill(0, 105);
  text("EXPLORE MP", width / 2 + 5, 137);

  fill(255, 222, 155);
  text("EXPLORE MP", width / 2 + 2, 134);

  fill(255);
  text("EXPLORE MP", width / 2, 132);

  textStyle(ITALIC);
  textSize(27);
  fill(255, 239, 210);
  text("The Heart of India", width / 2, 198);

  stroke(255, 205, 120, 220);
  strokeWeight(3);
  line(width / 2 - 155, 238, width / 2 + 155, 238);

  noStroke();
  textStyle(NORMAL);
}

function drawInfoPanel() {
  noStroke();

  fill(0, 65);
  rect(width / 2 - 360, 294, 720, 120, 24);

  fill(255, 248, 232, 235);
  rect(width / 2 - 350, 285, 700, 120, 24);

  fill(44, 35, 28);
  textSize(22);
  textStyle(ITALIC);
  text(
    "Discover forts, temples, waterfalls,\nheritage sites and culture across Madhya Pradesh",
    width / 2,
    346
  );

  textStyle(NORMAL);
}

function drawStartButton() {
  let bx = width / 2 - 160;
  let by = 500;
  let bw = 320;
  let bh = 82;

  startButtonHover =
    mouseX > bx &&
    mouseX < bx + bw &&
    mouseY > by &&
    mouseY < by + bh;

  buttonPulse = sin(frameCount * 0.06) * 2.5;

  noStroke();

  fill(0, 85);
  rect(bx + 8, by + 11, bw, bh, 22);

  if (startButtonHover) {
    fill(255, 195, 70);
    cursor(HAND);
  } else {
    fill(224, 102, 48);
    cursor(ARROW);
  }

  rect(bx, by - buttonPulse, bw, bh, 22);

  fill(255, 235, 165, 120);
  rect(bx + 8, by + 8 - buttonPulse, bw - 16, 17, 12);

  fill(255);
  textStyle(BOLD);
  textSize(30);
  text("START JOURNEY", width / 2, by + 40 - buttonPulse);

  textStyle(NORMAL);
}

// MAP SCREEN

function drawMapScreen() {
  drawGradientBackground(color(13, 28, 58), color(242, 172, 105));

  noStroke();

  fill(255, 192, 90, 45);
  ellipse(980, 145, 270);

  fill(255);
  textStyle(BOLD);
  textSize(46);
  text("MADHYA PRADESH TOURISM", width / 2, 55);

  fill(255, 234, 200);
  textStyle(ITALIC);
  textSize(22);
  text("Click a Region to Explore", width / 2, 100);

  noStroke();
  fill(0, 70);
  beginShape();
  vertex(188, 188);
  vertex(368, 148);
  vertex(438, 248);
  vertex(628, 258);
  vertex(868, 268);
  vertex(988, 398);
  vertex(868, 528);
  vertex(688, 398);
  vertex(508, 458);
  vertex(458, 608);
  vertex(228, 588);
  vertex(128, 438);
  vertex(178, 288);
  endShape(CLOSE);

  stroke(35, 74, 62);
  strokeWeight(4);

  fill(186, 224, 146);
  beginShape();
  vertex(180, 180);
  vertex(360, 140);
  vertex(430, 240);
  vertex(320, 320);
  vertex(170, 280);
  endShape(CLOSE);

  fill(92, 184, 165);
  beginShape();
  vertex(320, 320);
  vertex(430, 240);
  vertex(620, 250);
  vertex(680, 390);
  vertex(500, 450);
  vertex(340, 420);
  endShape(CLOSE);

  fill(82, 137, 204);
  beginShape();
  vertex(620, 250);
  vertex(860, 260);
  vertex(980, 390);
  vertex(860, 520);
  vertex(680, 390);
  endShape(CLOSE);

  fill(213, 137, 78);
  beginShape();
  vertex(170, 280);
  vertex(320, 320);
  vertex(340, 420);
  vertex(500, 450);
  vertex(450, 600);
  vertex(220, 580);
  vertex(120, 430);
  endShape(CLOSE);

  noStroke();
  textStyle(BOLD);
  textSize(24);

  fill(0, 85);
  text("GWALIOR", 282, 222);
  text("BHOPAL", 502, 342);
  text("JABALPUR", 822, 372);
  text("MALWA", 322, 522);

  fill(255, 250, 235);
  text("GWALIOR", 280, 220);
  text("BHOPAL", 500, 340);
  text("JABALPUR", 820, 370);
  text("MALWA", 320, 520);

  backButton();
}

// REGION SCREENS

function drawGwaliorRegion() {
  drawGradientBackground(color(55, 32, 25), color(175, 105, 65));
  regionTitle("GWALIOR REGION");
  drawPlaceCard(80, 220, "Gwalior Fort", gwaliorFort);  // pass image here
  drawPlaceCard(470, 220, "Jai Vilas Palace", jaiVilas);
  drawPlaceCard(860, 220, "Orchha", orchha);
  backButton();
}

function drawBhopalRegion() {
  drawGradientBackground(color(18, 48, 78), color(55, 150, 170));
  regionTitle("BHOPAL REGION");
  drawPlaceCard(180, 220, "Sanchi Stupa", sanchi);
  drawPlaceCard(720, 220, "Bhimbetka", bhimbetka);
  backButton();
}

function drawJabalpurRegion() {
  drawGradientBackground(color(20, 68, 55), color(90, 175, 140));
  regionTitle("JABALPUR REGION");
  drawPlaceCard(180, 220, "Dhuandhar Falls", dhuandhar);
  drawPlaceCard(720, 220, "Marble Rocks", marble);
  backButton();
}

function drawMalwaRegion() {
  drawGradientBackground(color(75, 38, 54), color(210, 125, 88));
  regionTitle("MALWA REGION");
  drawPlaceCard(180, 220, "Ujjain", ujjain);
  drawPlaceCard(720, 220, "Omkareshwar", omkareshwar);
  backButton();
}

// HELPERS

function regionTitle(title) {
  noStroke();

  fill(255, 255, 255, 22);
  ellipse(150, 120, 220);
  ellipse(1050, 620, 300);

  fill(0, 70);
  rect(width / 2 - 300, 34, 600, 112, 26);

  fill(255, 248, 232, 235);
  rect(width / 2 - 290, 26, 580, 112, 26);

  fill(48, 38, 35);
  textStyle(BOLD);
  textSize(46);
  text(title, width / 2, 64);

  fill(166, 86, 48);
  textStyle(ITALIC);
  textSize(21);
  text("Select a Tourist Place", width / 2, 112);

  textStyle(NORMAL);
}

function drawPlaceCard(x, y, title, img) {  // img comes as parameter
  let w = 260;
  let h = 200;

  let hover =
    mouseX > x &&
    mouseX < x + w &&
    mouseY > y &&
    mouseY < y + h;

  noStroke();

  fill(0, 75);
  rect(x + 8, y + 10, w, h, 24);

  if (hover) {
    fill(255, 232, 178);
    cursor(HAND);
  } else {
    fill(255, 248, 232, 238);
  }
  rect(x, y, w, h, 24);

  // ✅ NO "let img" here — just use the parameter directly
  if (img) {
    image(img, x + 18, y + 18, w - 36, 95);
  }

  fill(38, 34, 32);
  textSize(25);
  text(title, x + w / 2, y + 150);

  fill(120, 78, 50);
  textStyle(ITALIC);
  textSize(16);
  text("Click to Explore", x + w / 2, y + 180);

  textStyle(NORMAL);
}

function drawGradientBackground(c1, c2) {
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }

  noStroke();
}

function backButton() {
  noStroke();

  fill(0, 75);
  rect(27, 27, 110, 42, 12);

  fill(255, 246, 225);
  rect(20, 20, 110, 42, 12);

  fill(45, 55, 70);
  textStyle(BOLD);
  textSize(18);
  text("BACK", 75, 41);

  textStyle(NORMAL);
}

// MOUSE INTERACTION

function mousePressed() {
  if (gameState === "home") {
    let bx = width / 2 - 160;
    let by = 500;
    let bw = 320;
    let bh = 82;

    if (mouseX > bx && mouseX < bx + bw && mouseY > by && mouseY < by + bh) {
      gameState = "map";
    }
  } else if (gameState === "map") {
    if (mouseX > 20 && mouseX < 130 && mouseY > 20 && mouseY < 62) {
      gameState = "home";
    } else if (mouseX > 170 && mouseX < 430 && mouseY > 140 && mouseY < 320) {
      gameState = "gwalior";
    } else if (mouseX > 320 && mouseX < 680 && mouseY > 240 && mouseY < 450) {
      gameState = "bhopal";
    } else if (mouseX > 620 && mouseX < 980 && mouseY > 250 && mouseY < 520) {
      gameState = "jabalpur";
    } else if (mouseX > 120 && mouseX < 500 && mouseY > 280 && mouseY < 600) {
      gameState = "malwa";
    }
  } else {
    if (mouseX > 20 && mouseX < 130 && mouseY > 20 && mouseY < 62) {
      gameState = "map";
    }
  }
}

