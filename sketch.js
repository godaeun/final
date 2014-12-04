var bg;
var soound, bgm;

function preload() {
  sound = loadSound("./bgm.mp3");
	bgm = loadSound("./bgm.mp3");
}

function setup(){
   createCanvas(1016,721);
   bg = loadImage("1.jpg");
   bgm.loop();
}

function draw(){
   background(bg);  

}


