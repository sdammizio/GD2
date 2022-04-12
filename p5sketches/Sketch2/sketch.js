let circle1;
let rectangle1;
let rectangle2;
let rectangle3;

function setup(){
  createCanvas(1000,1000);
  background(255);
  circle1= new Circle(300,600,100);
  rectangle1= new Rectangle("#172DA6",100,110,200,590);
  rectangle2= new Rectangle("#9997A5",520,110,200,590);
  rectangle3= new Rectangle(255,100,-90,200,200);

}

function draw(){
  rectangle2.show();

  //arc
  fill("#D9299B"); 
  arc(100, 700, 1245, 1245,radians(-90), radians(-0));  
  

  rectangle1.show();

  circle1.show();

  rectangle3.show();
}
  


//establish elements

class Circle {
  //specifies how object is initialized
    constructor(a,b,r){
      this.x=a;
      this.y=b;
      this.r=r;
    }

  //functionalities related to this object
    show(){
      fill (255);
      noStroke();
      ellipse(this.x,this.y,this.r*2);
    }
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
