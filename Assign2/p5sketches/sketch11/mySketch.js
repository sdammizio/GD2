//steering behaviours
let font;

//load font
function preload(){
  font= loadFont('./p5sketches/sketch11/ProbetaLightitalic-RpoaW.otf')
}

function setup(){
  createCanvas(1000,1000);
  background('#172DA6');


  //produces an array with x and y coord for letterform
  var dots= font.textToPoints('N',150,920, 1200);

  //for x and y coords, draw dots:
  for (var i=0; i<dots.length; i++){
    var pt = dots[i];
    stroke(255);
    strokeWeight(1);
    point(pt.x, pt.y); 
    
    for(let k = 0; k < 10; k++){
      fill ("#F2C9F2");
      stroke(255);
      // ellipse(pt.x,pt.y, k * 15); 
      line (pt.x,pt.y,50,50);
    } 


  }

  

}


// function mouseClicked(){
//   save('myCanvas.png');
// }