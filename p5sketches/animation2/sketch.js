let font
        let fSize // font size
        let msg // text to write
        let pts = [] // store path data

        function preload() {
            // preload OTF font file
            font = loadFont('./p5sketches/animation2/AvenirNextLTPro-Demi.otf')
        }

        function setup() {
            createCanvas(1000, 1000)
            //setup textToPoints and extract coords in array
            fSize = 756
            textFont(font)
            textSize(fSize)
            msg = 'N'
            //array
            pts = font.textToPoints(msg, 0, 0, fSize, {
                sampleFactor: 0.1, // increase for more points
                simplifyThreshold: 0.0 // increase to remove collinear points
            })
            //set colour of lines
            stroke("#172DA6")
            strokeWeight(2)
            noFill();
        }

        function draw() {
            background('#9997A5')
            //set variable to store angle of rotation of points
            const d = 10 + sin(frameCount/50.) * 50
            const angle = frameCount/100.

            push()
            translate(60, height*5/8)
            //for each of the points, cycle through this:
            for (let i = 0; i < pts.length; i++) {
                const p = pts[i]
                //set new drawing state
                push()
                translate(p.x, p.y)
                //reference variable with angle
                rotate(angle)
                line(-d, -d, +d, +d)
                //restore original drawing state
                pop()
            }
            //restore original drawing state
            pop()
        }

        function mouseClicked(){
          save('myCanvas.png');
        }