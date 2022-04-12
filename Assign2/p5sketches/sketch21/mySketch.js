let tileSize = 200;  // size tiles to make
let tiles;          // list of tiles, created in setup()
let font;           // font we'll use


function preload() {
  font = loadFont('./p5sketches/sketch21/ProbetaLightitalic-RpoaW.otf');
}


function setup() {
  createCanvas(1000, 1000);
  
  // draw the text to a graphics object
  let pg = createGraphics(width, height);
  pg.background('#172DA6');
  pg.textFont(font);            // note we have to start all
  pg.textAlign(CENTER, CENTER); // commands with the name of
  pg.textSize(800);             // the graphics object
  pg.fill('#F2C9F2');
  pg.noStroke();
  pg.text('N', pg.width/2, pg.height/2-38);
  
  pg.textSize(100);
  pg.fill('#D9299B');
  pg.noStroke();
  for (let i=0; i<500; i++) {
    pg.text('N', random(pg.width), random(pg.height));
  }
  
  // split the graphics object into tiles!
  tiles = [];
  for (let y=0; y<pg.height; y+=tileSize) {
    for (let x=0; x<pg.width; x+=tileSize) {
      let tile = new Tile(x, y, tileSize, pg);
      tiles.push(tile);
    }
  }
  
  // start the background all black
  // note: there's no background in draw()
  background('#172DA6');
}


// display the tiles (real work is in the
// Tile class below)
function draw() {
  for (let i=0; i<tiles.length; i++) {
    tiles[i].display();
  }
}


// a simple class for the tiles
// this lets us more easily create images
// from the graphics we made in setup(),
// handle displaying them, etc though you
// could definitely do this without a class
class Tile {
  constructor(x, y, w, pg) {
    this.x = x;
    this.y = y;
    
    // create an empty image and copy from
    // the graphics object we made above!
    this.img = createImage(w, w);
    this.img.copy(pg, x,y, w,w, 0,0, w,w);
  }
  
  // display the tile!
  display() {
    push();
    translate(this.x, this.y);
    rotate( map(mouseX, 0,width, 0,TWO_PI) );
    image(this.img, 0,0);
    pop();
  }
}

