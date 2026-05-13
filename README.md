# Explore MP

Explore MP is an interactive tourism project made with **p5.js**.  
It allows users to explore famous tourist places of Madhya Pradesh through an animated home screen, clickable map, region pages, image slideshows, history panels, sound effects, and Wikipedia links.

## Features

- Animated home screen with sky, sun, clouds, mountains, and start button
- Interactive Madhya Pradesh map with clickable regions
- Region-wise tourist place cards
- Detail page for every place with image slideshow
- History and heritage information section
- Scrollable text panel
- Background music and click sound effects
- Wikipedia button for more information
- Hover effects, back button, arrows, and progress bar

## Places Included

- Gwalior Fort
- Jai Vilas Palace
- Orchha
- Sanchi Stupa
- Bhimbetka Caves
- Dhuandhar Falls
- Marble Rocks
- Ujjain
- Omkareshwar

## Technologies Used

- HTML
- JavaScript
- p5.js
- p5.sound.js

## How to Run

1. Clone or download this repository.
2. Keep all images and audio files inside the `assets` folder.
3. Open the project in a code editor.
4. Run it using a local server or open `index.html` in a browser.
5. Click **START JOURNEY** to begin.

## Controls

- Click **START JOURNEY** to open the map.
- Click a region to view tourist places.
- Click a place card to open its detail page.
- Use arrow buttons to change slideshow images.
- Scroll inside the history panel to read more.
- Click **OPEN WIKIPEDIA** to visit the related Wikipedia page.
- Click **BACK** to return to the previous screen.

## p5.js Functions Used

| Function | Use in Project |
|---|---|
| `preload()` | Loads all images and sound files before the project starts. |
| `setup()` | Creates the canvas, sets text style, and initializes place data. |
| `draw()` | Runs continuously and displays screens based on the current game state. |
| `createCanvas()` | Creates the main canvas of size `1200 x 750`. |
| `loadImage()` | Loads tourist place images from the `assets` folder. |
| `loadSound()` | Loads click sound and background music. |
| `fill()` | Sets color for shapes and text. |
| `stroke()` | Sets outline color for shapes and lines. |
| `noStroke()` | Removes outlines from shapes. |
| `rect()` | Draws buttons, cards, panels, title bars, and progress bars. |
| `ellipse()` | Draws sun, clouds, dots, and circular buttons. |
| `triangle()` | Draws mountain shapes on the home screen. |
| `beginShape()` / `vertex()` / `endShape()` | Creates custom shapes like map regions and paths. |
| `text()` | Displays titles, labels, instructions, and history text. |
| `textSize()` | Changes text size. |
| `textStyle()` | Applies bold, italic, or normal text style. |
| `textAlign()` | Controls text alignment. |
| `textFont()` | Sets the font style used in the project. |
| `image()` | Displays loaded images on cards and slideshow screens. |
| `lerpColor()` | Creates smooth gradient backgrounds. |
| `line()` | Draws lines for gradients and separators. |
| `mousePressed()` | Handles all mouse click interactions. |
| `mouseWheel()` | Allows scrolling inside the history panel. |
| `cursor()` | Changes cursor style on hover. |
| `sin()` | Creates smooth animation effects like button pulse and cloud movement. |
| `frameCount` | Tracks animation frames for movement and timing. |
| `map()` | Converts slideshow timer value into progress bar width. |
| `constrain()` | Limits history scroll value within a fixed range. |
| `push()` / `pop()` | Saves and restores drawing settings while displaying clipped images. |
| `userStartAudio()` | Starts browser audio after user interaction. |
| `getAudioContext()` | Resumes audio context so sounds can play correctly. |

## User-Defined Functions

| Function | Description |
|---|---|
| `initPlaces()` | Stores all tourist place data such as name, region, images, theme colors, history, and Wikipedia links. |
| `drawHomeScreen()` | Displays the complete home screen by calling sky, sun, clouds, mountains, ground, title, info panel, and start button functions. |
| `drawSky()` | Creates the gradient sky background for the home screen. |
| `drawSun()` | Draws the sun on the home screen. |
| `drawClouds()` | Displays moving clouds using animation. |
| `drawCloud()` | Draws a single cloud using multiple ellipse shapes. |
| `drawMountains()` | Draws mountain layers on the home screen. |
| `drawGround()` | Draws the green ground and road area. |
| `drawHeroText()` | Displays the main title “EXPLORE MP” and subtitle. |
| `drawInfoPanel()` | Shows a short description panel on the home screen. |
| `drawStartButton()` | Draws the animated start button and handles hover effect. |
| `drawMapScreen()` | Displays the Madhya Pradesh map with clickable regions. |
| `drawGwaliorRegion()` | Displays tourist place cards for the Gwalior region. |
| `drawBhopalRegion()` | Displays tourist place cards for the Bhopal region. |
| `drawJabalpurRegion()` | Displays tourist place cards for the Jabalpur region. |
| `drawMalwaRegion()` | Displays tourist place cards for the Malwa region. |
| `regionTitle()` | Draws the title box used on region screens. |
| `drawPlaceCard()` | Creates a clickable card for each tourist place with image, title, and hover effect. |
| `drawGradientBackground()` | Draws a vertical gradient background using two colors. |
| `backButton()` | Draws the back button used for navigation. |
| `drawDetailScreen()` | Displays selected place details, slideshow, history panel, arrows, progress bar, and Wikipedia button. |
| `drawArrowBtn()` | Draws slideshow arrow buttons for previous and next image navigation. |
| `playClick()` | Plays click sound and resumes audio context if required. |
| `checkCardClick()` | Checks whether a place card is clicked and opens its detail screen. |

## Project Structure

```text
project-folder/
├── index.html
├── sketch.js
├── README.md
└── assets/
    ├── images
    ├── clicksound.wav
    └── mp.mp3
