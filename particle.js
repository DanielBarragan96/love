
class Particle {	
	
	constructor() {
		this.xNoise = new NoiseLoop(0.3, -width, width * 2);
		this.yNoise = new NoiseLoop(0.3, -height, height * 2);
		this.dNoise = new NoiseLoop(7, 20, 120);
		this.rNoise = new NoiseLoop(7, 100, 255);
		this.bNoise = new NoiseLoop(7, 100, 255);
		this.heart = [];

		let a = 0;
		let r = height / 5;
		let x = 0;
		let y = 0;
		while(a < TWO_PI) {
			x = r * 16 * pow(sin(a), 3);
			y = -r * (13 * cos(a) - 5 * cos(2 * a) - 2 * cos(3 * a) - cos(4 * a));
			this.heart.push(createVector(x, y));
			a += 0.1;
		}
	}

	render(a) {
		noStroke();
		let x = this.xNoise.value(a);
		let y = this.yNoise.value(a);
		let d = this.dNoise.value(a);
		let r = this.rNoise.value(a);
		let b = this.bNoise.value(a);
		fill(r, 50, b, 200);

		beginShape();
		for (let i = 0; i < this.heart.length; i++) {
			let x_heart = x + this.heart[i].x / d;
			let y_heart = y + this.heart[i].y / d;
			vertex(x_heart, y_heart);
		}
		endShape();
	}
}
