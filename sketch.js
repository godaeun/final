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

    var time = (new Date())%1000/1000;

   
   	image(sin(time*2*PI)*100+bigSizeW, bigsizeH,bigsizeH/3,bigsizeH/3);
   	bigsizeH = bigsizeH - 10;
   	if(bigsizeH < 0){
   		bigsizeH= 800;
   	}


  	image(sin(time*2*PI)*100+bigSizeW1, bigsizeH1,bigsizeH1/3,bigsizeH1/3);
   	bigsizeH1 = bigsizeH1 - 10;
   	if(bigsizeH1 < 0){
   		bigsizeH1 = 800;
   	}



}



