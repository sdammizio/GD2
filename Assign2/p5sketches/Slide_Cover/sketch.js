var numShapes=12;
var r1=55;   //Radio1 
var r2=50;  //Radio2

var rectangle1;
var rectangle2;
var rectangle3;


function setup() {
  createCanvas(500,500);
  background(255,255,255);
  rectangle1= new Rectangle("#e4e8fb",80,70,100,330);
  rectangle2= new Rectangle("#e4e8fb",280,70,100,330);
  rectangle3= new Rectangle("#e4e8fb",-60,175,100,330);
}


function draw() {

//rectangles
rectangle1.show();
rectangle2.show();
//apply rotation to rect 3 only via push and pop
push();
rotate(PI / -4.0);
rectangle3.show();
pop();

//ELEMENT A
  //sets position of all aspects of elementA
  translate(130,130);

  //pink circle
  noStroke();
  fill('#D9299B');
  circle(0,0,30);

  // radial lines
  for (var i = 0; i < numShapes; i+=1) {
    var x1 = (r1)*cos(i*2*PI/numShapes);
    var y1 = (r1)*sin(i*2*PI/numShapes);
    var x2 = (r2)*cos(i*2*PI/numShapes);
    var y2 = (r2)*sin(i*2*PI/numShapes);
		strokeWeight(1);
		stroke('#999785');
    line(x1, y1, x2, y2);
	}

  //radial blue circles
  stroke('#172DA6');
  strokeWeight(2);
  noFill();
  var radialCircle = radial(circle, 30, 6, radians(10), radians(5));
  radialCircle(0, 0, 13, color('#172DA6'));


//ELEMENT B
  translate(200,0);
  //blue circle middle
  noStroke();
  fill('#172DA6');
  circle(0,0,30);
  //radial pink rings
  stroke('#D9299B');
  strokeWeight(1);
  noFill();
  var radialCircle = radial(circle, 32, 6, radians(10), radians(5));
  radialCircle(0, 0, 60, color('#D9299B'));
  //radial lines
  strokeWeight(1);
  stroke('#999785');
  var radialLines = radial(line, 30, 8, radians(0), radians(0));
  radialLines(0, 0, 4, 4);
  //hexagon
  rotate(PI / 6.0);
  hexagon(0, 0, 0.4);
  //radial triangles
  noStroke();
  fill('#D9299B')
  var radialTriangle = radial(triangle, 42, 6, radians(20), radians(5));
  radialTriangle(0, 0, 10, 30, 30, 30, color('#D9299B'));
  

//ELEMENT C
  translate(100,170);
  //concentric pink rings
  stroke('#D9299B');
  strokeWeight(1);
  noFill();
  for(let i = 0; i < 10; i++){
    ellipse(0,0, i * 10);
  }
  //outside thick ring blue
  stroke('#172DA6');
  strokeWeight(2);
  noFill();
  circle(0,0,100);
  //radial pink rings
  stroke('#D9299B');
  strokeWeight(1);
  noFill();
  var radialCircle = radial(circle, 32, 6, radians(10), radians(5));
  radialCircle(0, 0, 60, color('#D9299B'));
  //centre blue circle
  noStroke();
  fill('#172DA6');
  circle(0,0,20);

  //ELEMENT D
  translate(-180,95);
  //blue circle middle
  noStroke();
  fill('#172DA6');
  circle(0,0,70);
  //radial blue rings
  stroke('#172DA6');
  strokeWeight(1);
  noFill();
  var radialCircle = radial(circle, 32, 6, radians(10), radians(5));
  radialCircle(0, 0, 60, color('#D9299B'));
  //outer blue ring
  stroke('#172DA6');
  strokeWeight(2);
  noFill();
  circle(0,0,125);
  //radial pink squares
  noStroke();
  fill('#D9299B');
  var radialSquare = radial(square, 20, 6, radians(30), radians(30));
  radialSquare(0, 0, 20);
//radial dots
  noStroke();
  fill('#999785');
  var radialCircle = radial(circle, 12, 8, radians(10), radians(20));
  radialCircle(0, 0, 5);



}



//radial function for any shape
function radial(shape, radius, numShapes, shapeRotation, overallRotation) {
  return function() {
    var x = arguments[0];
    var y = arguments[1];
    for (var s = 0; s < numShapes; s++) {
      push();
      var angle = s * (TWO_PI / numShapes) + overallRotation;
      translate(x + radius * cos(angle), y + radius * sin(angle));
      rotate(angle + shapeRotation);
      arguments[0] = 0;
      arguments[1] = 0;
      shape.apply(null, arguments);
      pop();
    }
  }
}
//function to draw hexagon
function hexagon(transX, transY, s) {
  noFill();
  strokeWeight(2);
  stroke('#172DA6');
  push();
  translate(transX, transY);
  scale(s);
  beginShape();
	vertex(-75, -130);
	vertex(75, -130);
	vertex(150, 0);
	vertex(75, 130);
  vertex(-75, 130);
	vertex(-150, 0);
	endShape(CLOSE); 
	pop();
}

class Rectangle {
  //specifies how object is initialized
    constructor(c,a,b,l,w){
      this.colour=c;
      this.x=a;
      this.y=b;
      this.length=l;
      this.width=w;
    }

  //functionalities related to this object
    show(){
      fill (this.colour);
      noStroke();
      rect(this.x,this.y,this.length,this.width);
    }
    
}

// function mouseClicked(){
//   save('myCanvas.png');
// }



  




