function setup() {
	const s = min(windowWidth, windowHeight) * 0.9;	
	createCanvas(s, s);
	background("#F2C9F2");
	
	let palette = ["#172DA6", "#F2C9F2", "997A5"];
	const t = width / 4;
	
	//square 1
	patternColors(palette);
	rectMode(CENTER);
	pattern(PTN.noiseGrad(0.5));
	rectPattern(150, 550, 100, 100);
	
	
	//sq2
	patternColors(palette);
	pattern(PTN.stripeRadial(TAU / 30));
	rectMode(CENTER);
	rectPattern(150, 450, 100, 100);
	
	
	//sq3
	patternColors(palette);
	pattern(PTN.noise(0.5));
	rectMode(CENTER);
	rectPattern(150, 350, 100, 100);
	
	//sq4
	patternColors(palette);
	pattern(PTN.stripeCircle(t / 12));
	rectMode(CENTER);
	rectPattern(150, 250, 100, 100,0, 60, 0, 0);
	

	
	//tri 1
	translate(20, 15);
	patternColors(palette);
	pattern(PTN.noiseGrad(0.5));
	beginShapePattern();
	vertexPattern(t * 1, t * 1);
	vertexPattern(t * 1 , t * 1.6);
	vertexPattern(t * 1.6 , t * 1.6);
	endShapePattern();
	
	//tri 2
	translate(95, 95);
	patternColors(palette);
	pattern(PTN.cross(20, 5));
	beginShapePattern();
	vertexPattern(t * 1, t * 1);
	vertexPattern(t * 1 , t * 1.6);
	vertexPattern(t * 1.6 , t * 1.6);
	endShapePattern();
	
	//tri 3
	translate(95, 95);
	patternColors(palette);
	pattern(PTN.wave(t /2, t / 10, t / 5, t / 10));
	beginShapePattern();
	vertexPattern(t * 1, t * 1);
	vertexPattern(t * 1 , t * 1.6);
	vertexPattern(t * 1.6 , t * 1.6);
	endShapePattern();
	
	//square 5
	patternColors(palette);
	rectMode(CENTER);
	pattern(PTN.stripeCircle(t / 12));
	rectPattern(340, 350, 100, 100,0, 0, 60, 0);
	
	
	//sq6
	patternColors(palette);
	pattern(PTN.noise(0.5));
	rectMode(CENTER);
	rectPattern(340, 250, 100, 100);
	
	
	//sq7
	patternColors(palette);
	pattern(PTN.stripeRadial(TAU / 30));
	rectMode(CENTER);
	rectPattern(340, 150, 100, 100);
	
	//sq8
	patternColors(palette);
	pattern(PTN.noiseGrad(0.5));
	rectMode(CENTER);
	rectPattern(340, 50, 100, 100);
	
}