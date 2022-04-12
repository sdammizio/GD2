

// draw a diagonal line of ellipses
function setup() {
  let c = createCanvas(400, 400);
  background('#D9299B');
	stroke('#172DA6');
  fill(255, 50);
}

function draw() {
  
  // //diagonal line of circles
    // number of ellipses in line
    var numDiag = 15;
    
    // initialize xy
    var diagX = 60;
    var diagY = 60;


    // count with i 
    for (var iDiag = 5; iDiag <= numDiag; iDiag++) {

      // draw ellipse at xy
      ellipse(diagX, diagY, 60);
      // ellipse((10-i)*x, i*y, 40);

      // increment xy dividing evenly by width and height
      diagX += width/numDiag;
      diagY += height/numDiag;

   //left straight line circles
   

    // number of ellipses in line
    var num = 15;
      
    // initialize xy
    var leftX = 60;
    var leftY = 60;


    // count with i 
    for (var i = 5; i <= num; i++) {

      // draw ellipse at xy
      ellipse(60, leftY, 60);
      // ellipse((10-i)*x, i*y, 40);

      // increment xy dividing evenly by width and height
      leftX += width/num;
      leftY += height/num;

	}
  
  //right straight line circles

    // number of ellipses in line
    var numRight = 15;
      
    // initialize xy
    var rightX = 60;
    var rightY = 60;


    // count with i 
    for (var iRight = 5; iRight <= numRight; iRight++) {

      // draw ellipse at xy
      ellipse(326, rightY, 60);
      // ellipse((10-i)*x, i*y, 40);

      // increment xy dividing evenly by width and height
      rightX += width/num;
      rightY += height/num;

	}
  
}


}



