let myColors = ["#D9299B", "#F2C9F2", "997A5"];
let randCol;

function setup(){
  createCanvas(1000,1000);
  background(255);


}

function draw(){
  randCol=random(myColors.length);
  randCol=floor(randCol);
}

function mouseDragged(){
  stroke(myColors[randCol]);
  line (0,0,mouseX,mouseY);
  line (1000,1000,mouseX,mouseY);
}
  



// function mouseClicked(){
//   save('myCanvas.png');
// }