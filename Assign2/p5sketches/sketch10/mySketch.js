//steering behaviours
let font;

//load font
function preload(){
  font= loadFont('./p5sketches/sketch10/EnsoBold-Alag.ttf') 
}

function setup(){
  createCanvas(1000,1000);
  background("#9997A5");

  //produces an array with x and y coord for letterform
  var dots= font.textToPoints('N',100,850, 1000);

  //for x and y coords, draw dots:
  for (var i=0; i<dots.length; i++){
    var pt = dots[i];
    stroke("#D9299B");
    strokeWeight(1);
    // point(pt.x, pt.y); 
    for(let k = 0; k < 10; k++){
      fill ("#F2C9F2");
      stroke('#172DA6');
      ellipse(pt.x,pt.y, k * 25);
    }
    
  }

}


// function mouseClicked(){
//   save('myCanvas.png');
// }