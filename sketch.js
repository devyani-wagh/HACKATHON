let gameState = "home"; // State control: 'home', 'map', 'gwalior', etc.
let startButtonHover = false;
let buttonPulse = 0;

function setup() {
  createCanvas(1200, 750);
  textAlign(CENTER, CENTER);
  textFont("poppins");
}

function draw() {
  if (gameState === "home") {
    drawHomeScreen();
  } else if (gameState === "map") {
    drawMapScreen();
  } else if (gameState === "gwalior") {
    drawGwaliorRegion();
  } else if (gameState === "bhopal") {
    drawBhopalRegion();
  } else if (gameState === "jabalpur") {
    drawJabalpurRegion();
  } else if (gameState === "malwa") {
    drawMalwaRegion();
  }
}

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
    let c = t < 0.45 ? lerpColor(color(18, 42, 92), color(92, 90, 180), t / 0.45) : 
            lerpColor(color(92, 90, 180), color(255, 155, 95), (t - 0.45) / 0.55);
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
  noStroke();
}

function drawInfoPanel() {
  fill(255, 248, 232, 228);
  rect(width / 2 - 385, 285, 770, 122, 26);
  fill(42, 35, 28);
  textSize(26);
  text("Discover forts, temples, waterfalls,\nheritage sites and culture across Madhya Pradesh", width / 2, 346);
}

function drawStartButton() {
  let bx = width / 2 - 160, by = 462, bw = 320, bh = 82;
  startButtonHover = mouseX > bx && mouseX < bx + bw && mouseY > by && mouseY < by + bh;
  buttonPulse = sin(frameCount * 0.06) * 2.5;

  if (startButtonHover) {
    fill(255, 198, 78);
    cursor(HAND);
  } else {
    fill(218, 94, 45);
    cursor(ARROW);
  }
  rect(bx, by - buttonPulse, bw, bh, 22);
  fill(255);
  textSize(29);
  textStyle(BOLD);
  text("START JOURNEY", width / 2, by + bh / 2 - buttonPulse);
}

// PHASE 2: MAP SCREEN FUNCTIONS

 function drawMapScreen() {

  cursor(ARROW);

  // BACKGROUND

  for(let i=0; i<height; i++){

    let c = lerpColor(
      color(12,22,40),
      color(45,75,120),
      i/height
    );

    stroke(c);

    line(0,i,width,i);
  }

  // TITLE

  noStroke();

  fill(0,80);

  textSize(42);

  text(
    "MADHYA PRADESH TOURISM",
    width/2 + 3,
    53
  );

  fill(255);

  text(
    "MADHYA PRADESH TOURISM",
    width/2,
    50
  );

  fill(220);

  textSize(20);

  text(
    "Click a region to explore",
    width/2,
    95
  );

  // REGION BORDERS


  stroke(255,255,255,90);

  strokeWeight(4);


  // GWALIOR


  fill(141,188,143);

  beginShape();

  vertex(180,180);
  vertex(360,140);
  vertex(430,240);
  vertex(320,320);
  vertex(170,280);

  endShape(CLOSE);

  // BHOPAL

  fill(70,150,170);

  beginShape();

  vertex(320,320);
  vertex(430,240);
  vertex(620,250);
  vertex(680,390);
  vertex(500,450);
  vertex(340,420);

  endShape(CLOSE);

 
  // JABALPUR


  fill(65,105,185);

  beginShape();

  vertex(620,250);
  vertex(860,260);
  vertex(980,390);
  vertex(860,520);
  vertex(680,390);
  endShape(CLOSE);
  // MALWA

  fill(190,125,75);

  beginShape();

  vertex(170,280);
  vertex(320,320);
  vertex(340,420);
  vertex(500,450);
  vertex(450,600);
  vertex(220,580);
  vertex(120,430);
  endShape(CLOSE);
  noStroke();

  fill(255);

  textSize(24);

  text("GWALIOR",280,220);

  text("BHOPAL",500,340);

  text("JABALPUR",820,370);

  text("MALWA",320,520);

  // BACK BUTTON
 
  fill(255,240);

  rect(20,20,110,42,12);

  fill(20);

  textSize(18);

  text("BACK",75,41);
}

function drawGwaliorRegion() {
  background(245,190,140);
  fill(0); 
  text("GWALIOR DETAILS", width/2, height/2); 
  backButton(); }
function drawBhopalRegion() {
  background(140,210,255); fill(0);
  text("BHOPAL DETAILS", width/2, height/2); 
  backButton(); }
function drawJabalpurRegion() { 
  background(200,255,200); 
  fill(0); text("JABALPUR DETAILS", width/2, height/2); 
  backButton(); }
function drawMalwaRegion() { 
  background(255,200,200);
  fill(0); text("MALWA DETAILS", width/2, height/2);
  backButton(); }

function backButton() {
  fill(50); rect(20, 20, 100, 40, 10);
  fill(255); textSize(16); 
  text("BACK", 70, 40);
}

function mousePressed() {
  if (gameState === "home") {
    let bx = width / 2 - 160, by = 462, bw = 320, bh = 82;
    if (mouseX > bx && mouseX < bx + bw && mouseY > by && mouseY < by + bh) {
      gameState = "map";
    }
  } 
  else if (gameState === "map") {
   
    if (mouseX > 20 && mouseX < 120 && mouseY > 20 && mouseY < 60)
       gameState = "home";
    if(mouseX > 170 && mouseX < 430 && mouseY > 140 && mouseY < 320) 
      gameState = "gwalior";
    else if(mouseX > 320 && mouseX < 680 && mouseY > 240 && mouseY < 450)
       gameState = "bhopal";
    else if(mouseX > 620 && mouseX < 980 && mouseY > 250 && mouseY < 520) 
      gameState = "jabalpur";
    else if(mouseX > 120 && mouseX < 500 && mouseY > 280 && mouseY < 600) 
      gameState = "malwa";
  } 
  else {
    if (mouseX > 20 && mouseX < 120 && mouseY > 20 && mouseY < 60) 
      gameState = "map";
  }
}