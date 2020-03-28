// Daniel Barragan Alvarez
// 21/03/2020

const totalFrames = 480;
let counter = 0;
let record = false;

let particles = new Array(200);
var elem;
let mySound;
let playing = false;

function setup() {
  createCanvas(1920, 1080);
  for (let i = 0; i < particles.length; i++) {
    particles[i] = new Particle();
  }
  soundFormats('mp3', 'ogg');
  mySound = loadSound('song.mp3');
}

function mousePressed() {	
  elem = document.getElementById("defaultCanvas0");
  elem.webkitRequestFullscreen();
  
  if(!playing) {
    mySound.play();
    playing = true;
  }
}
function draw() {
  let percent = float(counter % totalFrames) / totalFrames;
  render(percent);
  counter++;
}

function render(percent) {
  background(0);
  let a = percent * TWO_PI;
  for (let p of particles) {
    p.render(a);
  }
    translate(width / 2, height / 2);
	fill(255);
	textSize(12);
	textFont('Helvetica', 180);
	text('TE AMO', 0, 50);
	textAlign(CENTER);
}
