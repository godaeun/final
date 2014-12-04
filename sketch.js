var bg;
var soound, amp;
var snotY = 580;
var snotX = 150;
var snotY1 = 580;
var snot1 = 150;

function preload() {
  sound = loadSound("bgm.mp3"); 
}

function setup(){
   createCanvas(1016,721);
   bg = loadImage("1.jpg");
   amp = new p5.Amplitude();
   amp.setInput(sound);
   sound.loop();

   img = loadImage("2.png");
   img1 = loadImage("3.png");
   img2 = loadImage("4.png");   
}

function draw(){
   background(bg); 
   image(img,218,61);
   image(img1,580,150);   

   
    var time = (new Date())%1000/1000;

    fill(255);
   	ellipse(snotX, snotY,snotY/3,snotY/3);
   	snotY = snotY - 10;
   	if(snotY < 0){
   		snotY = 800;
   	}



}



