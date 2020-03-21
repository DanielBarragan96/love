// Perlin Noise GIF Loops
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/136.2-perlin-noise-gif-loops.html
// https://youtu.be/c6K-wJQ77yQ

const totalFrames = 480;
let counter = 0;
let record = false;

let particles = new Array(200);
var elem;

function setup() {
  createCanvas(1920, 1080);
  for (let i = 0; i < particles.length; i++) {
    particles[i] = new Particle();
  }
}

function mousePressed() {	
  elem = document.getElementById("defaultCanvas0");
  elem.webkitRequestFullscreen();
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
	text('love', 0, 50);
	textAlign(CENTER);
}
