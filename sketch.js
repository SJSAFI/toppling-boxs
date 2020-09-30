
//Namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var box1,box2,ground;

function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  
  engine = Engine.create();
  world = engine.world;
 
  box1 = new Box(100,320,50,50);
  box2 = new Box(120,50,50,60);
  ground = new Ground(200,390,400,20);
 }

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  box1.display();
  box2.display();
  ground.display();
}


