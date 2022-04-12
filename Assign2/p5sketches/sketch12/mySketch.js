let m;
let mspeed = 2;

function setup() {
  createCanvas(500, 500);
  
  m = height / 2;
}

function draw() {
  background(220);
  
  //ellipse left
  push()
  translate(200, m);
  ellipse(10, -100, 50, 50);
  pop()
  
  x += yspeed;
  if(m >= height / 2 + 100 || m <= height / 2 - 100 ){
  	  mspeed = mspeed * -1;
  }
}