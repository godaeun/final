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

   tooth1 = loadImage('a.png');
   tooth2 = loadImage('b.png');
   tooth3 = loadImage('c.png');
   tooth4 = loadimage('d.png');
   tooth1 = loadImage('e.png');
   tooth2 = loadImage('f.png');
   tooth3 = loadImage('g.png');
   tooth4 = loadimage('h.png');
   tooth1 = loadImage('i.png');
   tooth2 = loadImage('j.png');
   tooth3 = loadImage('k.png');

   pull1 = loadImage('aa.png');
   pull2 = loadImage('bb.png');
   pull3 = loadImage('cc.png');
   pull4 = loadimage('dd.png');
   pull1 = loadImage('ee.png');
   pull2 = loadImage('ff.png');
   pull3 = loadImage('gg.png');
   pull4 = loadimage('hh.png');
   pull1 = loadImage('ii.png');
   pull2 = loadImage('jj.png');
   pull3 = loadImage('kk.png');   


}

function draw(){
   background(0);   
   background(bg); 
   image(img,218,61);

   var d2 = 10 + (sin(angle + PI/20) * diameter/20) + diameter/20;
   image(img1, 580, 270, d2, d2);
   angle += 0.02;


   if(toothClicked){
        fill(0,255,0);
        rect(200,300,100,200);
   }else{
        fill(0,255,0);
        rect(200,100,100,500);
   }

   fill(255);
   rect(300,150,50,120);


}

function mousePressed(){
    if(mouseX > 300 && mouseX < 350 && mouseY > 150 && mouseY < 270){
        toothClicked =true;
    }
}



