var bg;
var soound, amp;
var bigSizeW=142;
var bigSizeH=142;
var smallSizeW1=42;
var smallSizeH2=42;

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

   for(var i = 0 ; i <8 ; i++){
		if(50*sin(t*2*PI+PI/6*i)<0){
				image(img2,img2-smallSizeW1/2,img2-smallSizeH1/2,smallSizeW1,smallSizeH1);
			}
		}

}

