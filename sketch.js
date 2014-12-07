var bg;
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
var goCount = 0;
var goCount1 = 0;
var soound, bgm;


function preload() {
 sound = loadSound("gm.wav"); 

}

function setup(){
   toothClicked = false;
   createCanvas(1016,721);
   bg = loadImage("1.jpg");
   amp = new p5.Amplitude();
   amp.setInput(sound);
   diameter = height - 40;


   img = loadImage("2.png");
   img1 = loadImage("3.png");
   img2 = loadImage("4.png"); 



   img4 = loadImage("to1.png");
   img15 = loadImage("t1.png");

   img5 = loadImage("to2.png");
   img16 = loadImage("t2.png");

   img6 = loadImage("to3.png");
   img17 = loadImage("t3.png");

   img7 = loadImage("to4.png");
   img18 = loadImage("t4.png");

   img8 = loadImage("to5.png");
   img19 = loadImage("t5.png");

   img9 = loadImage("to6.png");
   img20 = loadImage("t6.png");

   img10 = loadImage("to7.png");
   img21 = loadImage("t7.png"); 

   img11 = loadImage("to8.png");
   img22 = loadImage("t8.png");   

   img12 = loadImage("to9.png");
   img23 = loadImage("t9.png");   

   img13 = loadImage("to10.png");
   img24 = loadImage("t10.png"); 

   img14 = loadImage("to11.png");
   img25 = loadImage("t11.png"); 

   img26 = loadImage("5.png");
   img27 = loadImage("6.png");     

   img28 = loadImage("7.png"); 

}

function draw(){
   background(bg); 
   noCursor();   

   image(img26, 0+goCount, 134);
   goCount = goCount +3;
   if(goCount > 1016){
     goCount = 0;
   }

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
   image(img2,218, 61);
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

   if(toothClicked9){
   image(img2,218, 61);
   }else{
   image(img12,637, 469);   
   }     

   image(img27, 1016+goCount1, 615);
   goCount1 = goCount1 -1;
   if(goCount1 < -1016){
     goCount1 = 0;
   }      

   image(img28,mouseX-17,mouseY,207,439);

}


function mousePressed(){
    if(mouseX > 340 && mouseX < 371 && mouseY > 383 && mouseY < 435){
        toothClicked1 =true;
         sound.play();
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

    if(mouseX > 440 && mouseX < 486 && mouseY > 505 && mouseY < 562){
        toothClicked5 =true;
            }

    if(mouseX > 491 && mouseX < 541 && mouseY > 508 && mouseY < 564){
        toothClicked6 =true;
            }

    if(mouseX > 548 && mouseX < 594 && mouseY > 504 && mouseY < 560){
        toothClicked7 =true;
            }

    if(mouseX > 596 && mouseX < 639 && mouseY > 492 && mouseY < 549){
        toothClicked8 =true;
            }

    if(mouseX > 637 && mouseX < 674 && mouseY > 469 && mouseY < 528){
        toothClicked9 =true;
                    }

    if(mouseX > 669 && mouseX < 698 && mouseY > 436 && mouseY < 486){
        toothClicked10 =true;
            } 

    if(mouseX > 665 && mouseX < 696 && mouseY > 383 && mouseY < 434){
        toothClicked11 =true;
            }            
               
}            