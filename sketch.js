const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




var snowobj = [];
var bacg,character;


function preload(){

 bacg=loadImage("snow2.jpg");

}



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
   
    


  character = createSprite(400, 370, 50, 50);
  character.velocityX=-10;
}

function draw() {
  background(bacg);  
  drawSprites();
  Engine.update(engine);

  if(frameCount%7 ===0){
    snowobj.push(new Snow(random(50,750),-60)) 
   }

  for (var k = 0; k < snowobj.length; k++) {
    snowobj[k].display();
    
  }
  if(character.x<50){
    character.velocityX=10;
  }
  if(character.x>750){
    character.velocityX=-10;
  }
 
}