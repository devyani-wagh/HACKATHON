let gameState = "home";
let startButtonHover = false;
let buttonPulse = 0;
var gwaliorFort, jaiVilas, orchha, sanchi, bhimbetka, dhuandhar, marble, ujjain, omkareshwar,
fort1,fort2,fort3,fort4,fort5,palace1,palace2,palace3,palace4,palace5,o1,o2,o3,o4,o5,s1,s2,s3,s4,s5,b1,b2,b3,b4,b5,d1,d2,d3,d4,d5,m1,m2,m3,m4,m5,
u1,u2,u3,u4,u5,om1,om2,om3,om4,om5;
var clickSound;
let currentPlace = null;
let slideTimer = 0;
let slideDuration = 180;
let historyScroll = 0;
let leftArrowHover = false;
let rightArrowHover = false;
let paraHeight = 90;
let places = {};
function preload() {
  gwaliorFort = loadImage("assets/gwaliorfort.jpeg",
    () => console.log("image loaded!"),
    () => console.log("image FAILED to load")
  );
  jaiVilas = loadImage("assets/jaivilas.jpeg");
  orchha = loadImage("assets/orchha.jpeg");
  sanchi = loadImage("assets/sanchi.jpeg");
  bhimbetka = loadImage("assets/bhimbetka.jpeg");
  dhuandhar = loadImage("assets/dhuandhar.jpeg");
  marble  = loadImage("assets/marble.jpeg");
  ujjain = loadImage("assets/ujjain.jpeg");
  omkareshwar = loadImage("assets/omkareshwar.jpeg");
  fort1 = loadImage("assets/fort1.jpeg");
  fort2 = loadImage("assets/fort2.jpeg");
  fort3 = loadImage("assets/fort3.jpeg");
  fort4 = loadImage("assets/fort4.jpeg");
  fort5 = loadImage("assets/fort5.jpeg");
  palace1 = loadImage(assets/palace1.jpeg);
  palace2 = loadImage(assets/palace2.jpeg);
  palace3 = loadImage(assets/palace3.jpeg);
  palace4 = loadImage(assets/palace4.jpeg);
  palace5 = loadImage(assets/palace5.jpeg);
  o1 = loadImage(assets/o1.jpeg);
  o2 = loadImage(assets/o2.jpeg);
  o3 = loadImage(assets/o3.jpeg);
  o4 = loadImage(assets/o4.jpeg);
  o5 = loadImage(assets/o5.jpeg);
  s1 = loadImage(assets/s1.jpeg);
  s2 = loadImage(assets/s2.jpeg);
  s3 = loadImage(assets/s3.jpeg);
  s4 = loadImage(assets/s4.jpeg);
  s5 = loadImage(assets/s5.jpeg);
 b1 = loadImage("assets/b1.jpeg");
 b2 = loadImage("assets/b2.jpeg");
 b3 = loadImage("assets/b3.jpeg");
 b4 = loadImage("assets/b4.jpeg");
 b5 = loadImage("assets/b5.jpeg");
 d1 = loadImage("assets/d1.jpeg");
 d2 = loadImage("assets/d2.jpeg");
 d3 = loadImage("assets/d3.jpeg");
 d4 = loadImage("assets/d4.jpeg");
 d5 = loadImage("assets/d5.jpeg");
 m1 = loadImage("assets/m1.jpeg");
 m2 = loadImage("assets/m2.jpeg");
 m3 = loadImage("assets/m3.jpeg");
 m4 = loadImage("assets/m4.jpeg");
 m5 = loadImage("assets/m5.jpeg");
 u1 = loadImage("assets/u1.jpeg");
 u2 = loadImage("assets/u2.jpeg");
 u3 = loadImage("assets/u3.jpeg");
 u4 = loadImage("assets/u4.jpeg");
 u5 = loadImage("assets/u5.jpeg");
 om1 = loadImage("assets/om1.jpeg");
 om2 = loadImage("assets/om2.jpeg");
 om3 = loadImage("assets/om3.jpeg");
 om4 = loadImage("assets/om4.jpeg");
 om5 = loadImage("assets/om5.jpeg");
  clickSound = loadSound("assets/click.wav");
}
function setup() {
  createCanvas(1200, 750);
  textAlign(CENTER, CENTER);
  textFont("Georgia");
  initPlaces();
}
function initPlaces() {
  places = {
    gwaliorFort: {
      name: "Gwalior Fort", 
      wiki: "https://en.wikipedia.org/wiki/Gwalior_Fort",
      region: "gwalior",
      images: [gwaliorFort, fort1, fort2, fort3, fort4,fort5], 
      slideIndex: 0,
      theme: [color(55, 32, 25), 
      color(175, 105, 65)],
      history: [
        "Gwalior Fort is one of India's most impregnable fortresses, perched on a 35-metre high rock plateau. It has been called 'the pearl among fortresses in Hind' by the Mughal Emperor Babur.",
        "The fort has a long history dating back to the 6th century AD. It was ruled by various dynasties including the Kachwaha Rajputs, Tomars, Mughals, and the Marathas before coming under British rule.",
        "The Tomar ruler Man Singh (1486–1516) built many of the fort's iconic structures, including the magnificent Man Mandir Palace with its distinctive blue-tiled towers and ornate jali screens.",
        "Inside the fort lies the Sas-Bahu temple complex, the Teli Ka Mandir (one of the oldest temples in the fort), and rock-cut Jain sculptures carved into the cliff faces.",
        "Today, Gwalior Fort is a UNESCO tentative World Heritage Site and draws thousands of visitors who come to witness its stunning architecture and panoramic views of the city. Check wikipedia for more info"
        
      ]
    },
    jaiVilas: {
      name: "Jai Vilas Palace", 
      wiki: "https://en.wikipedia.org/wiki/Jai_Vilas_Palace",
      region: "gwalior",
      images: [jaiVilas], 
      slideIndex: 0,
      theme: [color(55, 32, 25), 
      color(175, 105, 65)],
      history: [
        "Jai Vilas Palace is a magnificent 19th-century palace in Gwalior, built in 1874 by Maharaja Jayajirao Scindia. It blends Tuscan, Italian, and Corinthian architectural styles.",
        "The palace has 400 rooms, of which 40 have been converted into a museum. The remaining rooms are still used as the official residence of the Scindia royal family.",
        "Its Durbar Hall is its crowning glory — two massive crystal chandeliers, each weighing 3.5 tonnes, hang from the ceiling. Legend says eight elephants were hoisted onto the roof to test its load-bearing capacity before the chandeliers were installed.",
        "The museum houses a remarkable collection of antiques including crystal furniture, Chinese jade, Flemish paintings, gold and silver artefacts, and a model railway that carried after-dinner drinks around the dining table.",
        "The palace stands as a testament to the opulence and cosmopolitan tastes of the Scindia dynasty and remains one of the finest examples of colonial-era Indian royal architecture."
      ]
    },
    orchha: {
      name: "Orchha", 
      wiki: "https://en.wikipedia.org/wiki/Orchha",
      region: "gwalior",
      images: [orchha], 
      slideIndex: 0,
      theme: [color(55, 32, 25), 
      color(175, 105, 65)],
      history: [
        "Orchha, meaning 'hidden' in Hindi, is a medieval town on the banks of the Betwa River in Madhya Pradesh. It was founded in the 16th century by the Bundela Rajput chief Rudra Pratap Singh.",
        "The town served as the capital of the Bundela kingdom and flourished between the 16th and 18th centuries. Its architectural gems — palaces, temples, and cenotaphs — remain remarkably well preserved.",
        "The Ram Raja Temple here is unique in all of India: it is the only place where Lord Ram is worshipped as a king and given a guard of honour by the police twice daily.",
        "Orchha's palaces — the Jahangir Mahal, Raj Mahal, and Rai Praveen Mahal — are adorned with intricate murals depicting scenes from Hindu mythology and the life of the Bundela rulers.",
        "The 14 cenotaphs (chhatris) of the Bundela kings stand elegantly on the banks of the Betwa River and are among the most photogenic monuments of central India."
      ]
    },
    sanchi: {
      name: "Sanchi Stupa", 
      wiki: "https://en.wikipedia.org/wiki/Sanchi_Stupa",
      region: "bhopal",
      images: [sanchi], 
      slideIndex: 0,
      theme: [color(18, 48, 78), 
      color(55, 150, 170)],
      history: [
        "Sanchi is home to the oldest stone structures in India, most notably the Great Stupa, commissioned by the Mauryan Emperor Ashoka in the 3rd century BCE after his conversion to Buddhism.",
        "The Great Stupa (Stupa No. 1) is a hemispherical dome built over the relics of the Buddha. It stands 16.46 metres high and 36.6 metres in diameter, surrounded by an elaborate stone railing.",
        "The four ornamental gateways (toranas) of the Great Stupa, built in the 1st century BCE, are masterpieces of Buddhist art. They depict scenes from the Jataka tales and the life of the Buddha.",
        "Sanchi was lost to the world for centuries until rediscovered by a British officer, General Taylor, in 1818. Restoration work by Sir John Marshall in the early 20th century brought it back to its former glory.",
        "Sanchi was inscribed as a UNESCO World Heritage Site in 1989 and remains one of the most important Buddhist pilgrimage centres in the world."
      ]
    },
    bhimbetka: {
      name: "Bhimbetka Caves", 
      wiki: "https://en.wikipedia.org/wiki/Bhimbetka",
      region: "bhopal",
      images: [bhimbetka], 
      slideIndex: 0,
      theme: [color(18, 48, 78), 
      color(55, 150, 170)],
      history: [
        "Bhimbetka is an archaeological treasure in the foothills of the Vindhyan range, about 45 km south of Bhopal. It contains the earliest traces of human life on the Indian subcontinent.",
        "The site was discovered in 1957 by archaeologist V.S. Wakankar, who noticed the rock formations while travelling by train and was reminded of similar cave sites he had seen in Spain and France.",
        "Bhimbetka shelters more than 700 rock shelters spread over 10 km, of which 243 are protected by the Archaeological Survey of India. The rock paintings here date from the Upper Palaeolithic period, some over 30,000 years old.",
        "The paintings depict the daily life of the prehistoric inhabitants — hunting scenes, dancing, music, rituals, and animals like bison, rhinoceros, bears, tigers, and elephants.",
        "Bhimbetka was declared a UNESCO World Heritage Site in 2003."
      ]
    },
    dhuandhar: {
      name: "Dhuandhar Falls", 
      wiki: "https://en.wikipedia.org/wiki/Dhuandhar_Falls",
      region: "jabalpur",
      images: [dhuandhar], 
      slideIndex: 0,
      theme: [color(20, 68, 55), color(90, 175, 140)],
      history: [
        "Dhuandhar Falls — meaning 'smoke cascade' in Hindi — is one of India's most spectacular waterfalls, located near Jabalpur where the Narmada River rushes through the famous Marble Rocks gorge.",
        "The waterfall is formed when the Narmada River suddenly plunges into a gorge just 20 metres wide, sending up a cloud of mist that hangs over the area — giving the falls its evocative name.",
        "The falls drop about 15 metres and roar with extraordinary power, especially during and after the monsoon season (July–September) when the river is in full spate.",
        "The surrounding Bhedaghat area features stunning white marble cliffs rising 25 metres above the river. Boat rides through the marble gorge by moonlight are considered one of the most magical experiences in central India.",
        "The site has been a source of inspiration for artists, poets, and writers for centuries."
      ]
    },
    marble: {
      name: "Marble Rocks", 
      wiki: "https://en.wikipedia.org/wiki/Marble_Rocks",
      region: "jabalpur",
      images: [marble], 
      slideIndex: 0,
      theme: [color(20, 68, 55), 
      color(90, 175, 140)],
      history: [
        "The Marble Rocks of Bhedaghat, near Jabalpur, form a 3-km gorge on the Narmada River flanked by towering cliffs of white magnesian limestone that shimmer and glow in sunlight and moonlight.",
        "The gorge is about 100 feet deep. The swirling green water of the Narmada against the gleaming white and grey cliffs creates one of India's most visually stunning natural spectacles.",
        "Bhedaghat has been a sacred site for centuries. The name itself comes from 'Bhedan', meaning to pierce — a reference to the gorge cut by the Narmada through solid rock over millennia.",
        "The area is home to the Chausath Yogini Temple, a 10th-century circular temple dedicated to 64 yoginis associated with Tantric worship, sitting on a hilltop with commanding views of the gorge.",
        "The Marble Rocks were declared a National Geo-heritage Monument by the Geological Survey of India and attract hundreds of thousands of visitors annually."
      ]
    },
    ujjain: {
      name: "Ujjain", 
      wiki: "https://en.wikipedia.org/wiki/Ujjain",
      region: "malwa",
      images: [ujjain], 
      slideIndex: 0,
      theme: [color(75, 38, 54), 
      color(210, 125, 88)],
      history: [
        "Ujjain is one of the seven sacred cities (Sapta Puri) of Hinduism, located on the eastern bank of the Kshipra River. It is one of the oldest continuously inhabited cities in India.",
        "In ancient times, Ujjain was known as Ujjayini and served as the capital of the Avanti Mahajanapada. The great poet Kalidasa is believed to have lived and composed his works here.",
        "Ujjain is home to the Mahakaleshwar Jyotirlinga — one of the twelve sacred Jyotirlingas of Shiva in India. The Mahakal temple is one of the most visited pilgrimage sites in the country.",
        "The city is also the site of one of the four Kumbh Mela locations. The Simhastha Kumbh Mela held here every 12 years draws tens of millions of pilgrims.",
        "In ancient astronomy, Ujjain was considered the prime meridian for calculations in Hindu astronomy. The Jantar Mantar observatory here was built by Maharaja Jai Singh II in the 18th century."
      ]
    },
    omkareshwar: {
      name: "Omkareshwar", 
      wiki: "https://en.wikipedia.org/wiki/Omkareshwar",
      region: "malwa",
      images: [omkareshwar], 
      slideIndex: 0,
      theme: [color(75, 38, 54), 
      color(210, 125, 88)],
      history: [
        "Omkareshwar is a sacred Hindu island town formed by a fork of the Narmada River in Madhya Pradesh. The island naturally takes the shape of the Hindu symbol 'Om' (ॐ) when viewed from above.",
        "The island is home to one of the twelve Jyotirlingas — the Omkareshwar Jyotirlinga — housed in the Shri Omkar Mandhata temple on the island's summit. Millions of pilgrims visit each year.",
        "The Mammleshwar temple on the mainland opposite the island is also considered part of the Omkareshwar Jyotirlinga site. Together, the two temples are believed to embody the complete Jyotirlinga.",
        "The town has been a centre of religious activity for over 2,000 years. Adi Shankaracharya is said to have met his teacher Govinda Bhagavadpada here and received initiation into Advaita Vedanta.",
        "Omkareshwar's ghats along the Narmada are especially beautiful during sunrise and sunset. The evening aarti on the riverbank is a deeply moving spiritual experience."
      ]
    }
  };
}

function draw() {
  if      (gameState === "home")     drawHomeScreen();
  else if (gameState === "map")      drawMapScreen();
  else if (gameState === "gwalior")  drawGwaliorRegion();
  else if (gameState === "bhopal")   drawBhopalRegion();
  else if (gameState === "jabalpur") drawJabalpurRegion();
  else if (gameState === "malwa")    drawMalwaRegion();
  else if (gameState === "detail")   drawDetailScreen();
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
  vertex(470, 750); vertex(560, 520); vertex(640, 520); vertex(735, 750);
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
  text("Discover forts, temples, waterfalls,\nheritage sites and culture across Madhya Pradesh", width / 2, 346);
  textStyle(NORMAL);
}

function drawStartButton() {
  let bx = width / 2 - 160, by = 500, bw = 320, bh = 82;
  startButtonHover = (mouseX > bx && mouseX < bx + bw && mouseY > by && mouseY < by + bh);
  buttonPulse = sin(frameCount * 0.06) * 2.5;
  noStroke();
  fill(0, 85); rect(bx + 8, by + 11, bw, bh, 22);
  if (startButtonHover) { 
    fill(255, 195, 70); cursor(HAND); }
  else                  { 
    fill(224, 102, 48); 
  cursor(ARROW); }
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
  fill(255, 192, 90, 45); ellipse(980, 145, 270);
  fill(255); textStyle(BOLD); textSize(46);
  text("MADHYA PRADESH TOURISM", width / 2, 55);
  fill(255, 234, 200); textStyle(ITALIC); textSize(22);
  text("Click a Region to Explore", width / 2, 100);

  noStroke(); fill(0, 70);
  beginShape();
  vertex(188,188); 
  vertex(368,148); 
  vertex(438,248); 
  vertex(628,258);
  vertex(868,268); 
  vertex(988,398); 
  vertex(868,528); 
  vertex(688,398);
  vertex(508,458); 
  vertex(458,608); 
  vertex(228,588); 
  vertex(128,438);
  vertex(178,288);
  endShape(CLOSE);

  stroke(35, 74, 62); 
  strokeWeight(4);

  fill(186, 224, 146);
  beginShape();
  vertex(180,180); 
  vertex(360,140); 
  vertex(430,240); 
  vertex(320,320); 
  vertex(170,280);
  endShape(CLOSE);

  fill(92, 184, 165);
  beginShape();
  vertex(320,320); 
  vertex(430,240); 
  vertex(620,250); 
  vertex(680,390); 
  vertex(500,450); 
  vertex(340,420);
  endShape(CLOSE);

  fill(82, 137, 204);
  beginShape();
  vertex(620,250); 
  vertex(860,260); 
  vertex(980,390); 
  vertex(860,520); 
  vertex(680,390);
  endShape(CLOSE);

  fill(213, 137, 78);
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
  textStyle(BOLD);
  textSize(24);
  fill(0, 85);
  text("GWALIOR",282,222); 
  text("BHOPAL",502,342);
  text("JABALPUR",822,372); 
  text("MALWA",322,522);
  fill(255, 250, 235);
  text("GWALIOR",280,220); 
  text("BHOPAL",500,340);
  text("JABALPUR",820,370); text("MALWA",320,520);
  backButton();
}

// REGION SCREENS 

function drawGwaliorRegion() {
  drawGradientBackground(color(55, 32, 25), color(175, 105, 65));
  regionTitle("GWALIOR REGION");
  drawPlaceCard(80,  220, "Gwalior Fort",    gwaliorFort, "gwaliorFort");
  drawPlaceCard(470, 220, "Jai Vilas Palace", jaiVilas,   "jaiVilas");
  drawPlaceCard(860, 220, "Orchha",           orchha,     "orchha");
  backButton();
}

function drawBhopalRegion() {
  drawGradientBackground(color(18, 48, 78), color(55, 150, 170));
  regionTitle("BHOPAL REGION");
  drawPlaceCard(180, 220, "Sanchi Stupa", sanchi,    "sanchi");
  drawPlaceCard(720, 220, "Bhimbetka",    bhimbetka, "bhimbetka");
  backButton();
}

function drawJabalpurRegion() {
  drawGradientBackground(color(20, 68, 55), color(90, 175, 140));
  regionTitle("JABALPUR REGION");
  drawPlaceCard(180, 220, "Dhuandhar Falls", dhuandhar, "dhuandhar");
  drawPlaceCard(720, 220, "Marble Rocks",    marble,    "marble");
  backButton();
}

function drawMalwaRegion() {
  drawGradientBackground(color(75, 38, 54), color(210, 125, 88));
  regionTitle("MALWA REGION");
  drawPlaceCard(180, 220, "Ujjain",      ujjain,      "ujjain");
  drawPlaceCard(720, 220, "Omkareshwar", omkareshwar, "omkareshwar");
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

function drawPlaceCard(x, y, title, img, placeKey) {
  let w = 260, h = 200;
  let hover = (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h);
  noStroke();
  fill(0, 75); 
  rect(x + 8, y + 10, w, h, 24);
  if (hover) { 
  fill(255, 232, 178); cursor(HAND); }
  else  { 
  fill(255, 248, 232, 238); }
  rect(x, y, w, h, 24);
  if (img) { 
  image(img, x + 18, y + 18, w - 36, 95); }
  fill(38, 34, 32); 
  textSize(25);
  text(title, x + w / 2, y + 150);
  fill(120, 78, 50); 
  textStyle(ITALIC); textSize(16);
  text("Click to Explore", x + w / 2, y + 180);
  textStyle(NORMAL);
}

function drawGradientBackground(c1, c2) {
  for (let y = 0; y < height; y++) {
    stroke(lerpColor(c1, c2, y / height));
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

// DETAIL SCREEN 

function drawDetailScreen() {
  if (!currentPlace) { 
    gameState = "map"; return; }
  let p = places[currentPlace];

  drawGradientBackground(p.theme[0], p.theme[1]);

  // title bar
  noStroke();
  fill(0, 70);          
  rect(width / 2 - 350, 14, 700, 68, 20);
  fill(255, 248, 232, 235); 
  rect(width / 2 - 340, 8, 680, 68, 20);
  fill(48, 38, 35); 
  textStyle(BOLD); 
  textSize(36);
  text(p.name, width / 2, 42);
  textStyle(NORMAL);

  // slideshow
  let sx = 40, sy = 100, sw = 580, sh = 360;
  slideTimer++;
  if (slideTimer >= slideDuration) {
    slideTimer = 0;
    p.slideIndex = (p.slideIndex + 1) % p.images.length;
  }

  fill(0, 80); 
  rect(sx + 8, sy + 8, sw, sh, 16);
  fill(255, 248, 232, 230); 
  rect(sx, sy, sw, sh, 16);

  let img = p.images[p.slideIndex];
  if (img) {
    push();
    drawingContext.save();
    let rc = drawingContext;
    rc.beginPath();
    rc.moveTo(sx+16, sy); 
    rc.lineTo(sx+sw-16, sy);
    rc.quadraticCurveTo(sx+sw, sy, sx+sw, sy+16);
    rc.lineTo(sx+sw, sy+sh-16);
    rc.quadraticCurveTo(sx+sw, sy+sh, sx+sw-16, sy+sh);
    rc.lineTo(sx+16, sy+sh);
    rc.quadraticCurveTo(sx, sy+sh, sx, sy+sh-16);
    rc.lineTo(sx, sy+16);
    rc.quadraticCurveTo(sx, sy, sx+16, sy);
    rc.closePath(); rc.clip();
    image(img, sx, sy, sw, sh);
    rc.restore();
    pop();
  }

  // dots
  let dotY = sy + sh + 24;
  let total = p.images.length;
  let dotSpacing = 22;
  let dotStartX = sx + sw / 2 - (total - 1) * dotSpacing / 2;
  for (let i = 0; i < total; i++) {
    noStroke();
    fill(i === p.slideIndex ? color(255, 210, 100) : color(255, 255, 255, 120));
    ellipse(dotStartX + i * dotSpacing, dotY, 12);
  }

  // arrows
  let arrowY = sy + sh / 2, arrowW = 44, arrowH = 44;
  let leftAX  = sx + 12;
  let rightAX = sx + sw - 12 - arrowW;
  leftArrowHover  = (mouseX>leftAX  && mouseX<leftAX+arrowW  && mouseY>arrowY-arrowH/2 && mouseY<arrowY+arrowH/2);
  rightArrowHover = (mouseX>rightAX && mouseX<rightAX+arrowW && mouseY>arrowY-arrowH/2 && mouseY<arrowY+arrowH/2);
  drawArrowBtn(leftAX,  arrowY, arrowW, arrowH, "left",  leftArrowHover);
  drawArrowBtn(rightAX, arrowY, arrowW, arrowH, "right", rightArrowHover);
  if (leftArrowHover || rightArrowHover) cursor(HAND); else cursor(ARROW);

  // history panel
  let hx = 650, hy = 100, hw = 510, hh = 550;
  fill(0, 70);          
   rect(hx + 6, hy + 6, hw, hh, 20);
  fill(255, 248, 232, 235);
   rect(hx, hy, hw, hh, 20);
  fill(80, 45, 25); 
  textStyle(BOLD); 
  textSize(20);
  text("History & Heritage", hx + hw / 2, hy + 30);
  stroke(180, 120, 60, 160);
  strokeWeight(1.5);
  line(hx + 30, hy + 48, hx + hw - 30, hy + 48);
  noStroke();

  let lineH = 24, wrapW = hw - 52;
  drawingContext.save();
  drawingContext.beginPath();
  drawingContext.rect(hx + 2, hy + 52, hw - 4, hh - 60);
  drawingContext.clip();

  textAlign(LEFT, TOP);
  textStyle(NORMAL); 
  textSize(15);
  fill(52, 40, 32);

  let curY = hy + 68 - historyScroll;
  for (let i = 0; i < p.history.length; i++) {
    if (curY > hy + 48 && curY < hy + hh + 40) {
      noStroke();
      fill(190, 110, 50, 200); 
      ellipse(hx + 22, curY + 8, 20);
      fill(255, 245, 220); 
      textSize(12); 
      textAlign(CENTER, TOP);
      text(i + 1, hx + 22, curY + 2);
      textAlign(LEFT, TOP); 
      textSize(15); fill(52, 40, 32);
    }
    let words = p.history[i].split(" ");
    let line = "", lineY = curY;
    for (let w = 0; w < words.length; w++) {
      let test = line + words[w] + " ";
      if (textWidth(test) > wrapW - 30 && line !== "") {
        text(line, hx + 36, lineY);
        line = words[w] + " "; lineY += lineH;
      } else { line = test; }
    }
    if (line !== "") { text(line, hx + 36, lineY); lineY += lineH; }
    curY = lineY + 18;
  }
  drawingContext.restore();
  textAlign(CENTER, CENTER);

  // progress bar
  noStroke(); 
  fill(255, 255, 255, 50);
  rect(sx, sy + sh + 42, sw, 6, 3);
  fill(255, 210, 100);
  rect(sx, sy + sh + 42, map(slideTimer, 0, slideDuration, 0, sw), 6, 3);
  // wikipedia button
  let wikiX = sx;
  let wikiY = sy + sh + 55;
  let wikiW = 200;
  let wikiH = 40;

  let wikiHover =
    mouseX > wikiX &&
    mouseX < wikiX + wikiW &&
    mouseY > wikiY &&
    mouseY < wikiY + wikiH;

  noStroke();

  fill(0, 70);
  rect(wikiX + 5, wikiY + 5, wikiW, wikiH, 10);

  if (wikiHover) {
    fill(70, 130, 220);
    cursor(HAND);
  } else {
    fill(255, 248, 232, 235);
  }

  rect(wikiX, wikiY, wikiW, wikiH, 10);

  fill(wikiHover ? 255 : 40);
  textStyle(BOLD);
  textSize(16);
  text("OPEN WIKIPEDIA", wikiX + wikiW / 2, wikiY + wikiH / 2);
  textStyle(NORMAL);
  backButton();
}

function drawArrowBtn(x, y, w, h, dir, hover) {
  noStroke();
  fill(0, 80); 
  ellipse(x + w / 2 + 3, y + 3, w + 4);
  fill(hover ? color(255, 200, 80) : color(255, 255, 255, 200));
  ellipse(x + w / 2, y, w + 4);
  fill(60, 40, 20); 
  textSize(22); 
  textStyle(BOLD);
  text(dir === "left" ? "‹" : "›", x + w / 2, y);
  textStyle(NORMAL);
}

// MOUSE INTERACTIONS
function mousePressed() {
  if (gameState === "home") {
    let bx = width / 2 - 160, by = 500, bw = 320, bh = 82;
    if (mouseX > bx && mouseX < bx + bw && mouseY > by && mouseY < by + bh) {
      gameState = "map";
    }
  }
  else if (gameState === "map") {
    if      (mouseX>20  && mouseX<130 && mouseY>20  && mouseY<62)  { gameState = "home"; }
    else if (mouseX>170 && mouseX<430 && mouseY>140 && mouseY<320) { gameState = "gwalior"; }
    else if (mouseX>320 && mouseX<680 && mouseY>240 && mouseY<450) { gameState = "bhopal"; }
    else if (mouseX>620 && mouseX<980 && mouseY>250 && mouseY<520) { gameState = "jabalpur"; }
    else if (mouseX>120 && mouseX<500 && mouseY>280 && mouseY<600) { gameState = "malwa"; }
  }
  else if (gameState === "gwalior") {
    if (mouseX>20 && mouseX<130 && mouseY>20 && mouseY<62) { gameState = "map"; return; }
    checkCardClick(80,  220, "gwaliorFort");
    checkCardClick(470, 220, "jaiVilas");
    checkCardClick(860, 220, "orchha");
  }
  else if (gameState === "bhopal") {
    if (mouseX>20 && mouseX<130 && mouseY>20 && mouseY<62) { gameState = "map"; return; }
    checkCardClick(180, 220, "sanchi");
    checkCardClick(720, 220, "bhimbetka");
  }
  else if (gameState === "jabalpur") {
    if (mouseX>20 && mouseX<130 && mouseY>20 && mouseY<62) { gameState = "map"; return; }
    checkCardClick(180, 220, "dhuandhar");
    checkCardClick(720, 220, "marble");
  }
  else if (gameState === "malwa") {
    if (mouseX>20 && mouseX<130 && mouseY>20 && mouseY<62) { gameState = "map"; return; }
    checkCardClick(180, 220, "ujjain");
    checkCardClick(720, 220, "omkareshwar");
  }
  else if (gameState === "detail") {
    if (mouseX>20 && mouseX<130 && mouseY>20 && mouseY<62) {
      gameState = places[currentPlace].region;
      currentPlace = null; historyScroll = 0; return;
    }
    let sx=40, sy=100, sw=580, sh=360;
    let arrowY=sy+sh/2, arrowW=44, arrowH=44;
    let leftAX=sx+12, rightAX=sx+sw-12-arrowW;
    let p = places[currentPlace];

    if (mouseX>leftAX && mouseX<leftAX+arrowW && mouseY>arrowY-arrowH/2 && mouseY<arrowY+arrowH/2) {
      p.slideIndex = (p.slideIndex - 1 + p.images.length) % p.images.length;
      slideTimer = 0;
    }
    if (mouseX>rightAX && mouseX<rightAX+arrowW && mouseY>arrowY-arrowH/2 && mouseY<arrowY+arrowH/2) {
      p.slideIndex = (p.slideIndex + 1) % p.images.length;
      slideTimer = 0;
    }
    if (mouseX>sx && mouseX<sx+200 && mouseY>sy+sh+48 && mouseY<sy+sh+88) {
      window.open(places[currentPlace].wiki, "_blank");
    }
  }
}
function checkCardClick(x, y, placeKey) {
  let w = 260, h = 200;
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    currentPlace  = placeKey;
    historyScroll = 0;
    slideTimer    = 0;
    places[placeKey].slideIndex = 0;
    gameState = "detail";
  }
}
function mouseWheel(event) {
  if (gameState === "detail") {
    let hx=650, hy=100, hw=510, hh=550;
    if (mouseX>hx && mouseX<hx+hw && mouseY>hy && mouseY<hy+hh) {
      historyScroll = constrain(historyScroll + event.delta * 0.4, 0, 600);
      return false;
    }
  }
}
