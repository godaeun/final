
var bg;
var song;

function preload() {
  song = loadSound("croc.mp3");
}

function setup(){
   bg = loadImage("1.jpg");
}

function draw(){
   background(bg);  
   createCanvas(1016,721);
}
