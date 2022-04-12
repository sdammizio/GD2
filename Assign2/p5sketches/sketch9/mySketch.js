

// let img;
// function preload() {
//   img = loadImage('image.jpg');
// }

// function setup() {
//   createCanvas(500, 500);
//   image(img, 0, 0);
//   let c = get(0, 0);
//   fill(c);
// }

// function draw() {
//   background(0);
//   image(img, 0, 0);
//   textSize(500);
//   text('N', 60, 430);
// }

let img;

function setup() {
  createCanvas(500, 500);
  img = loadImage('./p5sketches/sketch9/image.jpg');
}

function draw() {
  image(img, 0, 0);

  // Get the color at the mouse position
  let c = img.get(mouseX, mouseY);

  // Change the fill to that color
  fill(c);

  // Draw a square with that color
  square(mouseX, mouseY, 50);

  //create text with that fill colour
  fill(c);
  textSize(500);
	text('N', 60, 430);
}

// function mousePressed(){
// 	save('myCanvas.png');
// }

