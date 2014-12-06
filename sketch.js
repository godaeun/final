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

   img3 = loadImage('a.png');
   img4 = loadImage('b.png');
   img5 = loadImage('c.png');
   img6 = loadimage('d.png');
   img7 = loadImage('e.png');
   img8 = loadImage('f.png');
   img9 = loadImage('g.png');
   img10 = loadimage('h.png');
   img11 = loadImage('i.png');
   img12 = loadImage('j.png');
   img13 = loadImage('k.png');

   img14 = loadImage('aa.png');
   img15 = loadImage('bb.png');
   img16 = loadImage('cc.png');
   img17 = loadimage('dd.png');
   img18 = loadImage('ee.png');
   img19 = loadImage('ff.png');
   img20 = loadImage('gg.png');
   img21 = loadimage('hh.png');
   img22 = loadImage('ii.png');
   img23 = loadImage('jj.png');
   img24 = loadImage('kk.png');   


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



