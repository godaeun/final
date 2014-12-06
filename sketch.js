var bg;
var soound, amp;
var diameter; 
var angle = 0;
var toothClicked;

function preload() {
 sound = loadSound("bgm.mp3"); 
}

function setup(){
   toothClicked = false;
   createCanvas(1016,721);
   bg = loadImage("1.jpg");
   amp = new p5.Amplitude();
   amp.setInput(sound);
   sound.loop();
   diameter = height - 40;


   img = loadImage("2.png");
   img1 = loadImage("3.png");
   img2 = loadImage("4.png");   
   img3 = loadImage("4.png");

   img4 = loadImage("to1.png");
   img5 = loadImage("to2.png");
   img6 = loadImage("to3.png");
   img7 = loadimage("to4.png");
   img8 = loadImage("to5.png");
   img9 = loadImage("to6.png");
   img10 = loadImage("to7.png");
   img11 = loadimage("to8.png");
   img12 = loadImage("to9.png");
   img13 = loadImage("to10.png");
   img14 = loadImage("to11.png");

   img15 = loadImage("t1.png");
   img16 = loadImage("t2.png");
   img17 = loadImage("t3.png");
   img18 = loadimage("t4.png");
   img19 = loadImage("t5.png");
   img20 = loadImage("t6.png");
   img21 = loadImage("t7.png");
   img22 = loadimage("t8.png");
   img23 = loadImage("t9.png");
   img24 = loadImage("t10.png");
   img25 = loadImage("t11.png");   


}

function draw(){
   background(bg); 
   image(img,218,61);

   var d2 = 10 + (sin(angle + PI/20) * diameter/20) + diameter/20;   
   image(img1, 580, 270, d2, d2);
   angle += 0.02;


}



