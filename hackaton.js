let scene = "map";

let imgs = {};

function preload() {
  imgs.gwalior = loadImage(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Gwalior_Fort%2C_Madhya_Pradesh.jpg/640px-Gwalior_Fort%2C_Madhya_Pradesh.jpg",
    () => {},
    () => imgs.gwalior = null
  );

  imgs.manSingh = loadImage(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Man_Mandir_Palace%2C_Gwalior_Fort.jpg/640px-Man_Mandir_Palace%2C_Gwalior_Fort.jpg",
    () => {},
    () => imgs.manSingh = null
  );

  imgs.jaiVilas = loadImage(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Jai_Vilas_Palace.jpg/640px-Jai_Vilas_Palace.jpg",
    () => {},
    () => imgs.jaiVilas = null
  );

  imgs.sasBahu = loadImage(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Sasbahu_temple_Gwalior.jpg/640px-Sasbahu_temple_Gwalior.jpg",
    () => {},
    () => imgs.sasBahu = null
  );

  imgs.teli = loadImage(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Teli_ka_Mandir.jpg/640px-Teli_ka_Mandir.jpg",
    () => {},
    () => imgs.teli = null
  );

  imgs.orchha = loadImage(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Orchha_Cenotaphs.jpg/640px-Orchha_Cenotaphs.jpg",
    () => {},
    () => imgs.orchha = null
  );
}

function setup() {
  createCanvas(1200, 750);
  textAlign(CENTER, CENTER);
  textFont("Georgia");
}

function draw() {
  if(scene === "map") drawMap();
  else if(scene === "gwalior") drawGwaliorRegion();
  else if(scene === "bhopal") drawSimpleRegion("BHOPAL REGION", ["Sanchi Stupa", "Upper Lake", "Bhimbetka"], color(140,210,255));
  else if(scene === "jabalpur") drawSimpleRegion("JABALPUR REGION", ["Bhedaghat", "Dhuandhar Falls", "Madan Mahal"], color(120,180,255));
  else if(scene === "malwa") drawSimpleRegion("MALWA REGION", ["Ujjain", "Mandu", "Omkareshwar"], color(255,170,120));
}

function drawMap() {
  for(let i=0;i<height;i++){
    let c = lerpColor(color(120,180,255), color(255,220,170), i/height);
    stroke(c);
    line(0,i,width,i);
  }

  noStroke();
  fill(255);
  textSize(42);
  text("MADHYA PRADESH TOURISM", width/2, 50);

  textSize(20);
  text("Click a region to explore", width/2, 95);

  stroke(60,100,60);
  strokeWeight(4);

  fill(165,210,140);
  beginShape();
  vertex(180,180); vertex(360,140); vertex(430,240); vertex(320,320); vertex(170,280);
  endShape(CLOSE);

  fill(130,190,120);
  beginShape();
  vertex(320,320); vertex(430,240); vertex(620,250); vertex(680,390); vertex(500,450); vertex(340,420);
  endShape(CLOSE);

  fill(100,170,110);
  beginShape();
  vertex(620,250); vertex(860,260); vertex(980,390); vertex(860,520); vertex(680,390);
  endShape(CLOSE);

  fill(90,150,100);
  beginShape();
  vertex(170,280); vertex(320,320); vertex(340,420); vertex(500,450); vertex(450,600); vertex(220,580); vertex(120,430);
  endShape(CLOSE);

  noStroke();
  fill(255);
  textSize(24);

  text("GWALIOR\nCHAMBAL",280,220);
  text("BHOPAL\nREGION",500,340);
  text("JABALPUR\nREGION",820,370);
  text("MALWA",320,520);
}

function mousePressed() {
  if(scene === "map"){
    if(mouseX > 170 && mouseX < 430 && mouseY > 140 && mouseY < 320) scene = "gwalior";
    else if(mouseX > 320 && mouseX < 680 && mouseY > 240 && mouseY < 450) scene = "bhopal";
    else if(mouseX > 620 && mouseX < 980 && mouseY > 250 && mouseY < 520) scene = "jabalpur";
    else if(mouseX > 120 && mouseX < 500 && mouseY > 280 && mouseY < 600) scene = "malwa";
  }

  if(mouseX > 30 && mouseX < 140 && mouseY > 30 && mouseY < 80){
    scene = "map";
  }
}

function drawGwaliorRegion() {
  background(240, 190, 140);

  titleBox("GWALIOR - CHAMBAL REGION");

  imageCard(220,250,imgs.gwalior,"Gwalior Fort");
  imageCard(600,250,imgs.manSingh,"Man Singh Palace");
  imageCard(980,250,imgs.jaiVilas,"Jai Vilas Palace");

  imageCard(220,520,imgs.sasBahu,"Sas Bahu Temple");
  imageCard(600,520,imgs.teli,"Teli Ka Mandir");
  imageCard(980,520,imgs.orchha,"Orchha");

  backButton();
}

function imageCard(x,y,img,label){
  fill(255);
  stroke(220);
  strokeWeight(3);
  rect(x-140,y-100,280,200,20);

  if(img){
    image(img, x-120, y-80, 240, 120);
  } else {
    fill(180);
    rect(x-120,y-80,240,120,12);
    fill(80);
    textSize(16);
    text("Image Loading...", x, y-20);
  }

  fill(60);
  noStroke();
  textSize(20);
  text(label, x, y+65);
}

function drawSimpleRegion(title, places, bg){
  background(bg);
  titleBox(title);

  placeCard(300,250,places[0]);
  placeCard(600,250,places[1]);
  placeCard(900,250,places[2]);

  backButton();
}

function placeCard(x,y,name){
  fill(255);
  stroke(255);
  rect(x-120,y-80,240,160,20);

  fill(60);
  noStroke();
  textSize(24);
  text(name,x,y);
}

function titleBox(txt){
  fill(255,240);
  noStroke();
  rect(width/2-250,30,500,70,20);

  fill(0);
  textSize(34);
  text(txt,width/2,65);
}

function backButton(){
  fill(255);
  rect(30,30,110,50,15);

  fill(0);
  textSize(22);
  text("BACK",85,55);
}