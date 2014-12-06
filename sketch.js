var bg;
var soound, amp;
var diameter; 
var angle = 0;
var input, button, greeting;


function preload() {
  sound = loadSound("bgm.mp3"); 
}

function setup(){
   createCanvas(1016,721);
   bg = loadImage("1.jpg");
   amp = new p5.Amplitude();
   amp.setInput(sound);
   sound.loop();
   diameter = height - 30;

   img = loadImage("2.png");
   img1 = loadImage("3.png");
   img2 = loadImage("4.png");

   input = createInput();
   input.position(20, 65);

   button = createButton('start');
   button.position(150, 65);
   button.mousePressed(greet);

   greeting = createElement('h2', '악어의이빨을 뽑아주세요');
   greeting.position(20, 5);

   textAlign(CENTER)
   textSize(50);   
}

function draw(){
   background(bg); 
   image(img,218,61);

   var d2 = 10 + (sin(angle + PI/20) * diameter/20) + diameter/20;
   image(img1, 580, 270, d2, d2);
   angle += 0.02;


}

function greet() {
 var name = input.value();
 greeting.html(''+name+'!');
 input.value('');

 for (var i=0; i<200; i++) {
  push();
  fill(random(255), 255, 255);
  rect(50,50,50,50)
  pop();
}
}



