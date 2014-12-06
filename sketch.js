var bg;
var soound, amp;
var diameter; 
var angle = 0;
var toothClicked1;
var toothClicked2;
var toothClicked3;
var toothClicked4;
var toothClicked5;
var toothClicked6;
var toothClicked7;
var toothClicked8;
var toothClicked9;
var toothClicked10;
var toothClicked11;


function preload() {
 sound = loadSound("bgm.mp3"); 
}

function setup(){
   toothClicked= false;

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

   img8 = loadImage("to5.png");
   img19 = loadImage("t5.png");   

   img9 = loadImage("to6.png");
   img20 = loadImage("t6.png");   

   img10 = loadImage("to7.png");
   img21 = loadImage("t7.png");   

   img11 = loadimage("to8.png");
   img22 = loadimage("t8.png");   

   img12 = loadImage("to9.png");
   img23 = loadImage("t9.png");

   img13 = loadImage("to10.png");
   img24 = loadImage("t10.png");

   img14 = loadImage("to11.png");
   img25 = loadImage("t11.png");  


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

   if(toothClicked5){
   image(img19,440, 537);
   }else{
   image(img8,440, 505);   
   }      
   
   if(toothClicked6){
   image(img20,491, 537);
   }else{
   image(img9,491, 508);   
   }

   if(toothClicked7){
   image(img21,548, 536);
   }else{
   image(img10,548, 504);   
   }

   if(toothClicked8){
   image(img22,596, 523);
   }else{
   image(img11,596, 492);   
   }

   if(toothClicked9){
   image(img23,637, 501);
   }else{
   image(img12,637, 469);   
   }      
   
   if(toothClicked10){
   image(img24,669, 464);
   }else{
   image(img13,669, 436);   
   }   

   if(toothClicked11){
   image(img25,665, 410);
   }else{
   image(img14,665, 383);   
   }     
}

function mousePressed(){
    if(mouseX > 340 && mouseX < 371 && mouseY > 383 && mouseY < 435){
        toothClicked1 =true;
            }

    if(mouseX > 336 && mouseX < 365 && mouseY > 436 && mouseY < 486){
        toothClicked2 =true;
            }


}



