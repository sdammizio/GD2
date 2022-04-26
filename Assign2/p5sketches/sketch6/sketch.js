//steering behaviours
let font;

//load font
function preload(){
  font= loadFont('./p5sketches/sketch6/ProbetaLightitalic-RpoaW.otf')
}

function setup(){
  createCanvas(1000,1000);
  background(255);

  //produces an array with x and y coord for letterform
  var dots= font.textToPoints('N',150,920, 1200);

  //for x and y coords, draw dots:
  for (var i=0; i<dots.length; i++){
    var pt = dots[i];
    stroke("#D9299B");
    strokeWeight(1);
    // point(pt.x, pt.y); 
    for(let k = 0; k < 10; k++){
      noFill();
      ellipse(pt.x,pt.y, k * 10);
    }
    
  }

}

//steering force= desired- velocity

function draw(){

}

function mouseClicked(){
  save('myCanvas.pdf');
}