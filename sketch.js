var canvas;
var music, rect1, rect2, rect3, rect4, box, wall, wall2, wall3, wall4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,800);
    background("black");
rect1 = createSprite(100,700,150,10);
rect2 = createSprite(300,700,150,10);
rect3 = createSprite(500,700,150,10);
rect4 = createSprite(700,700,150,10);
wall = createSprite(400,5,800,10);
wall2 = createSprite(5,400,10,800);
wall3 = createSprite(400,795,800,10);
wall4 = createSprite(795,400,10,800);
box = createSprite(200,200,25,25);
box.velocityY = 5;
box.velocityX = -5;
rect1.debug = true;
rect2.debug = true;
rect3.debug = true;
rect4.debug = true;
box.debug = true;


}

function draw() {
    background(0);
     
 

   
    bounceOff(rect1, box);
    bounceOff(rect2, box);
    bounceOff(rect3, box);
    bounceOff(rect4, box);
    bounceOff(box, wall);
    bounceOff(box, wall2);
    bounceOff(box, wall3);
    bounceOff(box, wall4);
  

    drawSprites();
}
