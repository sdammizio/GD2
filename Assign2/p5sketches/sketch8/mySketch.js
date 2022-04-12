let myColors = ["#D9299B", "#F2C9F2","#172DA6"];
let randCol;

function setup() {
	createCanvas(1000, 1000);
	background(255);
	
	
}

function draw(){
	randCol=random(myColors.length);
	randCol=floor(randCol);
}

function mouseClicked(){


	//rectangle1
	stroke(myColors[randCol]);
	noFill();
	rect(150, 150, 100, 500);

	//rectangle1_b
	stroke(myColors[randCol]);
	noFill();
	rect(140, 140, 100, 500);

	//rectangle1_c
	stroke(myColors[randCol]);
	noFill();
	rect(130, 130, 100, 500);

	//rectangle2
	stroke(myColors[randCol]);
	noFill();
	rect(550, 150, 100, 500);

	//rectangle2_b
	stroke(myColors[randCol]);
	noFill();
	rect(540, 140, 100, 500);

	//rectangle2_c
	stroke(myColors[randCol]);
	noFill();
	rect(530, 130, 100, 500);	

	//rectangle3
	rotate (PI / -5.0);
	stroke(myColors[randCol]);
	noFill();
	rect(60, 310, 100, 500);

	//rectangle3_b
	stroke(myColors[randCol]);
	noFill();
	rect(50, 320, 100, 500);

	//rectangle3_c
	stroke(myColors[randCol]);
	noFill();
	rect(40, 330, 100, 500);

  }

//   function mouseDragged(){
// 	save('myCanvas.png');
//   }