var boy, boyImage;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var maxdrops = 1000;

drops1 = [];

function preload(){
  boyImage = loadImage("images/Walking Frame/walking_1.png");
  thunderImg = loadImage("images/thunderbolt/1.png");
  thunder2Img = loadImage("images/thunderbolt/2.png");
  thunder3Img = loadImage("images/thunderbolt/3.png");
  thunder4Img = loadImage("images/thunderbolt/4.png");
  
}

function setup(){
  engine = Engine.create();
  world = engine.world;

  createCanvas(1200, 1200);

    boy = createSprite(600, 620, 100, 100);
    boy.addImage("boy", boyImage);
    boy.scale = 0.5;

   
   
    umbrella1 = new Umbrella(610, 550, 160);

    if (frameCount% 150 === 0){
      for(var i = 0; i < maxdrops; i++){
        drops1.push(new Drops(random(0,1200), random(0,1200)));
      }
    }
   
}


function draw(){
  Engine.update(engine);
  background(0);
  
  boy.display();
 
 num = Math.round(random(1 ,4))
 if (frameCount% 80 === 0){
thunder = createSprite(random(10, 1200), random(10, 1200), 10, 10);
 switch(num){
  case 1: thunder.addImage(thunderImg);
  break;
  case 2: thunder.addImage(thunder2Img);
  break;
  case 3: thunder.addImage(thunder3Img);
  break;
  case 4: thunder.addImage(thunder4Img);
  break;
}
 }
for(var i = 0; i<maxdrops; i++){ drops1[i].display(); drops1[i].updateY() }
drawSprites();

umbrella1.display();
}   

