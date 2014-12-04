var bg;
var soound, amp;
var bubbleY = 800;
var bubbleX = 640;
var bubbleY1 = 500;
var bubbleX1 = 600;

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

   
    var time = (new Date())%1000/1000;
    fill(0);
   	ellipse(sin(time*2*PI)*100+bubbleX, bubbleY,bubbleY/3,bubbleY/3);
   	bubbleY = bubbleY - 10;
   	if(bubbleY < 0){
   		bubbleY = 800;
   	}

    fill(0);
   	ellipse(sin(time*2*PI)*50+bubbleX1, bubbleY1,bubbleY1/2,bubbleY1/2);
   	bubbleY1 = bubbleY1 - 10;
   	if(bubbleY1 < 0){
   		bubbleY1 = 500;
   	}




}



