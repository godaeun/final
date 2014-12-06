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
   img2 = loadImage("4.png");

   tooth1 = loadImage("a.png");
   tooth2 = loadImage("b.png");
   tooth3 = loadImage("c.png");
   tooth4 = loadimage("d.png");
   tooth5 = loadImage("e.png");
   tooth6 = loadImage("f.png");
   tooth7 = loadImage("g.png");
   tooth8 = loadimage("h.png");
   tooth9 = loadImage("i.png");
   tooth10 = loadImage("j.png");
   tooth11 = loadImage("k.png");

   pull1 = loadImage("aa.png");
   pull2 = loadImage("bb.png");
   pull3 = loadImage("cc.png");
   pull4 = loadimage("dd.png");
   pull5 = loadImage("ee.png");
   pull6 = loadImage("ff.png");
   pull7 = loadImage("gg.png");
   pull8 = loadimage("hh.png");
   pull9 = loadImage("ii.png");
   pull10 = loadImage("jj.png");
   pull11 = loadImage("kk.png");   


}

function draw(){
   background(bg); 
   image(img,218,61);

   var d2 = 10 + (sin(angle + PI/20) * diameter/20) + diameter/20;   
   image(img1, 580, 270, d2, d2);
   angle += 0.02;


}



