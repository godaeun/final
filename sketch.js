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
   img15 = loadImage("t1.png");

   img5 = loadImage("to2.png");
   img16 = loadImage("t2.png");


}

function draw(){
   background(bg); 
   image(img,218,61);

   var d2 = 10 + (sin(angle + PI/20) * diameter/20) + diameter/20;   
   image(img1, 580, 270, d2, d2);
   angle += 0.02;

//드디어한개함
   if(toothClicked){
   image(img15,340, 411);
   }else{
   image(img4,340, 383);   
   }

//제발되라
   if(toothClicked){
   image(img16,336, 436);
   }else{
   image(img5,336, 464);   
   }


}

function mousePressed(){
    if(mouseX > 340 && mouseX < 371 && mouseY > 383 && mouseY < 435){
        toothClicked =true;
            }

    if(mouseX > 336 && mouseX < 365 && mouseY > 464 && mouseY < 514){
        toothClicked =true;
            }

}




