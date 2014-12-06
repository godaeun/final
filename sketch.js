var bg;
var soound, amp;
var diameter; 
var angle = 0;
var toothClicked =[];


function preload() {
 sound = loadSound("bgm.mp3"); 
}

function setup(){
   toothClicked[] = false;

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

// a
   for(var i = 0 ; i <12 ; i++){
   if(toothClicked[i]){
   image(img15,340, 411);
   }else{
   image(img4,340, 383);   
   }

// b
   if(toothClicked[i]){
   image(img16,336, 464);
   }else{
   image(img5,336, 436);   
   }
}

}
for(var i = 0 ; i <12 ; i++){
function mousePressed(){
    if(mouseX > 340 && mouseX < 371 && mouseY > 383 && mouseY < 435){
        toothClicked[1] =true;
            }
}
}



