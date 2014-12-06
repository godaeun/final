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
   image(img1,580,150);   

   var d1 = 10 + (sin(angle) * diameter/2) + diameter/2;
   var d2 = 10 + (sin(angle + PI/2) * diameter/2) + diameter/2;
   var d3 = 10 + (sin(angle + PI) * diameter/2) + diameter/2;


   ellipse(width/2, height/2, d2, d2);

   angle += 0.02;

}



