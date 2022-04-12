function setup(){
	createCanvas(1000, 1000);
	angleMode(DEGREES);
	colorMode(HSB, 360, 100, 100, 100);
	rectMode(CENTER);
  
	stroke(0);
  }
  
  function draw(){
	background(255);

	translate (130,100);
  
	linearGradient(
	  300, 200, //Start point
	  750, 750, //End point
	  color(321, 81, 85, 40), //Start color
	  color(231, 86, 65, 40), //End color
	);
	
	rect(150, 450, 100, 500);
	rect(140, 440, 100, 500);
	rect(130, 430, 100, 500);
	rect(550, 450, 100, 500);
	rect(540, 440, 100, 500);
	rect(530, 430, 100, 500);
	rotate (PI-50);
	rect(-80, 560, 100, 650);
	rect(-70, 550, 100, 650);
	rect(-60, 540, 100, 650);

	
  }
  
  function linearGradient(sX, sY, eX, eY, colorS, colorE){
	let gradient = drawingContext.createLinearGradient(
	  sX, sY, eX, eY
	);
	gradient.addColorStop(0, colorS);
	gradient.addColorStop(1, colorE);
	drawingContext.fillStyle = gradient;
	
  }
  


//   function mousePressed(){
// 	save('myCanvas.png');
//   }