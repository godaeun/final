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

   img4 = loadImage("a.png");
   img5 = loadImage("b.png");
   img6 = loadImage("c.png");
   img7 = loadimage("d.png");
   img8 = loadImage("e.png");
   img9 = loadImage("f.png");
   img10 = loadImage("g.png");
   img11 = loadimage("h.png");
   img12 = loadImage("i.png");
   img13 = loadImage("j.png");
   img14 = loadImage("k.png");

   img15 = loadImage("aa.png");
   img16 = loadImage("bb.png");
   img17 = loadImage("cc.png");
   img18 = loadimage("dd.png");
   img19 = loadImage("ee.png");
   img20 = loadImage("ff.png");
   img21 = loadImage("gg.png");
   img22 = loadimage("hh.png");
   img23 = loadImage("ii.png");
   img24 = loadImage("jj.png");
   img25 = loadImage("kk.png");   


}

function draw(){
   background(bg); 
   image(img,218,61);

   var d2 = 10 + (sin(angle + PI/20) * diameter/20) + diameter/20;   
   image(img1, 580, 270, d2, d2);
   angle += 0.02;


}



