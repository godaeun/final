var bg;
var soound, amp;
var diameter; 
var angle = 0;
var toothClicked1;
var toothClicked2;
var toothClicked3;
var toothClicked4;

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

   img6 = loadImage("to3.png");
   img17 = loadImage("t3.png");

   img7 = loadimage("to4.png");
   img18 = loadimage("t4.png");   
}

function draw(){
   background(bg); 
   image(img,218,61);

   var d2 = 10 + (sin(angle + PI/20) * diameter/20) + diameter/20;   
   image(img1, 580, 270, d2, d2);
   angle += 0.02;


   if(toothClicked1){
   image(img15,340, 411);
   }else{
   image(img4,340, 383);   
   }

   if(toothClicked2){
   image(img16,336, 464);
   }else{
   image(img5,336, 436);   
   }

   if(toothClicked3){
   image(img17,357, 501);
   }else{
   image(img6,357, 469);   
   }

   if(toothClicked4){
   image(img18,393, 523);
   }else{
   image(img7,393, 493);   
   }

}

function mousePressed(){
    if(mouseX > 340 && mouseX < 371 && mouseY > 383 && mouseY < 435){
        toothClicked1 =true;
    }


    if(mouseX > 336 && mouseX < 365 && mouseY > 436 && mouseY < 486){
        toothClicked2 =true;
       }

    if(mouseX > 357 && mouseX < 394 && mouseY > 469 && mouseY < 528){
        toothClicked3 =true;
            }    
    if(mouseX > 393 && mouseX < 436 && mouseY > 493 && mouseY < 549){
        toothClicked4 =true;
            }
               
}            