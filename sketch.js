var bg;
var soound, amp;
var diameter; 
var angle = 0;


function preload() {
 sound = loadSound("bgm.mp3"); 
}

function setup(){
   createCanvas(1016,721);
   bg = loadImage("1.jpg");
   amp = new p5.Amplitude();
   amp.setInput(sound);
   sound.loop();
   diameter = height - 10;

   img = loadImage("2.png");
   img1 = loadImage("3.png");
   img2 = loadImage("4.png");   
}

function draw(){
   background(bg); 
   image(img,218,61);

   var d2 = 10 + (sin(angle + PI/10) * diameter/7) + diameter/7;
   image(img1, 580, 240, d2, d2);
   angle += 0.02;


}



