function setup() {
  createCanvas(1016, 721);
  img = loadImage("1.png");


}

function draw() {
   background(img);


   noStroke()
   image(img, 0,500,270,270);


}

