var bg;
var soound, amp;
var snotY = 800;
var snotX = 640;
var snotY1 = 500;
var snotY1 = 600;

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
    img2(sin(time*2*PI)*100+snotX, snotY,snotY/3,snotY/3);
   	snotY = snotY - 10;
   	if(snotY < 0){
   		snotY = 800;
   	}

   
   img2(sin(time*2*PI)*50+snotX1, snotY1, snotY1/2, snotY1/2);
   	snotY1 = snotY1 - 10;
   	if(snotY1 < 0){
   		snotY1 = 500;
   	}




}



