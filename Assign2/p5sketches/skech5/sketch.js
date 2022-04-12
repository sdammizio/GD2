
function setup(){
  createCanvas(1000,1000);
  background("#F2C9F2");


}

// function draw(){

// //diagonal
// for (i=100; i<250; i=i+5){
//   line(i,100,600+i,900);
// }

// // //left
// stroke("#172DA6");
// strokeWeight(2);

// for (i=100; i<250; i=i+5){
//   line(i,100,i,900);
// }

// //right
// for (i=700; i<845; i=i+5){
//   line(i,100,i,900);
// }

// }

function draw(){

  //diagonal
  for (i=100; i<250; i=i+5){
    line(i,100,600+i,900);
  }
  
  // //left
  stroke("#172DA6");
  strokeWeight(2);
  
  for (i=100; i<250; i=i+5){
    line(i,100,100,900);
  }
  
  //right
  for (i=700; i<845; i=i+5){
    line(800,100,i,900);
  }
  
  }

  
